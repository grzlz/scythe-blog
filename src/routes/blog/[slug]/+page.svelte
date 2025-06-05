<script>
	/** @type {import('./$types').PageProps} */
	let { data } = $props();
	
	// Format date if available
	const formatDate = (dateString) => {
		if (!dateString) return '';
		return new Date(dateString).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	};
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={data.content.slice(0, 150)} />
	<meta property="og:title" content={data.title} />
	<meta property="og:description" content={data.content.slice(0, 150)} />
</svelte:head>

<!-- Main Container -->
<div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 font-primary">



	<!-- Main Content -->
	<main class="flex flex-col items-center px-6 py-12">
		<!-- Article Container -->
		<article class="w-full max-w-4xl">
			<!-- Article Header -->
			<header class="flex flex-col gap-6 mb-12">
				<!-- Category Badge -->
				{#if data.category}
					<div class="flex">
						<span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
							{data.category}
						</span>
					</div>
				{/if}

				<!-- Title -->
				<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 leading-tight">
					{data.title}
				</h1>

				<!-- Subtitle -->
				{#if data.subtitle}
					<p class="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed">
						{data.subtitle}
					</p>
				{/if}

				<!-- Meta Information -->
				<div class="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
					{#if data.author}
						<div class="flex items-center gap-3">
							<div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold">
								{data.author.charAt(0).toUpperCase()}
							</div>
							<div class="flex flex-col">
								<span class="font-medium text-slate-700 dark:text-slate-300">{data.author}</span>
								{#if data.publishedAt}
									<time datetime={data.publishedAt}>
										{formatDate(data.publishedAt)}
									</time>
								{/if}
							</div>
						</div>
					{:else if data.publishedAt}
						<time datetime={data.publishedAt} class="font-medium">
							{formatDate(data.publishedAt)}
						</time>
					{/if}
					
					{#if data.readTime}
						<span class="flex items-center gap-1">
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
							</svg>
							{data.readTime} min read
						</span>
					{/if}
				</div>
			</header>

			<!-- Featured Image -->
			{#if data.featuredImage}
				<div class="mb-12">
					<img 
						src={data.featuredImage} 
						alt={data.title}
						class="w-full h-64 md:h-80 lg:h-96 object-cover rounded-2xl shadow-xl"
					/>
				</div>
			{/if}

			<!-- Content Layout -->
			<div class="flex flex-col lg:flex-row gap-12">
				<!-- Main Content -->
				<div class="flex-1">
					<div class="prose prose-lg prose-slate dark:prose-invert max-w-none
								prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-slate-100
								prose-p:text-slate-700 dark:prose-p:text-slate-300 prose-p:leading-relaxed
								prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
								prose-strong:text-slate-900 dark:prose-strong:text-slate-100
								prose-code:text-pink-600 dark:prose-code:text-pink-400 prose-code:bg-slate-100 dark:prose-code:bg-slate-800
								prose-pre:bg-slate-900 dark:prose-pre:bg-slate-950
								prose-blockquote:border-l-blue-500 prose-blockquote:bg-blue-50/50 dark:prose-blockquote:bg-blue-950/20
								prose-img:rounded-lg prose-img:shadow-lg">
						{@html data.content}
					</div>

					<!-- Tags -->
					{#if data.tags && data.tags.length > 0}
						<div class="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
							<h3 class="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">Tags</h3>
							<div class="flex flex-wrap gap-2">
								{#each data.tags as tag}
									<span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium 
											   bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300
											   hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer">
										#{tag}
									</span>
								{/each}
							</div>
						</div>
					{/if}
				</div>

				<!-- Sidebar -->
				<aside class="lg:w-80 flex-shrink-0">
					<div class="sticky top-24 space-y-8">
						<!-- Table of Contents -->
						<div class="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
							<h3 class="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">
								Table of Contents
							</h3>
							<nav class="space-y-2 text-sm">
								<a href="#introduction" class="block text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1">
									Introduction
								</a>
								<a href="#main-content" class="block text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1 pl-4">
									Main Content
								</a>
								<a href="#conclusion" class="block text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1">
									Conclusion
								</a>
							</nav>
						</div>

						<!-- Share -->
						<div class="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
							<h3 class="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">
								Share this post
							</h3>
							<div class="flex gap-3">
								<button class="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
									Twitter
								</button>
								<button class="flex-1 bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
									LinkedIn
								</button>
							</div>
						</div>

						<!-- Related Posts -->
						{#if data.relatedPosts && data.relatedPosts.length > 0}
							<div class="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
								<h3 class="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">
									Related Posts
								</h3>
								<div class="space-y-4">
									{#each data.relatedPosts as post}
										<a href={post.slug} class="block group">
											<h4 class="text-sm font-medium text-slate-900 dark:text-slate-100 group-hover:text-blue-600 transition-colors leading-snug">
												{post.title}
											</h4>
											<p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
												{formatDate(post.publishedAt)}
											</p>
										</a>
									{/each}
								</div>
							</div>
						{/if}
					</div>
				</aside>
			</div>
		</article>

		<!-- Navigation -->
		<nav class="w-full max-w-4xl mt-16 pt-12 border-t border-slate-200 dark:border-slate-700">
			<div class="flex flex-col sm:flex-row justify-between gap-6">
				{#if data.previousPost}
					<a href={data.previousPost.slug} class="group flex-1">
						<div class="flex items-center gap-3 p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all">
							<svg class="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
							</svg>
							<div>
								<p class="text-sm text-slate-500 dark:text-slate-400">Previous</p>
								<h3 class="font-medium text-slate-900 dark:text-slate-100 group-hover:text-blue-600 transition-colors">
									{data.previousPost.title}
								</h3>
							</div>
						</div>
					</a>
				{/if}

				{#if data.nextPost}
					<a href={data.nextPost.slug} class="group flex-1">
						<div class="flex items-center justify-end gap-3 p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all">
							<div class="text-right">
								<p class="text-sm text-slate-500 dark:text-slate-400">Next</p>
								<h3 class="font-medium text-slate-900 dark:text-slate-100 group-hover:text-blue-600 transition-colors">
									{data.nextPost.title}
								</h3>
							</div>
							<svg class="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
							</svg>
						</div>
					</a>
				{/if}
			</div>
		</nav>
	</main>


</div>