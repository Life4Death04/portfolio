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
    cta: "Download resume",
    portraitDescription: "Santiago Rodríguez wearing a black suit and tie",
    metrics: {
      clients: { value: "+3", label: "Years of development" },
      screens: { value: "+200", label: "API-connected screens" },
      tests: { value: "+50", label: "End-to-end tests" },
      location: { value: "Spain", label: "Remote worldwide" },
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
    alsoWorkingWith: "Also working with",
    groups: {
      frontend: {
        title: "Frontend Technologies",
      },
      testingAndIntegration: {
        title: "Testing & Integration",
      },
      backendAndData: {
        title: "Backend & Data Technologies",
      },
      toolsAndDelivery: {
        title: "Tools & Delivery",
      },
      developmentApproach: {
        title: "Development Approaches",
        items: [
          "Agentic development workflows",
          "AI Coding Orchestration",
          "Specification-Driven Development (SDD)",
          "Test-Driven Development (TDD)",
          "Domain-Driven Design (DDD)",
          "Agile Methodologies",
          "Soft Systems Methodology (SSM)",
          "Requirement Analysis",
        ],
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
    mediaLabel: "Screenshot of {{title}}",
    technologiesLabel: "Technologies used in {{title}}",
    more: "+{{count}} more",
    actions: {
      code: "View code",
      demo: "Live demo",
      project: "View project",
      projectShort: "Project",
      demoShort: "Demo",
    },
    items: {
      productCatalog: {
        title: "Autoparts Rausseo",
        description:
          "Automotive catalog and administration platform for an auto parts store, helping teams manage parts and customers submit WhatsApp inquiries.",
      },
      inventoryManagement: {
        title: "Pharmacy Inventory Management",
        description:
          "Inventory system built for HighMeds Pharmacy, helping pharmacy teams manage products, suppliers, stock levels, alerts, and replenishment needs.",
      },
      ecommerce: {
        title: "Artisanal Food Marketplace",
        description:
          "Final university project: a multi-vendor marketplace that organizes product orders, secure payments, and role-based workflows for sellers, buyers, and administrators.",
      },
    },
  },
  about: {
    eyebrow: "About",
    title: "About Me",
    titleLead: "About",
    titleAccent: "Me",
    description:
      "I’m a Venezuelan developer driven by the challenge of turning real problems into clear, useful digital solutions. I combine thoughtful frontend engineering with a broader understanding of systems, allowing me to build experiences that are intuitive for users, reliable in practice, and grounded in genuine business needs.",
    portraitDescription:
      "Portrait of Santiago Rodríguez wearing a black suit and tie",
    facts: {
      education: {
        label: "Education",
        value: "IT Systems Engineer",
      },
      experience: {
        label: "Current role",
        value: "Frontend Developer",
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
      subject: "Portfolio inquiry",
      mailClient: "Submitting opens your email app to write to",
      trust: "This site does not store the information you enter.",
    },
    actions: {
      github: "GitHub",
      linkedin: "LinkedIn",
      downloadCv: "Download CV",
      email: "Email",
      emailAvailable: "Write directly",
      profileAvailable: "View profile",
      resumeAvailable: "Download PDF",
      external: "{{name}} (opens in a new tab)",
    },
    availability: "Open to offers · Remote or Madrid",
  },
} as const;
