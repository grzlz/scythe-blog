<script>
  import { onMount } from 'svelte';
  import Comments
   from '$lib/components/Comments.svelte';
  let { data } = $props();
  let items = $state(data.posts);
  let active = $state({ index: null, level: 0 });
  let mounted = $state(false);
  let windowWidth = $state(0);

  let email = $state('');
  // Derived state for items with their active states
  let itemsWithState = $derived(items.map((item, i) => ({
    ...item,
    isActive: active.index === i,
    isExpanded: active.index === i && active.level === 2,
    isSelected: active.index === i && active.level >= 1
  })));

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


  function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
</script>

<section>
  <div class="bg-primary-950 p-8 shadow-md min-w-full  text-justify font-secondary">
    <h1 class="text-3xl font-bold text-primary-400">Bienvenida</h1>
    <p class=" text-gray-500 mb-4">Tiempo de lectura: 1 minuto</p>
    <h3 class="text-xl font-semibold text-primary-100 mb-4">Gracias por estar aquí</h3>
    <div class="text-primary-200">
      <p class="mb-4">Este blog es el primer paso en un camino que, como dice el poeta, se hace al andar.</p>
      <p class="mb-4">Es una invitación para imaginar la posibilidad de un mundo en el que los beneficios que produce la tecnología estén mejor distribuidos. ¿Por qué? Porque el nivel de riqueza y desigualdad de nuestra sociedad actual no tiene precedentes en la historia de la humanidad. Sólo un dato: el 10% de la población más rica del mundo controla el 76% de la riqueza total de nuestro planeta.</p>
      <p class="mb-2">Este 76% es nuestro nuevo punto de partida porque la inteligencia artificial y la automatización pretenden transformar cada industria, cada trabajo y cada aspecto de nuestras vidas. Parece razonable pensar que de conservar las reglas actuales del juego, esta revolución tecnológica sólo profundizará la desigualdad existente.</p>
      <p class="mb-4">Si la automatización continúa expandiéndose significativamente, ¿qué ocurrirá cuando el trabajo humano deje de ser necesario? ¿Quién se beneficiará de esa productividad masiva? ¿Sólo quienes poseen el capital?</p>
      <p class="mb-4">Con el arreglo institucional actual, la respuesta es sí.</p>
      <p class="mb-2">¿Qué podemos hacer al respecto?</p>
      <p class="mb-4">Si el problema es sistémico, la solución tiene que ser sistémica. Entonces lo que podemos hacer es pensar, diseñar y construir otro sistema.</p>
      <p>Este espacio es nuestra bitácora de desarrollo para ese otro sistema. El propósito de este blog es tener una conversación abierta contigo porque necesitamos tus ideas, tus dudas y tus críticas. Aquí documentaremos nuestros intentos por construir una alternativa.</p>
    </div>
  </div>
</section>

<section class="bg-gray-300">
  <Comments />
</section>




<section class="font-primary bg-secondary-950 text-primary-100 px-6 py-20 flex flex-col items-center text-center">
  <div class="max-w-xl w-full">
    <h2 class="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
      ¿Quieres saber en qué termina todo esto?
    </h2>
    <p class="text-lg text-primary-200 mb-10 text-center">Recibe updates semanales en tu bandeja de  entrada</p>

    <div class="flex flex-col sm:flex-row items-center gap-4">
      <input type="email" bind:value={email} placeholder="Tu correo electrónico" class="w-full px-4 py-3 rounded-lg bg-blue-50 text-primary-950 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      <button class="px-6 py-3 rounded-lg bg-blue-400 hover:bg-red-700 text-primary-50 font-bold transition w-full sm:w-auto">Suscribirme</button>
    </div>
  </div>
</section>

