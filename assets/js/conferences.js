/* =========================================================
   CONFERENCES & SCHOOLS
   To add a new one: copy one { ... } block, paste it at the TOP of the
   list and change the values. It appears in the list AND on the map.

   date:   shown on the left, e.g. "May 2024"
   title:  name of the event
   talk:   title of your presentation (optional, "" if none)
   place:  "City, Country 🇫🇷"  — use the same spelling each time so
           the map counts countries correctly
   type:   "oral" | "poster" | "seminar" | "single figure" | "attendee" | "organizer" | "invited" | "co-author"
           Several roles? Separate them with a comma: "oral, organizer"
   note:   a highlight shown in gold (optional, "" if none)
   note_fr: French version of the note (optional; otherwise see NOTE_FR below)
   url:    the event's website (optional, "" if none)
   lat/lng: the city's coordinates (search "<city> coordinates").
            Leave them out for online events (no pin on the map).
   ========================================================= */
const CONFERENCES = [
  { date: "Nov 2026", title: "12th International Conference on Multiscale Materials Modeling (MMM12)",
    talk: "Toward a multiscale understanding of W-Re-H system under fusion-relevant conditions",
    place: "Jeju, South Korea 🇰🇷", type: "poster", url: "https://www.mmm12.org/", note: "", lat: 33.4996, lng: 126.5312 },
  { date: "Oct 2026", title: "Journées de la Matière Condensée (JMC 2026)",
    talk: "Toward a multiscale understanding of W-Re-H system under fusion-relevant conditions",
    place: "Toulouse, France 🇫🇷", type: "oral, invited", url: "https://jmc2026.sciencesconf.org/", note: "", lat: 43.6047, lng: 1.4442 },
  { date: "Jun 2026", title: "Journées Plénières GDR IAMAT 2026",
    talk: "Machine Learning Interatomic Potential for the binary W-Cu system in view of modelling a metallic interface",
    place: "Aix-en-Provence, France 🇫🇷", type: "co-author", url: "https://gdr-iamat-plenieres.sciencesconf.org/", note: "Presented by my co-supervised PhD student Sophie Stibac", note_fr: "Présenté par Sophie Stibac, doctorante que je co-encadre", lat: 43.5297, lng: 5.4474 },
  { date: "Apr 2026", title: "7ème Colloque de Prospectives et 20 ans de la FR-FCM/ITER",
    talk: "Multi-scale modeling of plasma-material interactions in nuclear fusion devices",
    place: "Sète, France 🇫🇷", type: "oral, invited", url: "https://frfcm2026.sciencesconf.org/", note: "", lat: 43.4028, lng: 3.6928 },
  { date: "Oct 2024", title: "Journées de la Matière Condensée (JMC 2024)",
    talk: "Multi-scale model for studying the segregation and diffusion of H atoms at the W/Cu interface",
    place: "Marseille, France 🇫🇷", type: "oral", url: "https://jmc2024.sciencesconf.org/", note: "", lat: 43.2965, lng: 5.3698 },
  { date: "Sep 2024", title: "11th International Conference on Multiscale Materials Modeling (MMM11)",
    talk: "Multi-scale model for studying the segregation and diffusion of H atoms at the W/Cu interface",
    place: "Prague, Czech Republic 🇨🇿", type: "oral", url: "https://mmm11.ipm.cz/", note: "~600 participants", lat: 50.0755, lng: 14.4378 },
  { date: "Jul 2024", title: "Decennial IAEA Technical Meeting on Atomic, Molecular and Plasma-Material Interaction Data for Fusion Science and Technology (AMPMI 2024)",
    talk: "Multi-scale modelling of H interactions on W surfaces and W/Cu interlayers",
    place: "Helsinki, Finland 🇫🇮", type: "oral", url: "https://conferences.iaea.org/event/384/", note: "Highly selective meeting, held every 10 years", lat: 60.1699, lng: 24.9384 },
  { date: "May 2024", title: "17th International Workshop on Hydrogen Isotopes in Fusion Reactor Materials (HWS 2024)",
    talk: "Diffusion modelling of H atoms and defects formation at the W/Cu interface",
    place: "Chamonix, France 🇫🇷", type: "oral, organizer", url: "https://hws2024.sciencesconf.org/", note: "Organizing committee: scientific program and website", lat: 45.9237, lng: 6.8694 },
  { date: "May 2024", title: "Journée de l'ISFIN",
    talk: "Multi-scale model for studying the segregation and diffusion of H atoms at the W/Cu interface",
    place: "Aix-en-Provence, France 🇫🇷", type: "oral", url: "", note: "", lat: 43.5297, lng: 5.4474 },
  { date: "May 2024", title: "26th International Conference on Plasma Surface Interaction in Controlled Fusion Devices (PSI-26)",
    talk: "Diffusion of H atoms and defects formation at the W/Cu interface in the ITER cooling monoblocks",
    place: "Marseille, France 🇫🇷", type: "poster", url: "https://web.archive.org/web/20250613071016/https://psi26.com/home", note: "", lat: 43.2965, lng: 5.3698 },
  { date: "Nov 2023", title: "Machine Learning Interatomic Potential School for Young and Early Career Researchers (ML-IP 2023)",
    talk: "Segregation and diffusion of H atoms at the W/Cu interface: application for the ITER cooling monoblocks",
    place: "Espoo, Finland 🇫🇮", type: "poster", url: "https://www.mlip-workshop.xyz/home", note: "", lat: 60.2055, lng: 24.6559 },
  { date: "Jul 2023", title: "Seminar at InSTEC, University of Havana",
    talk: "Segregation and diffusion of H atoms through the W/Cu interface: application for the ITER cooling monoblocks",
    place: "Havana, Cuba 🇨🇺", type: "seminar", url: "", note: "", lat: 23.1136, lng: -82.3666 },
  { date: "Jun 2023", title: "3rd Workshop on Artificial Intelligence in Plasma Science (WAIPS-3)",
    talk: "A Machine Learning Interatomic Potential for describing W-Cu-H interactions",
    place: "Aix-en-Provence, France 🇫🇷", type: "oral", url: "", note: "", lat: 43.5297, lng: 5.4474 },
  { date: "Jun 2023", title: "XVII Condensed and Molecular Matter Physics Workshop",
    talk: "Segregation and diffusion of H atoms at the W/Cu interface: application for the ITER cooling monoblocks",
    place: "Cuernavaca, Mexico 🇲🇽", type: "oral", url: "", note: "", lat: 18.9242, lng: -99.2216 },
  { date: "Jun 2023", title: "Scientific Day of the Doctoral School Physics and Materials Science (ED352)",
    talk: "",
    place: "Marseille, France 🇫🇷", type: "organizer", url: "", note: "Organizing committee: scientific program and logistics", lat: 43.2965, lng: 5.3698 },
  { date: "May 2023", title: "6th International Workshop on Models and Data for Plasma-Material Interaction in Fusion Devices (MoD-PMI 2023)",
    talk: "Diffusion and segregation of H atoms at the W/Cu interface: application for the ITER cooling monoblocks",
    place: "Aachen, Germany 🇩🇪", type: "oral", url: "https://www.events.fz-juelich.de/event.php?vnr=2c-108", note: "", lat: 50.7753, lng: 6.0839 },
  { date: "May 2023", title: "19th International Conference on Plasma-Facing Materials and Components for Fusion Applications (PFMC-19)",
    talk: "Solution and diffusion of H atoms at the W/Cu interface for the ITER cooling monoblocks",
    place: "Bonn, Germany 🇩🇪", type: "poster", url: "https://www.events.fz-juelich.de/event.php?vnr=13-108", note: "", lat: 50.7374, lng: 7.0982 },
  { date: "May 2023", title: "Seminar at IRFM (Institute for Magnetic Fusion Research), CEA-Cadarache",
    talk: "Segregation of H atoms through the W/Cu interface",
    place: "Cadarache, France 🇫🇷", type: "seminar", url: "", note: "", lat: 43.6889, lng: 5.7614 },
  { date: "Feb 2023", title: "Virtual Winter School on Computational Chemistry",
    talk: "Model for solution and segregation of hydrogen atoms at the tungsten/copper interface based on Density Functional Theory",
    place: "Online", type: "single figure", url: "https://winterschool.cc/", note: "" },
  { date: "Oct 2022", title: "10th International Conference on Multiscale Materials Modeling (MMM10)",
    talk: "Solution of H at the W/Cu interface from Density Functional Theory",
    place: "Baltimore, United States 🇺🇸", type: "poster", url: "https://mmm10.jhu.edu/", note: "", lat: 39.2904, lng: -76.6122 },
  { date: "Sep 2022", title: "Flagship School: Machine Learning and Quantum Computing for Quantum Molecular Dynamics (MLQCDyn)",
    talk: "Solution and segregation of H at the W/Cu interface",
    place: "Paris, France 🇫🇷", type: "poster", url: "https://www.cecam.org/workshop-details/machine-learning-and-quantum-computing-for-quantum-molecular-dynamics-1133", note: "", lat: 48.8566, lng: 2.3522 },
  { date: "Aug 2022", title: "Canadian-Cuban-American-Mexican Graduate Student Conference (CCAM 2022)",
    talk: "Solution of H atoms at the W/Cu interface from Density Functional Theory",
    place: "Online", type: "oral", url: "https://sac.cap.ca/events/ccam-2022-conference/", note: "" },
  { date: "Jul 2022", title: "CCP5 Summer School: Molecular Simulation Methods",
    talk: "Solution and segregation of H at the W/Cu interface for the ITER cooling monoblocks",
    place: "Durham, United Kingdom 🇬🇧", type: "poster", url: "https://summer2022.ccp5.ac.uk/", note: "", lat: 54.7761, lng: -1.5733 },
  { date: "May 2022", title: "5ème Colloque de Prospective de la FR-FCM",
    talk: "",
    place: "Montauban, France 🇫🇷", type: "attendee", url: "", note: "", lat: 44.0176, lng: 1.355 },
  { date: "May 2022", title: "Young Researchers' Workshop on Machine Learning for Materials",
    talk: "",
    place: "Trieste, Italy 🇮🇹", type: "attendee", url: "", note: "", lat: 45.6495, lng: 13.7768 },
  { date: "Apr 2022", title: "IAEA Technical Meeting on the Effects of Hydrogen Supersaturation and Defect Stabilization in Nuclear Fusion Reactor Materials",
    talk: "",
    place: "Aix-en-Provence, France 🇫🇷", type: "organizer", url: "", note: "Organizing committee: scientific program", lat: 43.5297, lng: 5.4474 },
  { date: "Feb 2022", title: "XIII International Congress of Higher Education (Universidad 2022)",
    talk: "Importance of adequate use of Information and Communication Technologies (ICT) in the non-presential teaching modality",
    place: "Havana, Cuba 🇨🇺", type: "oral", url: "https://www.congresouniversidad.cu/", note: "", lat: 23.1136, lng: -82.3666 },
  { date: "Jun 2021", title: "XV Condensed and Molecular Matter Physics Workshop",
    talk: "Diffusion of N atoms on the W(100) surface employing Langevin Molecular Dynamics",
    place: "Cuernavaca, Mexico 🇲🇽", type: "oral", url: "", note: "", lat: 18.9242, lng: -99.2216 },
  { date: "Mar 2020", title: "XV Symposium of the Cuban Physics Society",
    talk: "Eley-Rideal recombination of H2 over W(110): a theoretical study about energy dissipation channels and influence of isotopic substitutions",
    place: "Havana, Cuba 🇨🇺", type: "poster", url: "", note: "", lat: 23.1136, lng: -82.3666 },
  { date: "Jan 2020", title: "Second Meeting of Cuban Postgraduate Physics Students",
    talk: "Diffusion of nitrogen atoms on a tungsten surface in the crystallographic plane (100)",
    place: "Havana, Cuba 🇨🇺", type: "poster", url: "", note: "", lat: 23.1136, lng: -82.3666 },
  { date: "Jun 2019", title: "International Symposium of Chemistry (SIQ-2019)",
    talk: "Diffusion of nitrogen atoms on a tungsten surface in the crystallographic plane (100)",
    place: "Santa Clara, Cuba 🇨🇺", type: "oral", url: "https://web.archive.org/web/20240801005645/https://www.uclv.edu.cu/wp-content/uploads/2018/03/SIQ-Circular-2-EN.pdf", note: "", lat: 22.4067, lng: -79.9531 },
];

/* ---------- French translations used when the site is in French ---------- */
// Types of participation
const TYPE_FR = { oral: "oral", invited: "invité", seminar: "séminaire", poster: "poster", "co-author": "co-auteur",
  "single figure": "figure unique", organizer: "organisateur", attendee: "participant" };
// Months: "Nov 2026" -> "nov. 2026"
const MONTH_FR = { Jan: "janv.", Feb: "févr.", Mar: "mars", Apr: "avr.", May: "mai", Jun: "juin",
  Jul: "juil.", Aug: "août", Sep: "sept.", Oct: "oct.", Nov: "nov.", Dec: "déc." };
// Countries and cities that are written differently in French
const PLACE_FR = { "United States": "États-Unis", "United Kingdom": "Royaume-Uni", "Germany": "Allemagne",
  "Czech Republic": "République tchèque", "Finland": "Finlande", "Italy": "Italie", "Mexico": "Mexique",
  "South Korea": "Corée du Sud", "Havana": "La Havane", "Aachen": "Aix-la-Chapelle", "Online": "En ligne" };
// Highlights (note) in French: add the English text and its translation here
const NOTE_FR = {
  "~600 participants": "~600 participants",
  "Highly selective meeting, held every 10 years": "Conférence très sélective, organisée tous les 10 ans",
  "Organizing committee: scientific program and website": "Comité d'organisation : programme scientifique et site web",
  "Organizing committee: scientific program and logistics": "Comité d'organisation : programme scientifique et logistique",
  "Organizing committee: scientific program": "Comité d'organisation : programme scientifique",
};

const both = (en, fr) => (en === fr ? en : `<en>${en}</en><fr>${fr}</fr>`);
const dateFr = (d) => d.replace(/^([A-Z][a-z]{2})/, (m) => MONTH_FR[m] || m);
const placeFr = (p) => Object.keys(PLACE_FR).reduce((acc, k) => acc.replace(k, PLACE_FR[k]), p);
const showDate = (d) => both(d, dateFr(d));
const showPlace = (p) => both(p, placeFr(p));
const showType = (t) => both(t, TYPE_FR[t] || t);
const showNote = (c) => both(c.note, c.note_fr || NOTE_FR[c.note] || c.note);

/* ---------- Render the scrollable list ---------- */
const BADGE = { oral: "oral", invited: "invited", seminar: "oral", "co-author": "other", poster: "poster", "single figure": "poster", organizer: "org", attendee: "other" };

// "oral, organizer" -> ["oral", "organizer"]
const typesOf = (c) => String(c.type).split(",").map((t) => t.trim().toLowerCase()).filter(Boolean);

const listEl = document.getElementById("conference-list");
if (listEl) {
  listEl.innerHTML = CONFERENCES.map((c) => {
    const name = c.url
      ? `<a href="${c.url}" target="_blank" rel="noopener">${c.title} <span class="ext">↗</span></a>`
      : c.title;
    return `
    <div class="event">
      <div class="event-top">
        <span class="date">${showDate(c.date)}</span>
        <span class="badges">${typesOf(c).map((t) => `<span class="badge ${BADGE[t] || "other"}">${showType(t)}</span>`).join("")}</span>
      </div>
      <div class="title">${name}</div>
      ${c.talk ? `<div class="talk">“${c.talk}”</div>` : ""}
      ${c.note ? `<div class="note">★ ${showNote(c)}</div>` : ""}
      <div class="sub">📍 ${showPlace(c.place)}</div>
    </div>`;
  }).join("");
  const countEl = document.getElementById("conference-count");
  if (countEl) countEl.innerHTML = both(`${CONFERENCES.length} events`, `${CONFERENCES.length} événements`);
}

/* ---------- Render the map (only if the map section exists) ---------- */
const mapEl = document.getElementById("conference-map");
if (mapEl && window.L) {
  const map = L.map(mapEl, { scrollWheelZoom: false, worldCopyJump: true, zoomSnap: 0.25 }).setView([35, -30], 2);
  // Free dark basemap from Esri (no API key needed)
  L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}", {
    attribution: "Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ",
    maxZoom: 16,
  }).addTo(map);

  // Group events by city so one marker can list several conferences
  const byCity = {};
  CONFERENCES.filter((c) => c.lat != null).forEach((c) => {
    const key = `${c.lat},${c.lng}`;
    (byCity[key] ||= { lat: c.lat, lng: c.lng, place: c.place, events: [] }).events.push(c);
  });

  const cities = Object.values(byCity);
  cities.forEach((city) => {
    const n = city.events.length;
    const icon = L.divIcon({
      className: "map-pin",
      html: `<span>${n > 1 ? n : ""}</span>`,
      iconSize: [22, 22],
      iconAnchor: [11, 11],
    });
    const popup = `<strong>${showPlace(city.place)}</strong><ul>${city.events
      .map((e) => `<li><em>${showDate(e.date)}</em> · ${e.url ? `<a href="${e.url}" target="_blank" rel="noopener">${e.title}</a>` : e.title}</li>`)
      .join("")}</ul>`;
    L.marker([city.lat, city.lng], { icon }).addTo(map).bindPopup(popup, { maxWidth: 300 });
  });

  // Frame all the pins. Done again once the page has fully loaded and whenever the
  // map box changes size, so the map always opens centered on your events.
  const bounds = L.latLngBounds(cities.map((c) => [c.lat, c.lng]));
  const frame = () => {
    map.invalidateSize();
    map.fitBounds(bounds, { padding: [30, 30], animate: false });
  };
  frame();
  window.addEventListener("load", frame);
  if (window.ResizeObserver) new ResizeObserver(frame).observe(mapEl);

  // "Recenter" button, top left under the zoom buttons
  const Recenter = L.Control.extend({
    options: { position: "topleft" },
    onAdd() {
      const box = L.DomUtil.create("div", "leaflet-bar");
      const btn = L.DomUtil.create("a", "map-recenter", box);
      btn.href = "#";
      btn.innerHTML = typeof iconSVG === "function" ? iconSVG("locate-fixed") : "⌖";
      btn.title = "Recenter / Recentrer";
      L.DomEvent.on(btn, "click", (e) => { L.DomEvent.preventDefault(e); frame(); });
      return box;
    },
  });
  map.addControl(new Recenter());

  const statEl = document.getElementById("map-stats");
  if (statEl) {
    const countries = new Set(CONFERENCES.filter((c) => c.lat != null).map((c) => c.place.split(",").pop().trim()));
    statEl.innerHTML = both(`${cities.length} cities · ${countries.size} countries`, `${cities.length} villes · ${countries.size} pays`);
  }
}
