/* =========================================================
   Printable CV builder.
   Reads CV (cv-data.js) and CONFERENCES (conferences.js) and builds
   a 1-page, 3-page or full CV in English or French.
   URL options: cv.html?len=1|3|full&lang=en|fr
   ========================================================= */
(function () {
  const params = new URLSearchParams(location.search);
  const FULL = 99; // the full CV: no length limit, everything is included
  const parseLen = (v) => (v === "full" ? FULL : v === "1" ? 1 : v === "3" ? 3 : null);
  let len = parseLen(params.get("len")) ?? 3;

  const L = () => (window.getLang ? window.getLang() : "en");
  const t = (x) => (x && typeof x === "object" && "en" in x ? x[L()] : x ?? "");
  // Quotes: “…” in English, « … » in French
  const q = (x) => (L() === "fr" ? `«\u00a0${x}\u00a0»` : `“${x}”`);
  const esc = (s) => String(s).replace(/&(?!amp;|lt;|gt;|nbsp;)/g, "&amp;");
  const inLen = (item) => (item.cv || 1) <= len;

  const W = {
    profile: { en: "Profile", fr: "Profil" },
    positions: { en: "Professional experience", fr: "Expérience professionnelle" },
    education: { en: "Education", fr: "Formation" },
    projects: { en: "Research projects", fr: "Projets de recherche" },
    funding: { en: "Funding & supervision", fr: "Financements & encadrement" },
    grants: { en: "Research funding", fr: "Financements de recherche" },
    supervision: { en: "Supervision", fr: "Encadrement" },
    pubs: { en: "Publications", fr: "Publications" },
    selPubs: { en: "Selected publications", fr: "Publications choisies" },
    articles: { en: "Peer-reviewed articles", fr: "Articles dans des revues à comité de lecture" },
    books: { en: "Books", fr: "Livres" },
    talks: { en: "Conferences & seminars", fr: "Conférences & séminaires" },
    selTalks: { en: "Selected oral presentations", fr: "Communications orales choisies" },
    orals: { en: "Oral presentations", fr: "Communications orales" },
    seminars: { en: "Invited seminars", fr: "Séminaires invités" },
    posters: { en: "Posters", fr: "Posters" },
    schools: { en: "Other events (attendee)", fr: "Autres événements (participant)" },
    teaching: { en: "Teaching", fr: "Enseignement" },
    service: { en: "Scientific community & outreach", fr: "Vie scientifique & médiation" },
    organizing: { en: "Organizing committees", fr: "Comités d'organisation" },
    outreach: { en: "Science outreach", fr: "Médiation scientifique" },
    skills: { en: "Skills", fr: "Compétences" },
    languages: { en: "Languages", fr: "Langues" },
    hours: { en: "h", fr: "h" },
    keyfacts: { en: "Key figures", fr: "Chiffres clés" },
    page: { en: "Page", fr: "Page" },
  };

  /* ---------- conference helpers (data from conferences.js) ---------- */
  const EVENTS = typeof CONFERENCES !== "undefined" ? CONFERENCES : [];
  const types = (c) => String(c.type).split(",").map((s) => s.trim().toLowerCase());
  const has = (c, ...ts) => types(c).some((x) => ts.includes(x));
  const date = (d) => (L() === "fr" && typeof dateFr === "function" ? dateFr(d) : d);
  const place = (p) => (L() === "fr" && typeof placeFr === "function" ? placeFr(p) : p);
  const noFlag = (p) => p.replace(/\s*[\u{1F1E6}-\u{1F1FF}]{2}\s*$/u, "").replace(/\s*🏴.*$/u, "");

  const orals = EVENTS.filter((c) => has(c, "oral", "invited"));
  const seminars = EVENTS.filter((c) => has(c, "seminar"));
  const posters = EVENTS.filter((c) => has(c, "poster", "single figure"));
  const attended = EVENTS.filter((c) => types(c).every((x) => x === "attendee"));
  const countries = new Set(EVENTS.filter((c) => c.lat != null).map((c) => noFlag(c.place).split(",").pop().trim()));

  /* ---------- building blocks ---------- */
  const section = (title, body) => (body ? `<section class="cv-sec"><h2>${t(title)}</h2>${body}</section>` : "");
  const entry = (dateTxt, title, sub, desc) => `
    <div class="cv-entry">
      <div class="cv-date">${dateTxt}</div>
      <div class="cv-body">
        <div class="cv-title">${title}</div>
        ${sub ? `<div class="cv-sub">${sub}</div>` : ""}
        ${desc ? `<div class="cv-desc">${desc}</div>` : ""}
      </div>
    </div>`;

  function header() {
    const contacts = CV.contact
      .filter((c) => len > 1 || ["Email", "Web", "ORCID", "LinkedIn"].includes(c.label))
      .map((c) => `<a href="${c.url}"><b>${c.label === "Email" && L() === "fr" ? "E-mail" : c.label}</b>${c.value}</a>`)
      .join("");
    return `
    <header class="cv-head">
      <div>
        <h1>${CV.name}</h1>
        <div class="cv-role">${t(CV.title)}</div>
        <div class="cv-aff">${t(CV.affiliation)}</div>
      </div>
      <div class="cv-contact">${contacts}</div>
    </header>`;
  }

  function keyFacts() {
    const items = [
      [CV.articles.length, { en: "journal articles", fr: "articles de revue" }],
      [CV.books.length, { en: "books", fr: "livres" }],
      [orals.length, { en: "oral talks", fr: "communications orales" }],
      [posters.length, { en: "posters", fr: "posters" }],
      [seminars.length, { en: "invited seminars", fr: "séminaires invités" }],
      [countries.size, { en: "countries", fr: "pays" }],
    ];
    return `<div class="cv-facts">${items.map(([n, l]) => `<div><b>${n}</b><span>${t(l)}</span></div>`).join("")}</div>`;
  }

  function positions() {
    return CV.positions.filter(inLen).map((p, i) =>
      entry(t(p.date), t(p.title), t(p.org), len === 1 && i > 0 ? "" : t(p.desc))
    ).join("");
  }

  function education() {
    return CV.education.filter(inLen).map((e) =>
      entry(e.date, t(e.title), t(e.org), len === 1 ? "" : t(e.desc))
    ).join("");
  }

  function projects() {
    return CV.projects.filter(inLen).map((p) => entry(t(p.date), t(p.title), "", t(p.desc))).join("");
  }

  function pub(a, i) {
    const me = (s) => s.replace("Y. Silva-Solís", "<u>Y. Silva-Solís</u>");
    const end = (x) => (x.endsWith(".") ? x : x + ".");   // avoid "et al.."
    return `<li><span class="cv-num">[${i}]</span><div>${end(me(a.authors))} ${q(a.title)}. <i>${a.journal}</i> ${a.ref}.${
      len > 1 ? ` <a href="https://doi.org/${a.doi}">doi:${a.doi}</a>` : ""}</div></li>`;
  }

  function publications() {
    const arts = CV.articles.filter(inLen);
    let html = `<ol class="cv-pubs">${arts.map((a, i) => pub(a, arts.length - i)).join("")}</ol>`;
    if (len > 1) {
      html = `<h3>${t(W.articles)}</h3>` + html;
      const books = CV.books.filter(inLen);
      if (books.length)
        html += `<h3>${t(W.books)}</h3><ol class="cv-pubs">${books.map((b, i) =>
          `<li><span class="cv-num">[B${books.length - i}]</span><div>${b.authors.replace("Y. Silva-Solís", "<u>Y. Silva-Solís</u>")}. <i>${b.title}</i>. ${b.publisher} (${b.year}). ISBN ${b.isbn}.</div></li>`).join("")}</ol>`;
    }
    return html;
  }

  function eventLine(c, withTalk) {
    const extra = [];
    if (withTalk && c.talk) extra.push(q(c.talk));
    return entry(date(c.date), esc(c.title), place(noFlag(c.place)), extra.join(" "));
  }

  function talks() {
    const line = (c) => `<li><b>${esc(c.title)}</b>, ${place(noFlag(c.place))}, ${date(c.date)}</li>`;
    if (len === 1) {
      // the highlighted talks (events with a gold "note")
      return `<ul class="cv-compact">${orals.filter((c) => c.note).slice(0, 3).map(line).join("")}</ul>`;
    }
    if (len === 3) {
      let html = `<h3>${t(W.orals)} (${orals.length})</h3><ul class="cv-compact">${orals.map(line).join("")}</ul>`;
      if (seminars.length) html += `<h3>${t(W.seminars)} (${seminars.length})</h3><ul class="cv-compact">${seminars.map(line).join("")}</ul>`;
      html += `<h3>${t(W.posters)} (${posters.length})</h3><ul class="cv-compact cv-cols">${posters.map((c) => `<li>${esc(c.title)}, ${place(noFlag(c.place))}, ${date(c.date)}</li>`).join("")}</ul>`;
      return html;
    }
    let html = `<h3>${t(W.orals)} (${orals.length})</h3>` + orals.map((c) => eventLine(c, true)).join("");
    if (seminars.length) html += `<h3>${t(W.seminars)} (${seminars.length})</h3>` + seminars.map((c) => eventLine(c, true)).join("");
    html += `<h3>${t(W.posters)} (${posters.length})</h3>`;
    html += len === FULL
      ? posters.map((c) => eventLine(c, true)).join("")
      : `<ul class="cv-compact cv-cols">${posters.map((c) => `<li>${esc(c.title)}, ${place(noFlag(c.place))}, ${date(c.date)}</li>`).join("")}</ul>`;
    if (len === FULL && attended.length)
      html += `<h3>${t(W.schools)}</h3>` + attended.map((c) => eventLine(c, false)).join("");
    return html;
  }

  function fundingSupervision() {
    const g = (CV.funding || []).filter(inLen), su = (CV.supervision || []).filter(inLen);
    let html = "";
    if (g.length) html += `<h3>${t(W.grants)}</h3>` + g.map((x) => entry(t(x.date), t(x.title), "", t(x.desc))).join("");
    if (su.length) html += `<h3>${t(W.supervision)}</h3>` + su.map((x) => entry(t(x.date), t(x.title), "", t(x.desc))).join("");
    return html;
  }

  function teaching() {
    let html = `<p class="cv-p">${t(len === 3 && CV.teachingSummaryShort ? CV.teachingSummaryShort : CV.teachingSummary)}</p>`;
    if (len === FULL)
      html += `<table class="cv-table">${CV.teaching.map((c) =>
        `<tr><td>${c.date}</td><td><b>${t(c.course)}</b><br><span>${t(c.details)}</span></td><td class="r">${c.hours ? c.hours + " h" : "—"}</td></tr>`).join("")}</table>`;
    return html;
  }

  function service() {
    let html = `<h3>${t(W.organizing)}</h3>` + CV.organizing.filter(inLen).map((o) => entry(t(o.date), t(o.title), "", t(o.desc))).join("");
    html += `<h3>${t(W.outreach)}</h3>` + CV.outreach.filter(inLen).map((o) => entry(t(o.date), t(o.title), "", t(o.desc))).join("");
    return html;
  }

  function skills() {
    if (len === 1) return `<p class="cv-p">${t(CV.skillsShort)}</p>`;
    return `<table class="cv-table cv-skills">${CV.skills.map((s) => `<tr><td><b>${t(s.label)}</b></td><td>${t(s.value)}</td></tr>`).join("")}</table>`;
  }

  /* ---------- assemble ---------- */
  function build() {
    const parts = [header()];
    parts.push(section(W.profile, `<p class="cv-p">${t(len === 1 ? CV.summary.short : CV.summary.long)}</p>${keyFacts()}`));
    parts.push(section(W.positions, positions()));
    parts.push(section(W.education, education()));
    if (len > 1) parts.push(section(W.projects, projects()));
    if (len > 1) parts.push(section(W.funding, fundingSupervision()));
    parts.push(section(len === 1 ? W.selPubs : W.pubs, publications()));
    parts.push(section(len === 1 ? W.selTalks : W.talks, talks()));
    if (len > 1) parts.push(section(W.teaching, teaching()));
    if (len > 1) parts.push(section(W.service, service()));
    parts.push(section(W.skills, skills()));
    parts.push(section(W.languages, `<p class="cv-p">${t(CV.languages)}</p>`));
    if (len === FULL) parts.push(`<p class="cv-p cv-kw"><b>${L() === "fr" ? "Mots-clés\u00a0:" : "Keywords:"}</b> ${t(CV.keywords)}</p>`);

    const doc = document.getElementById("cv");
    doc.className = `cv len-${len === FULL ? "full" : len}`;
    doc.innerHTML = parts.join("");
    updateToolbar();
    markPages();
  }

  /* ---------- page estimate + dashed page-break guides (screen only) ---------- */
  const MM = 96 / 25.4;                    // CSS px per mm
  const PAGE_H = (297 - 13 - 15) * MM;     // printable height of an A4 page
  function markPages() {
    const doc = document.getElementById("cv");
    doc.querySelectorAll(".page-break").forEach((e) => e.remove());
    const top0 = doc.getBoundingClientRect().top + 13 * MM;
    // Walk the blocks that must not be split, pushing them to the next page like the printer does
    const blocks = doc.querySelectorAll(".cv-head, .cv-sec h2, .cv-sec h3, .cv-entry, .cv-pubs li, .cv-compact li, .cv-p, .cv-facts, .cv-table tr");
    let page = 1, pageEnd = PAGE_H, shift = 0;
    blocks.forEach((b) => {
      const r = b.getBoundingClientRect();
      const top = r.top - top0 + shift, bottom = r.bottom - top0 + shift;
      if (bottom > pageEnd) {
        // the block moves to the next page
        shift += pageEnd - top;
        const line = document.createElement("div");
        line.className = "page-break";
        line.style.top = r.top - doc.getBoundingClientRect().top - 3 + "px";
        line.innerHTML = `<span>${t({ en: "Page", fr: "Page" })} ${page + 1}</span>`;
        doc.appendChild(line);
        page += 1;
        pageEnd = page * PAGE_H;
      }
    });
    doc.dataset.pages = page;
    const pc = document.getElementById("page-count");
    if (pc) pc.innerHTML = `≈ <b>${page}</b> ${page > 1 ? "pages" : "page"}`;
  }
  window.addEventListener("load", () => markPages());
  if (document.fonts) document.fonts.ready.then(() => markPages());

  /* ---------- toolbar ---------- */
  function fileName() {
    const name = len === FULL ? "full" : len === 1 ? "1page" : `${len}pages`;
    return `Yosvany_Silva_Solis_CV_${name}_${L().toUpperCase()}`;
  }
  function updateToolbar() {
    document.querySelectorAll("[data-len]").forEach((b) => b.classList.toggle("active", parseLen(b.dataset.len) === len));
    const url = new URL(location);
    url.searchParams.set("len", len === FULL ? "full" : len);
    url.searchParams.set("lang", L());
    history.replaceState(null, "", url);
  }
  document.querySelectorAll("[data-len]").forEach((b) =>
    b.addEventListener("click", () => { len = parseLen(b.dataset.len); build(); })
  );
  document.getElementById("print").addEventListener("click", () => {
    const old = document.title;
    document.title = fileName(); // becomes the default PDF file name
    window.print();
    setTimeout(() => (document.title = old), 500);
  });
  // Rebuild when the language flag is clicked
  document.querySelectorAll(".lang-switch button").forEach((b) => b.addEventListener("click", () => setTimeout(build, 0)));

  build();
})();
