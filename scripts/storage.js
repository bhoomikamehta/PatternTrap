// scripts/storage.js

const STORAGE_KEY = "onboarding_data";

function getOnboardingData() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : {};
}

function saveOnboardingData(newData) {
  const existing = getOnboardingData();
  const updated = { ...existing, ...newData };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

function clearOnboardingData() {
  localStorage.removeItem(STORAGE_KEY);
}

function showPointBanner(points) {
  const banner = document.getElementById('point-banner');
  const message = document.createElement('div');
  message.classList.add('point-message');

  if (points == 0) {
    message.classList.add('neutral');
    message.textContent = `+${points}`;
  } else if (points > 0) {
    message.classList.add('positive');
    message.textContent = `+${points}`;
  } else {
    message.classList.add('negative');
    message.textContent = `${points}`;
  }

  banner.appendChild(message);

  // Trigger fade-in
  setTimeout(() => {
    message.classList.add('show');
  }, 10);

  // Remove after 1.5s
  setTimeout(() => {
    message.classList.remove('show');
    setTimeout(() => banner.removeChild(message), 400);
  }, 1500);
}
