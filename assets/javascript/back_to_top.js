const backToTopButton = document.getElementById("back-to-top");
let scrollingToTop = false;

function updateBackToTopVisibility() {
  backToTopButton.hidden = window.scrollY <= 100;
  if (window.scrollY === 0) {
    scrollingToTop = false;
  }
}

function cancelScrollToTop() {
  if (!scrollingToTop) {
    return;
  }

  scrollingToTop = false;
  window.scrollTo({ top: window.scrollY, behavior: "instant" });
}

function cancelScrollToTopOnKeydown(event) {
  if (["ArrowDown", "ArrowUp", "End", "Home", "PageDown", "PageUp", " "].includes(event.key)) {
    cancelScrollToTop();
  }
}

window.addEventListener("scroll", updateBackToTopVisibility, { passive: true });
window.addEventListener("wheel", cancelScrollToTop, { passive: true });
window.addEventListener("touchstart", cancelScrollToTop, { passive: true });
window.addEventListener("pointerdown", cancelScrollToTop);
window.addEventListener("keydown", cancelScrollToTopOnKeydown);
window.addEventListener("pageshow", () => {
  updateBackToTopVisibility();
  requestAnimationFrame(updateBackToTopVisibility);
});
updateBackToTopVisibility();

backToTopButton.addEventListener("click", () => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  scrollingToTop = !reducedMotion;
  window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
});
