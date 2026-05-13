import type { ImportantDate } from "@/types/conference";

/**
 * Calendario publico de ICLSET 2026.
 * Solo incluye hitos visibles para autores, asistentes y revistas aliadas,
 * desde el lanzamiento del Call for Papers hasta la culminacion del evento.
 * Las fechas administrativas internas (aval academico, chairs, acuerdos
 * editoriales, seguimiento editorial post-evento) viven en docs/PLANIFICACION.md.
 */
export const importantDates: ImportantDate[] = [
	{
		key: "cfp",
		date: {
			es: "11-13 de mayo de 2026",
			en: "May 11-13, 2026",
		},
		title: {
			es: "Lanzamiento del Call for Papers",
			en: "Call for Papers launch",
		},
		description: {
			es: "Publicación de convocatoria, plantillas y lineamientos de anonimización.",
			en: "Publication of the call, templates, and anonymization guidelines.",
		},
		status: "confirmed",
	},
	{
		key: "submission",
		date: {
			es: "27 de abril-14 de junio de 2026",
			en: "April 27-June 14, 2026",
		},
		title: {
			es: "Recepción de artículos en CMT",
			en: "CMT submission window",
		},
		description: {
			es: "Recepción de full papers y pósters científicos mediante Microsoft CMT.",
			en: "Full paper and scientific poster submission through Microsoft CMT.",
		},
		status: "confirmed",
	},
	{
		key: "review-assignment",
		date: {
			es: "15-17 de junio de 2026",
			en: "June 15-17, 2026",
		},
		title: {
			es: "Asignación de revisores",
			en: "Reviewer assignment",
		},
		description: {
			es: "Los Track Chairs asignan dos revisores por contribución y controlan conflictos de interés.",
			en: "Track Chairs assign two reviewers per contribution and control conflicts of interest.",
		},
		status: "confirmed",
	},
	{
		key: "peer-review",
		date: {
			es: "17-30 de junio de 2026",
			en: "June 17-30, 2026",
		},
		title: {
			es: "Revisión doble ciego",
			en: "Double-blind review",
		},
		description: {
			es: "Evaluación por pares mediante rúbrica, comentarios anonimizados y decisión por track.",
			en: "Peer evaluation through rubric, anonymized comments, and track-level decision.",
		},
		status: "confirmed",
	},
	{
		key: "notification",
		date: {
			es: "1-3 de julio de 2026",
			en: "July 1-3, 2026",
		},
		title: {
			es: "Notificación a autores",
			en: "Author notification",
		},
		description: {
			es: "Comunicación de aceptación, aceptación con cambios, revisión mayor o rechazo.",
			en: "Notification of acceptance, minor revision, major revision, or rejection.",
		},
		status: "confirmed",
	},
	{
		key: "camera-ready",
		date: {
			es: "4-10 de julio de 2026",
			en: "July 4-10, 2026",
		},
		title: {
			es: "Versión final",
			en: "Final version",
		},
		description: {
			es: "Entrega de versiones finales de trabajos aceptados incorporando observaciones.",
			en: "Final versions of accepted work are submitted with reviewer comments addressed.",
		},
		status: "confirmed",
	},
	{
		key: "registration",
		date: {
			es: "4 de mayo-14 de julio de 2026",
			en: "May 4-July 14, 2026",
		},
		title: {
			es: "Inscripciones",
			en: "Registration",
		},
		description: {
			es: "Registro institucional de asistentes, autores, docentes y profesionales.",
			en: "Institutional registration for attendees, authors, faculty, and professionals.",
		},
		status: "confirmed",
	},
	{
		key: "event",
		date: {
			es: "15-17 de julio de 2026",
			en: "July 15-17, 2026",
		},
		title: {
			es: "Ejecución de ICLSET 2026",
			en: "ICLSET 2026 conference",
		},
		description: {
			es: "Tres jornadas híbridas en ULEAM Manta, Paraninfo Alfonso Aguilar Ruilova, Plaza Centenario y salas Zoom institucionales.",
			en: "Three hybrid days at ULEAM Manta, Alfonso Aguilar Ruilova Auditorium, Plaza Centenario, and institutional Zoom rooms.",
		},
		status: "confirmed",
	},
];
