import type { ProgramSpeakerProfile } from "@/types/conference";
import type { LocalizedText } from "@/types/locale";

const text = (es: string, en: string): LocalizedText => ({ es, en });

export const programSpeakerProfiles: ProgramSpeakerProfile[] = [
  {
    id: "diego-toala-palma",
    name: "Mg. Ing. Diego Toala Palma",
    role: text(
      "Conferencista magistral del track de Tecnologías de la Información",
      "Information Technologies track keynote speaker",
    ),
    image: {
      src: "/speakers/day-1-ti/diego-toala-palma.jpeg",
      alt: text(
        "Retrato de Diego Toala Palma",
        "Portrait of Diego Toala Palma",
      ),
    },
    biography: [
      text(
        "Con 20 años de trayectoria en el ámbito de las TIC, Diego Toala ha liderado proyectos de integración tecnológica en comercio electrónico y gobierno digital, reconocidos por Microsoft como casos de éxito.",
        "With 20 years of experience in ICT, Diego Toala has led technology integration projects in e-commerce and digital government, recognized by Microsoft as success stories.",
      ),
      text(
        "Su visión combina innovación, negocios e impacto social. Fue reconocido como Innovador Social de Ecuador por el Instituto Tecnológico de Massachusetts (MIT).",
        "His work combines innovation, business, and social impact. He was recognized as a Social Innovator of Ecuador by the Massachusetts Institute of Technology (MIT).",
      ),
      text(
        "Es Ingeniero en Sistemas por la ULEAM, MBA por la Universidad Autónoma de Barcelona y Máster en Investigación Matemática por la UTM. Actualmente dirige proyectos tecnológicos y desarrolla investigaciones sobre soluciones numéricas de ecuaciones diferenciales parciales mediante inteligencia artificial.",
        "He holds a Systems Engineering degree from ULEAM, an MBA from the Autonomous University of Barcelona, and a Master's degree in Mathematical Research from UTM. He currently leads technology projects and researches numerical solutions to partial differential equations using artificial intelligence.",
      ),
    ],
  },
  {
    id: "marcos-vinicio-sotomayor",
    name: "PhD. Marcos Vinicio Sotomayor",
    role: text(
      "Conferencista magistral del track de Tecnologías de la Información",
      "Information Technologies track keynote speaker",
    ),
    image: {
      src: "/speakers/day-1-ti/marcos-vinicio-sotomayor.jpg",
      alt: text(
        "Retrato de Marcos Vinicio Sotomayor",
        "Portrait of Marcos Vinicio Sotomayor",
      ),
    },
  },
  {
    id: "lauro-garcia",
    name: "Lauro García",
    role: text(
      "Líder de Educación para Latinoamérica en Google Cloud",
      "Education Lead for Latin America at Google Cloud",
    ),
    affiliation: text(
      "Google Cloud Education LATAM",
      "Google Cloud Education LATAM",
    ),
    image: {
      src: "/speakers/day-1-ti/lauro-garcia.jpeg",
      alt: text("Retrato de Lauro García", "Portrait of Lauro García"),
    },
    biography: [
      text(
        "Como Líder de Educación para Latinoamérica en Google Cloud, Lauro García crea e implementa estrategias de transformación digital orientadas a modernizar el ámbito educativo.",
        "As Education Lead for Latin America at Google Cloud, Lauro García creates and implements digital transformation strategies focused on modernizing education.",
      ),
      text(
        "Su trayectoria supera los 15 años en el sector tecnológico, con funciones en administración de proyectos, ventas y desarrollo de negocios para organizaciones como Amazon Web Services, Motorola Solutions y Nokia.",
        "His career spans more than 15 years in the technology sector, with roles in project management, sales, and business development for organizations including Amazon Web Services, Motorola Solutions, and Nokia.",
      ),
      text(
        "Es Ingeniero Mecatrónico por el Tecnológico de Monterrey y posee un MBA de EGADE Business School. Su preparación internacional incluye estudios en Yale School of Management y en la European School of Management and Technology.",
        "He is a Mechatronics Engineer from Tecnológico de Monterrey and holds an MBA from EGADE Business School. His international education includes studies at Yale School of Management and the European School of Management and Technology.",
      ),
    ],
  },
  {
    id: "rita-cedeno-luna",
    name: "Ing. Rita Cedeño Luna, Mgs.",
    role: text(
      "Conferencista de cierre del track de Tecnologías de la Información",
      "Information Technologies track closing keynote speaker",
    ),
    image: {
      src: "/speakers/day-1-ti/rita-cedeno.jpeg",
      alt: text("Retrato de Rita Cedeño Luna", "Portrait of Rita Cedeño Luna"),
    },
    biography: [
      text(
        "Ritha Mireya Cedeño Luna es Magíster en Gestión Estratégica de la Información y el Conocimiento en las Organizaciones por la Universitat Oberta de Catalunya. Es una profesional ecuatoriana con trayectoria académica y tecnológica, y ha sido docente de la ULEAM.",
        "Ritha Mireya Cedeño Luna holds a Master's degree in Strategic Management of Information and Knowledge in Organizations from Universitat Oberta de Catalunya. She is an Ecuadorian professional with an academic and technology background and has served as a faculty member at ULEAM.",
      ),
      text(
        "Es miembro de la red académica Verano TIC - Panamá y ha sido conferencista internacional en Colombia, Perú, Cuba y Panamá sobre análisis de datos, inteligencia artificial para la toma de decisiones, plataformas adaptativas y evaluación institucional.",
        "She is a member of the Verano TIC - Panamá academic network and has been an international speaker in Colombia, Peru, Cuba, and Panama on data analysis, artificial intelligence for decision-making, adaptive platforms, and institutional evaluation.",
      ),
      text(
        "Ha colaborado con la Universidad De La Salle Bajío de México como líder de un proyecto para incorporar un chatbot con inteligencia artificial en servicios para la comunidad universitaria de la ULEAM. También cuenta con publicaciones sobre innovación educativa, tecnología y desarrollo institucional.",
        "She has collaborated with Universidad De La Salle Bajío in Mexico as project lead for incorporating an artificial intelligence chatbot into services for the ULEAM university community. She also has publications on educational innovation, technology, and institutional development.",
      ),
    ],
  },
  {
    id: "issam-touhami",
    name: "PhD. Issam Touhami",
    role: text(
      "Conferencista magistral del track de Ciencias Biológicas y Ambientales",
      "Biological and Environmental Sciences track keynote speaker",
    ),
    affiliation: text(
      "Universidad de Cartago e Instituto Nacional de Investigación en Ingeniería Rural, Agua y Bosques (INRGREF), Túnez",
      "University of Carthage and National Research Institute of Rural Engineering, Water and Forestry (INRGREF), Tunisia",
    ),
    image: {
      src: "/speakers/day-2/issam-touhami.jpeg",
      alt: text("Retrato de Issam Touhami", "Portrait of Issam Touhami"),
    },
    biography: [
      text(
        "Issam Touhami es investigador en ecología forestal en el Instituto Nacional de Investigación en Ingeniería Rural, Agua y Bosques (INRGREF) de Túnez. Posee dos títulos de máster, uno por el Centro Internacional de Altos Estudios Agronómicos Mediterráneos de Zaragoza y otro por la Universidad de Alicante, donde también obtuvo el Doctorado en Ciencias Ambientales.",
        "Issam Touhami is a forest ecology researcher at Tunisia's National Research Institute of Rural Engineering, Water and Forestry (INRGREF). He holds two master's degrees, one from the Mediterranean Agronomic Institute of Zaragoza and another from the University of Alicante, where he also earned a PhD in Environmental Sciences.",
      ),
      text(
        "Sus líneas de investigación se centran en la adaptación de los bosques al cambio climático, la conservación de los recursos forestales y la restauración de ecosistemas mediterráneos. Ha participado como líder y miembro en proyectos nacionales e internacionales, entre ellos MedFireWise, ResAlliance, WildFood, ECOPLANTMED y MENFRI.",
        "His research focuses on forest adaptation to climate change, forest resource conservation, and the restoration of Mediterranean ecosystems. He has contributed as a leader and team member to national and international projects including MedFireWise, ResAlliance, WildFood, ECOPLANTMED, and MENFRI.",
      ),
    ],
    presentation: {
      title: text(
        "Dinámica y restauración de ecosistemas forestales en Túnez frente al cambio climático: casos prácticos",
        "Dynamics and ecological restoration of forest ecosystems in Tunisia in response to climate change: case studies",
      ),
      abstract: text(
        "Las perturbaciones climáticas representan una amenaza creciente para la estabilidad de los ecosistemas mediterráneos, lo que hace necesario un enfoque multidisciplinar que combine herramientas de diagnóstico espacial y estrategias de conservación aplicada. Este enfoque permite evaluar la vulnerabilidad ecológica y orientar acciones de restauración en hábitats degradados. La metodología se basa en el monitoreo de la dinámica de la vegetación forestal mediante el análisis de series temporales de imágenes MODIS-NDVI y técnicas de fenología de la superficie terrestre (LSP). Estas herramientas permiten detectar cambios en la actividad vegetativa y evaluar la respuesta de los ecosistemas frente a las anomalías climáticas. En particular, se analizan los efectos de las sequías prolongadas, consideradas uno de los principales factores de estrés ambiental debido a su impacto sobre la productividad, la disminución de la cobertura vegetal y el incremento de la mortalidad forestal. A partir de estos diagnósticos, se desarrollan estrategias de restauración ecológica centradas en la conservación y utilización de especies autóctonas adaptadas a las condiciones ambientales locales. La integración de la teledetección con el análisis del estrés hídrico facilita la identificación y cartografía de las áreas más vulnerables, lo que permite priorizar las intervenciones y optimizar la gestión de los recursos disponibles. En conjunto, los resultados proporcionan una base científica para la selección de flora nativa resiliente al cambio climático y favorecen la transferencia del conocimiento hacia la gestión forestal sostenible, contribuyendo a la conservación de los ecosistemas mediterráneos y a la mitigación de los efectos del cambio global.",
        "Climate disturbances pose an increasing threat to the stability of Mediterranean ecosystems, making it necessary to adopt a multidisciplinary approach that combines advanced spatial assessment tools with applied conservation strategies. This approach enables the evaluation of ecological vulnerability and supports effective restoration actions in degraded habitats. The methodology is based on monitoring forest vegetation dynamics through MODIS-NDVI time-series analysis and Land Surface Phenology (LSP) techniques. These tools make it possible to detect changes in vegetation activity and assess ecosystem responses to climatic anomalies. Particular attention is given to prolonged droughts, one of the main environmental stressors because of their impact on ecosystem productivity, vegetation decline, and increased forest mortality. Based on these assessments, ecological restoration strategies focus on conserving and using native species adapted to local environmental conditions. Integrating remote sensing with water-stress analysis facilitates the identification and mapping of the most vulnerable areas, allowing restoration efforts to be prioritized and resources to be managed more efficiently. Overall, the results provide a scientific basis for selecting climate-resilient native flora and promote the transfer of knowledge to sustainable forest management, contributing to the conservation of Mediterranean ecosystems and efforts to mitigate the impacts of global environmental change.",
      ),
      keywords: text(
        "Fenología de la superficie terrestre (LSP), MODIS-NDVI, especies autóctonas, restauración ecológica, Túnez",
        "Land Surface Phenology (LSP), MODIS-NDVI, native species, ecological restoration, Tunisia",
      ),
    },
  },
  {
    id: "manuel-peralvo",
    name: "MSc. Manuel Peralvo",
    role: text(
      "Conferencista magistral del track de Ciencias Biológicas y Ambientales",
      "Biological and Environmental Sciences track keynote speaker",
    ),
    affiliation: text(
      "Consorcio para el Desarrollo Sostenible de la Ecorregión Andina (CONDESAN)",
      "Consortium for the Sustainable Development of the Andean Ecoregion (CONDESAN)",
    ),
    image: {
      src: "/speakers/day-2/manuel-peralvo.jpeg",
      alt: text("Retrato de Manuel Peralvo", "Portrait of Manuel Peralvo"),
    },
    biography: [
      text(
        "Manuel Peralvo es geógrafo especializado en sistemas socioambientales, modelamiento ambiental para la toma de decisiones y articulación de herramientas de gestión sostenible del territorio en procesos de gobernanza ambiental a múltiples escalas.",
        "Manuel Peralvo is a geographer specializing in socio-environmental systems, environmental modeling for decision support, and the integration of sustainable territorial management tools into environmental governance processes at multiple scales.",
      ),
      text(
        "Cuenta con 25 años de experiencia en la región Andina, donde ha implementado iniciativas de desarrollo sostenible e investigación que integran ciencias naturales y sociales con manejo sostenible de la tierra, planificación del uso del suelo, monitoreo socioambiental, conservación y restauración de ecosistemas en un contexto de cambio climático.",
        "He has 25 years of experience in the Andean region, where he has implemented sustainable development and research initiatives that integrate natural and social sciences with sustainable land management, land-use planning, socio-environmental monitoring, and ecosystem conservation and restoration in the context of climate change.",
      ),
      text(
        "Actualmente coordina el Proyecto Neutralidad de la Degradación de la Tierra en Ecuador, una iniciativa colaborativa entre el Ministerio de Ambiente y Energía, el Ministerio de Agricultura y Ganadería, la FAO y CONDESAN.",
        "He currently coordinates Ecuador's Land Degradation Neutrality Project, a collaborative initiative involving the Ministry of Environment and Energy, the Ministry of Agriculture and Livestock, FAO, and CONDESAN.",
      ),
    ],
    presentation: {
      title: text(
        "Neutralidad de la degradación de la tierra: opciones para alcanzar desarrollo sostenible en paisajes productivos",
        "Land degradation neutrality: options to achieve sustainable development in productive landscapes",
      ),
      abstract: text(
        "La degradación de tierras amenaza la salud de los ecosistemas, la soberanía alimentaria y el bienestar de las poblaciones a corto y largo plazo. Bajo diversas causas estructurales y directas, la pérdida de capacidad de los paisajes para proveer una base de recursos adecuada interactúa con otros problemas globales como el cambio climático y compromete la posibilidad de alcanzar objetivos de desarrollo sostenible. El manejo sostenible de la tierra plantea un enfoque integrado, con objetivos de conservación de ecosistemas, mitigación del impacto del uso del suelo, y restauración y recuperación de áreas degradadas. Este enfoque requiere una base sólida de gobernanza y planificación territorial, generación de conocimiento científico, implementación de prácticas de producción sostenible y vinculación de incentivos que permitan que estos procesos se mantengan a futuro. La Neutralidad de la Degradación de la Tierra promueve transiciones sostenibles en sistemas productivos, de manera que los impactos negativos se balanceen con acciones que evitan, mitigan y revierten procesos de degradación. El Proyecto Neutralidad de la Degradación de la Tierra implementa pruebas de concepto de este enfoque, busca identificar elementos específicos para su implementación en el contexto de Ecuador e incide en procesos de generación de conocimiento y política pública.",
        "Land degradation threatens ecosystem health, food security, and the well-being of local communities in the short and long term. Driven by diverse underlying and direct causes, the loss and degradation of the land resource base interact with other global challenges such as climate change and compromise the possibility of achieving sustainable development goals. Sustainable land management is an integrated approach that seeks to preserve ecosystems, mitigate the impacts of land use, and restore degraded lands. It requires a solid basis of integrated land-use planning, governance, scientific knowledge, sustainable production practices, and incentives that support widespread, long-term adoption. Land Degradation Neutrality promotes sustainable transitions in which negative impacts are balanced by actions that avoid, mitigate, and reverse degradation processes. The Land Degradation Neutrality Project implements proofs of concept for this approach, seeks to identify key elements for its implementation in Ecuador, and contributes to knowledge generation and public policy processes.",
      ),
      keywords: text(
        "Manejo sostenible de la tierra, gobernanza, monitoreo, degradación de tierras",
        "Sustainable land management, governance, monitoring, land degradation",
      ),
    },
  },
  {
    id: "gerardo-pamanes-carrasco",
    name: "Dr. Gerardo Antonio Pámanes-Carrasco",
    role: text(
      "Ponente del track de Agrociencias",
      "Agrosciences track speaker",
    ),
    affiliation: text(
      "Instituto de Silvicultura e Industria de la Madera, México",
      "Institute of Forestry and Wood Industry, Mexico",
    ),
    image: {
      src: "/speakers/day-2/gerardo-pamanes-carrasco.png",
      alt: text(
        "Retrato de Gerardo Antonio Pámanes-Carrasco",
        "Portrait of Gerardo Antonio Pámanes-Carrasco",
      ),
    },
  },
  {
    id: "sahian-macias-zambrano",
    name: "Ing. Sahian Macías Zambrano",
    role: text(
      "Ponente del track de Agrociencias",
      "Agrosciences track speaker",
    ),
    affiliation: text("KARANA HEF S.A.S.", "KARANA HEF S.A.S."),
    image: {
      src: "/speakers/day-2/sahian-macias-zambrano.png",
      alt: text(
        "Retrato de Sahian Macías Zambrano",
        "Portrait of Sahian Macías Zambrano",
      ),
    },
  },
  {
    id: "david-segovia-araujo",
    name: "Eco. David Segovia Araujo",
    role: text(
      "Ponente del track de Agrociencias",
      "Agrosciences track speaker",
    ),
    affiliation: text(
      "Superintendencia de Competencia Económica del Ecuador",
      "Superintendency of Economic Competition of Ecuador",
    ),
    image: {
      src: "/speakers/day-2/david-segovia-araujo.png",
      alt: text(
        "Retrato de David Segovia Araujo",
        "Portrait of David Segovia Araujo",
      ),
    },
  },
];

export function getProgramSpeakerProfile(
  id: string,
): ProgramSpeakerProfile | undefined {
  return programSpeakerProfiles.find((profile) => profile.id === id);
}
