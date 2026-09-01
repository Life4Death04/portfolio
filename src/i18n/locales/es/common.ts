export const es = {
  site: {
    name: "Santiago Rodríguez",
  },
  navigation: {
    label: "Navegación principal",
    index: "Inicio",
    skills: "Habilidades",
    work: "Proyectos",
    about: "Acerca de mí",
    contact: "Contactar",
    menu: "Menú",
    openMenu: "Abrir menú de navegación",
    closeMenu: "Cerrar menú de navegación",
  },
  home: {
    availability: "Disponible para nuevos proyectos — septiembre de 2026",
    name: "Santiago Rodríguez",
    role: "Desarrollador frontend",
    description:
      "Creo interfaces de producto para equipos que cuidan hasta el último detalle. React y TypeScript, con un interés constante por el rendimiento, el movimiento y la accesibilidad.",
    cta: "Iniciar un proyecto",
    portraitDescription:
      "Marcador de retrato con patrón para Santiago Rodríguez",
    portraitLabel: "retrato / 4:5",
    portraitCaption: "Fig. 01 — Santiago, 2026",
    metrics: {
      years: { value: "6", label: "Años creando" },
      interfaces: { value: "30+", label: "Interfaces creadas" },
      lighthouse: { value: "98", label: "Prom. Lighthouse" },
      location: { value: "Madrid", label: "Remoto mundial" },
    },
    actions: {
      email: "Correo electrónico",
      github: "GitHub",
      linkedin: "LinkedIn",
      external: "{{name}} (se abre en una pestaña nueva)",
    },
  },
  skills: {
    eyebrow: "Capacidades",
    title: "Habilidades técnicas",
    titleLead: "Habilidades",
    titleAccent: "técnicas",
    description:
      "Mi experiencia abarca las herramientas más demandadas del ecosistema web. Estoy preparado para trabajar en entornos de desarrollo frontend y backend, con un enfoque en la calidad y el rendimiento.",
    toolsLabel: "Herramientas y tecnologías",
    groups: {
      frontend: {
        title: "Tecnologías frontend",
      },
      backend: {
        title: "Tecnologías backend",
      },
      tools: {
        title: "Herramientas y software",
      },
    },
    learning: {
      label: "Actualmente aprendiendo",
      description: "Explorando nuevas tecnologías…",
    },
  },
  projects: {
    eyebrow: "Trabajo seleccionado",
    title: "Mis proyectos",
    titleLead: "Mis",
    titleAccent: "proyectos",
    descriptionLead:
      "Una selección de mis trabajos más relevantes, donde aplico mi experiencia en React.js, Node.js y bases de datos para transformar ideas en productos funcionales.",
    descriptionDetail:
      " Cada proyecto demuestra mis habilidades para crear experiencias de usuario sólidas y código optimizado.",
    mediaPlaceholder: "Imagen del proyecto",
    mediaLabel: "Marcador de imagen del proyecto {{title}}",
    technologiesLabel: "Tecnologías utilizadas en {{title}}",
    more: "+{{count}} más",
    actions: {
      code: "Ver código",
      project: "Ver proyecto",
      projectShort: "Proyecto",
    },
    items: {
      ecommerce: {
        title: "Plataforma de comercio electrónico con Stripe",
        description:
          "Sistema de gestión de inventario en tiempo real creado con TypeScript y Prisma ORM.",
      },
      blog: {
        title: "Blog de contenido dinámico",
        description:
          "Blog de contenido dinámico implementado con React y Express.",
      },
      tasks: {
        title: "Aplicación de gestión de tareas",
        description:
          "Aplicación colaborativa de gestión de tareas con actualizaciones en tiempo real.",
      },
    },
  },
} as const;
