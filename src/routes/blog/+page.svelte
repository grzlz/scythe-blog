<script>
	import { posts } from '$lib/data/posts.js';

	// Svelte 5: No need for a separate load function for simple data like this
	// The posts are directly available from the import.
</script>

<svelte:head>
	<title>All Posts | Svelte & Tailwind Blog</title>
	<meta name="description" content="A collection of insightful blog posts." />
</svelte:head>

<div class="space-y-12">
	<section class="text-center py-12 bg-white dark:bg-gray-900 shadow-lg rounded-lg">
		<h1 class="text-5xl font-bold text-sky-600 dark:text-sky-400 mb-4">Welcome to the Blog</h1>
		<p class="text-xl text-gray-600 dark:text-gray-300">
			Exploring Svelte, Tailwind, and modern web development.
		</p>
	</section>

	<section>
		<h2 class="text-3xl font-semibold mb-8 text-gray-700 dark:text-gray-200">Latest Posts</h2>
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each posts as post}
				<article
					class="bg-white dark:bg-gray-900 rounded-lg shadow-xl overflow-hidden transition-all hover:shadow-2xl hover:scale-[1.02]"
				>
					{#if post.image}
						<a href="/blog/{post.slug}">
							<img
								src={post.image}
								alt="Cover image for {post.title}"
								class="w-full h-48 object-cover"
								loading="lazy"
							/>
						</a>
					{/if}
					<div class="p-6">
						<div class="mb-3">
							{#each post.tags || [] as tag}
								<span
									class="inline-block bg-cyan-100 dark:bg-cyan-700 text-cyan-700 dark:text-cyan-200 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full"
								>
									{tag}
								</span>
							{/each}
						</div>
						<h3 class="text-2xl font-bold mb-2">
							<a href="/blog/{post.slug}" class="text-gray-800 dark:text-white hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
								{post.title}
							</a>
						</h3>
						<p class="text-gray-500 dark:text-gray-400 text-sm mb-3">
							By {post.author || 'Anonymous'} on {new Date(post.date).toLocaleDateString()}
						</p>
						<p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
							{post.excerpt}
						</p>
						<a
							href="/blog/{post.slug}"
							class="inline-block text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 font-semibold hover:underline"
						>
							Read more &rarr;
						</a>
					</div>
				</article
				>
			{/each}
		</div>
	</section>
</div>