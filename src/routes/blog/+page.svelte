<script>
  import { onMount } from 'svelte';
  import Newspaper from '$lib/components/Newspaper.svelte';

  let { data } = $props();
  let items = $state(data.posts);
  let active = $state({ index: null, level: 0 });
  let mounted = $state(false);
  let windowWidth = $state(0);

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

<div class="bg-primary-950 p-8 shadow-md min-w-full  text-justify">
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
    <p class="mb-4">Si el problema es sistémico, la solución tiene que ser sistémica. Entonces lo que podemos hacer es diseñar y construir otro sistema.</p>
    <p>Esta es nuestra bitácora de desarrollo para ese otro sistema. Un espacio para tener una conversación abierta tú y yo, porque necesitamos tus ideas, tus dudas y tus críticas. Aquí documentaremos avances, ideas y preguntas mientras imaginamos y construimos una alternativa.</p>
  </div>
    
  
</div>

<Newspaper 
  {itemsWithState}
  {mounted}
  {handleCardClick}
  {formatDate}
  {windowWidth}
/>

<style>
  .grid-layout {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Default to 2 columns */
    gap: 1.5rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
  }

  /* Only switch to 3 columns on extra large screens */
  @media (min-width: 1280px) {
    .grid-layout {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .card {
    border-radius: 0.5rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.08);
    transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
    cursor: pointer;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    will-change: transform, box-shadow;
  }

  .card:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.12);
  }

  .col-span-all {
    grid-column: 1 / -1;
    max-width: 900px;
    margin: 0 auto;
    width: 100%;
  }

  .expanded-vertical {
    z-index: 10;
    transform: scale(1.02);
    box-shadow: 0 12px 28px -5px rgba(0, 0, 0, 0.12),
                0 10px 16px -6px rgba(0, 0, 0, 0.1);
  }

  .card-image {
    width: 100%;
    transition: height 0.75s cubic-bezier(0.16, 1, 0.3, 1);
    overflow: hidden;
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform;
  }

  .card-content {
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  
  .excerpt {
    transition: max-height 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
    max-height: 4.5rem;
    overflow: hidden;
  }
  
  .excerpt.expanded {
    max-height: none;
    opacity: 0.9;
  }
</style>
