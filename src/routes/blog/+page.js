/** @type {import('./$types').PageLoad} */
export function load() {
	return {
		posts: [
			{
				slug: 'short-post',
				title: 'A Quick Thought',
				excerpt: 'Short and sweet.',
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
