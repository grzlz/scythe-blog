/** @type {import('./$types').PageLoad} */
export function load() {
	return {
		posts: [
			{
				slug: 'short-post',
				title: 'El internet y el capital',
				excerpt: '¿Cómo llegamos aquí?',
				content: `<p>El internet es una innovación capitalista.</p>
				<p>Prometía descentralización y acceso, pero entregó exactamente lo opuesto.</p>
				<p>En lugar de democratizar el conocimiento, creó muros de pago y algoritmos que priorizan el engagement —eufemismo para potencial adictivo, digámoslo ya de una vez— por encima de la utilidad o incluso la veracidad del contenido que viralizan.</p>
				<p>En lugar de descentralizar el poder, consolidó monopolios sin precedentes: Amazon, Google y Microsoft no solo dominan sus mercados, sino que controlan también la infraestructura digital global. Después hablaremos de la nube, pero por ahora basta con recordar estos nombres: AWS, GCP, Azure.</p><p>En lugar de liberar el trabajo, lo precarizó sistemáticamente. La "gig economy" transfiere los riesgos y los costos estructurales desde las empresas hacia trabajadores sin seguridad social.</p>
				<p>Y una cosa que nunca le voy a perdonar: nos encerró a todos en una cámara de eco con otras 50 o 100 almas que, con el tiempo, se fueron volviendo fantasmas.</p>
				<p>Así, cada promesa emancipadora del internet terminó invertida en su contrario.</p>
				<p>¿Por qué?</p>
				<p>Porque cuando subordinas el desarrollo tecnológico a la lógica extractivista del capital privado, la tecnología no se orienta a resolver problemas colectivos, sino a extraer valor para unos pocos.</p>
				<p>Entonces, si el problema no es la tecnología sino su orientación capitalista, la salida no puede ser técnica: tiene que ser política.</p>
				<p>Necesitamos reorganizar la producción en función del beneficio público, no del beneficio privado.</p>
				<p>Pero eso abre una nueva pregunta: ¿cómo definimos el beneficio público? ¿Qué medimos? ¿Cómo lo medimos? Y, sobre todo: ¿cómo evitamos que esa medida —una vez convertida en objetivo— deje de ser una buena medida?</p>
				<p>¿Cómo escapamos de la maldición de Goodhart?</p>
				`
			},
			{
			slug: 'medium-insight',
			title: 'Attentions as a commodity',
			excerpt: 'Exploring how attention has become a valuable resource in the digital age.',
			content: `
				<p>In today’s digital economy, attention has transformed into one of the most valuable commodities.</p>
				<p>Platforms and advertisers fiercely compete for the scarce resource of user attention, monetizing every second.</p>
				<p>This article provides insights into the dynamics of attention economics, perfect for reflecting during your coffee break.</p>
			`
			},
			{
			slug: 'long-essay',
			title: 'La maldición de Goodhart',
			excerpt: 'Cómo las métricas pueden pervertir los objetivos que buscan optimizar.',
			content: `
				<p>La ley de Goodhart afirma que cuando una métrica se convierte en objetivo, deja de ser una buena métrica.</p>
				<p>Este ensayo explora cómo este fenómeno impacta en áreas desde la gestión empresarial hasta las políticas públicas.</p>
				<p>Se analizarán ejemplos concretos en educación, salud, y tecnología, mostrando cómo optimizar una métrica puede generar consecuencias no deseadas.</p>
				<p>La comprensión profunda de este concepto es esencial para establecer objetivos y métricas que verdaderamente reflejen el éxito deseado.</p>
				<p>Este artículo ofrece recomendaciones para evitar la maldición de Goodhart en tu organización.</p>
			`
			},
			{
			slug: 'gallery-showcase',
			title: '¿Qué proponemos realmente?',
			excerpt: 'Bueno, pero ¿qué es Scythe?',
			content: `
				<p>Esta colección visual expresa claramente qué valores promovemos y cómo imaginamos un futuro diferente.</p>
				<img src="https://source.unsplash.com/random/300x200?innovation" alt="Innovación" />
				<img src="https://source.unsplash.com/random/300x300?community" alt="Comunidad" />
				<img src="https://source.unsplash.com/random/300x250?sustainability" alt="Sostenibilidad" />
				<img src="https://source.unsplash.com/random/300x400?future" alt="Futuro" />
			`
			}

		]
	};
}
