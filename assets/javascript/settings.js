const colorVisionStorageKey = "portfolio-color-vision";
const settingsRoot = document.documentElement;
const colorVisionToggles = Array.from(document.querySelectorAll(".color-vision-toggle"));
const supportedColorVisionModes = ["dichromacy", "trichromacy", "protanopia"];

const savedColorVision = localStorage.getItem(colorVisionStorageKey);
localStorage.removeItem("portfolio-theme");

if (supportedColorVisionModes.includes(savedColorVision)) {
  settingsRoot.dataset.colorVision = savedColorVision;
}

colorVisionToggles.forEach((toggle) => {
  toggle.checked = toggle.value === settingsRoot.dataset.colorVision;
});

colorVisionToggles.forEach((toggle) => {
  toggle.addEventListener("change", () => {
    const selectedMode = toggle.checked ? toggle.value : "";

    colorVisionToggles.forEach((otherToggle) => {
      otherToggle.checked = otherToggle === toggle && toggle.checked;
    });

    if (selectedMode) {
      settingsRoot.dataset.colorVision = selectedMode;
      localStorage.setItem(colorVisionStorageKey, selectedMode);
    } else {
      delete settingsRoot.dataset.colorVision;
      localStorage.removeItem(colorVisionStorageKey);
    }
  });
});
