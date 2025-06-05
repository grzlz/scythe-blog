<script>
  import { onMount } from 'svelte';
  import Comments from '$lib/components/Comments.svelte';
  import { page } from '$app/state';
	import { track } from '@vercel/analytics';

  let { data } = $props();
  let items = $state(data.posts);
  let active = $state({ index: null, level: 0 });
  let mounted = $state(false);
  let windowWidth = $state(0);

  let email = $state('');
  let itemsWithState = $derived(items.map((item, i) => ({...item, isActive: active.index === i, isExpanded: active.index === i && active.level === 2,
    isSelected: active.index === i && active.level >= 1
  })));

  let start = Date.now();
  
  function handleVisibilityChange() {
    if (document.visibilityState === 'hidden') {
			const seconds = Math.round((Date.now() - start) / 1000);
			track(`time-spent-${page.url.pathname}`, { seconds });
		}
	}

  onMount(() => {
    mounted = true;
    windowWidth = window.innerWidth;
    
    const handleResize = () => windowWidth = window.innerWidth;
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  });

  function handleCardClick(i) {
    if (active.index !== i) {
      active = { index: i, level: 1 };
    } else {
      active = active.level === 1
        ? { index: i, level: 2 }
        : { index: null, level: 0 };
    }
  }
  
  $effect(() => {
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
	});

	// Reset timer on route change
	$effect(() => {
		page.url.pathname;
		start = Date.now();
	});

  function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
</script>

<section>
  <div class="bg-primary-950 p-8 shadow-md min-w-full  font-secondary mb-0">
    <h1 class="text-3xl font-semibold text-primary-400 font-terciary">Bienvenida</h1>
    <p class=" text-gray-500 mb-4">Tiempo de lectura: 1 minuto</p>
    <h3 class="text-xl font-terciary text-primary-100 mb-4">Gracias por estar aquí</h3>
    <div class="text-primary-200 mb-8">
      <p class="mb-4">Este blog es el primer paso en un camino que, como dice el poeta, <a href="https://www.zendalibros.com/caminante-no-hay-camino-de-antonio-machado/" target="_blank" rel="noopener noreferrer"> <span class="hover:cursor-pointer hover:text-primary-400 transition-colors duration-200">se hace al andar.</span></a></p>
      <p class="mb-4">Es una invitación para imaginar la posibilidad de un mundo en el que los beneficios que produce la tecnología estén mejor distribuidos. ¿Por qué? Porque el nivel de riqueza y desigualdad de nuestra sociedad actual no tiene precedentes en la historia de la humanidad.</p>
<p class="mb-4">
  Sólo un dato: 
  <span class="bg-gradient-to-r from-primary-300 to-primary-800 bg-clip-text text-transparent font-bold">
    el 10% más rico controla el 76% de la riqueza total del planeta mientras que el 50% más pobre controla el 2%.
  </span>
  <sup><a href="#ref1" id="cite1" class="text-primary-700 hover:text-primary-300">1</a></sup>
</p>


      <p class="mb-2">Este 76% es nuestro nuevo punto de partida porque la inteligencia artificial y la automatización pretenden transformar cada industria, cada trabajo y cada aspecto de nuestras vidas. Parece razonable pensar que de conservar las reglas actuales del juego, esta revolución tecnológica sólo profundizará la desigualdad existente.</p>
      <p class="mb-4">Entonces, si la automatización continúa expandiéndose significativamente, ¿qué ocurrirá cuando el trabajo humano deje de ser necesario? ¿Quién se beneficiará de esa productividad masiva? ¿Sólo quienes poseen el capital?</p> 
      <p class="mb-4">Con el arreglo institucional actual, la respuesta es sí.</p>
      <p class="mb-2">¿Qué podemos hacer al respecto?</p>
      <p class="mb-4">Lo que podemos hacer es pensar, diseñar y crear otro sistema, porque si el problema es sistémico, la solución tiene que ser sistémica.</p>
      <p>Este espacio es nuestra bitácora de desarrollo para ese otro sistema. El propósito de este blog es tener una conversación abierta contigo porque necesitamos tus ideas, tus dudas y tus críticas. Aquí documentaremos nuestros intentos por construir una alternativa.</p>
    </div>
    
    <div class="flex justify-end mb-6">
      <button class="border border-primary-400 hover:bg-primary-600 hover:text-primary-50 text-primary-300 text-sm font-primary px-6 py-3 rounded-lg transition-colors duration-200">Siguiete artículo</button>
    </div>
    
    <hr class="mx-auto border-primary-200" />
  </div>
</section>

<section>
  <Comments />
</section>

<section id="referencias" class="bg-primary-950 text-primary-100">
  <div class="max-w-4xl mx-auto px-8 py-6">
    <div class="">
      <h2 class="text-3xl text-primary-200 font-troll">
        Referencias
      </h2>
    </div>
        
    <div class="bg-primary-950 p-4 mx-auto">
      <div class="space-y-4 text-primary-200 mb-6">
        <p class="leading-relaxed" id="ref1">
          <strong>1.</strong>
          World Inequality Lab. <em>World Inequality Report 2022</em>. Paris: World Inequality Lab, March 2023, 10.
          <a href="https://wir2022.wid.world/www-site/uploads/2023/03/D_FINAL_WIL_RIM_RAPPORT_2303.pdf"
             target="_blank"
             rel="noopener noreferrer"
             class="text-primary-400 hover:text-primary-300 underline transition-colors duration-200 break-all overflow-wrap-anywhere">
            https://wir2022.wid.world/www-site/uploads/2023/03/D_FINAL_WIL_RIM_RAPPORT_2303.pdf
          </a>.
        </p>
      </div>
      <hr class="mx-auto border-primary-200" />
    </div>
  </div>
</section>

<section class="font-primary bg-secondary-950 text-primary-100 px-6 py-20 flex flex-col items-center text-center">
  <div class="max-w-xl w-full">
    <h2 class="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
      ¿Quieres saber en qué termina todo esto?
    </h2>
    <p class="text-lg text-primary-200 mb-10 text-center">Recibe updates semanales en tu bandeja de  entrada</p>

    <div class="flex text-sm flex-col sm:flex-row items-center gap-4">
      <input type="email" bind:value={email} placeholder="Tu correo electrónico" class="w-full px-4 py-3 rounded-lg bg-blue-50 text-primary-950 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      <button class="px-6 py-3 rounded-lg bg-blue-400 hover:bg-red-700 text-primary-50 font-bold transition w-full sm:w-auto">Suscribirme</button>
    </div>
  </div>
</section>

