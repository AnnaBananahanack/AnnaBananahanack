function setLanguage(langObj) {
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    if (langObj[key]) {
      el.textContent = langObj[key];
    }
  });
}

function loadLang(langCode) {
  localStorage.setItem("lang", langCode);

  let lang;
  if (langCode === "en") {
    lang = getLangEN();
  } else if (langCode === "es") {
    lang = getLangES();
  }

  setLanguage(lang);
}
