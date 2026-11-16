/* =========================================================
   CV DATA — used to build the printable CVs (cv.html).
   Conferences come from assets/js/conferences.js (no need to repeat them).

   Texts with two languages:  { en: "...", fr: "..." }
   "cv: 1"  → shown in the 1-page CV (and in the longer ones)
   "cv: 3"  → shown in the 3-page CV and the full CV
   "cv: 5"  → shown only in the full CV
   ========================================================= */

const CV = {
  name: "Yosvany Silva Solís",
  title: { en: "Associate Professor · Physics & Materials Science", fr: "Maître de conférences · Physique et science des matériaux" },
  affiliation: { en: "PIIM Laboratory (UMR 7345), Aix-Marseille University, Marseille, France", fr: "Laboratoire PIIM (UMR 7345), Aix-Marseille Université, Marseille, France" },
  contact: [
    { label: "Email", value: "yosvany.silva-solis@univ-amu.fr", url: "mailto:yosvany.silva-solis@univ-amu.fr" },
    { label: "Web", value: "yosvanyss.github.io", url: "https://yosvanyss.github.io" },
    { label: "ORCID", value: "0000-0002-1047-4627", url: "https://orcid.org/0000-0002-1047-4627" },
    { label: "Scholar", value: "Google Scholar", url: "https://scholar.google.com/citations?user=Sckd3CYAAAAJ" },
    { label: "LinkedIn", value: "yosvany-silva-solis", url: "https://www.linkedin.com/in/yosvany-silva-solis/" },
    { label: "GitHub", value: "YosvanySS", url: "https://github.com/YosvanySS" },
  ],

  summary: {
    short: {
      en: "Theoretical physicist specializing in multiscale modeling of materials for nuclear fusion: electronic-structure calculations (DFT), machine-learning interatomic potentials, molecular dynamics and macroscopic rate equations. Main topic: hydrogen isotopes in plasma-facing materials (ITER).",
      fr: "Physicien théoricien spécialiste de la modélisation multi-échelle des matériaux pour la fusion nucléaire : calculs de structure électronique (DFT), potentiels interatomiques par apprentissage automatique, dynamique moléculaire et équations cinétiques macroscopiques. Thème principal : les isotopes de l'hydrogène dans les matériaux face au plasma (ITER).",
    },
    long: {
      en: "I am an Associate Professor at Aix-Marseille University (PIIM laboratory) and a theoretical researcher in materials science. I develop multiscale models that link electronic-structure calculations (DFT) and machine-learning interatomic potentials to molecular dynamics, statistical thermodynamics and macroscopic rate equations. My research focuses on plasma–material interactions in fusion devices, in particular the retention and diffusion of hydrogen isotopes in tungsten-based materials and at metallic interfaces such as the W/Cu interface of the ITER divertor. I also develop and optimize simulation codes in Fortran and Python, and I am committed to teaching and to sharing science with the public.",
      fr: "Je suis maître de conférences à Aix-Marseille Université (laboratoire PIIM) et chercheur théoricien en science des matériaux. Je développe des modèles multi-échelles qui relient les calculs de structure électronique (DFT) et les potentiels interatomiques par apprentissage automatique à la dynamique moléculaire, à la thermodynamique statistique et aux équations cinétiques macroscopiques. Mes recherches portent sur les interactions plasma–matériaux dans les dispositifs de fusion, en particulier la rétention et la diffusion des isotopes de l'hydrogène dans les matériaux à base de tungstène et aux interfaces métalliques comme l'interface W/Cu du divertor d'ITER. Je développe et optimise également des codes de simulation en Fortran et Python, et je m'investis dans l'enseignement et la médiation scientifique.",
    },
  },

  keywords: { en: "Plasma–material interactions · Multiscale modeling · DFT · Machine-learning potentials · Molecular dynamics · Hydrogen in metals",
              fr: "Interactions plasma–matériaux · Modélisation multi-échelle · DFT · Potentiels ML · Dynamique moléculaire · Hydrogène dans les métaux" },

  positions: [
    { cv: 1, date: { en: "2025 – present", fr: "2025 – aujourd'hui" },
      title: { en: "Associate Professor", fr: "Maître de conférences" },
      org: { en: "PIIM Laboratory, Aix-Marseille University, France", fr: "Laboratoire PIIM, Aix-Marseille Université, France" },
      desc: { en: "Multiscale modeling of plasma–material interactions for nuclear fusion devices; current project on hydrogen isotopes in tungsten–rhenium transmutation alloys.",
              fr: "Modélisation multi-échelle des interactions plasma–matériaux pour la fusion nucléaire ; projet actuel sur les isotopes de l'hydrogène dans les alliages de transmutation tungstène–rhénium." } },
    { cv: 1, date: { en: "2025", fr: "2025" },
      title: { en: "Postdoctoral Researcher", fr: "Chercheur postdoctoral" },
      org: { en: "SRMP, CEA-Saclay, France", fr: "SRMP, CEA-Saclay, France" },
      desc: { en: "Molecular dynamics of displacement cascades in germanium crystals with machine-learning interatomic potentials that I developed.",
              fr: "Dynamique moléculaire des cascades de déplacement dans le germanium avec des potentiels interatomiques ML que j'ai développés." } },
    { cv: 5, date: { en: "Dec 2024 – Jan 2025", fr: "déc. 2024 – janv. 2025" },
      title: { en: "Research Physicist (CNRS contract)", fr: "Physicien chercheur (contrat CNRS)" },
      org: { en: "PIIM Laboratory, Aix-Marseille University, France", fr: "Laboratoire PIIM, Aix-Marseille Université, France" },
      desc: { en: "DFT dataset and automated workflow for a machine-learning potential of the W/Cu interface, with CEA-Cadarache and the University of Helsinki.",
              fr: "Base de données DFT et chaîne de calcul automatisée pour un potentiel ML de l'interface W/Cu, avec le CEA-Cadarache et l'Université d'Helsinki." } },
    { cv: 1, date: { en: "2021 – 2024", fr: "2021 – 2024" },
      title: { en: "Doctoral Researcher", fr: "Doctorant" },
      org: { en: "PIIM Laboratory, Aix-Marseille University, France", fr: "Laboratoire PIIM, Aix-Marseille Université, France" },
      desc: { en: "Multiscale model of hydrogen retention and diffusion at the W/Cu interface of the ITER divertor (DFT, ML potentials, molecular dynamics, rate equations).",
              fr: "Modèle multi-échelle de la rétention et de la diffusion de l'hydrogène à l'interface W/Cu du divertor d'ITER (DFT, potentiels ML, dynamique moléculaire, équations cinétiques)." } },
    { cv: 1, date: { en: "2019 – 2021", fr: "2019 – 2021" },
      title: { en: "Lecturer-Researcher (tenured)", fr: "Enseignant-chercheur (titulaire)" },
      org: { en: "InSTEC, University of Havana, Cuba", fr: "InSTEC, Université de La Havane, Cuba" },
      desc: { en: "Molecular dynamics of N and H recombination on tungsten surfaces with energy dissipation (electron–hole pairs, phonons), with the University of Bordeaux. Teaching in mathematics and physics (L1–L2).",
              fr: "Dynamique moléculaire de la recombinaison de N et H sur les surfaces de tungstène avec dissipation d'énergie (paires électron–trou, phonons), avec l'Université de Bordeaux. Enseignement en mathématiques et physique (L1–L2)." } },
  ],

  education: [
    { cv: 1, date: "2025",
      title: { en: "Qualification for Maître de Conférences, CNU Section 28", fr: "Qualification aux fonctions de Maître de Conférences, CNU section 28" },
      org: { en: "Dense Media and Materials, France", fr: "Milieux denses et matériaux, France" } },
    { cv: 1, date: "2021 – 2024",
      title: { en: "PhD in Physics and Materials Science", fr: "Doctorat en Physique et Sciences de la Matière" },
      org: { en: "Aix-Marseille University (ED352), defended 2 October 2024", fr: "Aix-Marseille Université (ED352), soutenu le 2 octobre 2024" },
      desc: { en: "Thesis: “A multiscale approach to modeling H interactions with the W/Cu interface: applications for the ITER divertor monoblocks”.",
              fr: "Thèse : « A multiscale approach to modeling H interactions with the W/Cu interface: applications for the ITER divertor monoblocks »." } },
    { cv: 1, date: "2014 – 2019",
      title: { en: "Engineering Degree in Nuclear and Energy Technologies", fr: "Diplôme d'ingénieur en technologies nucléaires et énergétiques (BAC+5)" },
      org: { en: "InSTEC, University of Havana, Cuba", fr: "InSTEC, Université de La Havane, Cuba" },
      desc: { en: "Golden Diploma (summa cum laude), average 4.942 / 5. Final thesis: diffusion of N atoms on W surfaces with Langevin molecular dynamics.",
              fr: "Diplôme d'or (summa cum laude), moyenne 4,942 / 5. Mémoire : diffusion des atomes de N sur les surfaces de W par dynamique moléculaire de Langevin." } },
  ],

  // Funding and supervision (shown in the 3-page and full CVs)
  funding: [
    { cv: 3, date: { en: "2025 – 2026", fr: "2025 – 2026" }, title: { en: "ANR project SPARTES, selected for phase 2", fr: "Projet ANR SPARTES, retenu en phase 2" },
      desc: { en: "“Sputtering of atomic hydrogen and oxygen on tungsten surface”: collaborative project, 48 months, 360 k€ requested. Co-author of the proposal; leader of the molecular dynamics sub-task (D ions on W surfaces, sputtering of adsorbed H and O).",
              fr: "« Sputtering of atomic hydrogen and oxygen on tungsten surface » : projet de recherche collaborative, 48 mois, 360 k€ demandés. Co-rédacteur ; responsable de la sous-tâche de dynamique moléculaire (ions D sur surfaces de W, pulvérisation de H et O adsorbés)." } },
  ],
  supervision: [
    { cv: 3, date: { en: "2025 – present", fr: "2025 – aujourd'hui" }, title: { en: "PhD co-supervision: Sophie Stibac", fr: "Co-encadrement de thèse : Sophie Stibac" },
      desc: { en: "“Machine Learning Interatomic Potential for the W-Cu System in View of Modeling Interfaces in ITER Monoblocks”. Supervisors Y. Ferro (AMU-PIIM) and E. Hodille (CEA-IRFM), ED352.",
              fr: "« Machine Learning Interatomic Potential for the W-Cu System in View of Modeling Interfaces in ITER Monoblocks ». Directeurs Y. Ferro (AMU-PIIM) et E. Hodille (CEA-IRFM), ED352." } },
    { cv: 5, date: { en: "2026", fr: "2026" }, title: { en: "Doctoral follow-up committee (CSI) member", fr: "Membre de comité de suivi individuel (CSI)" },
      desc: { en: "First-year PhD student, ED352.", fr: "Doctorante en 1re année, ED352." } },
  ],

  projects: [
    { cv: 3, title: { en: "Transmutation alloys (W–Re) for fusion", fr: "Alliages de transmutation (W–Re) pour la fusion" }, date: { en: "Current · PIIM", fr: "Actuel · PIIM" },
      desc: { en: "Multiscale methodology (DFT → ML potentials → molecular dynamics → rate equations) for hydrogen isotopes in tungsten–rhenium alloys and their defects.",
              fr: "Méthodologie multi-échelle (DFT → potentiels ML → dynamique moléculaire → équations cinétiques) pour les isotopes de l'hydrogène dans les alliages tungstène–rhénium et leurs défauts." } },
    { cv: 3, title: { en: "Displacement cascades in germanium", fr: "Cascades de déplacement dans le germanium" }, date: { en: "2025 · CEA-Saclay", fr: "2025 · CEA-Saclay" },
      desc: { en: "Energy stored in radiation defects, with applications to particle detection.", fr: "Énergie stockée dans les défauts d'irradiation, avec des applications à la détection de particules." } },
    { cv: 3, title: { en: "Hydrogen at the W/Cu interface (ITER)", fr: "L'hydrogène à l'interface W/Cu (ITER)" }, date: { en: "2021 – 2025 · PIIM", fr: "2021 – 2025 · PIIM" },
      desc: { en: "Solubility, trapping and diffusion of hydrogen at the interface of the ITER divertor monoblocks; DFT dataset for a W–Cu ML potential shared with the University of Helsinki and CEA-Cadarache.",
              fr: "Solubilité, piégeage et diffusion de l'hydrogène à l'interface des monoblocs du divertor d'ITER ; base de données DFT pour un potentiel ML W–Cu partagée avec l'Université d'Helsinki et le CEA-Cadarache." } },
    { cv: 5, title: { en: "Eley–Rideal recombination on tungsten", fr: "Recombinaison Eley–Rideal sur le tungstène" }, date: { en: "2019 – 2021 · Havana", fr: "2019 – 2021 · La Havane" },
      desc: { en: "Isotope effects (H, D, T) and energy dissipation in Eley–Rideal abstraction on W(100) and W(110), with the University of Bordeaux.",
              fr: "Effets isotopiques (H, D, T) et dissipation d'énergie dans l'abstraction Eley–Rideal sur W(100) et W(110), avec l'Université de Bordeaux." } },
  ],

  articles: [
    { cv: 1, year: 2026, authors: "Y. Silva-Solís, J. Denis, E. A. Hodille, Y. Ferro", title: "Hydrogen transport at metallic interfaces: modeling the tungsten–copper system", journal: "Physical Review Materials", ref: "10, 045404 (2026)", doi: "10.1103/lnnc-h1yy" },
    { cv: 1, year: 2025, authors: "O. Galparsoro, R. Martin-Barrios, P. E. Ibáñez-Almaguer, …, Y. Silva-Solís, et al.", title: "Isotope effects in Eley–Rideal abstraction of hydrogen from tungsten surfaces: the role of dissipation", journal: "Physical Chemistry Chemical Physics", ref: "(2025)", doi: "10.1039/D4CP04063E" },
    { cv: 5, year: 2025, authors: "Y. Silva-Solís, J. Denis, E. A. Hodille, Y. Ferro", title: "Corrigendum: Solution and solubility of H atoms at the W/Cu interface", journal: "Journal of Physics: Condensed Matter", ref: "37, 129501 (2025)", doi: "10.1088/1361-648X/ada7b7" },
    { cv: 1, year: 2024, authors: "Y. Silva-Solís, J. Denis, E. A. Hodille, Y. Ferro", title: "Solution and solubility of H atoms at the W/Cu interface", journal: "Journal of Physics: Condensed Matter", ref: "36, 465001 (2024)", doi: "10.1088/1361-648X/ad6f62" },
    { cv: 1, year: 2023, authors: "Y. Silva-Solís, J. Denis, E. A. Hodille, Y. Ferro", title: "A model of the W/Cu interface in the ITER cooling monoblocks from density functional theory", journal: "Nuclear Materials and Energy", ref: "37, 101516 (2023)", doi: "10.1016/j.nme.2023.101516" },
  ],
  books: [
    { cv: 3, year: 2022, authors: "P. Pajón Suárez, Y. Silva-Solís, A. Gálvez Rodríguez", title: "Elementos de Ecuaciones Diferenciales Ordinarias y en Derivadas Parciales para estudiantes de Radioquímica", publisher: "Ciudad Educativa, Miami", isbn: "978-1-5129-8868-0" },
    { cv: 3, year: 2022, authors: "P. Pajón Suárez, Y. Silva-Solís, A. Gálvez Rodríguez", title: "Ejercicios de Ecuaciones Diferenciales Ordinarias y en Derivadas Parciales para estudiantes de Radioquímica", publisher: "Ciudad Educativa, Miami", isbn: "978-1-5129-8869-7" },
  ],

  teaching: [
    { date: "2025 – 2026", course: { en: "Wave Optics (lectures & tutorials)", fr: "Optique ondulatoire (CM & TD)" }, details: { en: "Aix-Marseille University · Bachelor SPI, ISM track · AMeTICE course space", fr: "Aix-Marseille Université · Licence SPI, parcours ISM · espace AMeTICE" }, hours: 41 },
    { date: "2025 – 2026", course: { en: "Electrokinetics (lectures & tutorials)", fr: "Électrocinétique (CM & TD)" }, details: { en: "Aix-Marseille University · Polytech PEIP · flipped classroom", fr: "Aix-Marseille Université · PEIP Polytech · classe inversée" }, hours: 31 },
    { date: "2025 – 2026", course: { en: "Mathematics for Engineering (tutorials & labs)", fr: "Mathématiques ISM 2 (TD & TP)" }, details: { en: "Aix-Marseille University · Bachelor SPI, ISM track · AMeTICE course space", fr: "Aix-Marseille Université · Licence SPI, parcours ISM · espace AMeTICE" }, hours: 25 },
    { date: "2025 – 2026", course: { en: "Scientific Method 4 (labs)", fr: "Démarche scientifique 4 (TP)" }, details: { en: "Aix-Marseille University · Bachelor in Physics & Chemistry", fr: "Aix-Marseille Université · Licence Physique Chimie" }, hours: 23 },
    { date: "2025 – 2026", course: { en: "C++ Programming (labs)", fr: "Programmation en C++ (TP)" }, details: { en: "Aix-Marseille University · Professional bachelor in Instrumentation", fr: "Aix-Marseille Université · Licence pro Métiers de l'instrumentation" }, hours: 21 },
    { date: "2020 – 2021", course: { en: "Mathematical Analysis III", fr: "Analyse mathématique III" }, details: { en: "L2 · ~90 students · tutorials + Moodle", fr: "L2 · ~90 étudiants · TD + Moodle" }, hours: 136 },
    { date: "2020 – 2021", course: { en: "Geometric and Wave Optics", fr: "Optique géométrique et ondulatoire" }, details: { en: "L2 · ~70 students · tutorials + Moodle", fr: "L2 · ~70 étudiants · TD + Moodle" }, hours: 54 },
    { date: "2020 – 2021", course: { en: "Mathematical Analysis II", fr: "Analyse mathématique II" }, details: { en: "L1 · ~50 students · tutorials + Moodle", fr: "L1 · ~50 étudiants · TD + Moodle" }, hours: 34 },
    { date: "2019 – 2020", course: { en: "Geometric and Wave Optics", fr: "Optique géométrique et ondulatoire" }, details: { en: "L2 · ~60 students · tutorials & labs", fr: "L2 · ~60 étudiants · TD & TP" }, hours: 102 },
    { date: "2019 – 2020", course: { en: "Electromagnetism", fr: "Électromagnétisme" }, details: { en: "L2 · ~30 students · tutorials & labs", fr: "L2 · ~30 étudiants · TD & TP" }, hours: 46 },
    { date: "2015 – 2019", course: { en: "Electromagnetism · Optics", fr: "Électromagnétisme · Optique" }, details: { en: "Student lab assistant", fr: "Étudiant assistant de TP" }, hours: null },
  ],
  // Short version for the 3-page CV
  teachingSummaryShort: { en: "513 h in total: Aix-Marseille University 2025–2026 (141 h ETD: wave optics, electrokinetics, mathematics, C++; AMeTICE course spaces, flipped classroom) and University of Havana 2019–2021 (372 h, L1–L2). Co-author of two textbooks; CIPE teacher training.",
                          fr: "513 h au total : Aix-Marseille Université 2025–2026 (141 h ETD : optique ondulatoire, électrocinétique, mathématiques, C++ ; espaces AMeTICE, classe inversée) et Université de La Havane 2019–2021 (372 h, L1–L2). Co-auteur de deux manuels ; formations CIPE." },
  teachingSummary: { en: "513 h in total. Aix-Marseille University (2025–2026): 141 h ETD of lectures, tutorials and labs in optics, electrokinetics, mathematics and C++ programming, with AMeTICE course spaces and flipped-classroom tutorials; internship defense jury (L3). University of Havana (2019–2021): 372 h of tutorials and labs (L1–L2) for ~300 students; co-author of two textbooks on differential equations. Teacher training (CIPE, 32 h) and mentoring program for new faculty.",
                     fr: "513 h au total. Aix-Marseille Université (2025–2026) : 141 h ETD de CM, TD et TP en optique, électrocinétique, mathématiques et programmation C++, avec création d'espaces AMeTICE et TD en classe inversée ; jury de soutenance de stage (L3). Université de La Havane (2019–2021) : 372 h de TD et TP (L1–L2) pour ~300 étudiants ; co-auteur de deux manuels d'équations différentielles. Formations pédagogiques (CIPE, 32 h) et dispositif de mentorat des nouveaux enseignants-chercheurs." },

  organizing: [
    { cv: 3, date: { en: "May 2026", fr: "mai 2026" }, title: { en: "PIIM laboratory seminars, Marseille", fr: "Séminaires du laboratoire PIIM, Marseille" },
      desc: { en: "Organization and coordination; choosing and inviting speakers.", fr: "Organisation et coordination ; identification et invitation des intervenants." } },
    { cv: 5, date: { en: "Feb 2026", fr: "févr. 2026" }, title: { en: "Half-day workshop on classical molecular dynamics, PIIM", fr: "Demi-journée thématique : dynamique moléculaire classique, PIIM" },
      desc: { en: "Organizing committee and talk.", fr: "Comité d'organisation et présentation orale." } },
    { cv: 3, date: { en: "May 2024", fr: "mai 2024" }, title: { en: "HWS 2024, 17th Int. Workshop on Hydrogen Isotopes in Fusion Reactor Materials, Chamonix", fr: "HWS 2024, 17th Int. Workshop on Hydrogen Isotopes in Fusion Reactor Materials, Chamonix" },
      desc: { en: "Organizing committee: scientific program and website (budget 20 k€).", fr: "Comité d'organisation : programme scientifique et site web (budget 20 k€)." } },
    { cv: 5, date: { en: "Jun 2023", fr: "juin 2023" }, title: { en: "Scientific Day of the Doctoral School ED352, Marseille", fr: "Journée scientifique de l'École doctorale ED352, Marseille" },
      desc: { en: "Organizing committee: scientific program and logistics (budget 5 k€).", fr: "Comité d'organisation : programme scientifique et logistique (budget 5 k€)." } },
    { cv: 5, date: { en: "Apr 2022", fr: "avr. 2022" }, title: { en: "IAEA Technical Meeting on Hydrogen Supersaturation and Defect Stabilization in Fusion Reactor Materials, Aix-en-Provence", fr: "Réunion technique de l'AIEA sur la sursaturation en hydrogène et la stabilisation des défauts, Aix-en-Provence" },
      desc: { en: "Organizing committee: scientific program (budget 20 k€).", fr: "Comité d'organisation : programme scientifique (budget 20 k€)." } },
  ],
  outreach: [
    { cv: 5, date: { en: "Feb 2024", fr: "févr. 2024" }, title: { en: "PIIM Laboratory Open Day, Marseille", fr: "Journée portes ouvertes du laboratoire PIIM, Marseille" },
      desc: { en: "“Simulation & modeling” stand: the ITER project and our simulations for the public.", fr: "Stand « Simulation-modélisation » : le projet ITER et nos simulations pour le grand public." } },
    { cv: 3, date: { en: "Nov 2023", fr: "nov. 2023" }, title: { en: "Souk des Sciences, Aix-en-Provence", fr: "Souk des Sciences, Aix-en-Provence" },
      desc: { en: "Presented Hydro-jeux, an educational Python game I developed on hydrogen diffusion in materials.", fr: "Présentation d'Hydro-jeux, un jeu éducatif en Python que j'ai développé sur la diffusion de l'hydrogène dans les matériaux." } },
    { cv: 5, date: { en: "Oct 2023", fr: "oct. 2023" }, title: { en: "Fête de la Science 2023, Marseille", fr: "Fête de la Science 2023, Marseille" },
      desc: { en: "3-day festival: street science, escape game and planetarium sessions.", fr: "Festival de 3 jours : street science, escape game et séances de planétarium." } },
    { cv: 5, date: { en: "Oct 2022", fr: "oct. 2022" }, title: { en: "Fête de la Science 2022, Marseille", fr: "Fête de la Science 2022, Marseille" },
      desc: { en: "Activities and logistics for the 3-day festival.", fr: "Animations et logistique pendant les 3 jours du festival." } },
  ],

  skills: [
    { label: { en: "Electronic structure", fr: "Structure électronique" }, value: { en: "DFT (Quantum ESPRESSO), NEB transition states, phonons", fr: "DFT (Quantum ESPRESSO), états de transition NEB, phonons" } },
    { label: { en: "Atomistic simulation", fr: "Simulation atomistique" }, value: { en: "Classical & Langevin molecular dynamics (LAMMPS), displacement cascades, energy dissipation (LDFA)", fr: "Dynamique moléculaire classique et de Langevin (LAMMPS), cascades de déplacement, dissipation d'énergie (LDFA)" } },
    { label: { en: "Machine learning", fr: "Apprentissage automatique" }, value: { en: "ML interatomic potentials, DFT dataset generation, automated workflows", fr: "Potentiels interatomiques ML, génération de bases DFT, chaînes de calcul automatisées" } },
    { label: { en: "Kinetics & thermodynamics", fr: "Cinétique & thermodynamique" }, value: { en: "Macroscopic rate equations, statistical thermodynamics, hydrogen solubility", fr: "Équations cinétiques macroscopiques, thermodynamique statistique, solubilité de l'hydrogène" } },
    { label: { en: "Programming", fr: "Programmation" }, value: { en: "Python, Fortran, C++, Pygame, three.js", fr: "Python, Fortran, C++, Pygame, three.js" } },
  ],
  // One-line version of the skills, for the 1-page CV
  skillsShort: { en: "DFT (Quantum ESPRESSO) · Molecular dynamics (LAMMPS) · Machine-learning interatomic potentials · Rate equations & statistical thermodynamics · Python, Fortran, C++",
                 fr: "DFT (Quantum ESPRESSO) · Dynamique moléculaire (LAMMPS) · Potentiels interatomiques ML · Équations cinétiques & thermodynamique statistique · Python, Fortran, C++" },
  languages: { en: "Spanish (native) · French (C1) · English (C1)", fr: "Espagnol (langue maternelle) · Français (C1) · Anglais (C1)" },
};
