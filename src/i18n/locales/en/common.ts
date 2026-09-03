export const en = {
  site: {
    name: "Santiago Rodríguez",
  },
  navigation: {
    label: "Primary navigation",
    index: "Index",
    skills: "Skills",
    work: "Work",
    about: "About",
    contact: "Get in touch",
    menu: "Menu",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
  },
  language: {
    label: "Language",
    english: "Switch to English",
    spanish: "Switch to Spanish",
  },
  home: {
    availability: "Available for new work — September 2026",
    name: "Santiago Rodríguez",
    role: "Frontend developer",
    description:
      "I turn product requirements into clear, responsive interfaces. Experienced in API-connected applications, protected flows and role-based workflows. Focused on maintainable frontend architecture, testing, and polished user experiences.",
    cta: "Start a project",
    portraitDescription: "Santiago Rodríguez wearing a black suit and tie",
    metrics: {
      years: { value: "4+", label: "Years developing" },
      interfaces: { value: "30+", label: "Interfaces built" },
      lighthouse: { value: "100+", label: "APIs integrated" },
      location: { value: "Elche, Spain", label: "Remote worldwide" },
    },
    actions: {
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
      external: "{{name}} (opens in a new tab)",
    },
  },
  skills: {
    eyebrow: "Capabilities",
    title: "Technical Skills",
    titleLead: "Technical",
    titleAccent: "Skills",
    description:
      "My focus is frontend development with React and TypeScript, supported by working knowledge of backend and data technologies. Understanding how every layer interacts helps me build better integrations and make stronger frontend decisions.",
    toolsLabel: "Tools and technologies",
    groups: {
      frontend: {
        title: "Frontend Technologies",
      },
      backend: {
        title: "Backend Technologies",
      },
      tools: {
        title: "Tools & Software",
      },
    },
    learning: {
      label: "Currently learning",
      description: "Exploring new technologies…",
    },
  },
  projects: {
    eyebrow: "Selected work",
    title: "My Projects",
    titleLead: "My",
    titleAccent: "Projects",
    descriptionLead:
      "I build frontend systems around real operational needs, turning complex workflows into clear, role-aware experiences. These projects combine reusable interfaces, reliable API integration, and disciplined validation with practical full-stack awareness.",
    descriptionDetail:
      " Each project is a demonstration of my skills in creating solid user experiences and optimized code.",
    mediaPlaceholder: "Project shot",
    mediaLabel: "Decorative case-study plate for {{title}}",
    technologiesLabel: "Technologies used in {{title}}",
    more: "+{{count}} more",
    actions: {
      code: "View code",
      project: "View project",
      projectShort: "Project",
    },
    items: {
      ecommerce: {
        title: "Autoparts Rausseo",
        description:
          "Complex inventory and product-catalog workflows transformed into clearly defined digital experiences for customers, operators, and administrators.",
      },
      blog: {
        title: "Artisanal Food Marketplace",
        description:
          "A digital marketplace connecting product discovery and checkout with inventory, fulfillment, and account management across three user roles (Customer, Seller, Admin).",
      },
      tasks: {
        title: "Pharmacy Inventory Management",
        description:
          "A role-based application that centralizes products, categories, suppliers, and users into one structured inventory workflow.",
      },
    },
  },
  about: {
    eyebrow: "About",
    title: "About Me",
    titleLead: "About",
    titleAccent: "Me",
    description:
      "I’m a 22-year-old Venezuelan who has loved building things since childhood. Whether addressing an everyday need or a complex business process, I enjoy turning ideas into clear, useful, and tangible solutions and creating interfaces that are useful, thoughtful, and reliable.",
    portraitDescription:
      "Portrait of Santiago Rodríguez wearing a black suit and tie",
    facts: {
      education: {
        label: "Education",
        value: "IT Systems Engineering Degree",
      },
      experience: {
        label: "Experience",
        value: "4+ Years Development",
      },
      focus: {
        label: "Focus",
        value: "React · TypeScript · Full-stack awareness",
      },
    },
    actions: {
      contact: "Get in touch",
      downloadCv: "Download CV",
      github: "GitHub",
      linkedin: "LinkedIn",
      external: "{{name}} (opens in a new tab)",
    },
  },
  contact: {
    eyebrow: "Contact",
    title: "Get in touch",
    titleLead: "Get in",
    titleAccent: "Touch",
    about: {
      title: "A bit about me",
      biography:
        "Great products come from collaboration between design, engineering, and the people they serve. I’d love to join a team where I can transform thoughtful ideas into dependable interfaces, contribute to technical decisions, and help deliver useful experiences.",
    },
    elsewhere: "Elsewhere",
    form: {
      title: "Send me a message",
      replyTime: "I usually reply within one working day.",
      name: "Your name",
      namePlaceholder: "Jane Doe",
      email: "Email",
      emailPlaceholder: "jane@company.com",
      company: "Company / role",
      companyPlaceholder: "Frontend developer at —",
      message: "Message",
      messagePlaceholder: "A few lines about the role and the team.",
      submit: "Send message",
      unavailable: "Contact form unavailable.",
      emailInstead: "Email me directly at",
      trust: "Nothing entered here is stored or sent.",
    },
    actions: {
      github: "GitHub",
      linkedin: "LinkedIn",
      downloadCv: "Download CV",
      email: "Email",
      emailAvailable: "Write directly",
      pending: "Not yet available",
      unavailable: "{{name}} unavailable",
    },
    availability: "Open to offers · Remote or Madrid",
  },
} as const;
