export default function UpdateStyles(whiteMode) {
  const verbTranslation = document.querySelectorAll(".verbTranslation");
  verbTranslation.forEach((element) => {
    element.style.color = whiteMode
      ? "var(--text-white-theme-translation)"
      : "var(--text-dark-theme-translation)";
  });

  const root = document.documentElement;
  root.style.backgroundColor = whiteMode
    ? "var(--bg-white-theme)"
    : "var(--bg-dark-theme)";
  root.style.color = whiteMode
    ? "var(--text-white-theme)"
    : "var(--text-dark-theme)";

  const audioIcon = document.querySelectorAll(".audioIcon");
  audioIcon.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      element.style.filter = whiteMode
        ? "drop-shadow(0 0 1rem var(--shadow-white-theme-audioIcon))"
        : "drop-shadow(0 0 1rem var(--shadow-dark-theme-audioIcon))";
    });
    element.addEventListener("mouseleave", () => {
      element.style.filter = "";
    });
  });

  const mainButton = document.querySelectorAll(".mainButton");
  mainButton.forEach((element) => {
    element.style.backgroundColor = whiteMode
      ? "var(--bg-white-theme-mainButton)"
      : "var(--bg-dark-theme-mainButton)";
  });

  const popupDefault = document.querySelectorAll(".popupDefault");
  popupDefault.forEach((element) => {
    element.style.backgroundColor = whiteMode
      ? "var(--bg-white-theme-popupDefault)"
      : "var(--bg-dark-theme-popupDefault)";
  });
}
