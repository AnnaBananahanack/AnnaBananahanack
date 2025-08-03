(function() {
  let savedLang = localStorage.getItem("lang") || "en";

  window.addEventListener("DOMContentLoaded", () => {
    let lang;
    if (savedLang === "en") {
      lang = getLangEN();
    } else if (savedLang === "es") {
      lang = getLangES();
    }

    setLanguage(lang);
    updateLangButtons(savedLang);
    document.body.classList.add("lang-ready");
  });
})();
