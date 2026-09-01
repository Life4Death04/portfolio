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
    portraitDescription:
      "Patterned portrait placeholder for Santiago Rodríguez",
    portraitLabel: "portrait / 4:5",
    portraitCaption: "Fig. 01 — Santiago, 2026",
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
} as const;
