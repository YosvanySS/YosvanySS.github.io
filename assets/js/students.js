/* =========================================================
   STUDENTS — the Supervision section on the Overview page.
   To add a student: copy one { ... } block, paste it in the list and fill it in.
   The cards, the "Current" / "Former" groups and the order are made automatically.

   name:      full name
   photo:     file in assets/img/students/ (e.g. "jane-doe.jpg"), or "" for initials
   level:     "phd" | "master" | "internship" | "postdoc"
   role:      "main" (you supervise) or "co" (co-supervision)
   start:     year started, e.g. 2025
   end:       year finished, or null if still in progress → decides Current / Former
   title:     thesis or project title (stays in its original language)
   with:      other supervisors (optional, "" if none)
   now:       for former students, where they went (optional, { en, fr })
   ========================================================= */
const STUDENTS = [
  {
    name: "Sophie Stibac",
    photo: "sophie-stibac.jpg",
    level: "phd",
    role: "co",
    start: 2025,
    end: null,
    title: "Machine Learning Interatomic Potential for the W-Cu System in View of Modeling Interfaces in ITER Monoblocks",
    with: "Y. Ferro (AMU-PIIM), E. Hodille (CEA-IRFM)",
    now: null,
  },
];

/* ---------- Rendering (no need to edit below) ---------- */
(function () {
  const box = document.getElementById("students");
  if (!box) return;
  const LEVEL = {
    phd: { en: "PhD", fr: "Doctorat", cls: "oral" },
    postdoc: { en: "Postdoc", fr: "Postdoc", cls: "invited" },
    master: { en: "Master", fr: "Master", cls: "poster" },
    internship: { en: "Internship", fr: "Stage", cls: "other" },
  };
  const both = (en, fr) => `<en>${en}</en><fr>${fr}</fr>`;
  const initials = (n) => n.split(/\s+/).map((w) => w[0]).join("").slice(0, 3).toUpperCase();
  const years = (s) => (s.end ? `${s.start}–${s.end}` : both(`since ${s.start}`, `depuis ${s.start}`));

  const card = (s) => {
    const lv = LEVEL[s.level] || LEVEL.internship;
    const photo = s.photo ? `<img src="assets/img/students/${s.photo}" alt="${s.name}" loading="lazy">` : "";
    return `
      <article class="panel student-card">
        <div class="student-photo" data-initials="${initials(s.name)}">${photo}</div>
        <h3>${s.name}</h3>
        <div class="student-badges">
          <span class="badge ${lv.cls}">${both(lv.en, lv.fr)}</span>
          <span class="badge other">${years(s)}</span>
        </div>
        <p class="student-title" title="${s.title}">${s.title}</p>
        <p class="student-meta">${s.role === "co" ? both("Co-supervision", "Co-encadrement") : both("Supervision", "Encadrement")}${s.with ? ` · ${both("with", "avec")} ${s.with}` : ""}</p>
        ${s.now ? `<p class="student-now">→ ${both(s.now.en, s.now.fr)}</p>` : ""}
      </article>`;
  };

  // Current first (most recent first), then former students
  const byStart = (a, b) => b.start - a.start;
  const current = STUDENTS.filter((s) => !s.end).sort(byStart);
  const former = STUDENTS.filter((s) => s.end).sort((a, b) => b.end - a.end);
  const group = (title, list) => list.length
    ? `<h3 class="student-group">${title}<span>${list.length}</span></h3><div class="student-grid">${list.map(card).join("")}</div>`
    : "";

  box.innerHTML =
    group(both("Current students", "Étudiants actuels"), current) +
    group(both("Former students", "Anciens étudiants"), former);

  // Missing photo file → show initials
  box.querySelectorAll(".student-photo img").forEach((img) => {
    const fail = () => img.parentElement.classList.add("no-photo");
    if (img.complete && img.naturalWidth === 0) fail();
    img.addEventListener("error", fail);
  });
})();
