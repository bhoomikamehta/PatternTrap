// scripts/page5.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("extras-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = getOnboardingData();
    let score = data.score || 0;
    let log = data.log || [];

    const options = form.querySelectorAll("input[type='checkbox']");
    let uncheckedCount = 0;

    options.forEach(option => {
      if (!option.checked) uncheckedCount++;
    });

    // Penalty for opting out
    score -= uncheckedCount * 10;

    // Save action
    log.push({
      type: "checkout_addons",
      unchecked: uncheckedCount,
      score_change: -uncheckedCount * 10,
      timestamp: Date.now()
    });

    saveOnboardingData({ score, log });

    // Proceed to next page
    window.location.href = "page6.html";
  });
});
