/* =========================================================
   Shared layout: top bar, profile hero card, tab bar, footer.
   Edit things here ONCE and every page updates.
   Texts with two languages are written as { en: "...", fr: "..." }.
   ========================================================= */

const PROFILE = {
  name: "Yosvany Silva Solís",
  initials: "YSS",
  photo: "", // later: put your photo in assets/img/ and write e.g. "assets/img/photo.jpg"
  tagline: {
    en: "Multiscale modeling of materials for fusion energy",
    fr: "Modélisation multi-échelle des matériaux pour l'énergie de fusion",
  },
  tags: [
    { text: { en: "Associate Professor", fr: "Maître de conférences" }, style: "gold" },
    { text: { en: "Computational Materials", fr: "Modélisation des matériaux" }, style: "blue" },
    { text: { en: "PhD Physics & Materials Science", fr: "Docteur en Physique et Sciences de la Matière" }, style: "" },
  ],
  meta: [
    { label: { en: "Institution", fr: "Établissement" }, value: { en: "Aix-Marseille University", fr: "Aix-Marseille Université" } },
    { label: { en: "Main focus", fr: "Thématique" }, value: { en: "Hydrogen in metals · ITER", fr: "Hydrogène dans les métaux · ITER" } },
  ],
  stats: [
    { label: { en: "Articles", fr: "Articles" }, value: "5", color: "g" },
    { label: { en: "Books", fr: "Livres" }, value: "2", color: "y" },
    { label: { en: "Talks & posters", fr: "Communications" }, value: "25", color: "b" },
    { label: { en: "Years in research", fr: "Années de recherche" }, value: "7+", color: "r" },
  ],
};

const LINKS = {
  email: "mailto:yosvany.silva-solis@univ-amu.fr",
  linkedin: "https://www.linkedin.com/in/yosvany-silva-solis/",
  scholar: "https://scholar.google.com/citations?user=Sckd3CYAAAAJ&hl=en",
  orcid: "https://orcid.org/0000-0002-1047-4627",
  researchgate: "https://www.researchgate.net/profile/Yosvany-Silva-Solis-2",
  github: "https://github.com/YosvanySS",
};

const PAGES = [
  { file: "index.html", label: { en: "Overview", fr: "Accueil" }, icon: "◈" },
  { file: "education.html", label: { en: "Education", fr: "Formation" }, icon: "🎓" },
  { file: "experience.html", label: { en: "Experience", fr: "Expérience" }, icon: "⚑" },
  { file: "publications.html", label: { en: "Publications", fr: "Publications" }, icon: "📄" },
  { file: "skills.html", label: { en: "Skills", fr: "Compétences" }, icon: "⚛" },
  { file: "research-3d.html", label: { en: "3D Research", fr: "Recherche 3D" }, icon: "◆" },
  { file: "outreach.html", label: { en: "Outreach", fr: "Médiation" }, icon: "✦" },
  { file: "contact.html", label: { en: "Contact", fr: "Contact" }, icon: "✉" },
];

/* ---------- helpers ---------- */
// Turns { en, fr } into <en>…</en><fr>…</fr>. Plain text is shown in both languages.
function tr(x) {
  if (x && typeof x === "object") return `<en>${x.en}</en><fr>${x.fr}</fr>`;
  return x;
}

const current = location.pathname.split("/").pop() || "index.html";
const currentPage = PAGES.find((p) => p.file === current) || PAGES[0];

/* ---------- builders ---------- */
// Flags drawn as small images (emoji flags show as letters on Windows)
const FLAGS = {
  en: `<svg viewBox="0 0 60 30" aria-hidden="true"><clipPath id="uk-c"><path d="M0,0 v30 h60 v-30 z"/></clipPath><clipPath id="uk-t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath><g clip-path="url(#uk-c)"><path d="M0,0 v30 h60 v-30 z" fill="#012169"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/><path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#uk-t)" stroke="#C8102E" stroke-width="4"/><path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/><path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/></g></svg>`,
  fr: `<svg viewBox="0 0 3 2" aria-hidden="true"><rect width="1" height="2" x="0" fill="#002654"/><rect width="1" height="2" x="1" fill="#fff"/><rect width="1" height="2" x="2" fill="#CE1126"/></svg>`,
};

function langSwitch() {
  return `
      <div class="lang-switch" role="group" aria-label="Language / Langue">
        <button type="button" data-lang="en" title="English" aria-label="English">${FLAGS.en}</button>
        <button type="button" data-lang="fr" title="Français" aria-label="Français">${FLAGS.fr}</button>
      </div>`;
}

function topbar() {
  const links = PAGES.map(
    (p) => `<a href="${p.file}" class="${p === currentPage ? "active" : ""}">${tr(p.label)}</a>`
  ).join("");
  return `
  <header class="topbar">
    <div class="container">
      <a class="brand" href="index.html">
        <div class="brand-badge">${PROFILE.initials}</div>
        <span>Yosvany<em>SS</em></span>
      </a>
      <nav class="nav">${links}</nav>
      ${langSwitch()}
      <button class="menu-btn" aria-label="Menu">☰</button>
    </div>
  </header>`;
}

function hero() {
  const avatar = PROFILE.photo
    ? `<img src="${PROFILE.photo}" alt="${PROFILE.name}">`
    : PROFILE.initials;
  const tags = PROFILE.tags.map((t) => `<span class="tag ${t.style}">${tr(t.text)}</span>`).join("");
  const meta = PROFILE.meta
    .map((m) => `<div><small>${tr(m.label)}</small><strong>${tr(m.value)}</strong></div>`)
    .join("");
  const stats = PROFILE.stats
    .map((s) => `<div class="stat ${s.color}"><small>${tr(s.label)}</small><b>${s.value}</b></div>`)
    .join("");
  return `
  <div class="crumbs"><a href="index.html">${tr({ en: "Home", fr: "Accueil" })}</a> › <b>${tr(currentPage.label)}</b></div>
  <section class="hero">
    <div class="avatar">${avatar}</div>
    <div>
      <h1>${PROFILE.name}</h1>
      <p class="tagline">“${tr(PROFILE.tagline)}”</p>
      <div class="tags">${tags}</div>
      <div class="meta">${meta}</div>
    </div>
    <div class="hero-side">
      <a class="btn cv-btn" href="cv.html">⬇ ${tr({ en: "Download CV", fr: "Télécharger le CV" })} <small>PDF</small></a>
      <div class="stats">${stats}</div>
    </div>
  </section>`;
}

function tabbar() {
  return `<nav class="tabbar">${PAGES.map(
    (p) =>
      `<a href="${p.file}" class="${p === currentPage ? "active" : ""}">${p.icon}&nbsp; ${tr(p.label)}</a>`
  ).join("")}</nav>`;
}

function footer() {
  return `
  <footer class="footer">
    <div class="container">
      <span>© ${new Date().getFullYear()} ${PROFILE.name}</span>
      <span>
        <a href="${LINKS.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
        <a href="${LINKS.scholar}" target="_blank" rel="noopener">Google Scholar</a>
        <a href="${LINKS.orcid}" target="_blank" rel="noopener">ORCID</a>
        <a href="${LINKS.researchgate}" target="_blank" rel="noopener">ResearchGate</a>
        <a href="${LINKS.github}" target="_blank" rel="noopener">GitHub</a>
      </span>
    </div>
  </footer>`;
}

/* ---------- mount ---------- */
document.body.insertAdjacentHTML("afterbegin", topbar());
const profileSlot = document.getElementById("profile");
if (profileSlot) profileSlot.outerHTML = hero() + tabbar();
document.body.insertAdjacentHTML("beforeend", footer());

/* ---------- gold glow under the selected section ---------- */
// Centers the background glow under the active tab and glides it there
// from where it was on the previous page.
function placeGlow(animate) {
  const nav = document.querySelector(".nav");
  const navShown = nav && getComputedStyle(nav).display !== "none";
  const link = (navShown && document.querySelector(".nav a.active")) || document.querySelector(".tabbar a.active");
  if (!link) return;
  const r = link.getBoundingClientRect();
  const x = Math.round(((r.left + r.width / 2) / window.innerWidth) * 1000) / 10;
  const root = document.documentElement.style;
  let prev = null;
  try { prev = sessionStorage.getItem("glow-x"); } catch (e) {}
  if (animate && prev && prev !== String(x)) {
    root.setProperty("--glow-x", prev + "%");
    getComputedStyle(document.body, "::before").getPropertyValue("--glow-x"); // apply the start point first
    setTimeout(() => root.setProperty("--glow-x", x + "%"), 30);
  } else {
    root.setProperty("--glow-x", x + "%");
  }
  try { sessionStorage.setItem("glow-x", String(x)); } catch (e) {}
}
placeGlow(true);
window.addEventListener("resize", () => placeGlow(false));
document.addEventListener("click", (e) => {
  if (e.target.closest(".lang-switch")) setTimeout(() => placeGlow(false), 0); // labels change width
});

document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav").classList.toggle("open");
});
document.querySelectorAll(".lang-switch button").forEach((b) =>
  b.addEventListener("click", () => window.setLang && window.setLang(b.dataset.lang))
);
