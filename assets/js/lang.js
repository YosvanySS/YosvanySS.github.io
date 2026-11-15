/* =========================================================
   Language switch (English / Français)
   Loaded in the <head> of every page so the right language
   shows immediately, without a flash of the other one.

   In the pages, every text has both versions side by side:
       <en>About me</en><fr>À propos</fr>
   Only the chosen language is displayed (see site.css).

   Choice order: ?lang=fr in the URL  →  last choice of the visitor
                 →  browser language  →  English.
   ========================================================= */
(function () {
  const LANGS = ["en", "fr"];
  const fromUrl = new URLSearchParams(location.search).get("lang");
  let saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  const fromBrowser = (navigator.language || "en").slice(0, 2).toLowerCase();

  let lang = [fromUrl, saved, fromBrowser].find((l) => LANGS.includes(l)) || "en";

  function apply(l) {
    const html = document.documentElement;
    html.classList.remove("lang-en", "lang-fr");
    html.classList.add("lang-" + l);
    html.setAttribute("lang", l);
    // Page title: <title data-fr="...">English title</title>
    const t = document.querySelector("title");
    if (t) {
      if (!t.dataset.en) t.dataset.en = t.textContent;
      t.textContent = (l === "fr" && t.dataset.fr) || t.dataset.en;
    }
    document.querySelectorAll(".lang-switch button").forEach((b) => {
      b.classList.toggle("active", b.dataset.lang === l);
      b.setAttribute("aria-pressed", b.dataset.lang === l);
    });
  }

  window.getLang = () => lang;
  window.setLang = (l) => {
    if (!LANGS.includes(l)) return;
    lang = l;
    try { localStorage.setItem("lang", l); } catch (e) {}
    apply(l);
  };

  apply(lang);
  document.addEventListener("DOMContentLoaded", () => apply(lang));
})();
