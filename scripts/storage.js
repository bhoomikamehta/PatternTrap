const STORAGE_KEY = "onboarding_data";

function getOnboardingData() {
  const data = sessionStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : { score: 0, log: [] };
}

function saveOnboardingData(newData) {
  const existing = getOnboardingData();
  const updated = { ...existing, ...newData };
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

function clearOnboardingData() {
  sessionStorage.removeItem(STORAGE_KEY);
}

function logOnboardingAction(logItem) {
  if (!logItem || typeof logItem.score === 'undefined' || !logItem.type || !logItem.reason) {
      console.error("Invalid logItem structure:", logItem);
      return;
  }
  logItem.timestamp = Date.now();
  const onboardingData = getOnboardingData();
  let type = logItem.type;
  let prevLog = onboardingData.log || [];
  let log = [...prevLog];
  log.push(logItem);
  let newScore = log.reduce((acc, e) => acc + (e.score || 0), 0);
  let newData = { ...onboardingData, score: newScore, log: log };
  newData[type] = logItem.value;
  saveOnboardingData(newData);
}

function showPointBanner(points, text) {
    let banner = document.getElementById('point-banner');

    if (!banner) {
        banner = document.createElement('div');
        banner.id = 'point-banner';
        const header = document.getElementById('header');
        if (header) {
            header.appendChild(banner);
        } else {
            banner.style.position = 'fixed'; banner.style.top = '1rem'; banner.style.left = '50%';
            banner.style.transform = 'translateX(-50%)'; banner.style.zIndex = '1001';
            banner.style.textAlign = 'center'; banner.style.pointerEvents = 'none';
            document.body.appendChild(banner);
        }
    }
    const message = document.createElement('div');
    message.classList.add('point-message');
    let displayText = text || (points > 0 ? `+${points}` : `${points}`);
    if (points === 0 && !text) displayText = "+0";
    message.textContent = displayText;
    if (points == 0) message.classList.add('neutral');
    else if (points > 0) message.classList.add('positive');
    else message.classList.add('negative');
    message.style.padding = '0.5rem 1rem'; message.style.borderRadius = '5px';
    message.style.marginBottom = '0.5rem'; message.style.opacity = '0';
    message.style.transform = 'translateY(-20px)';
    message.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    message.style.display = 'inline-block'; message.style.fontWeight = 'bold';
    message.style.fontSize = '1.5rem';
    if (message.classList.contains('positive')) { message.style.backgroundColor = '#d4edda'; message.style.color = '#155724'; }
    else if (message.classList.contains('negative')) { message.style.backgroundColor = '#f8d7da'; message.style.color = '#721c24'; }
    else { message.style.backgroundColor = '#e2e3e5'; message.style.color = '#383d41'; }
    banner.appendChild(message);
    setTimeout(() => { message.style.opacity = '1'; message.style.transform = 'translateY(0)'; }, 10);
    setTimeout(() => {
        message.style.opacity = '0'; message.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            if (banner && banner.contains(message)) { banner.removeChild(message); }
        }, 400);
    }, 1500);
}