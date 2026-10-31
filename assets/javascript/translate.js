const translateButton = document.getElementById("translate-button");
const translatePanel = document.getElementById("translate-panel");
const translateStatus = document.getElementById("translate-status");
const googleTranslateContainer = document.getElementById("google-translate-widget");
let googleTranslateLoadPromise;
let googleTranslateInitialized = false;
let languageSelectObserver;

function prepareLanguageSelect() {
  const languageSelect = googleTranslateContainer.querySelector("select.goog-te-combo");
  if (!languageSelect) {
    return false;
  }

  languageSelect.size = 8;
  languageSelect.setAttribute("aria-label", "Choose a language");
  translateStatus.textContent = "Scroll the list or type a language name to find it.";
  languageSelectObserver?.disconnect();
  return true;
}

function observeLanguageSelect() {
  if (prepareLanguageSelect()) {
    return;
  }

  languageSelectObserver = new MutationObserver(prepareLanguageSelect);
  languageSelectObserver.observe(googleTranslateContainer, { childList: true, subtree: true });
}

function initializeGoogleTranslate() {
  if (googleTranslateInitialized) {
    return;
  }

  if (!window.google?.translate?.TranslateElement) {
    throw new Error("Google Translate did not initialize.");
  }

  new window.google.translate.TranslateElement(
    {
      pageLanguage: "en",
      autoDisplay: false,
      layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL
    },
    googleTranslateContainer.id
  );
  googleTranslateInitialized = true;
  observeLanguageSelect();
}

function loadGoogleTranslate() {
  if (googleTranslateInitialized) {
    return Promise.resolve();
  }

  if (window.google?.translate?.TranslateElement) {
    try {
      initializeGoogleTranslate();
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  }

  if (googleTranslateLoadPromise) {
    return googleTranslateLoadPromise;
  }

  translateStatus.textContent = "Loading translation options…";
  googleTranslateLoadPromise = new Promise((resolve, reject) => {
    window.googleTranslateElementInit = () => {
      try {
        initializeGoogleTranslate();
        resolve();
      } catch (error) {
        reject(error);
      }
    };

    const script = document.createElement("script");
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    script.onerror = () => reject(new Error("Google Translate could not be loaded."));
    document.head.appendChild(script);
  }).catch((error) => {
    googleTranslateLoadPromise = undefined;
    translateStatus.textContent = "Translation options could not be loaded. Close this panel and try again.";
    throw error;
  });

  return googleTranslateLoadPromise;
}

translateButton.addEventListener("click", async () => {
  const isOpening = translatePanel.hidden;
  translatePanel.hidden = !isOpening;
  translateButton.setAttribute("aria-expanded", String(isOpening));

  if (isOpening) {
    try {
      await loadGoogleTranslate();
    } catch (error) {
      console.error(error);
    }
  }
});

document.addEventListener("click", (event) => {
  if (!translatePanel.hidden && !translatePanel.contains(event.target) && !translateButton.contains(event.target)) {
    translatePanel.hidden = true;
    translateButton.setAttribute("aria-expanded", "false");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !translatePanel.hidden) {
    translatePanel.hidden = true;
    translateButton.setAttribute("aria-expanded", "false");
    translateButton.focus();
  }
});
