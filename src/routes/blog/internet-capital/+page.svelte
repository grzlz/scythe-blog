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
      <!-- Fullscreen Magazine Hero -->
      <section 
        class="relative w-full min-h-screen flex items-center justify-center text-center bg-cover bg-center bg-no-repeat"
        style="background-image: url('/poster.png');"
      >
        <!-- Gradient overlay to improve readability -->
        <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>

        <!-- Title and subtitle positioned within the hero image -->
        <div class="relative z-10 px-4 sm:px-8 py-16 max-w-3xl">
          <h1 class="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight drop-shadow-2xl">
            <span class="block">¿Qué fue de la</span>
            <span class="block text-yellow-400 text-4xl sm:text-6xl lg:text-8xl">Information</span>
            <span class="block">Superhighway?</span>
          </h1>

          <p class="mt-6 text-base sm:text-lg md:text-xl text-white/90 font-medium leading-relaxed drop-shadow-lg">
            La Information Superhighway fue una visión del futuro de Internet en la década de 1990, donde se esperaba que la conectividad y el acceso a la información transformaran la sociedad.
          </p>

          <!-- Optional tags -->
          <div class="flex flex-wrap justify-center gap-2 sm:gap-4 mt-6">
            <span class="bg-yellow-400 text-black px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wide shadow">
              Tecnología
            </span>
            <span class="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide shadow hidden sm:inline-block">
              Edición Especial
            </span>
            <span class="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide shadow hidden sm:inline-block">
              Historia Digital
            </span>
          </div>
        </div>
      </section>

			<!-- Content Section -->
			<div class="flex flex-col lg:flex-row gap-12 px-6 py-12">
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
						
						<h2>El Sueño de la Conectividad Universal</h2>
						<p>Aquí va el contenido del artículo. Puedes incluir párrafos, imágenes, enlaces y más. Este es un ejemplo de cómo se vería el contenido del artículo con un estilo limpio y moderno.</p>
						
						<p>La Information Superhighway prometía democratizar el acceso a la información y conectar a todas las personas del mundo en una red global de conocimiento compartido.</p>

						<blockquote>
							<p>"The Information Superhighway will change the way we work, learn, shop, and communicate." - Al Gore, 1993</p>
						</blockquote>

						<h3>¿Qué salió mal?</h3>
						<p>A pesar de las promesas iniciales, la realidad de Internet ha sido más compleja, con desafíos relacionados con la privacidad, la desinformación y la concentración del poder en pocas empresas tecnológicas.</p>
					</div>
				</div>

				<!-- Sidebar -->
				<aside class="lg:w-80 flex-shrink-0">
					<div class="sticky top-24 space-y-8">
						<!-- Table of Contents -->
						<div class="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
							<h3 class="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">
								Tabla de Contenidos
							</h3>
							<nav class="space-y-2 text-sm">
								<a href="#introduction" class="block text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1">
									El Sueño de la Conectividad
								</a>
								<a href="#main-content" class="block text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1 pl-4">
									¿Qué salió mal?
								</a>
								<a href="#conclusion" class="block text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1">
									Reflexiones Finales
								</a>
							</nav>
						</div>

						<!-- Share -->
						<div class="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
							<h3 class="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">
								Compartir este artículo
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
								Artículos Relacionados
							</h3>
							<div class="space-y-4">
								<a href="/" class="block group">
									<h4 class="text-sm font-medium text-slate-900 dark:text-slate-100 group-hover:text-blue-600 transition-colors leading-snug">
										La Web 2.0 y sus Consecuencias
									</h4>
									<p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
										15 de marzo, 2024
									</p>
								</a>
								<a href="/" class="block group">
									<h4 class="text-sm font-medium text-slate-900 dark:text-slate-100 group-hover:text-blue-600 transition-colors leading-snug">
										El Futuro de la Privacidad Digital
									</h4>
									<p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
										8 de febrero, 2024
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