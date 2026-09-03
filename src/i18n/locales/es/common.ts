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
  language: {
    label: "Idioma",
    english: "Cambiar a inglés",
    spanish: "Cambiar a español",
  },
  home: {
    availability: "Disponible para nuevos proyectos — septiembre de 2026",
    name: "Santiago Rodríguez",
    role: "Desarrollador frontend",
    description:
      "Convierto requisitos de producto en interfaces claras y adaptables. Tengo experiencia en aplicaciones conectadas a APIs, flujos protegidos y procesos basados en roles. Me enfoco en una arquitectura frontend mantenible, las pruebas y experiencias de usuario cuidadas.",
    cta: "Iniciar un proyecto",
    portraitDescription: "Santiago Rodríguez con traje negro y corbata",
    metrics: {
      years: { value: "4+", label: "Años de desarrollo" },
      interfaces: { value: "30+", label: "Interfaces creadas" },
      lighthouse: { value: "100+", label: "APIs integradas" },
      location: { value: "Elche, España", label: "Remoto mundial" },
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
      "Mi enfoque es el desarrollo frontend con React y TypeScript, respaldado por conocimientos prácticos de tecnologías backend y de datos. Comprender cómo interactúa cada capa me ayuda a crear mejores integraciones y a tomar decisiones frontend más sólidas.",
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
      "Creo sistemas frontend en torno a necesidades operativas reales y convierto procesos complejos en experiencias claras y adaptadas a cada rol. Estos proyectos combinan interfaces reutilizables, integración fiable de APIs y validación rigurosa con conocimientos prácticos full-stack.",
    descriptionDetail:
      " Cada proyecto demuestra mis habilidades para crear experiencias de usuario sólidas y código optimizado.",
    mediaPlaceholder: "Imagen del proyecto",
    mediaLabel: "Lámina decorativa del proyecto {{title}}",
    technologiesLabel: "Tecnologías utilizadas en {{title}}",
    more: "+{{count}} más",
    actions: {
      code: "Ver código",
      project: "Ver proyecto",
      projectShort: "Proyecto",
    },
    items: {
      ecommerce: {
        title: "Autoparts Rausseo",
        description:
          "Procesos complejos de inventario y catálogo de productos transformados en experiencias digitales claramente definidas para clientes, operadores y administradores.",
      },
      blog: {
        title: "Artisanal Food Marketplace",
        description:
          "Un mercado digital que conecta el descubrimiento de productos y el pago con el inventario, la gestión de pedidos y la administración de cuentas para tres roles de usuario (Cliente, Vendedor, Administrador).",
      },
      tasks: {
        title: "Pharmacy Inventory Management",
        description:
          "Una aplicación basada en roles que centraliza productos, categorías, proveedores y usuarios en un único proceso estructurado de inventario.",
      },
    },
  },
  about: {
    eyebrow: "Acerca de mí",
    title: "Acerca de mí",
    titleLead: "Acerca de",
    titleAccent: "mí",
    description:
      "Soy un venezolano de 22 años a quien le encanta construir cosas desde la infancia. Ya sea para atender una necesidad cotidiana o un proceso empresarial complejo, disfruto convertir ideas en soluciones claras, útiles y tangibles, y crear interfaces útiles, cuidadas y fiables.",
    portraitDescription:
      "Retrato de Santiago Rodríguez con traje negro y corbata",
    facts: {
      education: {
        label: "Educación",
        value: "Título en Ingeniería de Sistemas de TI",
      },
      experience: {
        label: "Experiencia",
        value: "4+ años de desarrollo",
      },
      focus: {
        label: "Enfoque",
        value: "React · TypeScript · Conocimientos full-stack",
      },
    },
    actions: {
      contact: "Contactar",
      downloadCv: "Descargar CV",
      github: "GitHub",
      linkedin: "LinkedIn",
      external: "{{name}} (se abre en una pestaña nueva)",
    },
  },
  contact: {
    eyebrow: "Contacto",
    title: "Ponte en contacto",
    titleLead: "Ponte en",
    titleAccent: "contacto",
    about: {
      title: "Un poco sobre mí",
      biography:
        "Los grandes productos surgen de la colaboración entre el diseño, la ingeniería y las personas a las que sirven. Me gustaría unirme a un equipo en el que pueda transformar ideas bien concebidas en interfaces fiables, contribuir a las decisiones técnicas y ayudar a crear experiencias útiles.",
    },
    elsewhere: "Otros sitios",
    form: {
      title: "Envíame un mensaje",
      replyTime: "Suelo responder en un día laborable.",
      name: "Nombre",
      namePlaceholder: "Ana García",
      email: "Correo electrónico",
      emailPlaceholder: "ana@empresa.com",
      company: "Empresa / puesto",
      companyPlaceholder: "Desarrollador frontend en —",
      message: "Mensaje",
      messagePlaceholder: "Cuéntame brevemente sobre el puesto y el equipo.",
      submit: "Enviar mensaje",
      unavailable: "El formulario de contacto no está disponible.",
      emailInstead: "Escríbeme directamente a",
      trust: "Nada de lo que escribas aquí se almacena ni se envía.",
    },
    actions: {
      github: "GitHub",
      linkedin: "LinkedIn",
      downloadCv: "Descargar CV",
      email: "Correo electrónico",
      emailAvailable: "Escribir directamente",
      pending: "Aún no disponible",
      unavailable: "{{name}} no disponible",
    },
    availability: "Disponible para ofertas · Remoto o Madrid",
  },
} as const;
