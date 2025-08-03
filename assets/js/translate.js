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
  updateLangButtons(langCode);
}

function updateLangButtons(activeLang) {
  document.querySelectorAll("[data-lang]").forEach(button => {
    const langCode = button.getAttribute("data-lang");
    if (langCode === activeLang) {
      button.classList.add("btn-primary");
      button.classList.remove("btn-success");
      button.disabled = true;
    } else {
      button.classList.add("btn-success");
      button.classList.remove("btn-primary");
      button.disabled = false;
    }
  });
}
