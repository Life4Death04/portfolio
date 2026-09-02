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
  home: {
    availability: "Available for new work — September 2026",
    name: "Santiago Rodríguez",
    role: "Frontend developer",
    description:
      "I build product interfaces for teams that care about the last five percent. React and TypeScript, with a stubborn interest in performance, motion and accessibility.",
    cta: "Start a project",
    portraitDescription: "Santiago Rodríguez wearing a black suit and tie",
    metrics: {
      years: { value: "6", label: "Years shipping" },
      interfaces: { value: "30+", label: "Interfaces built" },
      lighthouse: { value: "98", label: "Avg. Lighthouse" },
      location: { value: "Madrid", label: "Remote worldwide" },
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
      "My experience spans the most in-demand tools in the web ecosystem. I'm prepared to work in Frontend and Backend development environments, with a focus on quality and performance.",
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
      "A selection of my most relevant work, where I apply my expertise in React.js, Node.js and databases to transform ideas into functional products.",
    descriptionDetail:
      " Each project is a demonstration of my skills in creating solid user experiences and optimized code.",
    mediaPlaceholder: "Project shot",
    mediaLabel: "Project shot placeholder for {{title}}",
    technologiesLabel: "Technologies used in {{title}}",
    more: "+{{count}} more",
    actions: {
      code: "View code",
      project: "View project",
      projectShort: "Project",
    },
    items: {
      ecommerce: {
        title: "E-commerce Platform with Stripe",
        description:
          "Real-time inventory management system built with TypeScript and Prisma ORM.",
      },
      blog: {
        title: "Dynamic Content Blog",
        description: "Dynamic content blog implemented with React and Express.",
      },
      tasks: {
        title: "Task Management App",
        description:
          "Collaborative task management application with real-time updates.",
      },
    },
  },
  about: {
    eyebrow: "About",
    title: "About Me",
    titleLead: "About",
    titleAccent: "Me",
    description:
      "I'm a passionate full-stack developer with experience in modern web technologies. I love creating efficient, scalable, and user-friendly applications.",
    portraitDescription:
      "Portrait of Santiago Rodríguez wearing a black suit and tie",
    facts: {
      education: {
        label: "Education",
        value: "Systems Engineering Student",
      },
      experience: {
        label: "Experience",
        value: "2+ Years Development",
      },
      focus: {
        label: "Focus",
        value: "Full-stack · React · Node.js",
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
    title: "Get in Touch",
    titleLead: "Get in",
    titleAccent: "Touch",
    portraitDescription: "Portrait placeholder for Santiago Rodríguez",
    portraitLabel: "Portrait / 4:5",
    figureLabel: "Fig. 03",
    note: "I read every message and usually reply within a day. Tell me about the role, the team and the stack — or just say hello.",
    elsewhere: "Elsewhere",
    form: {
      title: "Send me a message",
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
    },
    actions: {
      github: "GitHub",
      linkedin: "LinkedIn",
      downloadCv: "Download CV",
      pending: "Not yet available",
      unavailable: "{{name}} unavailable",
    },
    availability: "Open to offers · Remote or Madrid",
  },
} as const;
