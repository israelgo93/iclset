import type {
  ProgramAgendaItem,
  ProgramAgendaItemKind,
  ProgramDayDetail,
  ProgramDaySlug,
  ProgramParticipant,
} from "@/types/conference";
import type { LocalizedText } from "@/types/locale";

const text = (es: string, en: string): LocalizedText => ({ es, en });

interface ParticipantOptions {
  profileId?: string;
  role?: LocalizedText;
  affiliation?: LocalizedText;
}

const participant = (
  name: string,
  options: ParticipantOptions = {},
): ProgramParticipant => ({ name, ...options });

interface AgendaItemOptions {
  description?: LocalizedText;
  participants?: ProgramParticipant[];
}

const agendaItem = (
  time: string,
  kind: ProgramAgendaItemKind,
  title: LocalizedText,
  options: AgendaItemOptions = {},
): ProgramAgendaItem => ({ time, kind, title, ...options });

export const programDayDetails: ProgramDayDetail[] = [
  {
    slug: "day-1-it-track",
    day: text("Día 1", "Day 1"),
    date: text("Miércoles 15 de julio de 2026", "Wednesday, July 15, 2026"),
    eyebrow: text(
      "Día 1 · Tecnologías de la Información y Agrociencias",
      "Day 1 · Information Technologies and Agrosciences",
    ),
    title: text(
      "Jornada inaugural TI y sesiones de Agrociencias",
      "IT opening day and Agrosciences sessions",
    ),
    description: text(
      "Programa completo de la jornada inaugural, las conferencias magistrales, la mesa redonda tecnológica, las presentaciones de pósters y las dos salas paralelas de Agrociencias.",
      "Full program for the opening ceremony, keynotes, technology roundtable, poster presentations, and two parallel Agrosciences rooms.",
    ),
    facts: [
      {
        label: text("Fecha", "Date"),
        value: text(
          "Miércoles 15 de julio de 2026",
          "Wednesday, July 15, 2026",
        ),
      },
      {
        label: text("Tracks", "Tracks"),
        value: text(
          "Tecnologías de la Información y Agrociencias",
          "Information Technologies and Agrosciences",
        ),
      },
      {
        label: text("Modalidades", "Formats"),
        value: text(
          "Presencial, híbrida y virtual sincrónica",
          "In-person, hybrid, and synchronous virtual",
        ),
      },
    ],
    sessions: [
      {
        id: "jornada-inaugural-ti",
        track: "tech",
        label: text(
          "Track Tecnologías de la Información",
          "Information Technologies Track",
        ),
        title: text("Jornada inaugural", "Opening program"),
        description: text(
          "Acto protocolar, conferencias magistrales, mesa redonda tecnológica, presentación de pósters y cierre académico.",
          "Opening protocol, keynotes, technology roundtable, poster presentations, and academic closing.",
        ),
        venue: text(
          "Paraninfo Alfonso Aguilar Ruilova",
          "Alfonso Aguilar Ruilova Auditorium",
        ),
        format: text(
          "Presencial con transmisión simultánea por Facebook Live",
          "In person with simultaneous Facebook Live broadcast",
        ),
        items: [
          agendaItem(
            "08:00-08:30",
            "registration",
            text("Registro y acreditación", "Registration and accreditation"),
            {
              description: text(
                "Acreditación presencial y habilitación del acceso virtual.",
                "In-person accreditation and virtual access enablement.",
              ),
            },
          ),
          agendaItem(
            "08:30-09:30",
            "ceremony",
            text(
              "Acto protocolar de inauguración",
              "Opening ceremony protocol",
            ),
            {
              description: text(
                "Himnos, palabras de bienvenida del Decano de la FCVT, presentación del congreso por el General Chair, intervención artística y discurso del Rector.",
                "Anthems, welcome remarks by the Dean of FCVT, conference presentation by the General Chair, artistic intervention, and the Rector's address.",
              ),
            },
          ),
          agendaItem(
            "09:30-10:15",
            "keynote",
            text(
              "Conferencia magistral 1: Navegación, Orientación y Optimización de Vehículos Autónomos en Entornos Simulados",
              "Keynote 1: Navigation, Orientation, and Optimization of Autonomous Vehicles in Simulated Environments",
            ),
            {
              participants: [
                participant("Ing. Diego Toala Palma, Mg.", {
                  profileId: "diego-toala-palma",
                }),
              ],
            },
          ),
          agendaItem(
            "10:00-12:00",
            "poster",
            text(
              "Presentación de pósters científicos aceptados",
              "Accepted scientific poster presentations",
            ),
            {
              description: text(
                "Presentación de pósters durante la jornada del track.",
                "Poster presentations during the track program.",
              ),
            },
          ),
          agendaItem(
            "10:15-11:00",
            "keynote",
            text(
              "Conferencia magistral 2: Robots Humanoides con Inteligencia Emocional: El Futuro de la Interacción Humano-Robot",
              "Keynote 2: Emotionally Intelligent Humanoid Robots: The Future of Human-Robot Interaction",
            ),
            {
              participants: [
                participant("PhD. Marcos Vinicio Sotomayor", {
                  profileId: "marcos-vinicio-sotomayor",
                }),
              ],
            },
          ),
          agendaItem(
            "11:00-12:00",
            "presentation",
            text(
              "Mesa redonda: Actualidad Tecnológica en los Sectores Comerciales e Industriales",
              "Roundtable: Current Technological Landscape in Commercial and Industrial Sectors",
            ),
            {
              participants: [
                participant("Ing. Diego Toala Palma, Mg.", {
                  profileId: "diego-toala-palma",
                  role: text("Moderador", "Moderator"),
                }),
                participant("Ing. Marcelo Saldarriaga", {
                  role: text("Gerente de Runachay", "Manager at Runachay"),
                }),
                participant("Ing. Billy García Delgado", {
                  role: text(
                    "Gerente General de Génesis",
                    "General Manager at Génesis",
                  ),
                }),
                participant("Ing. Calixto Saldarriaga, Mg.", {
                  role: text(
                    "Jefe de Sistemas de Marbelize",
                    "Head of Systems at Marbelize",
                  ),
                }),
                participant("Ing. Clemente Calderón Lozano, Mg.", {
                  role: text(
                    "Gerente de Tecnologías de la Información de La Fabril S.A.",
                    "Information Technology Manager at La Fabril S.A.",
                  ),
                }),
              ],
            },
          ),
          agendaItem(
            "12:00-12:45",
            "keynote",
            text(
              "Conferencia magistral 3: Academia Google - De 0 a Héroe en Productividad con Gemini",
              "Keynote 3: Google Academy - From Zero to Hero in Productivity with Gemini",
            ),
            {
              participants: [
                participant("Lauro García", {
                  profileId: "lauro-garcia",
                  affiliation: text(
                    "Google Cloud Education LATAM",
                    "Google Cloud Education LATAM",
                  ),
                }),
              ],
            },
          ),
          agendaItem(
            "12:45-13:25",
            "keynote",
            text(
              "Conferencia de cierre: Tutor Inteligente en Moodle",
              "Closing keynote: Intelligent Tutor in Moodle",
            ),
            {
              participants: [
                participant("Ing. Rita Cedeño Luna, Mgs.", {
                  profileId: "rita-cedeno-luna",
                }),
              ],
            },
          ),
          agendaItem(
            "13:25-13:30",
            "closing",
            text(
              "Cierre de la jornada inaugural",
              "Closing of the opening program",
            ),
            {
              description: text(
                "Agradecimientos y anuncio de las sesiones paralelas.",
                "Acknowledgments and announcement of the parallel sessions.",
              ),
            },
          ),
        ],
      },
      {
        id: "agrociencias-agroindustria",
        track: "agro",
        label: text("Track Agrociencias", "Agrosciences Track"),
        title: text(
          "Agroindustria - sesión paralela",
          "Agroindustry - parallel session",
        ),
        description: text(
          "Ponencias sobre bioprocesos, alimentos, inocuidad, sostenibilidad e inteligencia artificial aplicada a procesos agroindustriales.",
          "Presentations on bioprocesses, food, safety, sustainability, and artificial intelligence applied to agroindustrial processes.",
        ),
        venue: text("Cine ULEAM", "ULEAM Cinema"),
        format: text("Híbrida", "Hybrid"),
        moderators: text(
          "Ing. Ángel Prado (08:30-09:50) y Dr. Edison Lavayen (10:05-11:25)",
          "Ing. Ángel Prado (08:30-09:50) and Dr. Edison Lavayen (10:05-11:25)",
        ),
        zoomUrl: "https://us02web.zoom.us/j/88322870864",
        items: [
          agendaItem(
            "08:30-08:50",
            "presentation",
            text(
              "Análisis fisicoquímico de un bioplástico generado de la vinaza producida en la destilación de alcohol artesanal",
              "Physicochemical analysis of a bioplastic produced from vinasse generated during artisanal alcohol distillation",
            ),
            {
              participants: [
                participant("Ph.D. Ever Morales", {
                  affiliation: text("ULEAM", "ULEAM"),
                }),
              ],
            },
          ),
          agendaItem(
            "08:50-09:10",
            "presentation",
            text(
              "Extracción y caracterización de pectina de cáscara de plátano verde y su aplicación en la preparación de nanopartículas",
              "Extraction and characterization of pectin from green banana peel and its application in nanoparticle preparation",
            ),
            {
              participants: [
                participant("Ing. Génesis Bucaram Lara", {
                  affiliation: text(
                    "Universidad La Molina, Perú",
                    "La Molina University, Peru",
                  ),
                }),
              ],
            },
          ),
          agendaItem(
            "09:10-09:30",
            "presentation",
            text(
              "Aplicaciones biotecnológicas de la enzima transglutaminasa (Streptomyces mobaraensis) en la industria de alimentos",
              "Biotechnological applications of the enzyme transglutaminase (Streptomyces mobaraensis) in the food industry",
            ),
            {
              participants: [
                participant("Ph.D. José Luis Coloma", {
                  affiliation: text("ULEAM", "ULEAM"),
                }),
              ],
            },
          ),
          agendaItem(
            "09:30-09:50",
            "presentation",
            text(
              "HACCP en acción: análisis del caso de Salmonella en Foster Farms",
              "HACCP in action: analysis of the Salmonella case at Foster Farms",
            ),
            {
              participants: [
                participant("MSc. Priscila Santacruz", {
                  affiliation: text(
                    "Consultora independiente",
                    "Independent consultant",
                  ),
                }),
              ],
            },
          ),
          agendaItem("09:50-10:10", "break", text("Receso", "Break")),
          agendaItem(
            "10:05-10:25",
            "presentation",
            text(
              "Características sensoriales de panes con harina de cascarilla de cacao CCN 51 y Nacional Arriba",
              "Sensory characteristics of breads made with CCN 51 and Nacional Arriba cocoa husk flour",
            ),
            {
              participants: [
                participant("Ph.D. Ahmed El Salous", {
                  affiliation: text(
                    "Universidad Agraria del Ecuador",
                    "Agrarian University of Ecuador",
                  ),
                }),
              ],
            },
          ),
          agendaItem(
            "10:25-10:45",
            "presentation",
            text(
              "Hábitos alimenticios y generación de desperdicios de alimentos en hogares de estudiantes universitarios en Manta, Ecuador",
              "Eating habits and food waste generation in university student households in Manta, Ecuador",
            ),
            {
              participants: [
                participant("Ph.D. Stalin Santacruz", {
                  affiliation: text("ULEAM", "ULEAM"),
                }),
              ],
            },
          ),
          agendaItem(
            "10:45-11:05",
            "presentation",
            text(
              "IA aplicada a la optimización de procesos agroindustriales",
              "AI applied to the optimization of agroindustrial processes",
            ),
            {
              participants: [
                participant("Ing. Mario Cáceres", {
                  affiliation: text("El Salvador", "El Salvador"),
                }),
              ],
            },
          ),
          agendaItem(
            "11:05-11:25",
            "presentation",
            text("Ponencia por confirmar", "Presentation to be confirmed"),
            {
              participants: [
                participant("Ph.D. Alex Dueñas", {
                  affiliation: text(
                    "Director de Investigación, UTM",
                    "Director of Research, UTM",
                  ),
                }),
              ],
            },
          ),
        ],
      },
      {
        id: "agrociencias-agronegocios-agropecuaria",
        track: "agro",
        label: text("Track Agrociencias", "Agrosciences Track"),
        title: text(
          "Agronegocios y Agropecuaria - sesión paralela",
          "Agribusiness and Agricultural Production - parallel session",
        ),
        description: text(
          "Ponencias sobre bioeconomía, producción agrícola y pecuaria, nutrición animal, resiliencia y generación de valor.",
          "Presentations on bioeconomy, agricultural and livestock production, animal nutrition, resilience, and value creation.",
        ),
        venue: text(
          "Auditorio de Contabilidad / Sala de Capacitaciones de Agropecuaria",
          "Accounting Auditorium / Agricultural Training Room",
        ),
        format: text("Híbrida", "Hybrid"),
        moderators: text(
          "Ing. Byron Alcívar (08:30-09:50) y Dra. Paulina Espinoza (10:05-11:45)",
          "Ing. Byron Alcívar (08:30-09:50) and Dra. Paulina Espinoza (10:05-11:45)",
        ),
        zoomUrl: "https://us02web.zoom.us/j/89968192549",
        items: [
          agendaItem(
            "08:30-08:50",
            "presentation",
            text(
              "Açaí (Euterpe precatoria) como estrategia bioeconómica para la rehabilitación territorial indígena en la Amazonía",
              "Açaí (Euterpe precatoria) as a bioeconomic strategy for Indigenous territorial rehabilitation in Amazonia",
            ),
            {
              participants: [
                participant("Ing. Luis Vallejo", {
                  affiliation: text("OCRHOMA", "OCRHOMA"),
                }),
              ],
            },
          ),
          agendaItem(
            "08:50-09:10",
            "presentation",
            text(
              "Producción, desarrollo y distribución de nutrientes foliares y enmiendas de suelo",
              "Production, development, and distribution of foliar nutrients and soil amendments",
            ),
            {
              participants: [
                participant("Ing. Flavio Ricaurte", {
                  affiliation: text("Agrofarm", "Agrofarm"),
                }),
              ],
            },
          ),
          agendaItem(
            "09:10-09:30",
            "presentation",
            text(
              "La calidad de los ensilajes y su impacto en la producción ganadera",
              "Silage quality and its impact on livestock production",
            ),
            {
              participants: [participant("Zootec. Germán García")],
            },
          ),
          agendaItem(
            "09:30-09:50",
            "presentation",
            text(
              "Elaboración de pellets a partir de subproductos avícolas: una alternativa sostenible para la ganadería bovina",
              "Pellet production from poultry by-products: a sustainable alternative for cattle farming",
            ),
            {
              participants: [
                participant("Ing. Ángel Mieles", {
                  affiliation: text(
                    "Universidad Juárez del Estado de Durango, México",
                    "Juárez University of the State of Durango, Mexico",
                  ),
                }),
              ],
            },
          ),
          agendaItem("09:50-10:10", "break", text("Receso", "Break")),
          agendaItem(
            "10:05-10:25",
            "presentation",
            text(
              "Especies forrajeras resilientes a la sequía como alternativa para la alimentación de rumiantes",
              "Drought-resilient forage species as an alternative for ruminant feeding",
            ),
            {
              participants: [
                participant("Vet. Carolina Fonseca", {
                  affiliation: text("UTM", "UTM"),
                }),
              ],
            },
          ),
          agendaItem(
            "10:25-10:45",
            "presentation",
            text(
              "Efecto de coberturas con residuos de cultivos en el rendimiento de tres variedades de camote en Manabí",
              "Effect of crop residue mulches on the yield of three sweet potato varieties in Manabí",
            ),
            {
              participants: [
                participant("Ing. Joffre Añazco", {
                  affiliation: text("INIAP", "INIAP"),
                }),
              ],
            },
          ),
          agendaItem(
            "10:45-11:05",
            "presentation",
            text(
              "Del conocimiento agronómico al agronegocio: estrategias para generar valor en la agricultura moderna",
              "From agronomic knowledge to agribusiness: strategies to create value in modern agriculture",
            ),
            {
              participants: [
                participant("Ing. Dayana Priscila Rubio Fraga", {
                  affiliation: text(
                    "Gerente General, AGROBIO C.A.",
                    "General Manager, AGROBIO C.A.",
                  ),
                }),
              ],
            },
          ),
          agendaItem(
            "11:05-11:25",
            "presentation",
            text(
              "Sustentabilidad multidimensional del agroecosistema maíz en el sector Mutre, Tosagua: indicadores de resiliencia",
              "Multidimensional sustainability of the maize agroecosystem in Mutre, Tosagua: resilience indicators",
            ),
            {
              participants: [
                participant("Ing. Diego Nevárez", {
                  affiliation: text("ULEAM", "ULEAM"),
                }),
              ],
            },
          ),
          agendaItem(
            "11:25-11:45",
            "presentation",
            text(
              "Esquejes apicales con cuatro yemas optimizan el rendimiento comercial del camote INIAP-Toquecita",
              "Apical cuttings with four buds optimize the commercial yield of INIAP-Toquecita sweet potato",
            ),
            {
              participants: [
                participant("Ing. Joffre Añazco", {
                  affiliation: text("INIAP", "INIAP"),
                }),
              ],
            },
          ),
        ],
      },
    ],
    speakerProfileIds: [
      "diego-toala-palma",
      "marcos-vinicio-sotomayor",
      "lauro-garcia",
      "rita-cedeno-luna",
    ],
  },
  {
    slug: "day-2-tracks",
    day: text("Día 2", "Day 2"),
    date: text("Jueves 16 de julio de 2026", "Thursday, July 16, 2026"),
    eyebrow: text("Día 2 · Programa por tracks", "Day 2 · Track program"),
    title: text(
      "Biociencias, Tecnología y Agrociencias",
      "Biosciences, Technology, and Agrosciences",
    ),
    description: text(
      "Cronograma completo de conferencias magistrales, ponencias científicas, presentaciones de pósters y sesiones paralelas de los tres tracks.",
      "Complete schedule of keynotes, scientific presentations, poster presentations, and parallel sessions across all three tracks.",
    ),
    facts: [
      {
        label: text("Fecha", "Date"),
        value: text("Jueves 16 de julio de 2026", "Thursday, July 16, 2026"),
      },
      {
        label: text("Tracks", "Tracks"),
        value: text(
          "Ciencias Biológicas y Ambientales, TI y Agrociencias",
          "Biological and Environmental Sciences, IT, and Agrosciences",
        ),
      },
      {
        label: text("Modalidades", "Formats"),
        value: text(
          "Presencial, híbrida y virtual sincrónica",
          "In-person, hybrid, and synchronous virtual",
        ),
      },
    ],
    sessions: [
      {
        id: "bio-ambiente-manana",
        track: "bio",
        label: text(
          "Track Ciencias Biológicas y Ambientales",
          "Biological and Environmental Sciences Track",
        ),
        title: text("Sesión de la mañana", "Morning session"),
        description: text(
          "Registro, apertura del track, cuatro conferencias magistrales y presentación de pósters científicos aceptados.",
          "Registration, track opening, four keynotes, and accepted scientific poster presentations.",
        ),
        venue: text(
          "Paraninfo Alfonso Aguilar Ruilova",
          "Alfonso Aguilar Ruilova Auditorium",
        ),
        format: text(
          "Presencial con transmisión plenaria",
          "In person with plenary broadcast",
        ),
        moderators: text(
          "Responsables: Dr. Kléver Mendoza Nieto y Dr. Esteban Chirino Miranda",
          "Coordinators: Dr. Kléver Mendoza Nieto and Dr. Esteban Chirino Miranda",
        ),
        items: [
          agendaItem(
            "08:00-09:00",
            "registration",
            text("Registro de participantes", "Participant registration"),
          ),
          agendaItem(
            "09:00-09:30",
            "ceremony",
            text(
              "Bienvenida e inauguración del track",
              "Track welcome and opening",
            ),
            {
              participants: [
                participant("Comité Organizador", {
                  role: text("Apertura del track", "Track opening"),
                }),
              ],
            },
          ),
          agendaItem(
            "09:00-12:00",
            "poster",
            text(
              "Presentación de pósters científicos aceptados",
              "Accepted scientific poster presentations",
            ),
            {
              description: text(
                "Presentación de pósters durante la jornada del track.",
                "Poster presentations during the track program.",
              ),
            },
          ),
          agendaItem(
            "09:30-10:15",
            "keynote",
            text(
              "Conferencia magistral 1: El fenómeno de El Niño, supuestamente extremo, y su posible impacto sobre las pesquerías de Ecuador",
              "Keynote 1: The supposedly extreme El Niño phenomenon and its potential impact on Ecuador's fisheries",
            ),
            {
              participants: [
                participant("MSc. José Alio Mingo", {
                  affiliation: text(
                    "Universidad Técnica de Manabí",
                    "Technical University of Manabí",
                  ),
                }),
              ],
            },
          ),
          agendaItem(
            "10:15-11:00",
            "keynote",
            text(
              "Conferencia magistral 2: Dinámica y restauración de ecosistemas forestales en Túnez frente al cambio climático: casos prácticos",
              "Keynote 2: Dynamics and ecological restoration of forest ecosystems in Tunisia in response to climate change: case studies",
            ),
            {
              participants: [
                participant("PhD. Issam Touhami", {
                  profileId: "issam-touhami",
                  affiliation: text(
                    "Universidad de Cartago, Túnez",
                    "University of Carthage, Tunisia",
                  ),
                }),
              ],
            },
          ),
          agendaItem("11:00-11:30", "break", text("Receso", "Break")),
          agendaItem(
            "11:30-12:15",
            "keynote",
            text(
              "Conferencia magistral 3: Dinámica de crecimiento de consorcios de algas turf sobre redes de pesca abandonadas en arrecifes rocoso-coralinos de la zona central de Manabí",
              "Keynote 3: Growth dynamics of turf algae consortia on abandoned fishing nets in rocky-coral reefs of central Manabí",
            ),
            {
              participants: [
                participant("PhD. Juan Figueroa Pico", {
                  affiliation: text("ULEAM", "ULEAM"),
                }),
              ],
            },
          ),
          agendaItem(
            "12:15-13:00",
            "keynote",
            text(
              "Conferencia magistral 4: Neutralidad de la degradación de la tierra: opciones para alcanzar desarrollo sostenible en paisajes productivos",
              "Keynote 4: Land degradation neutrality: options to achieve sustainable development in productive landscapes",
            ),
            {
              participants: [
                participant("MSc. Manuel Peralvo", {
                  profileId: "manuel-peralvo",
                  affiliation: text("CONDESAN", "CONDESAN"),
                }),
              ],
            },
          ),
          agendaItem("13:00-14:00", "meal", text("Almuerzo", "Lunch")),
        ],
      },
      {
        id: "bio-ambiente-tarde",
        track: "bio",
        label: text(
          "Track Ciencias Biológicas y Ambientales",
          "Biological and Environmental Sciences Track",
        ),
        title: text("Ponencias de la tarde", "Afternoon presentations"),
        description: text(
          "Ponencias de 10 minutos y 5 minutos de preguntas sobre ecosistemas, contaminación, restauración, pesquerías y recursos acuáticos.",
          "Ten-minute presentations followed by five minutes of questions on ecosystems, pollution, restoration, fisheries, and aquatic resources.",
        ),
        venue: text(
          "Auditorio de Comunicaciones - Sala Biología 1",
          "Communications Auditorium - Biology Room 1",
        ),
        format: text("Híbrida", "Hybrid"),
        zoomUrl: "https://us02web.zoom.us/j/85644665324",
        items: [
          agendaItem(
            "14:00-14:15",
            "presentation",
            text(
              "Degradación fotoquímica del polietileno lineal de baja densidad bajo exposición ultravioleta ambiental y controlada",
              "Photochemical degradation of linear low-density polyethylene under environmental and controlled ultraviolet exposure",
            ),
            { participants: [participant("Carlos Reinoso")] },
          ),
          agendaItem(
            "14:15-14:30",
            "presentation",
            text(
              "Restauración forestal en el cantón Puerto López, Manabí, Ecuador: socialización, intervención y monitoreo",
              "Forest restoration in Puerto López canton, Manabí, Ecuador: outreach, intervention, and monitoring",
            ),
            { participants: [participant("Esteban Chirino Miranda")] },
          ),
          agendaItem(
            "14:30-14:45",
            "presentation",
            text(
              "Prevalencia de Clinostomum sp. en Andinoacara rivulatus capturado en el cantón Pichincha, Manabí, Ecuador",
              "Prevalence of Clinostomum sp. in Andinoacara rivulatus captured in Pichincha Canton, Manabí, Ecuador",
            ),
            { participants: [participant("Anthony Mera Murillo")] },
          ),
          agendaItem(
            "14:45-15:00",
            "presentation",
            text(
              "Implementación de un centro de desarrollo forestal dentro de la estrategia ambiental del GAD Manta",
              "Implementation of a forest development center within the environmental strategy of GAD Manta",
            ),
            { participants: [participant("Iván Murillo Voelcker")] },
          ),
          agendaItem(
            "15:00-15:15",
            "presentation",
            text(
              "Análisis multitemporal de la distribución de Pontederia crassipes en el embalse Daule-Peripa, Ecuador",
              "Multitemporal analysis of Pontederia crassipes distribution in Daule-Peripa Reservoir, Ecuador",
            ),
            { participants: [participant("Josué Álvarez")] },
          ),
          agendaItem(
            "15:15-15:30",
            "presentation",
            text(
              "Toxicidad de fármacos de uso común: una evaluación mediante modelos biológicos",
              "Toxicity of commonly used pharmaceuticals: an assessment using biological models",
            ),
            { participants: [participant("Dayanara María Macías Mayorga")] },
          ),
          agendaItem(
            "15:30-15:45",
            "presentation",
            text(
              "Condición reproductiva de las especies de concha prieta en Ecuador",
              "Reproductive condition of black shell species in Ecuador",
            ),
            { participants: [participant("Juan Moreno")] },
          ),
          agendaItem(
            "15:45-16:00",
            "presentation",
            text(
              "Evolución del crecimiento de microorganismos en un medio contaminado por aluminio, cromo y plomo",
              "Evolution of microorganism growth in a medium contaminated by aluminum, chromium, and lead",
            ),
            { participants: [participant("Abrahán Isaac Velásquez Ferrín")] },
          ),
          agendaItem(
            "16:00-16:15",
            "presentation",
            text(
              "Biología y pesquería de los recursos acuáticos del Ecuador: aguas marinas e interiores",
              "Biology and fisheries of Ecuador's aquatic resources: marine and inland waters",
            ),
            { participants: [participant("Kléver Mendoza")] },
          ),
          agendaItem(
            "16:15-16:30",
            "presentation",
            text(
              "Evaluación integral de arrecifes marginales en zonas protegidas y no protegidas de la costa de Ecuador: avances del estudio en ecosistemas marinos",
              "Comprehensive assessment of marginal reefs in protected and unprotected areas of Ecuador's coast: progress in the marine ecosystem study",
            ),
            { participants: [participant("David Jesod Mero del Valle")] },
          ),
          agendaItem(
            "16:30-16:45",
            "presentation",
            text(
              "Desarrollo de un recubrimiento comestible a base de alginato de sodio para aumentar la vida útil del filete de corvinilla (Lepophidium negropinna)",
              "Development of a sodium alginate-based edible coating to extend the shelf life of corvinilla fillet (Lepophidium negropinna)",
            ),
            { participants: [participant("Eduardo Xavier Pico Lozano")] },
          ),
          agendaItem(
            "16:45",
            "closing",
            text(
              "Clausura de la jornada del track",
              "Closing of the track program",
            ),
          ),
        ],
      },
      {
        id: "ti-manana",
        track: "tech",
        label: text(
          "Track Tecnologías de la Información",
          "Information Technologies Track",
        ),
        title: text("Sesión de la mañana", "Morning session"),
        description: text(
          "Conferencia magistral y ponencias sobre inteligencia artificial, IoT, ciberseguridad, acuicultura de precisión y bases de datos empresariales.",
          "Keynote and presentations on artificial intelligence, IoT, cybersecurity, precision aquaculture, and enterprise databases.",
        ),
        venue: text(
          "Sala virtual de Tecnologías de la Información",
          "Information Technologies virtual room",
        ),
        format: text("Virtual sincrónica", "Synchronous virtual"),
        moderators: text(
          "Chair: Ing. Ricardo Aray Aráuz, Mg.",
          "Chair: Ing. Ricardo Aray Aráuz, Mg.",
        ),
        zoomUrl: "https://us02web.zoom.us/j/82059430144",
        items: [
          agendaItem(
            "09:00-09:30",
            "keynote",
            text(
              "Conferencia magistral I: Ingeniería de RAG: desarrollo de software con implementaciones avanzadas de IA",
              "Keynote I: RAG Engineering: software development with advanced AI implementations",
            ),
            {
              participants: [participant("Ing. Enrique Aguilar Vargas, PhD.")],
            },
          ),
          agendaItem(
            "09:30-09:45",
            "presentation",
            text(
              "Clasificación de la calidad del banano mediante aprendizaje automático explicable: una perspectiva para el sector exportador ecuatoriano",
              "Explainable machine-learning classification of banana quality: a perspective for Ecuador's export sector",
            ),
            { participants: [participant("Ing. Roberto Carlos Cobeña")] },
          ),
          agendaItem(
            "09:45-10:00",
            "presentation",
            text(
              "IoT ULEAM: una plataforma para temas multidisciplinarios",
              "IoT ULEAM: A Platform for Multidisciplinary Topics",
            ),
            { participants: [participant("Ing. William Zamora Mero, PhD.")] },
          ),
          agendaItem(
            "10:00-10:15",
            "presentation",
            text(
              "Modelo de contingencia para la detección y respuesta ante ataques informáticos en Ecuador",
              "Contingency model for detecting and responding to cyberattacks in Ecuador",
            ),
            { participants: [participant("Ing. Jeremy Intriago Palacios")] },
          ),
          agendaItem(
            "10:15-10:30",
            "break",
            text("Receso de la mañana", "Morning break"),
          ),
          agendaItem(
            "10:30-10:45",
            "presentation",
            text(
              "Acuicultura de precisión en laboratorio: sistema IoT de bajo costo para el monitoreo continuo de la calidad del agua en el cultivo de camarón",
              "Laboratory precision aquaculture: a low-cost IoT system for continuous water-quality monitoring in shrimp farming",
            ),
            { participants: [participant("Ing. Mike Machuca Ávalos, Mg.")] },
          ),
          agendaItem(
            "10:45-11:00",
            "presentation",
            text(
              "Integración de MCP y LLM para consultas conversacionales en bases de datos empresariales",
              "Integration of MCP and LLM for conversational queries in enterprise databases",
            ),
            { participants: [participant("Ing. Josselyn Gómez Bravo, Mg.")] },
          ),
          agendaItem(
            "11:00-11:15",
            "presentation",
            text(
              "Análisis sistemático de la participación ciudadana electrónica universitaria",
              "Systematic analysis of electronic citizen participation in universities",
            ),
            { participants: [participant("Ing. David Vilañez")] },
          ),
        ],
      },
      {
        id: "agrociencias-tarde",
        track: "agro",
        label: text("Track Agrociencias", "Agrosciences Track"),
        title: text("Sesión de la tarde", "Afternoon session"),
        description: text(
          "Conferencias sobre mitigación climática, finanzas verdes, innovación alimentaria y competencia económica.",
          "Presentations on climate mitigation, green finance, food innovation, and economic competition.",
        ),
        venue: text(
          "Paraninfo Alfonso Aguilar Ruilova",
          "Alfonso Aguilar Ruilova Auditorium",
        ),
        format: text("Presencial", "In person"),
        moderators: text(
          "Moderador: Ing. Aldo Mendoza",
          "Moderator: Ing. Aldo Mendoza",
        ),
        items: [
          agendaItem(
            "14:00-14:40",
            "presentation",
            text(
              "Secuestro de carbono y mitigación de GEI en sistemas agropecuarios",
              "Carbon sequestration and greenhouse-gas mitigation in agricultural systems",
            ),
            {
              participants: [
                participant("Dr. Gerardo Pámanes-Carrasco", {
                  profileId: "gerardo-pamanes-carrasco",
                  affiliation: text(
                    "Instituto de Silvicultura e Industria de la Madera, México",
                    "Institute of Forestry and Wood Industry, Mexico",
                  ),
                }),
              ],
            },
          ),
          agendaItem(
            "14:40-15:20",
            "presentation",
            text("Bonos verdes", "Green bonds"),
            {
              participants: [
                participant("Ing. Carlo Magno Delgado", {
                  affiliation: text("ULEAM", "ULEAM"),
                }),
              ],
            },
          ),
          agendaItem(
            "15:20-16:00",
            "presentation",
            text(
              "Grajeas de frutas liofilizadas",
              "Freeze-dried fruit dragées",
            ),
            {
              participants: [
                participant("Ing. Sahian Macías Zambrano", {
                  profileId: "sahian-macias-zambrano",
                  affiliation: text("KARANA HEF S.A.S.", "KARANA HEF S.A.S."),
                }),
              ],
            },
          ),
          agendaItem(
            "16:00-16:40",
            "presentation",
            text(
              "Retos e importancia de la competencia económica",
              "Challenges and importance of economic competition",
            ),
            {
              participants: [
                participant("Eco. David Segovia Araujo", {
                  profileId: "david-segovia-araujo",
                  affiliation: text(
                    "Intendente General Técnico, Superintendencia de Competencia Económica del Ecuador",
                    "General Technical Superintendent, Superintendency of Economic Competition of Ecuador",
                  ),
                }),
              ],
            },
          ),
          agendaItem(
            "16:40-17:20",
            "presentation",
            text("Ponencia por confirmar", "Presentation to be confirmed"),
            {
              participants: [
                participant("Ministerio de Agricultura", {
                  affiliation: text(
                    "Ministerio de Agricultura",
                    "Ministry of Agriculture",
                  ),
                }),
              ],
            },
          ),
        ],
      },
      {
        id: "ti-tarde",
        track: "tech",
        label: text(
          "Track Tecnologías de la Información",
          "Information Technologies Track",
        ),
        title: text("Sesión de la tarde", "Afternoon session"),
        description: text(
          "Conferencia magistral y ponencias sobre fraude financiero, inventarios, robótica, ciencia de datos y DevSecOps.",
          "Keynote and presentations on financial fraud, inventory systems, robotics, data science, and DevSecOps.",
        ),
        venue: text(
          "Sala virtual de Tecnologías de la Información",
          "Information Technologies virtual room",
        ),
        format: text("Virtual sincrónica", "Synchronous virtual"),
        moderators: text(
          "Chair: Ing. Adriana Macías Espinales, Mg.",
          "Chair: Ing. Adriana Macías Espinales, Mg.",
        ),
        zoomUrl: "https://us02web.zoom.us/j/82059430144",
        items: [
          agendaItem(
            "15:00-15:30",
            "keynote",
            text("Conferencia magistral II", "Keynote II"),
            {
              description: text(
                "Conferencia magistral de la tarde.",
                "Afternoon keynote.",
              ),
              participants: [participant("Ing. Miguel Botto Tobar, PhD.")],
            },
          ),
          agendaItem(
            "15:30-15:45",
            "presentation",
            text(
              "Marco de aprendizaje por ensamble explicable para la detección de fraude financiero en tiempo real",
              "Explainable Ensemble Learning Framework for Real-Time Financial Fraud Detection",
            ),
            { participants: [participant("Ing. Bhuthamekala Prasanthi")] },
          ),
          agendaItem(
            "15:45-16:00",
            "presentation",
            text(
              "Aplicación web para la gestión de inventarios en la Escuela de Pesca del Pacífico Oriental",
              "Web application for inventory management at the Eastern Pacific Fishing School",
            ),
            { participants: [participant("Ing. Jerick Bailon Quijije")] },
          ),
          agendaItem(
            "16:00-16:15",
            "presentation",
            text(
              "Aplicación robótica para mejorar el nivel de oxígeno de las piscinas camaroneras",
              "Robotic application to improve oxygen levels in shrimp ponds",
            ),
            { participants: [participant("Ing. Bryan Macías Alcívar")] },
          ),
          agendaItem(
            "16:15-16:30",
            "break",
            text("Receso de la tarde", "Afternoon break"),
          ),
          agendaItem(
            "16:30-16:45",
            "presentation",
            text(
              "Aplicación de IA y ciencia de datos para predecir y optimizar procesos mediante métodos estadísticos",
              "Applying AI and data science to predict and optimize processes using statistical methods",
            ),
            { participants: [participant("Srta. Brittany García Peñarrieta")] },
          ),
          agendaItem(
            "16:45-17:00",
            "presentation",
            text(
              "Propuesta pedagógica basada en DevSecOps para fortalecer las competencias de desarrollo seguro en estudiantes de ingeniería de software",
              "DevSecOps-based pedagogical proposal to strengthen secure development skills in software engineering students",
            ),
            {
              participants: [participant("Ing. Sandra Soledispa Pereira, Mg.")],
            },
          ),
        ],
      },
    ],
    speakerProfileIds: [
      "issam-touhami",
      "manuel-peralvo",
      "gerardo-pamanes-carrasco",
      "sahian-macias-zambrano",
      "david-segovia-araujo",
    ],
  },
  {
    slug: "day-3-open-house",
    day: text("Día 3", "Day 3"),
    date: text("Viernes 17 de julio de 2026", "Friday, July 17, 2026"),
    eyebrow: text("Día 3 · Casa Abierta", "Day 3 · Open House"),
    title: text(
      "Casa Abierta FACIVITEC y pósters científicos",
      "FACIVITEC Open House and scientific posters",
    ),
    description: text(
      "Jornada académica en Plaza Centenario con la Casa Abierta FACIVITEC y la presentación de pósters científicos aceptados.",
      "Academic program at Plaza Centenario featuring the FACIVITEC Open House and accepted scientific poster presentations.",
    ),
    facts: [
      {
        label: text("Fecha", "Date"),
        value: text("Viernes 17 de julio de 2026", "Friday, July 17, 2026"),
      },
      {
        label: text("Inicio", "Start"),
        value: text("09:00", "09:00"),
      },
      {
        label: text("Sede", "Venue"),
        value: text("Plaza Centenario", "Plaza Centenario"),
      },
    ],
    sessions: [
      {
        id: "casa-abierta-facivitec",
        track: "general",
        label: text("Jornada académica", "Academic program"),
        title: text("Casa Abierta FACIVITEC", "FACIVITEC Open House"),
        description: text(
          "Exposición académica de la Facultad de Ciencias de la Vida y Tecnologías con participación de los tracks de la conferencia.",
          "Academic exhibition by the Faculty of Life Sciences and Technologies with participation from the conference tracks.",
        ),
        venue: text("Plaza Centenario", "Plaza Centenario"),
        format: text("Presencial", "In person"),
        items: [
          agendaItem(
            "09:00",
            "ceremony",
            text("Casa Abierta FACIVITEC", "FACIVITEC Open House"),
          ),
          agendaItem(
            "09:00",
            "poster",
            text(
              "Presentación de pósters científicos aceptados",
              "Accepted scientific poster presentations",
            ),
            {
              description: text(
                "Presentación de pósters como parte de la jornada académica.",
                "Poster presentations as part of the academic program.",
              ),
            },
          ),
        ],
      },
    ],
    speakerProfileIds: [],
  },
];

export function isProgramDaySlug(value: string): value is ProgramDaySlug {
  return programDayDetails.some((day) => day.slug === value);
}

export function getProgramDayDetail(
  slug: ProgramDaySlug,
): ProgramDayDetail | undefined {
  return programDayDetails.find((day) => day.slug === slug);
}
