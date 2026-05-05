(function () {
  var k = "portfolio-theme";
  var v = localStorage.getItem(k);
  var t =
    v === "light" || v === "dark"
      ? v
      : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
  document.documentElement.setAttribute("data-theme", t);
  document.documentElement.style.colorScheme = t === "dark" ? "dark" : "light";
})();

(function () {
  "use strict";

  var SUPPORTED = { en: true, es: true, de: true };

  function normalizeLang(tag) {
    if (!tag || typeof tag !== "string") return "";
    return tag.split("-")[0].toLowerCase();
  }

  function resolveLocale() {
    var list = navigator.languages;
    if (!list || !list.length) {
      list = [navigator.language || "en"];
    }
    for (var i = 0; i < list.length; i++) {
      var base = normalizeLang(list[i]);
      if (SUPPORTED[base]) return base;
    }
    return "en";
  }

  var locale = resolveLocale();

  var STR = {
    en: {
      doc: {
        title: "Gabriel Clemente, full-stack JS/TS engineer | Zürich",
        description:
          "Self-taught full-stack dev (TypeScript, React, Node). I've shipped UI, APIs, and integrations in healthtech, cybersecurity SaaS, and client work. Swiss B permit. Static-first portfolio. Open to Zürich, Zug, or EU remote.",
      },
      a11y: { newTab: " (opens in new tab)", opensResume: " (opens résumé in new tab)" },
      skip: { content: "Skip to content" },
      print: {
        banner:
          "<strong>Gabriel Clemente</strong>. Full-stack developer (TypeScript / JavaScript). Zürich, Swiss B permit through 2030. Available 2026. Static-first, minimal JS site.",
      },
      intro: {
        ariaLabel: "Portfolio introduction",
        skip: "Skip intro",
        skipAria: "Skip introduction and go to portfolio content",
        help:
          "Press Start for a brief animated overview of toolkit categories. Optional background music may play. Press Escape or Skip intro to dismiss.",
        start: "Start",
        startAria: "Start the animated intro; background music may play if your device allows it",
        announceSection: "Section: ",
        announceTech: "Technology: ",
        announceTechEmpty: "Technology. ",
        welcomeLive: "Hi, Gabriel Clemente. Welcome to my portfolio.",
        finalName: "Hi, I'm Gabriel Clemente",
        finalTag: "Welcome to my portfolio",
      },
      nav: {
        aria: "In-page sections",
        summary: "Summary",
        impact: "Impact",
        experience: "Experience",
        stack: "Stack",
        work: "Work",
        education: "Education",
        faq: "FAQ",
        contact: "Contact",
      },
      theme: { switchDark: "Switch to dark theme", switchLight: "Switch to light theme" },
      section: {
        summary: "Overview",
        impact: "In short",
        experience: "Roles",
        stack: "Toolkit",
        work: "Shipped",
        recommend: "From a client",
        recommendManager: "From a manager",
        languages: "Communication",
        education: "Background",
        faq: "Recruiters & search",
      },
      hero: {
        title:
          '<span class="type-mix__hit">Full-stack</span> software engineer, <span class="type-mix__hit">JavaScript</span> / <span class="type-mix__hit">TypeScript</span>',
        meta:
          'Zürich, Switzerland<br /><span class="permit type-mix"><span class="type-mix__hit">Swiss B permit</span> through 2030. No Swiss sponsorship needed for employers.</span>',
        targetRole:
          'Targeting: <span class="type-mix__hit">Full-stack developer</span> roles: product UI, APIs, and integrations (<span class="type-mix__hit">TypeScript</span> / <span class="type-mix__hit">JavaScript</span>).',
        availability:
          '<span class="type-mix__hit">Open to full-time</span> or long-term contract from <strong>2026</strong>. Zürich, Zug, or compliant EU remote.',
      },
      contactList: {
        aria: "Contact methods and profiles",
        caseStudies: "Case studies",
        resume: "Résumé (PDF)",
      },
      lede:
        'I build full-stack product work: UIs, APIs, integrations, and whatever keeps things running in production. Self-taught since 2019 (one year of CS at BYU Idaho, then I left to ship real stuff). Since then I\'ve worked on a <strong>telehealth</strong> stack (Angular, React Native, Node, Postgres, AWS), an <strong>enterprise threat-modeling</strong> UI (React, TanStack Query, Zustand, Vitest), and now <strong>freelance engineering</strong> at GABO: client launches, automation, and public tooling. I write code the next person can read and systems that don\'t fall over in prod. New stack? I\'ll learn it.',
      impact: {
        heading: "Impact",
        li1:
          "<strong>4+ years</strong> shipping JavaScript/TypeScript products for real users (B2B, regulated, consumer-facing).",
        li2:
          "<strong>10+</strong> client and product initiatives, from marketing sites to integration-heavy workflows.",
        li3:
          "<strong>Beyondbmi:</strong> Telehealth SaaS work across scheduling, video, clinical flows, and integrations. Built vitals UI with Chart.js (weight, BP, related signals) and multi-step appointment reminders (email + SMS at 24h, 6h, and 1h before visits)—<strong>targeting the no-show and under-utilized slot problem</strong> scheduled care teams routinely optimize for, without a post-launch metric I was given. Learned Angular on the job; <strong>first production MR in week one</strong>; ~1 month solo ownership (production DB, critical bugs, releases). Shipped until budgets tightened near a milestone.",
        li4:
          "<strong>IriusRisk:</strong> <strong>20+</strong> React components (Ant Design, TanStack Query, Zustand); <strong>100+</strong> production fixes over ~6 months. Helped deliver a <strong>domain-pages redesign</strong> for clearer IA and workflow UX. <strong>2nd place</strong> company hackathon.",
        li5:
          "<strong>GABO (current):</strong> Puto Pulse at <strong>500+</strong> subscribers; arturorodes.com (Astro, Alpine, GSAP). <strong>frontend-auto-cms</strong> on npm—guardrailed, repo-backed copy workflow for clients; <strong>2.5k+</strong> downloads in a recent 12-month window on the public registry.",
      },
      experience: { heading: "Experience" },
      jobs: {
        gaboFounder: {
          title: '<span class="type-mix__hit">Freelance</span> software engineer',
          meta: '<time datetime="2025-10">Oct 2025</time> to present',
          company: "GABO LLC, Switzerland, remote",
          li1:
            "Client delivery and owned products: Puto Pulse (newsletter + automation), integrations (email/social), and open-source npm tooling.",
          li2:
            "Shipped arturorodes.com (Astro, Alpine.js, GSAP) and client editorial workflows with frontend-auto-cms—guardrailed, repo-backed content changes.",
          li3:
            "frontend-auto-cms is verifiable on the public npm registry (2.5k+ downloads in a recent 12-month span); I still own code through production.",
        },
        irius: {
          title: '<span class="type-mix__hit">Frontend</span> developer',
          meta:
            '<time datetime="2024-10">Oct 2024</time> to <time datetime="2025-10">Oct 2025</time>',
          company: "IriusRisk, Huesca, Spain (remote)",
          li1:
            "Enterprise threat-modeling product UI: React, TypeScript, Ant Design, TanStack Query, Zustand, SASS, Vitest.",
          li2:
            "PR review, backend API collaboration, and production support in a regulated, audit-sensitive context.",
          li3:
            "Contributed to a domain-pages redesign (navigation, layout, workflow clarity). 2nd place company-wide hackathon; steady shipping on a high-complexity surface.",
        },
        independent: {
          title: '<span class="type-mix__hit">Independent</span> build period',
          meta: '<time datetime="2024-04">Apr 2024</time> to <time datetime="2024-10">Oct 2024</time>',
          company: "Self-directed, remote",
          li1:
            "Full-time search window with continuous delivery: public repos, portfolio-ready projects, and interview artifacts—no long idle stretch.",
          li2:
            "Kept a shipping rhythm (small releases, readable commits, docs) so hiring conversations could point to real, recent work.",
        },
        beyond: {
          title: '<span class="type-mix__hit">Full-stack</span> engineer',
          meta: '<time datetime="2022-11">Nov 2022</time> to <time datetime="2024-04">Apr 2024</time>',
          company: "Beyondbmi, Dublin, Ireland (remote)",
          li1:
            "Telehealth SaaS: Angular, TypeScript, Express, TypeORM, Postgres, React Native, AWS (incl. Lambda), Stripe, messaging/automation.",
          li2:
            "Learned Angular from zero; first merge request in week one; ~1 month solo ownership while senior was away (production DB, critical bugs, releases).",
          li3:
            "Delivered scheduling, video, clinical flows, and integrations. Built vitals tracking with Chart.js (weight, blood pressure, related data) and appointment reminders via email + SMS (24h, 6h, 1h pre-visit), aimed at reducing missed visits and wasted clinical time—the outcome that class of feature is built for. Engagement ended when budgets tightened near a milestone.",
        },
        solo: {
          title: '<span class="type-mix__hit">Solo</span> full-stack developer',
          meta: '<time datetime="2021-08">Aug 2021</time> to <time datetime="2022-11">Nov 2022</time>',
          company: "GABO, Spain / self-employed, mostly remote",
          li1:
            "SMB and startup delivery: marketing sites, ecommerce, SEO; greenfield JavaScript through WordPress, PHP, and third-party integrations.",
          li2: "Futuria / Digital Kit: Rehubik automation (forms, SQL, Odoo, Zapier, APIs, Python, Google Apps Script).",
          li3: "Engagements through València accelerators; US entity for straightforward international contracting.",
        },
        uiDesigner: {
          title: '<span class="type-mix__hit">UI</span> designer',
          meta: '<time datetime="2022-07">Jul 2022</time> to <time datetime="2022-08">Aug 2022</time>',
          company: "talenTeal, Valencia, Spain (on-site)",
          li1:
            "Landing page redesign end to end: clearer information hierarchy, stronger calls to action, and accessibility-minded UI for a B2B marketing surface.",
          li2:
            "Reordered content blocks so primary actions and trust signals surfaced earlier—execution focused on funnel clarity, not post-launch analytics I could access.",
        },
        lujo: {
          title: '<span class="type-mix__hit">Technical</span> support specialist',
          meta: '<time datetime="2022-02">Feb 2022</time> to <time datetime="2022-03">Mar 2022</time>',
          company: "Lujo Network, Valencia, Spain (hybrid)",
          li1:
            "Hardened operational footprint: secure sign-in paths, firewall rules, backups; engineered migration from Google Sheets into a proper database.",
          li2:
            "Supported website updates with stakeholders and ran practical security walkthroughs so non-technical teammates could follow baseline practices.",
        },
      },
      stack: {
        heading: "Core stack",
        frontend: "Frontend",
        backend: "Backend & APIs",
        data: "Data & platform",
        quality: "Quality & delivery",
        more:
          'Also used: <span class="type-mix__hit">React Native</span>, WordPress, PHP, <span class="type-mix__hit">Python</span>, Laravel, Playwright, Tauri, Svelte, Zapier, Google Apps Script, Odoo, and more. Ask if you want detail on any of that.',
      },
      work: {
        heading: "Selected work",
        arturo:
          'Salary negotiation coach site and a client-owned CMS workflow. Live at <a href="https://arturorodes.com" target="_blank" rel="noopener noreferrer">arturorodes.com<span class="visually-hidden" data-i18n-placeholder="a11y.newTab"></span></a>.',
        puto:
          'Newsletter and automation, <strong>500+</strong> subscribers. <a href="https://putopulse.org" target="_blank" rel="noopener noreferrer">putopulse.org<span class="visually-hidden" data-i18n-placeholder="a11y.newTab"></span></a>',
        cms:
          'Turn a frontend into a guardrailed, repo-backed CMS (<code>npm i frontend-auto-cms</code>). <strong>2.5k+</strong> npm downloads in a recent 12-month window (public registry). <a href="https://github.com/Gabo-Tech/frontend-auto-cms" target="_blank" rel="noopener noreferrer">GitHub<span class="visually-hidden" data-i18n-placeholder="a11y.newTab"></span></a>, <a href="https://www.npmjs.com/package/frontend-auto-cms" target="_blank" rel="noopener noreferrer">npm<span class="visually-hidden" data-i18n-placeholder="a11y.newTab"></span></a>.',
        chatgpt:
          'Native-feel desktop for Linux (Tauri + JS) where the official installers skip Linux. <a href="https://github.com/Gabo-Tech/ChatGPT-Multiplatform-Desktop-Wrapper" target="_blank" rel="noopener noreferrer">GitHub<span class="visually-hidden" data-i18n-placeholder="a11y.newTab"></span></a>.',
        beyondCase:
          'Telehealth product work: scheduling, vitals charts (Chart.js), and multi-step appointment reminders (email/SMS)—aimed at missed-visit risk and utilization—plus video sessions and integration-heavy flows across <strong>Angular</strong>, <strong>React Native</strong>, Node, Postgres, and <strong>AWS</strong>.',
        iriusCase:
          'Enterprise <strong>threat-modeling</strong> UI in a regulated context: complex React surface; contributed to a domain-pages redesign (Ant Design, TanStack Query, Zustand, Vitest).',
        moreStudiesLabel: "More case studies",
        moreStudiesCollapse: "Collapse list",
        caseStudiesMore:
          'Other shipped projects—including learning builds and tooling—listed below.',
        caseStudyExpand: "Expand case study",
        caseStudyCollapse: "Collapse case study",
        loadProjectsError: "Could not load project list. Reload the page or try again later.",
      },
      recommend: {
        heading: "Recommendations",
        cite: "Arturo Rodés, Product Manager (client, arturorodes.com)",
        quote2:
          "&ldquo;Working with Gabriel was a pleasure. He is a really hard-working dedicated guy who is always keen to learn something new and looking to do things better. His attitude is something commendable in the sense that he looks for solutions in different sources with a very proactive mindset and always looking for long-term solutions.&rdquo;",
        cite2: "Ciro Vivacqua, CTO & Enterprise Architect, Beyondbmi (managed Gabriel directly)",
        more:
          'More on gabo.rocks<span class="visually-hidden" data-i18n-placeholder="a11y.newTab"></span><span aria-hidden="true"> &rarr;</span>',
      },
      languages: {
        heading: "Languages",
        li1:
          "<strong>English</strong>, <strong>Spanish</strong>, <strong>Valencian</strong> (all native).",
        li2: "<strong>Dutch</strong>: full professional fluency.",
        li3: "<strong>Portuguese</strong>: fluent.",
        li4: "<strong>German</strong>: learning, aiming for day-to-day in Switzerland.",
        li5: "Default for work: <strong>English</strong>.",
      },
      education: {
        heading: "Education & path",
        li1:
          "<strong>Self-taught path</strong>, 2019 to now: left uni after a year to ship real products; still learning on the job.",
        li2: "<strong>CS</strong>, BYU Idaho (2020 to 2021), then into full-time work.",
        li3: "<strong>Full-stack web (MERN)</strong> bootcamp at CEU Cardenal Herrera, Apr to Jul 2022.",
        li4:
          "<strong>Short courses</strong>: DevOps and cybersecurity management (Charles Sturt), 2021 and 2022.",
      },
      faq: {
        heading: "Common questions",
        qWho: "Who is Gabriel Clemente?",
        qPermit: "What is Gabriel Clemente's work authorization in Switzerland?",
        qTech: "What technologies does Gabriel Clemente emphasize?",
        qVerify: "Where can recruiters verify projects and publications?",
        qBuild: "How is this portfolio site built?",
        qContact: "How do recruiters or clients contact Gabriel?",
        aWho:
          "Gabriel Clemente is a full-stack software engineer specializing in JavaScript and TypeScript. He builds product UIs, APIs, integrations, and production operations. His recent roles include freelance engineering at GABO (Switzerland), frontend development at IriusRisk (regulated threat-modeling software), full-stack engineering at Beyondbmi (telehealth), and SMB work under GABO. He holds a Swiss B residence permit valid through 2030 and is based in Zürich.",
        aPermit:
          "He is based in Zürich, Switzerland, holds a Swiss B permit through 2030, and communicates on this site that Swiss employers typically do not need to sponsor him. He seeks roles in Zürich, Zug, or compliant EU-remote arrangements depending on jurisdiction.",
        aTech:
          'Core production experience includes React, TypeScript and JavaScript across web and native; Angular from telehealth SaaS work; Node.js and Express backends; Postgres and tooling such as TanStack Query, Zustand, Ant Design, Docker, Cypress, Vitest, and CI with GitHub Actions. He publishes npm tooling including <a href="https://www.npmjs.com/package/frontend-auto-cms" target="_blank" rel="noopener noreferrer">frontend-auto-cms<span class="visually-hidden" data-i18n-placeholder="a11y.newTab"></span></a>.',
        aBuild:
          "Static-first HTML and CSS with minimal JavaScript: localized copy, theme toggle, optional intro sequence, and scroll helpers. No heavy client framework on this page.",
        aVerify:
          'See selected work on <a href="https://www.gabo.rocks/" target="_blank" rel="noopener noreferrer">gabo.rocks<span class="visually-hidden" data-i18n-placeholder="a11y.newTab"></span></a>; case studies are in the <a href="#work">Selected work</a> section, with code on GitHub at <a href="https://github.com/Gabo-Tech" target="_blank" rel="noopener noreferrer">github.com/Gabo-Tech<span class="visually-hidden" data-i18n-placeholder="a11y.newTab"></span></a>, the npm package <a href="https://www.npmjs.com/package/frontend-auto-cms" target="_blank" rel="noopener noreferrer">frontend-auto-cms<span class="visually-hidden" data-i18n-placeholder="a11y.newTab"></span></a> and live shipped sites such as <a href="https://arturorodes.com" target="_blank" rel="noopener noreferrer">arturorodes.com<span class="visually-hidden" data-i18n-placeholder="a11y.newTab"></span></a> and <a href="https://putopulse.org" target="_blank" rel="noopener noreferrer">putopulse.org<span class="visually-hidden" data-i18n-placeholder="a11y.newTab"></span></a> linked from this portfolio.',
        aContact:
          'Email <a href="mailto:sendmessage@gabo.email">sendmessage@gabo.email</a> or telephone <a href="tel:+41767331655">+41&nbsp;76&nbsp;733&nbsp;16&nbsp;55</a>. His résumé PDF is linked from the <a href="https://www.gabo.rocks/" target="_blank" rel="noopener noreferrer">gabo.rocks<span class="visually-hidden" data-i18n-placeholder="a11y.newTab"></span></a> footer and longer-form pages include <a href="https://portfolio.gabo.rocks/" target="_blank" rel="noopener noreferrer">portfolio.gabo.rocks<span class="visually-hidden" data-i18n-placeholder="a11y.newTab"></span></a>.',
      },
      footer: {
        lead: '<span class="type-mix__hit">Available 2026</span>, Zürich, Zug, EU remote',
        resume: "Download résumé (PDF)",
        email: "Email me",
        storyBefore: "Want the longer story?",
      },
    },
    es: {
      doc: {
        title: "Gabriel Clemente, ingeniero full-stack JS/TS | Zúrich",
        description:
          "Desarrollador full-stack autodidacta (TypeScript, React, Node). He entregado UI, APIs e integraciones en salud digital, ciberseguridad SaaS y proyectos de clientes. Permiso B suizo. Portafolio static-first. Abierto a Zúrich, Zug o remoto en la UE conforme a normativa.",
      },
      a11y: { newTab: " (se abre en una pestaña nueva)", opensResume: " (abre el CV en una pestaña nueva)" },
      skip: { content: "Ir al contenido" },
      print: {
        banner:
          "<strong>Gabriel Clemente</strong>. Desarrollador full-stack (TypeScript / JavaScript). Zúrich, permiso B suizo hasta 2030. Disponible 2026. Sitio static-first con JavaScript mínimo.",
      },
      intro: {
        ariaLabel: "Introducción del portafolio",
        skip: "Saltar intro",
        skipAria: "Saltar la introducción e ir al contenido del portafolio",
        help:
          "Pulse Empezar para una breve intro animada del stack. Puede sonar música de fondo. Pulse Escape o Saltar intro para cerrar.",
        start: "Empezar",
        startAria: "Iniciar la intro animada; puede sonar música de fondo si el dispositivo lo permite",
        announceSection: "Sección: ",
        announceTech: "Tecnología: ",
        announceTechEmpty: "Tecnología. ",
        welcomeLive: "Hola, Gabriel Clemente. Bienvenido a mi portafolio.",
        finalName: "Hola, soy Gabriel Clemente",
        finalTag: "Bienvenido a mi portafolio",
      },
      nav: {
        aria: "Secciones de la página",
        summary: "Resumen",
        impact: "Impacto",
        experience: "Experiencia",
        stack: "Stack",
        work: "Trabajos",
        education: "Formación",
        faq: "FAQ",
        contact: "Contacto",
      },
      theme: { switchDark: "Cambiar a tema oscuro", switchLight: "Cambiar a tema claro" },
      section: {
        summary: "Panorama",
        impact: "En breve",
        experience: "Roles",
        stack: "Herramientas",
        work: "Entregado",
        recommend: "De un cliente",
        recommendManager: "De un manager",
        languages: "Comunicación",
        education: "Formación",
        faq: "Reclutadores y búsqueda",
      },
      hero: {
        title:
          'Ingeniero de software <span class="type-mix__hit">full-stack</span>, <span class="type-mix__hit">JavaScript</span> / <span class="type-mix__hit">TypeScript</span>',
        meta:
          'Zúrich, Suiza<br /><span class="permit type-mix"><span class="type-mix__hit">Permiso B suizo</span> hasta 2030. Los empleadores en Suiza normalmente no necesitan patrocinio para contratarme.</span>',
        targetRole:
          'Busco roles de <span class="type-mix__hit">desarrollador full-stack</span>: UI de producto, APIs e integraciones (<span class="type-mix__hit">TypeScript</span> / <span class="type-mix__hit">JavaScript</span>).',
        availability:
          '<span class="type-mix__hit">Abierto a jornada completa</span> o contrato largo desde <strong>2026</strong>. Zúrich, Zug o remoto UE conforme a normativa.',
      },
      contactList: { aria: "Contacto y perfiles", caseStudies: "Casos de estudio", resume: "CV (PDF)" },
      lede:
        'Construyo producto full-stack: interfaces, APIs, integraciones y lo que haga falta para que siga funcionando en producción. Autodidacta desde 2019 (un año de informática en BYU Idaho; luego me fui a construir cosas reales). Desde entonces he trabajado en un stack de <strong>telesalud</strong> (Angular, React Native, Node, Postgres, AWS), en una UI de <strong>modelado de amenazas enterprise</strong> (React, TanStack Query, Zustand, Vitest), y ahora en <strong>ingeniería freelance</strong> en GABO: lanzamientos para clientes, automatización y herramientas públicas. Escribo código que el siguiente pueda leer y sistemas que no caigan en prod. ¿Stack nuevo? Lo aprendo.',
      impact: {
        heading: "Impacto",
        li1:
          "<strong>Más de 4 años</strong> entregando productos JavaScript/TypeScript para usuarios reales (B2B, regulado, consumer).",
        li2:
          "<strong>Más de 10</strong> iniciativas de cliente y producto, desde webs de marketing hasta flujos con muchas integraciones.",
        li3:
          "<strong>Beyondbmi:</strong> Telesalud: agenda, vídeo, flujos clínicos e integraciones. UI de constantes vitales con Chart.js (peso, TA, señales relacionadas) y recordatorios por etapas (email + SMS a 24h, 6h y 1h antes)—<strong>orientados al problema de inasistencias y franjas vacías</strong> que los equipos de cita suelen optimizar, sin una métrica post‑lanzamiento que me compartieran. Aprendí Angular sobre la marcha; <strong>primer MR en producción en la primera semana</strong>; ~1 mes a solas (BD en prod, bugs críticos, releases). Entrega hasta un cierre por presupuesto cerca de un hito.",
        li4:
          "<strong>IriusRisk:</strong> Más de <strong>20</strong> componentes React (Ant Design, TanStack Query, Zustand); más de <strong>100</strong> correcciones en prod en ~6 meses. Participé en un <strong>rediseño de páginas de dominio</strong> con mejor jerarquía y flujo. <strong>2.º puesto</strong> en el hackathon de la empresa.",
        li5:
          "<strong>GABO (actual):</strong> Puto Pulse con más de <strong>500</strong> suscriptores; arturorodes.com (Astro, Alpine, GSAP). <strong>frontend-auto-cms</strong> en npm—flujo editorial con salvaguardas y repo; <strong>más de 2,5k</strong> descargas en una ventana reciente de 12 meses en el registro público.",
      },
      experience: { heading: "Experiencia" },
      jobs: {
        gaboFounder: {
          title: '<span class="type-mix__hit">Ingeniero</span> freelance',
          meta: '<time datetime="2025-10">Oct 2025</time> a la fecha',
          company: "GABO LLC, Suiza, remoto",
          li1:
            "Entrega a clientes y producto propio: Puto Pulse (newsletter y automatización), integraciones (email/redes) y herramientas npm abiertas.",
          li2:
            "Lancé arturorodes.com (Astro, Alpine.js, GSAP) y flujos editoriales con frontend-auto-cms—cambios de contenido con salvaguardas y repo.",
          li3:
            "frontend-auto-cms es comprobable en el registro npm público (más de 2,5k descargas en un periodo reciente de 12 meses); sigo llevando el código hasta producción.",
        },
        irius: {
          title: "Desarrollador <span class=\"type-mix__hit\">frontend</span>",
          meta:
            '<time datetime="2024-10">Oct 2024</time> a <time datetime="2025-10">Oct 2025</time>',
          company: "IriusRisk, Huesca, España (remoto)",
          li1:
            "UI de producto de modelado de amenazas enterprise: React, TypeScript, Ant Design, TanStack Query, Zustand, SASS, Vitest.",
          li2:
            "Revisión de PRs, integración con APIs backend y soporte en producción en contexto regulado y sensible a auditoría.",
          li3:
            "Participé en un rediseño de páginas de dominio (navegación, maquetación, claridad de flujo). 2.º puesto en el hackathon; entrega constante sobre una superficie muy compleja.",
        },
        independent: {
          title: "Periodo de construcción <span class=\"type-mix__hit\">independiente</span>",
          meta: '<time datetime="2024-04">Abr 2024</time> a <time datetime="2024-10">Oct 2024</time>',
          company: "Por cuenta propia, remoto",
          li1:
            "Búsqueda de trabajo a tiempo completo con entrega continua: repos públicos, proyectos listos para portafolio y material para entrevistas—sin meses parado.",
          li2:
            "Mantuve ritmo de publicación (releases pequeñas, commits legibles, documentación) para enseñar trabajo reciente y real en procesos de selección.",
        },
        beyond: {
          title: "Ingeniero <span class=\"type-mix__hit\">full-stack</span>",
          meta: '<time datetime="2022-11">Nov 2022</time> a <time datetime="2024-04">Abr 2024</time>',
          company: "Beyondbmi, Dublín, Irlanda (remoto)",
          li1:
            "SaaS de telesalud: Angular, TypeScript, Express, TypeORM, Postgres, React Native, AWS (incl. Lambda), Stripe, mensajería/automatización.",
          li2:
            "Aprendí Angular desde cero; primera merge request en la primera semana; ~1 mes a solas mientras el senior estaba fuera (BD en prod, bugs críticos, releases).",
          li3:
            "Entregué agenda, vídeo, flujos clínicos e integraciones. Constantes vitales con Chart.js (peso, tensión arterial, datos relacionados) y recordatorios por email y SMS (24h, 6h y 1h antes), orientados a reducir inasistencias y tiempo clínico vacío—el resultado que ese tipo de funcionalidad persigue. La colaboración terminó cuando el presupuesto se ajustó cerca de un hito.",
        },
        solo: {
          title: "Desarrollador full-stack <span class=\"type-mix__hit\">en solitario</span>",
          meta: '<time datetime="2021-08">Ago 2021</time> a <time datetime="2022-11">Nov 2022</time>',
          company: "GABO, España / autónomo, mayormente remoto",
          li1:
            "PYMEs y startups: webs de marketing, ecommerce, SEO; JavaScript greenfield hasta WordPress, PHP e integraciones de terceros.",
          li2:
            "Futuria / Kit Digital: automatización Rehubik (formularios, SQL, Odoo, Zapier, APIs, Python, Google Apps Script).",
          li3: "Encargos vía aceleradoras de València; entidad en EE. UU. para contratación internacional sencilla.",
        },
        uiDesigner: {
          title: "Diseñador de <span class=\"type-mix__hit\">UI</span>",
          meta: '<time datetime="2022-07">Jul 2022</time> a <time datetime="2022-08">Ago 2022</time>',
          company: "talenTeal, Valencia, España (presencial)",
          li1:
            "Rediseño completo de la landing: jerarquía de información más clara, llamadas a la acción más fuertes y UI con criterios de accesibilidad para marketing B2B.",
          li2:
            "Reorganicé bloques para que las acciones principales y las señales de confianza aparecieran antes; enfoque en claridad de funnel, sin analíticas post-lanzamiento a mi alcance.",
        },
        lujo: {
          title: "Especialista de soporte <span class=\"type-mix__hit\">técnico</span>",
          meta: '<time datetime="2022-02">Feb 2022</time> a <time datetime="2022-03">Mar 2022</time>',
          company: "Lujo Network, Valencia, España (híbrido)",
          li1:
            "Endurecimiento operativo: accesos seguros, reglas de firewall, copias; migración desde Google Sheets a base de datos real.",
          li2:
            "Apoyo en actualizaciones web con stakeholders y sesiones prácticas de seguridad para compañeros no técnicos.",
        },
      },
      stack: {
        heading: "Stack principal",
        frontend: "Frontend",
        backend: "Backend y APIs",
        data: "Datos y plataforma",
        quality: "Calidad y entrega",
        more:
          'También uso <span class="type-mix__hit">React Native</span>, WordPress, PHP, <span class="type-mix__hit">Python</span>, Laravel, Playwright, Tauri, Svelte, Zapier, Google Apps Script, Odoo y más. Pregunta si quieres detalle sobre algo.',
      },
      work: {
        heading: "Trabajos seleccionados",
        arturo:
          'Web para coach de negociación salarial y flujo CMS propiedad del cliente. En vivo en <a href="https://arturorodes.com" target="_blank" rel="noopener noreferrer">arturorodes.com<span class="visually-hidden" data-i18n-placeholder="a11y.newTab"></span></a>.',
        puto:
          'Newsletter y automatización, más de <strong>500</strong> suscriptores. <a href="https://putopulse.org" target="_blank" rel="noopener noreferrer">putopulse.org<span class="visually-hidden" data-i18n-placeholder="a11y.newTab"></span></a>',
        cms:
          'Convierte un frontend en un CMS pequeño con salvaguardas y repo (<code>npm i frontend-auto-cms</code>). <strong>Más de 2,5k</strong> descargas npm en una ventana reciente de 12 meses (registro público). <a href="https://github.com/Gabo-Tech/frontend-auto-cms" target="_blank" rel="noopener noreferrer">GitHub<span class="visually-hidden" data-i18n-placeholder="a11y.newTab"></span></a>, <a href="https://www.npmjs.com/package/frontend-auto-cms" target="_blank" rel="noopener noreferrer">npm<span class="visually-hidden" data-i18n-placeholder="a11y.newTab"></span></a>.',
        chatgpt:
          'Escritorio con sensación nativa en Linux (Tauri + JS) donde los instaladores oficiales ignoran Linux. <a href="https://github.com/Gabo-Tech/ChatGPT-Multiplatform-Desktop-Wrapper" target="_blank" rel="noopener noreferrer">GitHub<span class="visually-hidden" data-i18n-placeholder="a11y.newTab"></span></a>.',
        beyondCase:
          'Producto de telesalud: agenda, gráficas de constantes (Chart.js) y recordatorios por etapas (email/SMS)—orientados a inasistencias y uso de franjas—además de videollamadas y flujos con muchas integraciones sobre <strong>Angular</strong>, <strong>React Native</strong>, Node, Postgres y <strong>AWS</strong>.',
        iriusCase:
          'UI de <strong>modelado de amenazas</strong> enterprise en contexto regulado: React complejo; participación en rediseño de páginas de dominio (Ant Design, TanStack Query, Zustand y Vitest).',
        moreStudiesLabel: "Más casos de estudio",
        moreStudiesCollapse: "Cerrar lista",
        caseStudiesMore: "Otros proyectos—incluye prácticas y herramientas—en la lista de abajo.",
        caseStudyExpand: "Expandir caso",
        caseStudyCollapse: "Cerrar caso de estudio",
        loadProjectsError: "No se pudo cargar la lista de proyectos. Recarga la página o inténtalo más tarde.",
      },
      recommend: {
        heading: "Recomendaciones",
        cite: "Arturo Rodés, Product Manager (cliente, arturorodes.com)",
        quote2:
          "&ldquo;Working with Gabriel was a pleasure. He is a really hard-working dedicated guy who is always keen to learn something new and looking to do things better. His attitude is something commendable in the sense that he looks for solutions in different sources with a very proactive mindset and always looking for long-term solutions.&rdquo;",
        cite2: "Ciro Vivacqua, CTO y Enterprise Architect, Beyondbmi (supervisó directamente a Gabriel)",
        more:
          'Más en gabo.rocks<span class="visually-hidden" data-i18n-placeholder="a11y.newTab"></span><span aria-hidden="true"> &rarr;</span>',
      },
      languages: {
        heading: "Idiomas",
        li1:
          "<strong>Inglés</strong>, <strong>español</strong> y <strong>valenciano</strong> (todos nativos).",
        li2: "<strong>Neerlandés</strong>: nivel profesional completo.",
        li3: "<strong>Portugués</strong>: fluido.",
        li4: "<strong>Alemán</strong>: en aprendizaje; objetivo uso cotidiano en Suiza.",
        li5: "Idioma de trabajo por defecto: <strong>inglés</strong>.",
      },
      education: {
        heading: "Formación y trayectoria",
        li1:
          "<strong>Trayectoria autodidacta</strong>, 2019 a la fecha: dejé la uni tras un año para construir productos reales; sigo aprendiendo en el trabajo.",
        li2: "<strong>Informática</strong>, BYU Idaho (2020 a 2021), luego trabajo a tiempo completo.",
        li3:
          "<strong>Bootcamp full-stack web (MERN)</strong> en CEU Cardenal Herrera, abr. a jul. 2022.",
        li4:
          "<strong>Cursos breves</strong>: DevOps y gestión de ciberseguridad (Charles Sturt), 2021 y 2022.",
      },
      faq: {
        heading: "Preguntas frecuentes",
        qWho: "¿Quién es Gabriel Clemente?",
        qPermit: "¿Cuál es la situación de trabajo de Gabriel Clemente en Suiza?",
        qTech: "¿En qué tecnologías destaca Gabriel Clemente?",
        qVerify: "¿Dónde pueden los reclutadores verificar proyectos y publicaciones?",
        qBuild: "¿Cómo está hecho este portafolio?",
        qContact: "¿Cómo contactan reclutadores o clientes con Gabriel?",
        aWho:
          "Gabriel Clemente es ingeniero de software full-stack especializado en JavaScript y TypeScript. Construye interfaces, APIs, integraciones y operaciones de producción. Sus roles recientes incluyen ingeniería freelance en GABO (Suiza), desarrollo frontend en IriusRisk (software regulado de modelado de amenazas), ingeniería full-stack en Beyondbmi (telesalud) y trabajo para PYME con GABO. Tiene permiso de residencia B suizo válido hasta 2030 y vive en Zúrich.",
        aPermit:
          "Vive en Zúrich (Suiza), tiene permiso B hasta 2030 y en este sitio indica que los empleadores suizos normalmente no necesitan patrocinarle. Busca roles en Zúrich, Zug o remoto UE conforme a la normativa aplicable.",
        aTech:
          'Experiencia principal con React, TypeScript y JavaScript en web y nativo; Angular en SaaS de salud; backends Node.js y Express; Postgres y herramientas como TanStack Query, Zustand, Ant Design, Docker, Cypress, Vitest e integración continua con GitHub Actions. Publica herramientas npm como <a href="https://www.npmjs.com/package/frontend-auto-cms" target="_blank" rel="noopener noreferrer">frontend-auto-cms<span class="visually-hidden" data-i18n-placeholder="a11y.newTab"></span></a>.',
        aBuild:
          "HTML y CSS static-first con JavaScript mínimo: textos localizados, tema, intro opcional y ayudas de scroll. Sin framework pesado en esta página.",
        aVerify:
          'Vea trabajos destacados en <a href="https://www.gabo.rocks/" target="_blank" rel="noopener noreferrer">gabo.rocks<span class="visually-hidden" data-i18n-placeholder="a11y.newTab"></span></a>; los casos de estudio están en <a href="#work">Trabajos seleccionados</a>; código en GitHub: <a href="https://github.com/Gabo-Tech" target="_blank" rel="noopener noreferrer">github.com/Gabo-Tech<span class="visually-hidden" data-i18n-placeholder="a11y.newTab"></span></a>; el paquete npm <a href="https://www.npmjs.com/package/frontend-auto-cms" target="_blank" rel="noopener noreferrer">frontend-auto-cms<span class="visually-hidden" data-i18n-placeholder="a11y.newTab"></span></a>; sitios en producción como <a href="https://arturorodes.com" target="_blank" rel="noopener noreferrer">arturorodes.com<span class="visually-hidden" data-i18n-placeholder="a11y.newTab"></span></a> y <a href="https://putopulse.org" target="_blank" rel="noopener noreferrer">putopulse.org<span class="visually-hidden" data-i18n-placeholder="a11y.newTab"></span></a>, enlazados desde este portafolio.',
        aContact:
          'Correo <a href="mailto:sendmessage@gabo.email">sendmessage@gabo.email</a> o teléfono <a href="tel:+41767331655">+41&nbsp;76&nbsp;733&nbsp;16&nbsp;55</a>. El CV en PDF está enlazado desde el pie de <a href="https://www.gabo.rocks/" target="_blank" rel="noopener noreferrer">gabo.rocks<span class="visually-hidden" data-i18n-placeholder="a11y.newTab"></span></a>; páginas más largas en <a href="https://portfolio.gabo.rocks/" target="_blank" rel="noopener noreferrer">portfolio.gabo.rocks<span class="visually-hidden" data-i18n-placeholder="a11y.newTab"></span></a>.',
      },
      footer: {
        lead: '<span class="type-mix__hit">Disponible 2026</span>, Zúrich, Zug, remoto UE',
        resume: "Descargar CV (PDF)",
        email: "Escríbeme",
        storyBefore: "¿Quieres la versión larga?",
      },
    },
    de: {
      doc: {
        title: "Gabriel Clemente, Full-Stack JS/TS Engineer | Zürich",
        description:
          "Selbstgelernter Full-Stack-Entwickler (TypeScript, React, Node). UI, APIs und Integrationen in Healthtech, Cybersecurity-SaaS und Kundenprojekten geliefert. Schweizer B-Bewilligung. Static-first Portfolio. Offen für Zürich, Zug oder EU-Remote gemäss Vorgaben.",
      },
      a11y: { newTab: " (öffnet in neuem Tab)", opensResume: " (öffnet Lebenslauf in neuem Tab)" },
      skip: { content: "Zum Inhalt springen" },
      print: {
        banner:
          "<strong>Gabriel Clemente</strong>. Full-Stack-Entwickler (TypeScript / JavaScript). Zürich, Schweizer B-Bewilligung bis 2030. Verfügbar 2026. Static-first, wenig JavaScript.",
      },
      intro: {
        ariaLabel: "Portfolio-Einführung",
        skip: "Intro überspringen",
        skipAria: "Einführung überspringen und zum Portfolio-Inhalt",
        help:
          "Start antippen für eine kurze animierte Übersicht der Werkzeugkategorien. Optional kann Hintergrundmusik laufen. Escape oder Intro überspringen schliesst das Fenster.",
        start: "Start",
        startAria: "Animierte Einführung starten; Hintergrundmusik kann abspielen, wenn Ihr Gerät es erlaubt",
        announceSection: "Bereich: ",
        announceTech: "Technologie: ",
        announceTechEmpty: "Technologie. ",
        welcomeLive: "Hi, Gabriel Clemente. Willkommen in meinem Portfolio.",
        finalName: "Hi, ich bin Gabriel Clemente",
        finalTag: "Willkommen in meinem Portfolio",
      },
      nav: {
        aria: "Abschnitte auf dieser Seite",
        summary: "Überblick",
        impact: "Kurz",
        experience: "Erfahrung",
        stack: "Stack",
        work: "Arbeiten",
        education: "Ausbildung",
        faq: "FAQ",
        contact: "Kontakt",
      },
      theme: { switchDark: "Zum dunklen Modus wechseln", switchLight: "Zum hellen Modus wechseln" },
      section: {
        summary: "Überblick",
        impact: "Kurz gefasst",
        experience: "Rollen",
        stack: "Toolkit",
        work: "Auslieferungen",
        recommend: "Von einem Kunden",
        recommendManager: "Von einer Führungskraft",
        languages: "Kommunikation",
        education: "Hintergrund",
        faq: "Recruiting & Suche",
      },
      hero: {
        title:
          '<span class="type-mix__hit">Full-stack</span>-Softwareingenieur, <span class="type-mix__hit">JavaScript</span> / <span class="type-mix__hit">TypeScript</span>',
        meta:
          'Zürich, Schweiz<br /><span class="permit type-mix"><span class="type-mix__hit">Schweizer B-Bewilligung</span> bis 2030. Für Arbeitgeber in der Schweiz ist in der Regel keine Visumsponsoring nötig.</span>',
        targetRole:
          'Ziel: Rollen als <span class="type-mix__hit">Full-Stack-Entwickler</span>: Produkt-UI, APIs und Integrationen (<span class="type-mix__hit">TypeScript</span> / <span class="type-mix__hit">JavaScript</span>).',
        availability:
          '<span class="type-mix__hit">Offen für Vollzeit</span> oder langfristige Verträge ab <strong>2026</strong>. Zürich, Zug oder EU-Remote gemäss Vorgaben.',
      },
      contactList: { aria: "Kontakt und Profile", caseStudies: "Fallstudien", resume: "Lebenslauf (PDF)" },
      lede:
        'Ich liefere Full-Stack-Produktarbeit: UIs, APIs, Integrationen und alles, was den Betrieb in Produktion hält. Seit 2019 selbst gelernt (ein Jahr Informatik an der BYU Idaho, dann raus, um echte Dinge zu shipen). Seither unter anderem ein <strong>Telehealth</strong>-Stack (Angular, React Native, Node, Postgres, AWS), eine <strong>Enterprise-Threat-Modeling</strong>-UI (React, TanStack Query, Zustand, Vitest) und jetzt <strong>freiberufliche Engineering</strong>-Arbeit bei GABO: Kundenlaunches, Automatisierung und öffentliche Tools. Ich schreibe Code, den die nächste Person lesen kann, und Systeme, die in Prod nicht umfallen. Neuer Stack? Lerne ich.',
      impact: {
        heading: "Wirkung",
        li1:
          "<strong>Über 4 Jahre</strong> JavaScript/TypeScript-Produkte für echte Nutzer (B2B, reguliert, Consumer).",
        li2:
          "<strong>Über 10</strong> Kunden- und Produktinitiativen: von Marketing-Sites bis zu integrationslastigen Workflows.",
        li3:
          "<strong>Beyondbmi:</strong> Telehealth-SaaS: Terminplanung, Video, klinische Flows und Integrationen. Vitals-UI mit Chart.js (Gewicht, Blutdruck, verwandte Signale) und mehrstufigen Termin-Erinnerungen (E-Mail + SMS bei 24h, 6h und 1h vor dem Termin)—<strong>gegen Nichterscheinen und ungenutzte Slots</strong>, wie sie Teams mit Buchungslogik typischerweise optimieren, ohne mir nachträglich offizielle Kennzahlen. Angular on the job gelernt; <strong>erster Production-MR in Woche eins</strong>; ~1 Monat in alleiniger Verantwortung (Prod-DB, kritische Bugs, Releases). Lieferung bis zu einer budgetbedingten Auslaufphase nahe einem Meilenstein.",
        li4:
          "<strong>IriusRisk:</strong> <strong>20+</strong> React-Komponenten (Ant Design, TanStack Query, Zustand); <strong>100+</strong> Prod-Fixes in ~6 Monaten. Mitwirkung an einem <strong>Redesign der Domain-Seiten</strong> für klarere Informationsarchitektur und Workflow-UX. <strong>2. Platz</strong> beim Firmen-Hackathon.",
        li5:
          "<strong>GABO (aktuell):</strong> Puto Pulse mit <strong>500+</strong> Abonnenten; arturorodes.com (Astro, Alpine, GSAP). <strong>frontend-auto-cms</strong> auf npm—abgesicherte, repo-gestützte Redaktion für Kunden; <strong>2,5k+</strong> Downloads in einem aktuellen 12-Monats-Fenster im öffentlichen Registry.",
      },
      experience: { heading: "Erfahrung" },
      jobs: {
        gaboFounder: {
          title: '<span class="type-mix__hit">Freiberuflicher</span> Softwareingenieur',
          meta: '<time datetime="2025-10">Okt. 2025</time> bis heute',
          company: "GABO LLC, Schweiz, remote",
          li1:
            "Kundenprojekte und eigene Produkte: Puto Pulse (Newsletter + Automatisierung), Integrationen (E-Mail/Social) und Open-Source-npm-Tools.",
          li2:
            "arturorodes.com (Astro, Alpine.js, GSAP) ausgeliefert sowie Redaktions-Workflows mit frontend-auto-cms—abgesicherte, repo-gestützte Content-Änderungen.",
          li3:
            "frontend-auto-cms ist im öffentlichen npm-Registry prüfbar (2,5k+ Downloads in einem aktuellen 12-Monatszeitraum); ich trage den Code bis in die Produktion.",
        },
        irius: {
          title: '<span class="type-mix__hit">Frontend</span>-Entwickler',
          meta:
            '<time datetime="2024-10">Okt. 2024</time> bis <time datetime="2025-10">Okt. 2025</time>',
          company: "IriusRisk, Huesca, Spanien (remote)",
          li1:
            "Enterprise-Threat-Modeling-Produkt-UI: React, TypeScript, Ant Design, TanStack Query, Zustand, SASS, Vitest.",
          li2:
            "PR-Reviews, API-Zusammenarbeit mit dem Backend und Produktionssupport in reguliertem, auditrelevantem Umfeld.",
          li3:
            "Mitwirkung an einem Redesign der Domain-Bereiche (Navigation, Layout, Workflow-Klarheit). 2. Platz beim firmenweiten Hackathon; verlässliche Lieferung auf komplexer Oberfläche.",
        },
        independent: {
          title: '<span class="type-mix__hit">Selbstständige</span> Projektphase',
          meta: '<time datetime="2024-04">Apr. 2024</time> bis <time datetime="2024-10">Okt. 2024</time>',
          company: "Selbst organisiert, remote",
          li1:
            "Vollzeit-Suche bei laufender Lieferung: öffentliche Repos, portfolio-taugliche Projekte und Interview-Material—keine langen Inaktivphasen.",
          li2:
            "Fokus auf Rhythmus: kleine Releases, nachvollziehbare Commits und Docs, damit Gespräche echte, aktuelle Arbeit zeigen konnten.",
        },
        beyond: {
          title: '<span class="type-mix__hit">Full-Stack</span>-Engineer',
          meta: '<time datetime="2022-11">Nov. 2022</time> bis <time datetime="2024-04">Apr. 2024</time>',
          company: "Beyondbmi, Dublin, Irland (remote)",
          li1:
            "Telehealth-SaaS: Angular, TypeScript, Express, TypeORM, Postgres, React Native, AWS (u. a. Lambda), Stripe, Messaging/Automatisierung.",
          li2:
            "Angular von Null gelernt; erster Merge Request in Woche eins; ~1 Monat alleinverantwortlich während Senior abwesend (Prod-DB, kritische Bugs, Releases).",
          li3:
            "Terminplanung, Video, klinische Flows und Integrationen geliefert. Vitals-Tracking mit Chart.js (Gewicht, Blutdruck, verwandte Daten) und Erinnerungen per E-Mail + SMS (24h, 6h, 1h vor Termin), ausgerichtet auf weniger No-Shows und weniger ungenutzte klinische Zeit—das ist das übliche Ziel solcher Flows. Engagement endete bei budgetbedingter Auslaufphase nahe einem Meilenstein.",
        },
        solo: {
          title: '<span class="type-mix__hit">Solo</span> Full-Stack-Entwickler',
          meta: '<time datetime="2021-08">Aug. 2021</time> bis <time datetime="2022-11">Nov. 2022</time>',
          company: "GABO, Spanien / selbstständig, meist remote",
          li1:
            "KMU- und Startup-Arbeit: Marketing-Sites, E-Commerce, SEO; von Greenfield-JavaScript bis WordPress, PHP und Drittintegrations.",
          li2: "Futuria / Digital Kit: Rehubik-Automatisierung (Formulare, SQL, Odoo, Zapier, APIs, Python, Google Apps Script).",
          li3: "Aufträge über València-Beschleuniger; US-Entity für unkompliziertes internationales Contracting.",
        },
        uiDesigner: {
          title: '<span class="type-mix__hit">UI</span>-Designer',
          meta: '<time datetime="2022-07">Jul. 2022</time> bis <time datetime="2022-08">Aug. 2022</time>',
          company: "talenTeal, Valencia, Spanien (vor Ort)",
          li1:
            "Landing-Redesign Ende-zu-Ende: klarere Informationsarchitektur, stärkere CTAs und accessibility-orientierte UI für B2B-Marketing.",
          li2:
            "Content-Blöcke neu geordnet, damit Hauptaktionen und Vertrauenssignale früher sichtbar werden—Fokus auf Funnel-Klarheit ohne Post-Launch-Kennzahlen in meiner Hand.",
        },
        lujo: {
          title: 'Spezialist <span class="type-mix__hit">technischer</span> Support',
          meta: '<time datetime="2022-02">Feb. 2022</time> bis <time datetime="2022-03">März 2022</time>',
          company: "Lujo Network, Valencia, Spanien (hybrid)",
          li1:
            "Betrieb gehärtet: sichere Anmeldewege, Firewall-Regeln, Backups; Migration von Google Sheets in eine echte Datenbank.",
          li2:
            "Website-Updates mit Stakeholdern begleitet und praxisnahe Security-Sessions für nicht-technische Kolleginnen und Kollegen.",
        },
      },
      stack: {
        heading: "Kern-Stack",
        frontend: "Frontend",
        backend: "Backend & APIs",
        data: "Daten & Plattform",
        quality: "Qualität & Delivery",
        more:
          'Ausserdem: <span class="type-mix__hit">React Native</span>, WordPress, PHP, <span class="type-mix__hit">Python</span>, Laravel, Playwright, Tauri, Svelte, Zapier, Google Apps Script, Odoo und mehr. Frag gern nach Details.',
      },
      work: {
        heading: "Ausgewählte Arbeiten",
        arturo:
          'Site für Gehaltsverhandlungs-Coach und CMS-Workflow im Kundenbesitz. Live unter <a href="https://arturorodes.com" target="_blank" rel="noopener noreferrer">arturorodes.com<span class="visually-hidden" data-i18n-placeholder="a11y.newTab"></span></a>.',
        puto:
          'Newsletter und Automatisierung, <strong>500+</strong> Abonnenten. <a href="https://putopulse.org" target="_blank" rel="noopener noreferrer">putopulse.org<span class="visually-hidden" data-i18n-placeholder="a11y.newTab"></span></a>',
        cms:
          'Frontend in ein kleines, abgesichertes Repo-CMS verwandeln (<code>npm i frontend-auto-cms</code>). <strong>2,5k+</strong> npm-Downloads in einem aktuellen 12-Monats-Fenster (öffentliches Registry). <a href="https://github.com/Gabo-Tech/frontend-auto-cms" target="_blank" rel="noopener noreferrer">GitHub<span class="visually-hidden" data-i18n-placeholder="a11y.newTab"></span></a>, <a href="https://www.npmjs.com/package/frontend-auto-cms" target="_blank" rel="noopener noreferrer">npm<span class="visually-hidden" data-i18n-placeholder="a11y.newTab"></span></a>.',
        chatgpt:
          'Desktop mit nativem Gefühl für Linux (Tauri + JS), wo offizielle Installer Linux auslassen. <a href="https://github.com/Gabo-Tech/ChatGPT-Multiplatform-Desktop-Wrapper" target="_blank" rel="noopener noreferrer">GitHub<span class="visually-hidden" data-i18n-placeholder="a11y.newTab"></span></a>.',
        beyondCase:
          'Telehealth-Produkt: Terminplanung, Vitals-Charts (Chart.js) und mehrstufige Termin-Erinnerungen (E-Mail/SMS)—gezielt gegen No-Show-Risiko und Slot-Auslastung—plus Videosessions und integrationslastige Flows mit <strong>Angular</strong>, <strong>React Native</strong>, Node, Postgres und <strong>AWS</strong>.',
        iriusCase:
          '<strong>Threat-Modeling</strong>-Enterprise-UI in reguliertem Umfeld: komplexe React-Oberfläche; Mitwirkung am Redesign der Domain-Seiten (Ant Design, TanStack Query, Zustand, Vitest).',
        moreStudiesLabel: "Weitere Fallstudien",
        moreStudiesCollapse: "Liste schließen",
        caseStudiesMore:
          "Weitere Projekte—Übungsprojekte und Tools—stehen in der Liste unten.",
        caseStudyExpand: "Fallstudie öffnen",
        caseStudyCollapse: "Fallstudie schließen",
        loadProjectsError: "Projektliste konnte nicht geladen werden. Seite neu laden oder später erneut versuchen.",
      },
      recommend: {
        heading: "Empfehlungen",
        cite: "Arturo Rodés, Product Manager (Kunde, arturorodes.com)",
        quote2:
          "&ldquo;Working with Gabriel was a pleasure. He is a really hard-working dedicated guy who is always keen to learn something new and looking to do things better. His attitude is something commendable in the sense that he looks for solutions in different sources with a very proactive mindset and always looking for long-term solutions.&rdquo;",
        cite2: "Ciro Vivacqua, CTO & Enterprise Architect, Beyondbmi (hat Gabriel direkt geführt)",
        more:
          'Mehr auf gabo.rocks<span class="visually-hidden" data-i18n-placeholder="a11y.newTab"></span><span aria-hidden="true"> &rarr;</span>',
      },
      languages: {
        heading: "Sprachen",
        li1:
          "<strong>Englisch</strong>, <strong>Spanisch</strong>, <strong>Valencianisch</strong> (alle muttersprachlich).",
        li2: "<strong>Niederländisch</strong>: volle professionelle Kompetenz.",
        li3: "<strong>Portugiesisch</strong>: fliessend.",
        li4: "<strong>Deutsch</strong>: am Lernen, Ziel Alltag in der Schweiz.",
        li5: "Standardsprache für Arbeit: <strong>Englisch</strong>.",
      },
      education: {
        heading: "Ausbildung & Weg",
        li1:
          "<strong>Selbst gelernter Weg</strong>, 2019 bis heute: Uni nach einem Jahr verlassen, um echte Produkte zu liefern; weiter lernend on the job.",
        li2: "<strong>Informatik</strong>, BYU Idaho (2020 bis 2021), danach Vollzeitarbeit.",
        li3: "<strong>Full-stack Web (MERN)</strong>-Bootcamp an der CEU Cardenal Herrera, Apr. bis Jul. 2022.",
        li4:
          "<strong>Kurzkurse</strong>: DevOps und Cybersecurity Management (Charles Sturt), 2021 und 2022.",
      },
      faq: {
        heading: "Häufige Fragen",
        qWho: "Wer ist Gabriel Clemente?",
        qPermit: "Wie ist Gabriel Clementes Arbeitserlaubnis in der Schweiz?",
        qTech: "Welche Technologien betont Gabriel Clemente?",
        qVerify: "Wo können Recruiter Projekte und Veröffentlichungen prüfen?",
        qBuild: "Wie ist diese Portfolio-Seite aufgebaut?",
        qContact: "Wie erreichen Recruiter oder Kunden Gabriel?",
        aWho:
          "Gabriel Clemente ist Full-Stack-Softwareingenieur mit Schwerpunkt JavaScript und TypeScript. Er baut Produkt-UIs, APIs, Integrationen und Produktionsbetrieb. Zu seinen jüngeren Rollen zählen freiberufliche Engineering-Arbeit bei GABO (Schweiz), Frontend-Entwicklung bei IriusRisk (regulierte Threat-Modeling-Software), Full-Stack-Engineering bei Beyondbmi (Telehealth) und KMU-Arbeit unter GABO. Er hat eine Schweizer B-Aufenthaltsbewilligung bis 2030 und lebt in Zürich.",
        aPermit:
          "Er lebt in Zürich (Schweiz), hat eine B-Bewilligung bis 2030 und kommuniziert auf dieser Site, dass Schweizer Arbeitgeber ihn typischerweise nicht sponsoren müssen. Er sucht Rollen in Zürich, Zug oder EU-Remote gemäss Vorgaben.",
        aTech:
          'Kernerfahrung mit React, TypeScript und JavaScript für Web und Native; Angular aus Telehealth-SaaS; Node.js- und Express-Backends; Postgres sowie Tools wie TanStack Query, Zustand, Ant Design, Docker, Cypress, Vitest und CI mit GitHub Actions. Er veröffentlicht npm-Tooling wie <a href="https://www.npmjs.com/package/frontend-auto-cms" target="_blank" rel="noopener noreferrer">frontend-auto-cms<span class="visually-hidden" data-i18n-placeholder="a11y.newTab"></span></a>.',
        aBuild:
          "Static-first HTML und CSS mit wenig JavaScript: Lokalisierung, Theme-Umschaltung, optionale Intro-Sequenz und Scroll-Hilfen. Kein schweres Client-Framework auf dieser Seite.",
        aVerify:
          'Ausgewählte Arbeiten auf <a href="https://www.gabo.rocks/" target="_blank" rel="noopener noreferrer">gabo.rocks<span class="visually-hidden" data-i18n-placeholder="a11y.newTab"></span></a>; Fallstudien im Abschnitt <a href="#work">Ausgewählte Arbeiten</a>, Code auf GitHub unter <a href="https://github.com/Gabo-Tech" target="_blank" rel="noopener noreferrer">github.com/Gabo-Tech<span class="visually-hidden" data-i18n-placeholder="a11y.newTab"></span></a>, das npm-Paket <a href="https://www.npmjs.com/package/frontend-auto-cms" target="_blank" rel="noopener noreferrer">frontend-auto-cms<span class="visually-hidden" data-i18n-placeholder="a11y.newTab"></span></a> sowie Live-Sites wie <a href="https://arturorodes.com" target="_blank" rel="noopener noreferrer">arturorodes.com<span class="visually-hidden" data-i18n-placeholder="a11y.newTab"></span></a> und <a href="https://putopulse.org" target="_blank" rel="noopener noreferrer">putopulse.org<span class="visually-hidden" data-i18n-placeholder="a11y.newTab"></span></a>, verlinkt von diesem Portfolio.',
        aContact:
          'E-Mail <a href="mailto:sendmessage@gabo.email">sendmessage@gabo.email</a> oder Telefon <a href="tel:+41767331655">+41&nbsp;76&nbsp;733&nbsp;16&nbsp;55</a>. Der Lebenslauf (PDF) ist in der Fusszeile von <a href="https://www.gabo.rocks/" target="_blank" rel="noopener noreferrer">gabo.rocks<span class="visually-hidden" data-i18n-placeholder="a11y.newTab"></span></a> verlinkt; längere Seiten unter <a href="https://portfolio.gabo.rocks/" target="_blank" rel="noopener noreferrer">portfolio.gabo.rocks<span class="visually-hidden" data-i18n-placeholder="a11y.newTab"></span></a>.',
      },
      footer: {
        lead: '<span class="type-mix__hit">Verfügbar 2026</span>, Zürich, Zug, EU-Remote',
        resume: "Lebenslauf herunterladen (PDF)",
        email: "E-Mail schreiben",
        storyBefore: "Die längere Version?",
      },
    },
  };

  function getPath(obj, path) {
    var parts = path.split(".");
    var o = obj;
    for (var i = 0; i < parts.length; i++) {
      if (o == null) return undefined;
      o = o[parts[i]];
    }
    return o;
  }

  function t(key) {
    var v = getPath(STR[locale], key);
    if (v != null && typeof v === "string") return v;
    v = getPath(STR.en, key);
    return v != null && typeof v === "string" ? v : key;
  }

  function applyPlaceholders(root) {
    var holders = root.querySelectorAll("[data-i18n-placeholder]");
    for (var i = 0; i < holders.length; i++) {
      var el = holders[i];
      var k = el.getAttribute("data-i18n-placeholder");
      if (k) el.textContent = t(k);
      el.removeAttribute("data-i18n-placeholder");
    }
  }

  function setHtmlWithPlaceholders(el, html) {
    el.innerHTML = html;
    applyPlaceholders(el);
  }

  function applyDom() {
    document.documentElement.lang = locale;
    document.documentElement.setAttribute("data-locale", locale);

    var titleEl = document.querySelector("title[data-i18n]");
    if (titleEl) document.title = t(titleEl.getAttribute("data-i18n"));

    var metas = document.querySelectorAll("meta[data-i18n-content]");
    for (var m = 0; m < metas.length; m++) {
      var meta = metas[m];
      var k = meta.getAttribute("data-i18n-content");
      if (k) meta.setAttribute("content", t(k));
    }

    var textEls = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < textEls.length; i++) {
      var node = textEls[i];
      if (node.tagName === "TITLE") continue;
      var key = node.getAttribute("data-i18n");
      if (!key) continue;
      node.textContent = t(key);
    }

    var htmlEls = document.querySelectorAll("[data-i18n-html]");
    for (var h = 0; h < htmlEls.length; h++) {
      var hel = htmlEls[h];
      var hk = hel.getAttribute("data-i18n-html");
      if (hk) setHtmlWithPlaceholders(hel, t(hk));
    }

    var ariaEls = document.querySelectorAll("[data-i18n-aria-label]");
    for (var a = 0; a < ariaEls.length; a++) {
      var ae = ariaEls[a];
      var ak = ae.getAttribute("data-i18n-aria-label");
      if (ak) ae.setAttribute("aria-label", t(ak));
    }
  }

  window.__portfolioI18n = {
    locale: locale,
    t: t,
    applyDom: applyDom,
    applyPlaceholders: applyPlaceholders,
    announceSectionPrefix: function () {
      return t("intro.announceSection");
    },
    announceTechPrefix: function () {
      return t("intro.announceTech");
    },
    announceTechEmpty: function () {
      return t("intro.announceTechEmpty");
    },
    welcomeLive: function () {
      return t("intro.welcomeLive");
    },
    finalName: function () {
      return t("intro.finalName");
    },
    finalTag: function () {
      return t("intro.finalTag");
    },
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyDom);
  } else {
    applyDom();
  }
})();
(function () {
  "use strict";

  var OVERLAY_ID = "intro-overlay";
  var FRAME_ID = "intro-frame";
  var AUDIO_PROMPT_ID = "intro-audio-prompt";
  var THEME_AUDIO_ID = "intro-theme-audio";
  var LIVE_ID = "intro-live";

  /** Reserve before theme end for `intro-overlay--exit` (~560ms) + small buffer. */
  var INTRO_FADE_RESERVE_MS = 650;
  /** If theme duration is unknown (no audio / metadata missing). */
  var INTRO_THEME_FALLBACK_SEC = 11;

  /** Category title on screen (ms). */
  var INTRO_CATEGORY_MS = 400;
  /** Match `intro-tech-train-move` in styles.css (s → ms). */
  var INTRO_TRAIN_MS = 400;
  /** Max per-cell grid animation; match `intro-tech-cell-settle` in styles.css (ms). */
  var INTRO_GRID_CELL_MS = 360;
  var INTRO_GRID_STAGGER_MS = 18;
  var INTRO_BATCH_HOLD_MS = 240;

  var abortState = {
    escHandler: null,
  };

  function teardownAbortListeners() {
    if (abortState.escHandler) {
      document.removeEventListener("keydown", abortState.escHandler);
    }
    abortState.escHandler = null;
  }

  /** Match intro chrome to the same resolved theme as the page (`data-theme`: system, user toggle, or stored preference). */
  function syncIntroOverlayTheme(overlay) {
    if (!overlay) return;
    var dark = document.documentElement.getAttribute("data-theme") === "dark";
    overlay.classList.toggle("intro-overlay--dark", dark);
  }

  function attachIntroThemeSync(overlay) {
    syncIntroOverlayTheme(overlay);
    var obs = new MutationObserver(function () {
      syncIntroOverlayTheme(overlay);
    });
    try {
      obs.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["data-theme"],
      });
    } catch (e) {}
    return obs;
  }

  function detachIntroThemeSync(obs) {
    if (obs && typeof obs.disconnect === "function") obs.disconnect();
  }

  function announceSlide(text) {
    var live = document.getElementById(LIVE_ID);
    if (!live) return;
    live.textContent = "";
    setTimeout(function () {
      live.textContent = text || "";
    }, 40);
  }

  function prepareIntroThemeAudio(el) {
    if (!el) return;
    el.volume = 0.22;
    try {
      if (el.getAttribute("preload") === "none") {
        el.setAttribute("preload", "auto");
        if (typeof el.load === "function") el.load();
      }
    } catch (e) {}
  }

  function playIntroThemeFromUserGesture() {
    var el = document.getElementById(THEME_AUDIO_ID);
    prepareIntroThemeAudio(el);
    if (!el) return;
    var playAttempt = el.play();
    if (playAttempt && playAttempt.catch) playAttempt.catch(function () {});
  }

  function stopIntroTheme() {
    var el = document.getElementById(THEME_AUDIO_ID);
    if (el) {
      el.pause();
      el.currentTime = 0;
    }
  }

  function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function wait(ms) {
    return new Promise(function (resolve) {
      setTimeout(resolve, ms);
    });
  }

  function gridPhaseWaitMs(itemCount) {
    var n = itemCount > 0 ? itemCount - 1 : 0;
    return INTRO_GRID_CELL_MS + n * INTRO_GRID_STAGGER_MS + 50;
  }

  function waitForThemeDurationSec(withAudio) {
    return new Promise(function (resolve) {
      if (!withAudio) {
        resolve(INTRO_THEME_FALLBACK_SEC);
        return;
      }
      var el = document.getElementById(THEME_AUDIO_ID);
      if (!el) {
        resolve(INTRO_THEME_FALLBACK_SEC);
        return;
      }
      function pick() {
        var d = el.duration;
        if (typeof d === "number" && !isNaN(d) && isFinite(d) && d > 0) resolve(d);
        else resolve(INTRO_THEME_FALLBACK_SEC);
      }
      if (el.readyState >= 1) {
        pick();
        return;
      }
      el.addEventListener("loadedmetadata", pick, { once: true });
      setTimeout(pick, 900);
    });
  }

  function techLabelFromSpan(span) {
    var clone = span.cloneNode(true);
    var icons = clone.querySelectorAll("i, svg");
    for (var i = 0; i < icons.length; i++) icons[i].parentNode.removeChild(icons[i]);
    return (clone.textContent || "").replace(/\s+/g, " ").trim();
  }

  function buildPlanFromStack() {
    var groups = document.querySelectorAll("#stack .stack-groups .stack-group");
    var blocks = [];

    for (var g = 0; g < groups.length; g++) {
      var group = groups[g];
      var h3 = group.querySelector("h3");
      var title = h3 && h3.textContent ? h3.textContent.trim() : "Stack";
      var items = Array.prototype.slice.call(group.querySelectorAll(".tech-item"));
      var mergeNext = group.getAttribute("data-intro-merge-next") === "true";
      var next = groups[g + 1];
      if (mergeNext && next) {
        var nextItems = Array.prototype.slice.call(next.querySelectorAll(".tech-item"));
        items = items.concat(nextItems);
        g += 1;
      }
      blocks.push({ title: title, items: items });
    }

    var plan = [];
    for (var b = 0; b < blocks.length; b++) {
      var block = blocks[b];
      var items = [];
      for (var t = 0; t < block.items.length; t++) {
        var span = block.items[t];
        var icon = span.querySelector("i");
        items.push({
          label: techLabelFromSpan(span),
          iconClone: icon ? icon.cloneNode(true) : null,
        });
      }
      plan.push({ title: block.title, items: items });
    }
    return plan;
  }

  function clearFrame(frame) {
    frame.textContent = "";
  }

  function mountCategory(frame, titleText, variant) {
    clearFrame(frame);
    var I = window.__portfolioI18n;
    var prefix = I && I.announceSectionPrefix ? I.announceSectionPrefix() : "Section: ";
    announceSlide(prefix + titleText + ". ");
    var el = document.createElement("div");
    el.className = "intro-category intro-category--" + variant;
    el.setAttribute("aria-hidden", "true");
    el.textContent = titleText.toUpperCase();
    frame.appendChild(el);
    requestAnimationFrame(function () {
      el.classList.add("intro-anim-in");
    });
    return el;
  }

  function hideCategoryNode(el) {
    return new Promise(function (resolve) {
      if (!el || !el.parentNode) {
        resolve();
        return;
      }
      el.classList.remove("intro-anim-in");
      el.classList.add("intro-anim-out");
      setTimeout(function () {
        if (el.parentNode) el.parentNode.removeChild(el);
        resolve();
      }, 220);
    });
  }

  async function mountTechBatch(frame, sectionTitle, items, shouldContinue) {
    if (!items || items.length === 0) return;

    clearFrame(frame);
    var I = window.__portfolioI18n;
    var prefix = I && I.announceSectionPrefix ? I.announceSectionPrefix() : "Section: ";
    announceSlide(prefix + sectionTitle + ". " + items.length + " technologies. ");

    var batch = document.createElement("div");
    batch.className = "intro-tech-batch";
    batch.setAttribute("aria-hidden", "true");
    var strip = document.createElement("div");
    strip.className = "intro-tech-batch__strip";

    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      var cell = document.createElement("div");
      cell.className = "intro-tech-batch__cell";
      cell.style.setProperty("--intro-delay", i * INTRO_GRID_STAGGER_MS + "ms");
      cell.style.setProperty("--intro-x-nudge", i % 2 === 0 ? "-10px" : "10px");
      var iconWrap = document.createElement("div");
      iconWrap.className = "intro-tech-batch__icon";
      if (item.iconClone) {
        iconWrap.appendChild(item.iconClone);
      } else {
        var ph = document.createElement("span");
        ph.setAttribute("aria-hidden", "true");
        ph.textContent = "◆";
        iconWrap.appendChild(ph);
      }
      cell.appendChild(iconWrap);
      strip.appendChild(cell);
    }
    batch.appendChild(strip);
    frame.appendChild(batch);

    await new Promise(function (r) {
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          batch.classList.add("intro-tech-batch--train-active");
          r();
        });
      });
    });
    await wait(INTRO_TRAIN_MS);
    if (shouldContinue && !shouldContinue()) {
      if (batch.parentNode) batch.parentNode.removeChild(batch);
      return;
    }

    var grid = document.createElement("div");
    grid.className = "intro-tech-batch__grid";
    while (strip.firstChild) {
      grid.appendChild(strip.firstChild);
    }
    if (strip.parentNode) batch.removeChild(strip);
    batch.appendChild(grid);
    requestAnimationFrame(function () {
      batch.classList.remove("intro-tech-batch--train-active");
      batch.classList.add("intro-tech-batch--grid-active");
    });
    await wait(gridPhaseWaitMs(items.length));
    if (shouldContinue && !shouldContinue()) {
      if (batch.parentNode) batch.parentNode.removeChild(batch);
      return;
    }
    await wait(INTRO_BATCH_HOLD_MS);
    if (batch.parentNode) batch.parentNode.removeChild(batch);
  }

  async function mountFinalSequence(frame) {
    clearFrame(frame);
    var I = window.__portfolioI18n;
    announceSlide(I && I.welcomeLive ? I.welcomeLive() : "Hi, Gabriel Clemente. Welcome to my portfolio.");
    var wrap = document.createElement("div");
    wrap.className = "intro-final";
    wrap.setAttribute("aria-hidden", "true");
    var name = document.createElement("div");
    name.className = "intro-final__name intro-final__name--flip";
    name.textContent = I && I.finalName ? I.finalName() : "Hi, I'm Gabriel Clemente";
    var tag = document.createElement("div");
    tag.className = "intro-final__tag intro-final__tag--scale";
    tag.textContent = I && I.finalTag ? I.finalTag() : "Welcome to my portfolio";
    tag.setAttribute("aria-hidden", "true");
    wrap.appendChild(name);
    wrap.appendChild(tag);
    frame.appendChild(wrap);
    requestAnimationFrame(function () {
      name.classList.add("intro-anim-in");
    });
    await wait(450);
    requestAnimationFrame(function () {
      tag.classList.add("intro-anim-in");
    });
    await wait(200);
    await wait(280);
    await wait(700);
    await wait(520);
  }


  function teardown(overlay, themeObs) {
    teardownAbortListeners();
    stopIntroTheme();
    detachIntroThemeSync(themeObs);
    var live = document.getElementById(LIVE_ID);
    if (live) live.textContent = "";
    document.body.classList.remove("intro-active");
    if (overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay);
  }

  function fadeOutAndRemove(overlay, themeObs) {
    if (!overlay || !overlay.parentNode) return;
    overlay.classList.add("intro-overlay--exit");
    setTimeout(function () {
      teardown(overlay, themeObs);
    }, 560);
  }

  function registerAbortShortcuts(overlay, themeObs) {
    teardownAbortListeners();

    abortState.escHandler = function (ev) {
      if (ev.key !== "Escape") return;
      ev.preventDefault();
      fadeOutAndRemove(overlay, themeObs);
    };

    document.addEventListener("keydown", abortState.escHandler);
  }

  function waitForStart() {
    return new Promise(function (resolve) {
      var startBtn = document.getElementById("intro-start");
      var promptEl = document.getElementById(AUDIO_PROMPT_ID);

      function finish(withAudio) {
        if (startBtn) startBtn.onclick = null;
        if (promptEl) {
          promptEl.hidden = true;
          promptEl.setAttribute("aria-hidden", "true");
        }
        resolve(withAudio);
      }

      if (startBtn) {
        startBtn.onclick = function (ev) {
          ev.preventDefault();
          playIntroThemeFromUserGesture();
          finish(true);
        };
      } else {
        finish(false);
      }
    });
  }

  async function runSequence(overlay, frame, withAudio) {
    var themeObs = attachIntroThemeSync(overlay);

    registerAbortShortcuts(overlay, themeObs);

    var skipBtn = document.getElementById("intro-skip");
    if (skipBtn) {
      skipBtn.onclick = function (ev) {
        ev.preventDefault();
        fadeOutAndRemove(overlay, themeObs);
      };
    }

    var end = function () {
      fadeOutAndRemove(overlay, themeObs);
    };

    var plan = buildPlanFromStack();
    if (plan.length === 0) {
      end();
      return;
    }

    document.body.classList.add("intro-active");
    if (!withAudio) stopIntroTheme();

    var sequenceStart = performance.now();
    var themeSec = await waitForThemeDurationSec(withAudio);
    var deadline = sequenceStart + themeSec * 1000 - INTRO_FADE_RESERVE_MS;

    function isPastDeadline() {
      return performance.now() >= deadline;
    }

    function shouldContinue() {
      return !!overlay.parentNode && !isPastDeadline();
    }

    var categoryAnimIndex = 0;

    for (var b = 0; b < plan.length; b++) {
      if (!overlay.parentNode) return;
      if (isPastDeadline()) break;

      var block = plan[b];
      var variant = categoryAnimIndex % 2 === 0 ? "scale" : "flip";
      categoryAnimIndex += 1;
      var catEl = mountCategory(frame, block.title, variant);
      await wait(INTRO_CATEGORY_MS);
      if (!overlay.parentNode) return;
      await hideCategoryNode(catEl);
      if (isPastDeadline()) break;
      if (block.items && block.items.length > 0) {
        await mountTechBatch(frame, block.title, block.items, shouldContinue);
      }
    }

    if (!overlay.parentNode) return;
    if (isPastDeadline()) {
      end();
      return;
    }
    await mountFinalSequence(frame);
    if (overlay.parentNode) end();
  }

  function init() {
    var overlay = document.getElementById(OVERLAY_ID);
    var frame = document.getElementById(FRAME_ID);
    if (!overlay || !frame) return;

    if (prefersReducedMotion()) {
      overlay.parentNode.removeChild(overlay);
      return;
    }

    var plan = buildPlanFromStack();
    if (plan.length === 0) {
      overlay.parentNode.removeChild(overlay);
      return;
    }

    overlay.removeAttribute("hidden");
    overlay.classList.add("intro-overlay--awaiting-start");

    var themeObsEarly = attachIntroThemeSync(overlay);

    registerAbortShortcuts(overlay, themeObsEarly);

    var skipBtnEarly = document.getElementById("intro-skip");
    if (skipBtnEarly) {
      skipBtnEarly.onclick = function (ev) {
        ev.preventDefault();
        fadeOutAndRemove(overlay, themeObsEarly);
      };
    }

    requestAnimationFrame(function () {
      var startFocus = document.getElementById("intro-start");
      if (startFocus) startFocus.focus();
    });

    waitForStart().then(function (withAudio) {
      detachIntroThemeSync(themeObsEarly);
      overlay.classList.remove("intro-overlay--awaiting-start");
      runSequence(overlay, frame, withAudio).catch(function () {
        fadeOutAndRemove(overlay, null);
      });
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
document.addEventListener("DOMContentLoaded", function () {
  (function () {
    var storageKey = "portfolio-theme";
    var root = document.documentElement;
    var metaTheme = document.querySelector('meta[name="theme-color"]:not([media])');
    function getStored() {
      var v = localStorage.getItem(storageKey);
      return v === "light" || v === "dark" ? v : null;
    }
    function systemTheme() {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    function resolvedTheme() {
      return getStored() || systemTheme();
    }
    function themeColorFor(t) {
      return t === "dark" ? "#0F0F0F" : "#F8F5F0";
    }
    function applyTheme(theme) {
      root.setAttribute("data-theme", theme);
      root.style.colorScheme = theme === "dark" ? "dark" : "light";
      if (metaTheme) metaTheme.setAttribute("content", themeColorFor(theme));
    }
    if (!metaTheme) {
      metaTheme = document.createElement("meta");
      metaTheme.setAttribute("name", "theme-color");
      document.head.appendChild(metaTheme);
    }
    applyTheme(resolvedTheme());

    var btn = document.getElementById("theme-toggle");

    function syncToggle() {
      if (!btn) return;
      var t = root.getAttribute("data-theme") || "light";
      var isDark = t === "dark";
      btn.setAttribute("aria-pressed", isDark ? "true" : "false");
      var I = window.__portfolioI18n;
      if (I && typeof I.t === "function") {
        btn.setAttribute(
          "aria-label",
          isDark ? I.t("theme.switchLight") : I.t("theme.switchDark")
        );
      } else {
        btn.setAttribute(
          "aria-label",
          isDark ? "Switch to light theme" : "Switch to dark theme"
        );
      }
    }

    var mq = window.matchMedia("(prefers-color-scheme: dark)");
    function onSchemeChange() {
      if (!getStored()) applyTheme(systemTheme());
      syncToggle();
    }
    if (mq.addEventListener) mq.addEventListener("change", onSchemeChange);
    else mq.addListener(onSchemeChange);

    syncToggle();

    if (btn) {
      btn.addEventListener("click", function () {
        var cur = root.getAttribute("data-theme") || "light";
        var next = cur === "dark" ? "light" : "dark";
        localStorage.setItem(storageKey, next);
        applyTheme(next);
        syncToggle();
      });
    }
  })();

  (function () {
    var navScroll = document.querySelector(".nav-scroll");
    if (!navScroll) return;

    var sectionIds = [
      "summary",
      "impact",
      "experience",
      "stack",
      "work",
      "education",
      "faq",
      "contact",
    ];

    function linkForId(id) {
      return navScroll.querySelector('a[href="#' + id + '"]');
    }

    function scanLineY() {
      var header = document.querySelector(".site-header");
      var hb = header ? header.getBoundingClientRect().bottom : 64;
      var vh = window.innerHeight;
      var below = Math.max(0, vh - hb);
      return hb + Math.min(200, Math.max(56, below * 0.32));
    }

    function scanLineInside(el, lineY) {
      if (!el) return false;
      var r = el.getBoundingClientRect();
      return r.top <= lineY && lineY < r.bottom;
    }

    function currentSectionId() {
      var docEl = document.documentElement;
      var vh = window.innerHeight;
      var se = docEl.scrollHeight;
      var line = scanLineY();
      var faqEl = document.getElementById("faq");
      var lineInFaq = scanLineInside(faqEl, line);
      if (se > vh + 2) {
        var scrollBottom = window.scrollY + vh;
        if (scrollBottom >= se - 80) {
          return lineInFaq ? "faq" : "contact";
        }
      }
      var current = sectionIds[0];
      for (var i = 0; i < sectionIds.length; i++) {
        var sec = document.getElementById(sectionIds[i]);
        if (!sec) continue;
        if (sec.getBoundingClientRect().top <= line) {
          current = sectionIds[i];
        }
      }
      if (current === "contact" && lineInFaq) {
        current = "faq";
      }
      return current;
    }

    function setActiveNav(id) {
      sectionIds.forEach(function (sid) {
        var link = linkForId(sid);
        if (!link) return;
        if (sid === id) {
          link.setAttribute("aria-current", "true");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    }

    var reduceMotion =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function scrollNavToId(id) {
      var link = linkForId(id);
      if (!link) return;
      var navRect = navScroll.getBoundingClientRect();
      var linkRect = link.getBoundingClientRect();
      var delta =
        linkRect.left + linkRect.width / 2 - (navRect.left + navRect.width / 2);
      var left = navScroll.scrollLeft + delta;
      var max = Math.max(0, navScroll.scrollWidth - navScroll.clientWidth);
      navScroll.scrollTo({
        left: Math.max(0, Math.min(max, left)),
        behavior: reduceMotion ? "auto" : "smooth",
      });
    }

    var lastId = null;
    var scheduled = false;
    var pinnedId = null;
    var clearPinTimer = null;
    var pinClearDeadline = 0;
    var PIN_CLEAR_IDLE_MS = 380;
    var PIN_CLEAR_MAX_MS = 5000;

    function tick() {
      var spyId = currentSectionId();
      var id = pinnedId != null ? pinnedId : spyId;
      setActiveNav(id);
      if (pinnedId != null) {
        return;
      }
      if (spyId !== lastId) {
        lastId = spyId;
        scrollNavToId(spyId);
      }
    }

    function onScrollOrResize() {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(function () {
        scheduled = false;
        tick();
      });
    }

    function schedulePinClearAfterPageScroll() {
      if (pinnedId == null) return;
      if (clearPinTimer) clearTimeout(clearPinTimer);
      clearPinTimer = setTimeout(function tryUnpin() {
        clearPinTimer = null;
        if (pinnedId == null) return;
        var spy = currentSectionId();
        var timedOut = performance.now() >= pinClearDeadline;
        if (spy === pinnedId || timedOut) {
          pinnedId = null;
          lastId = null;
          tick();
          return;
        }
        clearPinTimer = setTimeout(tryUnpin, 100);
      }, PIN_CLEAR_IDLE_MS);
    }

    navScroll.addEventListener("click", function (e) {
      var a = e.target.closest("a");
      if (!a || !navScroll.contains(a)) return;
      var href = a.getAttribute("href");
      if (!href || href.charAt(0) !== "#") return;
      var id = decodeURIComponent(href.slice(1));
      if (sectionIds.indexOf(id) === -1) return;
      if (clearPinTimer) {
        clearTimeout(clearPinTimer);
        clearPinTimer = null;
      }
      pinnedId = id;
      lastId = id;
      pinClearDeadline = performance.now() + PIN_CLEAR_MAX_MS;
      setActiveNav(pinnedId);
      scrollNavToId(pinnedId);
    });

    window.addEventListener("scroll", function () {
      schedulePinClearAfterPageScroll();
      onScrollOrResize();
    }, { passive: true });

    window.addEventListener("resize", function () {
      onScrollOrResize();
      if (pinnedId != null) {
        scrollNavToId(pinnedId);
      }
    });
    window.addEventListener("load", onScrollOrResize);
    window.addEventListener("hashchange", function () {
      pinnedId = null;
      if (clearPinTimer) {
        clearTimeout(clearPinTimer);
        clearPinTimer = null;
      }
      lastId = null;
      onScrollOrResize();
    });
    requestAnimationFrame(onScrollOrResize);
  })();

  (function loadPortfolioProjects() {
    var listEl = document.getElementById("portfolio-work-list");
    if (!listEl || listEl.getAttribute("data-work-dynamic") !== "true") return;

    var I = window.__portfolioI18n;
    var t =
      I && typeof I.t === "function"
        ? I.t.bind(null)
        : function (k) {
            return k;
          };
    var applyPH =
      I && typeof I.applyPlaceholders === "function"
        ? I.applyPlaceholders
        : function () {};

    function escapeHtml(s) {
      return String(s)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
    }

    function assetUrl(rel) {
      if (!rel || !String(rel).trim()) return "";
      var s = String(rel).trim();
      if (/^https?:\/\//i.test(s)) return s;
      try {
        return new URL(s.replace(/^\//, ""), window.location.href).href;
      } catch (err1) {
        return s;
      }
    }

    function teaserInner(item) {
      if (item.summaryKey) {
        return '<div class="type-mix work-teaser-rich">' + t(item.summaryKey) + "</div>";
      }
      return "<p>" + escapeHtml(item.desc || "") + "</p>";
    }

    function renderSkills(skills) {
      if (!skills || !skills.length) return "";
      var out = '<ul class="work-skill-list">';
      for (var si = 0; si < skills.length; si++) {
        var sk = skills[si];
        if (!sk || !sk.name) continue;
        out += '<li class="work-skill-pill">' + escapeHtml(sk.name) + "</li>";
      }
      out += "</ul>";
      return out;
    }

    function renderGallery(item) {
      var parts = [];
      if (item.img && String(item.img).trim()) {
        parts.push(
          '<figure class="work-shot work-shot--hero"><img src="' +
            escapeHtml(assetUrl(item.img)) +
            '" alt="" loading="lazy" decoding="async" /></figure>'
        );
      }
      if (item.gallery && item.gallery.length) {
        for (var gi = 0; gi < item.gallery.length; gi++) {
          var g = item.gallery[gi];
          if (!g || !g.src) continue;
          parts.push(
            '<figure class="work-shot"><img src="' +
              escapeHtml(assetUrl(g.src)) +
              '" alt="' +
              escapeHtml(g.alt || "") +
              '" loading="lazy" decoding="async" /></figure>'
          );
        }
      }
      return parts.join("");
    }

    function renderExpandableInner(item) {
      var blocks = "";
      blocks += renderGallery(item);
      if (item.detailHtml && String(item.detailHtml).trim()) {
        blocks += '<div class="work-detail-copy">' + item.detailHtml + "</div>";
      } else if (item.desc && String(item.desc).trim()) {
        blocks += "<p>" + escapeHtml(item.desc) + "</p>";
      }
      blocks += renderSkills(item.skills);
      if (item.link && String(item.link).trim()) {
        var hrefRaw = item.link.trim();
        var href = escapeHtml(hrefRaw);
        var label = escapeHtml(
          hrefRaw.replace(/^https?:\/\//i, "").replace(/\/$/, "") || hrefRaw
        );
        blocks +=
          '<p class="work-live-link-wrap"><a class="work-live-link" href="' +
          href +
          '" target="_blank" rel="noopener noreferrer">' +
          label +
          '<span class="visually-hidden" data-i18n-placeholder="a11y.newTab"></span></a></p>';
      }
      return blocks;
    }

    function renderWorkSummaryToggle(mode) {
      var expand =
        mode === "outer" ? t("work.moreStudiesLabel") : t("work.caseStudyExpand");
      var collapse =
        mode === "outer" ? t("work.moreStudiesCollapse") : t("work.caseStudyCollapse");
      return (
        '<span class="work-summary-toggle">' +
        '<span class="work-summary-label work-summary-label--when-closed">' +
        escapeHtml(expand) +
        '</span><span class="work-summary-label work-summary-label--when-open">' +
        escapeHtml(collapse) +
        "</span></span>"
      );
    }

    function renderWorkCollapseFooter(mode) {
      var label =
        mode === "outer" ? t("work.moreStudiesCollapse") : t("work.caseStudyCollapse");
      return (
        '<p class="work-disclosure-foot">' +
        '<button type="button" class="work-collapse-btn" data-work-collapse>' +
        escapeHtml(label) +
        "</button></p>"
      );
    }

    function buildFeaturedMarkup(item, sumIdNum) {
      var innerBlock = renderExpandableInner(item);
      var headline = escapeHtml(item.title || "");
      var teaser = teaserInner(item);
      var outer =
        '<li class="work-item type-mix">' +
        '<strong class="work-headline">' +
        headline +
        '</strong><div class="work-teaser">' +
        teaser +
        "</div>";
      if (!innerBlock.trim()) {
        outer += "</li>";
        return outer;
      }
      var sid = sumIdNum != null ? "work-sum-" + sumIdNum : "";
      var summaryOpen = sid
        ? '<summary class="work-summary" id="' + escapeHtml(sid) + '">'
        : '<summary class="work-summary">';
      outer +=
        '<details class="work-disclosure">' +
        summaryOpen +
        renderWorkSummaryToggle("case") +
        '</summary><div class="work-disclosure-body faq-a">' +
        innerBlock +
        renderWorkCollapseFooter("case") +
        "</div></details></li>";
      return outer;
    }

    function buildMoreNest(item, suffix) {
      var innerBlock = renderExpandableInner(item);
      var teaser = teaserInner(item);
      var headline = escapeHtml(item.title || "");
      var slug = String(suffix != null ? suffix : "").replace(/[^a-zA-Z0-9_-]/g, "_");

      var head =
        '<div class="work-more-unit">' +
        '<strong class="work-more-unit-title">' +
        headline +
        '</strong><div class="work-teaser work-teaser--more">' +
        teaser +
        "</div>";

      if (!innerBlock.trim()) {
        head += "</div>";
        return head;
      }

      head +=
        '<details class="work-disclosure work-disclosure--nested">' +
        '<summary class="work-summary work-summary--nested"' +
        (slug ? ' id="work-sum-more-' + escapeHtml(slug) + '"' : "") +
        ">" +
        renderWorkSummaryToggle("case") +
        '</summary><div class="work-disclosure-body faq-a">' +
        innerBlock +
        renderWorkCollapseFooter("case") +
        "</div></details></div>";
      return head;
    }

    fetch(new URL("portfolioItems.json", document.baseURI || window.location.href))
      .then(function (resp) {
        if (!resp.ok) throw new Error("bad status");
        return resp.json();
      })
      .then(function (items) {
        if (!items || !items.length) throw new Error("empty");

        var featured = [];
        var featKeys = {};
        for (var i = 0; i < items.length; i++) {
          var it = items[i];
          if (!it || typeof it.featuredRank !== "number") continue;
          featured.push(it);
          featKeys[String(it.id)] = true;
        }
        featured.sort(function (a, b) {
          return a.featuredRank - b.featuredRank;
        });

        var more = [];
        for (var j = 0; j < items.length; j++) {
          var ito = items[j];
          if (!ito) continue;
          if (!featKeys[String(ito.id)]) more.push(ito);
        }

        var buf = "";
        var sumCounter = 0;
        for (var f = 0; f < featured.length; f++) {
          sumCounter += 1;
          buf += buildFeaturedMarkup(featured[f], sumCounter);
        }

        if (more.length) {
          buf += '<li class="work-item work-item--accordion type-mix">';
          buf +=
            '<details class="work-disclosure work-disclosure--outer">' +
            '<summary class="work-summary">' +
            renderWorkSummaryToggle("outer") +
            '</summary><div class="work-bundle"><p class="work-bundle-intro">';
          buf += escapeHtml(t("work.caseStudiesMore"));
          buf +=
            '</p><div class="work-more-list" role="group">';
          for (var mi = 0; mi < more.length; mi++) {
            buf += buildMoreNest(more[mi], "m-" + (mi + 1) + "_" + String(more[mi].id));
          }
          buf += "</div>" + renderWorkCollapseFooter("outer") + "</div></details></li>";
        }

        listEl.innerHTML = buf;
        applyPH(listEl);

        listEl.addEventListener("click", function (ev) {
          var btn = ev.target.closest("[data-work-collapse]");
          if (!btn || !listEl.contains(btn)) return;
          var details = btn.closest("details");
          if (!details) return;
          ev.preventDefault();
          details.open = false;
          var sum = details.querySelector(":scope > summary");
          if (sum) {
            try {
              sum.focus();
            } catch (e1) {}
          }
        });

        window.requestAnimationFrame(function () {
          listEl.removeAttribute("aria-busy");
        });
      })
      .catch(function () {
        listEl.innerHTML =
          '<li class="work-item type-mix">' +
          "<p>" +
          escapeHtml(t("work.loadProjectsError")) +
          "</p></li>";
        listEl.removeAttribute("aria-busy");
      });
  })();

  (function () {
    function openFaqItemFromHash() {
      var id = window.location.hash.replace(/^#/, "");
      if (!id) return;
      var summary = document.getElementById(id);
      if (!summary) return;
      if (
        !summary.classList.contains("faq-summary") &&
        !summary.classList.contains("work-summary")
      ) {
        return;
      }
      var details = summary.closest("details");
      if (details) details.open = true;
    }
    openFaqItemFromHash();
    window.addEventListener("hashchange", openFaqItemFromHash);
  })();
});
