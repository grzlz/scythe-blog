/** @type {import('./$types').PageLoad} */
export function load() {
	return {
		posts: [
			{
				slug: 'short-post',
				title: 'El internet y el capital.',
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
				title: 'Some Insight',
				excerpt: 'A few paragraphs of insight.',
				content: `
					<p>This post explores a topic with moderate depth.</p>
					<p>It has a few paragraphs, but doesn't drag on.</p>
					<p>Perfect for a coffee break read.</p>
				`
			},
			{
				slug: 'long-essay',
				title: 'Deep Dive into Web Performance',
				excerpt: 'A comprehensive look at optimizing performance.',
				content: `
					<p>When building modern web apps, performance matters.</p>
					<p>We’ll look into TTFB, LCP, CLS, and other web vitals.</p>
					<p>Techniques include prefetching, lazy loading, tree-shaking, and optimizing asset delivery through CDNs.</p>
					<p>Understanding how browsers parse and render HTML helps in structuring pages efficiently.</p>
					<p>Another key area is JavaScript — keeping bundles small and scoped helps performance significantly.</p>
					<p>Image optimization, adaptive loading strategies, and measuring through tools like Lighthouse and WebPageTest are vital.</p>
					<p>This article aims to be a complete reference for performance-minded developers.</p>
				`
			},
			{
				slug: 'gallery-showcase',
				title: 'Photo Showcase',
				excerpt: 'A visual-heavy post with lots of images.',
				content: `
					<img src="https://source.unsplash.com/random/300x200?1" alt="random" />
					<img src="https://source.unsplash.com/random/300x300?2" alt="random" />
					<img src="https://source.unsplash.com/random/300x250?3" alt="random" />
					<img src="https://source.unsplash.com/random/300x400?4" alt="random" />
				`
			}
		]
	};
}
