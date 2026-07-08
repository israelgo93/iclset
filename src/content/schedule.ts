import type { ScheduleDay } from "@/types/conference";

export const schedule: ScheduleDay[] = [
  {
    day: {
      es: "Día 1",
      en: "Day 1",
    },
    date: {
      es: "Miércoles 15 de julio de 2026",
      en: "Wednesday, July 15, 2026",
    },
    summary: {
      es: "Jornada inaugural del track TI con acto protocolar, conferencias magistrales, mesa redonda tecnológica y sesiones paralelas.",
      en: "IT track opening day with institutional ceremony, keynotes, technology roundtable, and parallel sessions.",
    },
    detailPage: {
      href: "/program/day-1-it-track",
      label: {
        es: "Ver jornada inaugural TI",
        en: "View IT opening day",
      },
      ariaLabel: {
        es: "Abrir la agenda detallada de la jornada inaugural del track TI en una nueva pestaña",
        en: "Open the detailed agenda for the IT track opening day in a new tab",
      },
    },
    image: {
      src: "/keynote/day-1.jpg",
      alt: {
        es: "Inauguración con conferencia magistral y escenarios con biodiversidad, ADN y tecnología",
        en: "Opening ceremony with keynote and stages featuring biodiversity, DNA, and technology",
      },
    },
    items: [
      {
        time: "08:00-08:30",
        title: {
          es: "Registro y acreditación",
          en: "Registration and accreditation",
        },
        description: {
          es: "Acreditación de asistentes presenciales, entrega de credenciales y habilitación del enlace Zoom para participantes virtuales.",
          en: "In-person attendee accreditation, credential delivery, and Zoom access enablement for virtual participants.",
        },
        modality: {
          es: "Paraninfo Alfonso Aguilar Ruilova + virtual",
          en: "Alfonso Aguilar Ruilova Auditorium + virtual",
        },
      },
      {
        time: "08:30-09:30",
        title: {
          es: "Acto protocolar de inauguración",
          en: "Opening ceremony protocol",
        },
        description: {
          es: "Programa protocolar con autoridades, presentación del congreso, intervención artística y declaratoria oficial de inauguración.",
          en: "Official protocol program with authorities, conference presentation, artistic intervention, and formal opening declaration.",
        },
        modality: {
          es: "Plenaria Paraninfo",
          en: "Auditorium plenary",
        },
        details: {
          heading: {
            es: "Detalle del acto protocolar",
            en: "Opening protocol details",
          },
          bullets: [
            {
              es: "Ingreso y ubicación de las autoridades en la mesa directiva.",
              en: "Arrival and seating of authorities at the head table.",
            },
            {
              es: "Himno Nacional del Ecuador.",
              en: "National Anthem of Ecuador.",
            },
            {
              es: "Himno de la ULEAM o de la ciudad de Manta, según protocolo institucional.",
              en: "ULEAM anthem or Manta city anthem, according to institutional protocol.",
            },
            {
              es: "Palabras de bienvenida del Decano de la Facultad de Ciencias de la Vida y Tecnologías, Ing. Cristian Mera Macías, PhD.",
              en: "Welcome remarks by the Dean of the Faculty of Life Sciences and Technologies, Ing. Cristian Mera Macías, PhD.",
            },
            {
              es: "Presentación del congreso a cargo del General Chair, Ing. Alex Santamaría Philco, PhD.",
              en: "Conference presentation by the General Chair, Ing. Alex Santamaría Philco, PhD.",
            },
            {
              es: "Intervención artística representativa de Manabí.",
              en: "Artistic intervention representing Manabí.",
            },
            {
              es: "Discurso del Rector de la ULEAM, Dr. Marcos Zambrano Zambrano, PhD, y declaratoria oficial de inauguración del ICLSET 2026.",
              en: "Address by the Rector of ULEAM, Dr. Marcos Zambrano Zambrano, PhD, and official opening declaration of ICLSET 2026.",
            },
            {
              es: "Fotografía oficial con autoridades, chairs y ponentes invitados.",
              en: "Official photograph with authorities, chairs, and invited speakers.",
            },
          ],
        },
      },
      {
        time: "09:30-10:15",
        title: {
          es: "Conferencia magistral 1: Navegación, Orientación y Optimización de Vehículos Autónomos en Entornos Simulados",
          en: "Keynote 1: Navigation, Orientation, and Optimization of Autonomous Vehicles in Simulated Environments",
        },
        description: {
          es: "Mg. Ing. Diego Toala Palma. 35 minutos de ponencia y 10 minutos de preguntas.",
          en: "Mg. Ing. Diego Toala Palma. 35-minute talk and 10-minute Q&A.",
        },
        modality: {
          es: "Plenaria Paraninfo",
          en: "Auditorium plenary",
        },
        details: {
          heading: {
            es: "Ponente",
            en: "Speaker",
          },
          people: [
            {
              name: "Mg. Ing. Diego Toala Palma",
              role: {
                es: "Conferencia magistral del track TI",
                en: "IT track keynote speaker",
              },
            },
          ],
          paragraphs: [
            {
              es: "Con 20 años de trayectoria en el mundo de las TIC, Diego Toala ha liderado proyectos de integración tecnológica en comercio electrónico y gobierno digital, reconocidos por Microsoft como casos de éxito.",
              en: "With 20 years of experience in ICT, Diego Toala has led technology integration projects in e-commerce and digital government, recognized by Microsoft as success stories.",
            },
            {
              es: "Su visión combina innovación, negocios e impacto social, lo que le permitió ser reconocido como Innovador Social de Ecuador por el Instituto Tecnológico de Massachusetts (MIT).",
              en: "His vision combines innovation, business, and social impact, which led to his recognition as Social Innovator of Ecuador by the Massachusetts Institute of Technology (MIT).",
            },
            {
              es: "Es Ingeniero en Sistemas por la ULEAM, MBA por la Universidad Autónoma de Barcelona y Máster en Investigación Matemática por la UTM. Actualmente dirige proyectos tecnológicos y desarrolla investigaciones en soluciones numéricas a ecuaciones diferenciales parciales mediante Inteligencia Artificial, con miras a continuar su formación doctoral en Matemáticas Aplicadas en la Escuela Politécnica Nacional.",
              en: "He holds a Systems Engineering degree from ULEAM, an MBA from the Autonomous University of Barcelona, and a Master's degree in Mathematical Research from UTM. He currently leads technology projects and conducts research on numerical solutions to partial differential equations through Artificial Intelligence, with plans to continue doctoral studies in Applied Mathematics at Escuela Politécnica Nacional.",
            },
          ],
        },
      },
      {
        time: "10:15-11:00",
        title: {
          es: "Conferencia magistral 2: Robots Humanoides con Inteligencia Emocional",
          en: "Keynote 2: Humanoid Robots with Emotional Intelligence",
        },
        description: {
          es: "PhD. Marcos Vinicio Sotomayor. El futuro de la interacción humano-robot.",
          en: "PhD. Marcos Vinicio Sotomayor. The future of human-robot interaction.",
        },
        modality: {
          es: "Plenaria Paraninfo",
          en: "Auditorium plenary",
        },
        details: {
          heading: {
            es: "Ponente",
            en: "Speaker",
          },
          people: [
            {
              name: "PhD. Marcos Vinicio Sotomayor",
              role: {
                es: "Conferencia magistral del track TI",
                en: "IT track keynote speaker",
              },
            },
          ],
        },
      },
      {
        time: "11:00-12:00",
        title: {
          es: "Mesa redonda: Actualidad Tecnológica en los Sectores Comerciales e Industriales",
          en: "Roundtable: Current Technological Landscape in Commercial and Industrial Sectors",
        },
        description: {
          es: "Panel con moderador designado, ponentes y representantes del sector productivo.",
          en: "Panel with designated moderator, speakers, and productive-sector representatives.",
        },
        modality: {
          es: "Plenaria Paraninfo",
          en: "Auditorium plenary",
        },
        details: {
          heading: {
            es: "Moderador y panelistas",
            en: "Moderator and panelists",
          },
          people: [
            {
              name: "Ing. Diego Toala Palma, Mg.",
              role: {
                es: "Moderador",
                en: "Moderator",
              },
            },
            {
              name: "Ing. Marcelo Saldarriaga",
              role: {
                es: "Gerente Runachay",
                en: "Runachay Manager",
              },
            },
            {
              name: "Ing. Billy Garcia Delgado",
              role: {
                es: "Gerente General de Genesis",
                en: "General Manager of Genesis",
              },
            },
            {
              name: "Ing. Calixto Saldarriaga, Mg.",
              role: {
                es: "Jefe de Sistemas de Marbelize",
                en: "Head of Systems at Marbelize",
              },
            },
            {
              name: "Ing. Clemente Calderon Lozano, Mg.",
              role: {
                es: "Gerente de Tecnologías de la Información de la FABRIL S.A.",
                en: "Information Technology Manager at FABRIL S.A.",
              },
            },
          ],
        },
      },
      {
        time: "12:00-12:45",
        title: {
          es: "Conferencia magistral 3: Academia Google",
          en: "Keynote 3: Google Academy",
        },
        description: {
          es: "De 0 a Héroe en Productividad con Gemini, a cargo de Lauro García, Representante de Google Cloud Education LATAM.",
          en: "From Zero to Hero in Productivity with Gemini, led by Lauro García, Google Cloud Education LATAM representative.",
        },
        modality: {
          es: "Plenaria Paraninfo",
          en: "Auditorium plenary",
        },
        details: {
          heading: {
            es: "Ponente",
            en: "Speaker",
          },
          people: [
            {
              name: "Lauro García",
              role: {
                es: "Representante de Google Cloud Education LATAM",
                en: "Google Cloud Education LATAM representative",
              },
            },
          ],
          paragraphs: [
            {
              es: "Como Líder de Educación para Latinoamérica en Google Cloud, el Mtro. Lauro García se dedica a la creación e implementación de estrategias de transformación digital enfocadas en modernizar el ámbito educativo.",
              en: "As Education Lead for Latin America at Google Cloud, Mtro. Lauro García focuses on creating and implementing digital transformation strategies to modernize education.",
            },
            {
              es: "Con una visión optimista sobre la Inteligencia Artificial, promueve la innovación y la educación como motores fundamentales para el cambio social. Su trayectoria profesional supera los 15 años en el sector tecnológico, con roles en Administración de Proyectos, Ventas y Desarrollo de Negocios para organizaciones como Amazon Web Services, Motorola Solutions y Nokia.",
              en: "With an optimistic view of Artificial Intelligence, he promotes innovation and education as core drivers of social change. His professional career spans more than 15 years in the technology sector, with roles in Project Management, Sales, and Business Development for organizations such as Amazon Web Services, Motorola Solutions, and Nokia.",
            },
            {
              es: "Es Ingeniero Mecatrónico por el Tecnológico de Monterrey y posee un MBA de EGADE Business School. Su preparación internacional incluye estudios en Yale School of Management en Estados Unidos y en la European School of Management and Technology en Alemania.",
              en: "He is a Mechatronics Engineer from Tecnológico de Monterrey and holds an MBA from EGADE Business School. His international preparation includes studies at Yale School of Management in the United States and the European School of Management and Technology in Germany.",
            },
          ],
        },
      },
      {
        time: "12:45-13:25",
        title: {
          es: "Conferencia de cierre: Tutor Inteligente en Moodle",
          en: "Closing keynote: Intelligent Tutor in Moodle",
        },
        description: {
          es: "Mgs. Rita Cedeño presenta una conferencia de cierre orientada a inteligencia artificial y plataformas educativas.",
          en: "Mgs. Rita Cedeño presents a closing keynote focused on artificial intelligence and educational platforms.",
        },
        modality: {
          es: "Plenaria Paraninfo",
          en: "Auditorium plenary",
        },
        details: {
          heading: {
            es: "Ponente",
            en: "Speaker",
          },
          people: [
            {
              name: "Mgs. Rita Cedeño",
              role: {
                es: "Conferencia de cierre del track TI",
                en: "IT track closing keynote speaker",
              },
            },
          ],
          paragraphs: [
            {
              es: "Ritha Mireya Cedeño Luna, Magíster en Gestión Estratégica de la Información y el Conocimiento en las Organizaciones por la Universidad Oberta de Catalunya, es una profesional ecuatoriana con sólida trayectoria en el ámbito académico y tecnológico. Ha sido docente de la Universidad Laica Eloy Alfaro de Manabí (ULEAM).",
              en: "Ritha Mireya Cedeño Luna, Master in Strategic Management of Information and Knowledge in Organizations from Universidad Oberta de Catalunya, is an Ecuadorian professional with a solid academic and technological background. She has served as a faculty member at Universidad Laica Eloy Alfaro de Manabí (ULEAM).",
            },
            {
              es: "Pertenece al Colegio de Ingenieros del Perú, Consejo Departamental Ancash Chimbote. Es miembro de la red académica Verano TIC - Panamá y ha sido conferencista internacional en Colombia, Perú, Cuba y Panamá, abordando análisis de datos, inteligencia artificial para la toma de decisiones, plataformas adaptativas en entornos educativos y evaluación institucional.",
              en: "She belongs to the College of Engineers of Peru, Ancash Chimbote Departmental Council. She is a member of the Verano TIC - Panamá academic network and has been an international speaker in Colombia, Peru, Cuba, and Panama, addressing data analysis, artificial intelligence for decision-making, adaptive platforms in educational environments, and institutional evaluation.",
            },
            {
              es: "Entre sus proyectos más relevantes destaca su colaboración con la Universidad De La Salle Bajío (México), donde participa como líder de proyecto en la incorporación de un chatbot con IA en los servicios de la comunidad universitaria de la ULEAM. Además, cuenta con publicaciones científicas relacionadas con innovación educativa, tecnología y desarrollo institucional.",
              en: "Among her most relevant projects is her collaboration with Universidad De La Salle Bajío in Mexico, where she participates as project leader for the incorporation of an AI chatbot into services for the ULEAM university community. She also has scientific publications related to educational innovation, technology, and institutional development.",
            },
          ],
        },
      },
      {
        time: "13:25-13:30",
        title: {
          es: "Cierre de la jornada inaugural",
          en: "Opening day closing",
        },
        description: {
          es: "Agradecimientos, entrega de reconocimientos a los ponentes y anuncios de las sesiones paralelas de la tarde.",
          en: "Acknowledgments, recognition for speakers, and announcements for the afternoon parallel sessions.",
        },
        modality: {
          es: "Plenaria Paraninfo",
          en: "Auditorium plenary",
        },
      },
      {
        time: "15:00-17:30",
        title: {
          es: "Panel Agro-Tecnología y sesiones paralelas",
          en: "Agro-Technology panel and parallel sessions",
        },
        description: {
          es: "Tres salas Zoom simultáneas para papers por track: Bio/Ambiente, Agrociencias y TI.",
          en: "Three simultaneous Zoom rooms for papers by track: Bio/Environment, Agrosciences, and IT.",
        },
        modality: {
          es: "Virtual por track",
          en: "Virtual by track",
        },
      },
    ],
  },
  {
    day: {
      es: "Día 2",
      en: "Day 2",
    },
    date: {
      es: "Jueves 16 de julio de 2026",
      en: "Thursday, July 16, 2026",
    },
    summary: {
      es: "Keynotes Bio/Ambiente, panel Bio-Ambiente, panel Ciencia Abierta y sesiones paralelas.",
      en: "Bio/Environment keynotes, Bio-Environment panel, Open Science panel, and parallel sessions.",
    },
    image: {
      src: "/keynote/day-2.jpg",
      alt: {
        es: "Jornada Bio-Ambiente con keynotes, paneles y diálogo de ciencia abierta",
        en: "Bio-Environment day with keynotes, panels, and open science dialogue",
      },
    },
    items: [
      {
        time: "09:00-10:00",
        title: {
          es: "Conferencia magistral - Ciencias Biológicas y Ambientales",
          en: "Keynote - Biological and Environmental Sciences",
        },
        description: {
          es: "Investigación aplicada en biodiversidad, ambiente y resiliencia territorial.",
          en: "Applied research in biodiversity, environment, and territorial resilience.",
        },
        modality: {
          es: "Plenaria Paraninfo",
          en: "Auditorium plenary",
        },
      },
      {
        time: "10:00-11:00",
        title: {
          es: "Conferencia magistral - Ciencias Biológicas y Ambientales",
          en: "Keynote - Biological and Environmental Sciences",
        },
        description: {
          es: "Segundo bloque magistral del track Bio/Ambiente.",
          en: "Second keynote block for the Bio/Environment track.",
        },
        modality: {
          es: "Plenaria Paraninfo",
          en: "Auditorium plenary",
        },
      },
      {
        time: "11:30-12:30",
        title: {
          es: "Panel transversal Bio-Ambiente",
          en: "Bio-Environment cross-cutting panel",
        },
        description: {
          es: "Mesa redonda sobre ambiente, biodiversidad y territorio.",
          en: "Roundtable on environment, biodiversity, and territory.",
        },
        modality: {
          es: "Plenaria Paraninfo",
          en: "Auditorium plenary",
        },
      },
      {
        time: "12:30-13:30",
        title: {
          es: "Panel transversal Ciencia Abierta",
          en: "Open Science cross-cutting panel",
        },
        description: {
          es: "Discusión sobre transferencia, publicación y ciencia abierta.",
          en: "Discussion on transfer, publishing, and open science.",
        },
        modality: {
          es: "Plenaria Paraninfo",
          en: "Auditorium plenary",
        },
      },
      {
        time: "15:00-17:30",
        title: {
          es: "Sesiones paralelas por track - bloque B",
          en: "Parallel sessions by track - block B",
        },
        description: {
          es: "Presentación de papers en tres salas Zoom institucionales simultáneas.",
          en: "Paper presentations in three simultaneous institutional Zoom rooms.",
        },
        modality: {
          es: "Virtual",
          en: "Virtual",
        },
      },
    ],
  },
  {
    day: {
      es: "Día 3",
      en: "Day 3",
    },
    date: {
      es: "Viernes 17 de julio de 2026",
      en: "Friday, July 17, 2026",
    },
    summary: {
      es: "Feria de pósters en Plaza Centenario, mesa de editores y clausura.",
      en: "Poster fair at Plaza Centenario, editors' roundtable, and closing ceremony.",
    },
    image: {
      src: "/keynote/day-3.jpg",
      alt: {
        es: "Feria de pósters científicos, mesa de editores y clausura institucional",
        en: "Scientific poster fair, editors' roundtable, and institutional closing",
      },
    },
    items: [
      {
        time: "10:00-12:00",
        title: {
          es: "Feria de pósters científicos",
          en: "Scientific poster fair",
        },
        description: {
          es: "Casa abierta con presentación de pósters asociados a los tres tracks.",
          en: "Open fair with poster presentations associated with the three tracks.",
        },
        modality: {
          es: "Plaza Centenario ULEAM",
          en: "ULEAM Plaza Centenario",
        },
      },
      {
        time: "12:00-13:00",
        title: {
          es: "Mesa de editores y revistas aliadas",
          en: "Editors and partner journals roundtable",
        },
        description: {
          es: "Articulación editorial con Encriptar, YAKU, ALLPA, Conectividad y Ecuadorian Science Journal.",
          en: "Editorial coordination with Encriptar, YAKU, ALLPA, Conectividad, and Ecuadorian Science Journal.",
        },
        modality: {
          es: "Híbrida",
          en: "Hybrid",
        },
      },
      {
        time: "13:00-13:30",
        title: {
          es: "Clausura",
          en: "Closing ceremony",
        },
        description: {
          es: "Cierre institucional y menciones a mejores artículos y pósters por track.",
          en: "Institutional closing and mentions for best papers and posters by track.",
        },
        modality: {
          es: "Virtual",
          en: "Virtual",
        },
      },
    ],
  },
];
