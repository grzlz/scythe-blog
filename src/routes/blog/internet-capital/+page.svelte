<script>

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
	<title>¿Qué fue de la Information Superhighway?</title>
	<meta name="description" content='Sustituir aquí' />
	<meta property="og:title" content='¿Qué fue de la Information Superhighway?' />
	<meta property="og:description" content='El internet y sus promesas de emancipación truncadas' />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 font-primary">



	<main class="flex flex-col items-center px-0 py-0">
        <article class="w-full max-w-4xl">
            <section 
    class="relative w-full h-[90vh] flex items-center justify-center text-center bg-cover bg-center bg-no-repeat"
    style="background-image: url('/poster.png');"
  >
    <!-- Overlay for better contrast -->
    <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

    <!-- Header content on top of image -->
    <div class="relative z-10 px-6 max-w-4xl">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
        ¿Qué fue de la Information Superhighway?
      </h1>
      <p class="mt-6 text-lg md:text-xl text-gray-100 leading-relaxed drop-shadow-md">
        La Information Superhighway fue una visión del futuro de Internet en la década de 1990, donde se esperaba que la conectividad y el acceso a la información transformaran la sociedad.
      </p>
    </div>
  </section>

            <div class="flex flex-col lg:flex-row gap-12">
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
						Aquí va el contentido del artículo. Puedes incluir párrafos, imágenes, enlaces y más. Este es un ejemplo de cómo se vería el contenido del artículo con un estilo limpio y moderno.
					</div>
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

							<div class="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
								<h3 class="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">
									Related Posts
								</h3>
								<div class="space-y-4">
										<a href='/' class="block group">
											<h4 class="text-sm font-medium text-slate-900 dark:text-slate-100 group-hover:text-blue-600 transition-colors leading-snug">
												post.title
											</h4>
											<p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
												formatDate(post.publishedAt)
											</p>
										</a>
								</div>
							</div>
					</div>
				</aside>
			</div>
		</article>

	
	</main>


</div>