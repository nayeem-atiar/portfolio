export const NAV = ["About", "Experience", "Projects", "Skills", "AI Tools", "Testimonials", "Contact"];

export const SECTION_IDS = {
  "About": "about",
  "Experience": "experience",
  "Projects": "projects",
  "Skills": "skills",
  "AI Tools": "aitools",
  "Testimonials": "testimonials",
  "Contact": "contact",
};

export const SECTION_PATHS = {
  About: "/",
  Experience: "/experience",
  Projects: "/projects",
  Skills: "/skills",
  "AI Tools": "/ai-tools",
  Testimonials: "/testimonials",
  Contact: "/contact",
};

export const PATH_TO_SECTION = {
  "/": "About",
  "/experience": "Experience",
  "/projects": "Projects",
  "/skills": "Skills",
  "/ai-tools": "AI Tools",
  "/testimonials": "Testimonials",
  "/contact": "Contact",
};

export const SKILLS = [
  {
    cat: "Frontend",
    icon: "</>",
    color: "#F07040",
    desc: "Large-scale, performant interfaces — the core of my 5+ years of work.",
    items: ["Angular", "React", "TypeScript", "JavaScript"],
    core: ["Angular", "React", "TypeScript"],   // shown highlighted
  },
  {
    cat: "Styling & UI",
    icon: "◧",
    color: "#E8668A",
    desc: "Responsive, accessible UIs built on component libraries and utility CSS.",
    items: ["TailwindCSS", "Angular Material", "PrimeNG", "Nebular"],
    core: ["TailwindCSS"],
  },
  {
    cat: "Backend",
    icon: "⚙",
    color: "#48BFA0",
    desc: "REST and GraphQL services built with Node.js and Express.",
    items: ["Node.js", "Express", "REST APIs", "GraphQL"],
    core: ["Node.js", "Express"],
  },
  {
    cat: "Database",
    icon: "▤",
    color: "#9B8AF5",
    desc: "Document and relational data modelling, from schema design to queries.",
    items: ["MongoDB", "Mongoose", "PostgreSQL", "MSSQL"],
    core: ["MongoDB", "PostgreSQL"],
  },
  {
    cat: "Architecture",
    icon: "◈",
    color: "#F5A623",
    desc: "Designing systems that scale, stay maintainable, and perform under load.",
    items: ["System Design", "Scalable Architecture", "Clean Architecture", "REST API Design", "Data Modelling", "Performance Optimization"],
    core: ["System Design"],
  },
  {
    cat: "DevOps",
    icon: "∞",
    color: "#5D9CF5",
    desc: "Containerised apps and automated build, test and deploy pipelines.",
    items: ["Docker", "CI/CD"],
    core: [],
  },
  // { cat: "Platforms", items: ["Frappe Framework", "ERP", "i18n", "AI Tools"] },
];

export const EXP = [
  {
    role: "Senior Software Engineer",
    co: "Wyze Tech Limited",
    period: "Mar 2026 – Present",
    type: "Current",
    tech: ["Frappe", "Python", "REST API", "AI Tools"],
    pts: [
      "Built and extended HR/ERP functionalities using the Frappe Framework — custom DocTypes, server scripts, and REST integrations — reducing manual HR processing time significantly.",
      "Leveraged AI tools (Claude, Cursor) for rapid debugging and optimizing complex business logic, improving feature delivery speed across sprints.",
      "Collaborated cross-functionally with stakeholders across teams of 4–10 engineers to translate business needs into scalable technical solutions.",
    ],
  },
  {
    role: "Senior Front End Engineer",
    co: "Giga Tech Limited",
    period: "Nov 2022 – Feb 2026",
    type: "3+ yrs",
    tech: ["Angular", "React", "Node.js", "MSSQL", "ASP.NET Core", "MongoDB", "TailwindCSS", "Angular Material"],
    pts: [
      "Developed and maintained large-scale frontend applications serving 1k–10k+ users across banking and fintech products (BRAC Bank, HSBC, bKash).",
      "Reduced initial load time by ~25–40% through lazy loading and API optimization; cut bundle size by ~20–35% via code splitting and tree shaking.",
      "Built reusable modular component libraries that accelerated team velocity, consistently delivering 3–6 features per 2-week sprint.",
      "Implemented i18n for multi-language support and upgraded legacy Angular systems, improving stability and maintainability across 4+ products.",
      "Worked on a Node.js, Express, and MongoDB-based project to build backend services, REST APIs, and data handling for internal workflow solutions.",
      "Contributed across the full stack for internal tools and dashboards, bridging frontend interfaces with server-side logic and database-driven features.",
    ],
  },
  {
    role: "Front End Developer",
    co: "Linkvision Software Solution",
    period: "Nov 2019 – Oct 2022",
    type: "3 yrs",
    tech: ["Angular", "Angular Material", "PrimeNG", "TailwindCSS", "Bootstrap"],
    pts: [
      "Delivered responsive, cross-browser, accessibility-compliant Angular web applications for enterprise clients including Robi Axiata Ltd.",
      "Translated UI/UX designs into reusable Angular components and clean module-based structures, supporting fast delivery of features across the product.",
      "Built and improved forms, tables, and workflow screens for the Robi HRIS using Angular, Angular Material, and PrimeNG, covering PMS, payroll, lifecycle, and benefits modules.",
      "Integrated REST APIs with Angular services and improved state handling, validation, and user interaction for complex enterprise workflows.",
    ],
  },
];

export const PROJECTS = [
  {
    n: "01",
    name: "eKYC Applications",
    client: "BRAC Bank · HSBC · Prime Bank",
    period: "2022–2026",
    desc: "Digital KYC onboarding with biometric liveness detection. Delivered Probashi Banking, SME Banking, Astha Integration for BRAC Bank; multi-document account opening for HSBC.",
    tech: ["Angular", "TypeScript", "ASP.NET Core"],
    color: "#48BFA0",
  },
  {
    n: "02",
    name: "Jachai Platform",
    client: "bKash / Giga Tech",
    period: "2023–2024",
    desc: "Internal API monitoring dashboard for bKash tracking real-time NID and BCN verification success/failure rates with dynamic filters and export capabilities.",
    tech: ["React", "Node.js", "TailwindCSS"],
    color: "#E8668A",
  },
  {
    n: "03",
    name: "Robi HRIS",
    client: "Robi Axiata Ltd.",
    period: "2020–2022",
    desc: "Full-scale Human Resource Information System — PMS with reactive forms, payroll & payslip generation, employee lifecycle module, and employee benefits claims.",
    tech: ["Angular", "Angular Material", "PrimeNG"],
    color: "#F5A623",
  },
  {
    n: "04",
    name: "Robi Recruitment App",
    client: "Robi Axiata Ltd.",
    period: "2019–2020",
    desc: "End-to-end job portal — candidate job search, video introduction, online assessment, interview scheduling, and negotiation flows for Robi Axiata.",
    tech: ["Angular", "TailwindCSS"],
    color: "#9B8AF5",
  },
  {
    n: "05",
    name: "Frappe HR & ERP System",
    client: "Wyze Tech Limited",
    period: "2026–Present",
    desc: "Custom HR and ERP modules for full employee lifecycle — onboarding, performance evaluation, payroll workflows, and dynamic reporting dashboards built on the Frappe Framework.",
    tech: ["Frappe", "Python", "REST API"],
    color: "#F07040",
  },
];

export const AI_TOOLS = [
  {
    name: "Claude",
    logo: "claude",          // Simple Icons slug (or "codex" = built-in local icon)
    color: "#CC785C",
    badge: "Claude Code Certified",
    desc: "My primary AI for deep reasoning, architecture decisions, and long-form problem solving. Completed the Claude Code for Professionals course — using Claude Code daily for agentic coding, complex refactoring, and end-to-end feature development directly from the terminal.",
  },
  {
    name: "Cursor",
    logo: "cursor",
    color: "#111111",        // light mode
    colorDark: "#FFFFFF",    // night mode
    badge: "Daily Driver",
    desc: "AI-native editor of choice. Used for in-editor code generation, intelligent refactoring, multi-file context edits, and real-time debugging — especially productive for Angular component work and backend API integration.",
  },
  {
    name: "Codex",
    logo: "codex",
    color: "#111827",        // light mode
    colorDark: "#F3F4F6",    // night mode
    badge: "AI Coding Agent",
    desc: "OpenAI's coding agent for exploring codebases, implementing features, and iterating on code changes.",
  },
  {
    name: "Gemini",
    logo: "googlegemini",
    color: "#4285F4",
    badge: "Cross-validation",
    desc: "Used to cross-check solutions and explore alternative implementations. Helpful for comparing different architectural approaches and validating responses from other tools before committing to a direction.",
  },
];

export const METRICS = [
  { value: "~25–40%", label: "Load time reduced", sub: "via lazy loading & API optimization" },
  { value: "~20–35%", label: "Bundle size cut", sub: "code splitting & tree shaking" },
  { value: "1k–10k+", label: "Users served", sub: "across internal & external apps" },
  { value: "4–10", label: "Team size", sub: "frontend, backend & QA engineers" },
  { value: "3–6", label: "Features/sprint", sub: "2-week sprints, consistently" },
  { value: "5+", label: "Years shipping", sub: "production-grade applications" },
];

export const TESTIMONIALS = [
  {
    quote: "His ability to turn complex requirements into clean, user-friendly interfaces was truly impressive. Atiar's professionalism, proactive communication, and collaborative spirit made him an invaluable part of every project we delivered. Any team would be fortunate to have his technical expertise and positive energy.",
    name: "MD. Monirujjaman",
    role: "Project Manager, Fintech (DFS Solutions – Retail, SME, AB), R&D, NLP & ML",
    company: "Giga Tech Ltd.",
    initials: "MM",
  },
];

export const CONTACT_LINKS = [
  { label: "Email", val: "nayeematiar@gmail.com", href: "mailto:nayeematiar@gmail.com", icon: "✉", external: false },
  { label: "GitHub", val: "github.com/atiar-gt", href: "https://github.com/atiar-gt", icon: "⌥", external: true },
  { label: "LinkedIn", val: "linkedin.com/in/atiar-rahman-nayeem", href: "https://www.linkedin.com/in/atiar-rahman-nayeem/", icon: "⬡", external: true },
  { label: "Phone", val: "+8801717580373", href: "tel:+8801717580373", icon: "☏", external: false },
];
