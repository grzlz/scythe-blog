<script>
	let targetDate = new Date('2025-09-10T00:00:00');
	let timeLeft = $state({ days: 0, hours: 0, minutes: 0, seconds: 0 });

	function updateCountdown() {
		const now = new Date();
		const difference = targetDate - now;

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
				minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
				seconds: Math.floor((difference % (1000 * 60)) / 1000)
			};
		} else {
			timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
		}
	}

	$effect(() => {
		updateCountdown();
		const interval = setInterval(updateCountdown, 1000);
		return () => clearInterval(interval);
	});
</script>

<svelte:head>
	<title>¿Qué fue de la Information Superhighway?</title>
	<meta property="og:type" content="website" />
	<meta property="og:title" content='¿Qué fue de la Information Superhighway?' />
	<meta property="og:description" content='Las promesas iniciales del internet empezaron aquí.' />
	<meta property="og:image" content="https://scythe.icarus.mx/logo_icarus.png" />
	<meta property="og:site_name" content="Scythe" />
</svelte:head>

<div class="min-h-screen bg-gradient-to-b from-primary-950 text-white">
	<main class="flex flex-col items-center justify-center min-h-screen pt-20 px-6">
		<div class="text-center max-w-4xl">
			<h1 class="text-4xl md:text-6xl font-extrabold mb-8">
				¿Qué fue de la <span class="text-primary-400">Information Superhighway</span>?
			</h1>
			
			<p class="text-xl md:text-2xl text-primary-200 mb-16">
				Redescubramos lo que alguna vez imaginaron que sería el internet.
			</p>

			<div class="bg-black/30 backdrop-blur-sm rounded-2xl p-8 mb-8">
				<h2 class="text-2xl font-bold mb-6 text-primary-300">Disponible en:</h2>
				
				<div class="grid grid-cols-4 gap-4 text-center">
					<div class="bg-primary-800/50 rounded-lg p-4">
						<div class="text-3xl font-bold text-white">{timeLeft.days}</div>
						<div class="text-sm text-primary-300">Días</div>
					</div>
					<div class="bg-primary-800/50 rounded-lg p-4">
						<div class="text-3xl font-bold text-white">{timeLeft.hours}</div>
						<div class="text-sm text-primary-300">Horas</div>
					</div>
					<div class="bg-primary-800/50 rounded-lg p-4">
						<div class="text-3xl font-bold text-white">{timeLeft.minutes}</div>
						<div class="text-sm text-primary-300">Minutos</div>
					</div>
					<div class="bg-primary-800/50 rounded-lg p-4">
						<div class="text-3xl font-bold text-white">{timeLeft.seconds}</div>
						<div class="text-sm text-primary-300">Segundos</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</div>