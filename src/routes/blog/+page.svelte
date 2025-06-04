<script>
  import { onMount } from 'svelte';
  import { fade, fly, slide } from 'svelte/transition';
  import { quintOut, cubicOut, elasticOut } from 'svelte/easing';
  import { flip } from 'svelte/animate';

  let { data } = $props();
  let items = $state(data.posts);

  let active = $state({ index: null, level: 0 });
  let mounted = $state(false);
  let windowWidth = $state(0);

  // Properly used $derived for calculated item states
  let itemsWithState = $derived(items.map((item, i) => ({
    ...item,
    isActive: active.index === i,
    isExpanded: active.index === i && active.level === 2,
    isSelected: active.index === i && active.level >= 1
  })));

  onMount(() => {
    mounted = true;
    
    // Track window width for responsive behavior
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
  <h1 class="text-3xl font-bold text-red-100">Bienvenida</h1>
  <p class=" text-gray-500 mb-4">Tiempo de lectura 1 minuto</p>

  <h3 class="text-xl font-semibold text-primary-400 mb-4">Gracias por estar aquí</h3>
  <div class="text-primary-200">
    <p class="mb-4">Este blog es el primer paso en un camino que, como dice el poeta, se hace al andar.</p>
    <p class="mb-4">Es una invitación para imaginar la posibilidad de un mundo en el que los beneficios que produce la tecnología estén mejor distribuidos. ¿Por qué? Porque el nivel de riqueza y desigualdad de nuestra sociedad actual no tiene precedentes en la historia de la humanidad. Sólo un dato: el 10% de la población más rica del mundo controla el 76% de la riqueza total de nuestro planeta.</p>
    <p class="mb-2">Este 76% es nuestro nuevo punto de partida. Y como si fuera poco, la inteligencia artificial y la automatización prometen revolucionar cada industria, cada trabajo y cada aspecto de nuestras vidas. Parece razonable pensar que de conservar las reglas actuales del juego, esta revolución tecnológica sólo profundizará la desigualdad existente.</p>
    <p class="mb-4">Supongamos que la automatización total es posible, ¿qué ocurrirá cuando el trabajo humano deje de ser necesario? ¿Quién se beneficiará de esa productividad masiva? ¿Sólo quienes poseen el capital?</p>
    <p class="mb-4">Con el arreglo institucional actual, la respuesta es sí.</p>
    <p class="mb-2">¿Qué podemos hacer al respecto?</p>
    
    
    <p>Por el momento, dos cosas:</p>
    <ol class="list-decimal pl-6 mb-4">
      <li>Reconocer que la desigualdad es una decisión política;</li>
      <li>Construir software.</li>
    </ol>
    <p>lo que podemos hacer es software; pero de una manera diferente. Esta es nuestra bitácora de desarrollo. Un espacio para tener una conversación abierta tú y yo, porque necesitamos que te involucres. Aquí documentaremos avances, ideas y preguntas mientras imaginamos y construimos una alternativa.</p>
    
  </div>
    
  
</div>

<div class="container mx-auto mt-10">
  <div class="grid-layout bg-p">
    {#each itemsWithState as item, i (item.slug)}
      <div 
        class="card bg-gray-900"
        class:col-span-all={item.isSelected} 
        class:expanded-vertical={item.isExpanded}
        onclick={() => handleCardClick(i)} 
        animate:flip={{ duration: 700, easing: cubicOut, delay: item.isSelected ? 0 : 30 }}>
        
        {#if item.image}
          <div class="card-image" style="height: {item.isActive ? '280px' : '180px'};">
            <img 
              src={item.image} 
              alt={item.title} 
              class="image" 
              style="transform: scale({item.isActive ? 1.05 : 1}); 
                     transition: transform 800ms {cubicOut}"
            />
          </div>
        {/if}
        
        <div class="card-content">
          <div class="flex justify-between items-start mb-2">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
            {#if mounted && !item.isExpanded}
              <span 
                class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-300"
                in:fade={{ duration: 300, delay: 200 }}
                out:fade={{ duration: 250 }}>
                {item.readTime}
              </span>
            {/if}
          </div>
          
          <p class="text-gray-700 dark:text-gray-300 excerpt" class:expanded={item.isExpanded}>{item.excerpt}</p>
          
          {#if item.tags?.length}
            <div class="mt-3 flex flex-wrap gap-1">
              {#each item.tags as tag}
                <span class="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded dark:bg-gray-700 dark:text-gray-300">
                  #{tag}
                </span>
              {/each}
            </div>
          {/if}

          {#if item.isExpanded && mounted}
            <div class="mt-4" 
                 in:slide={{ duration: 600, delay: 150, easing: quintOut }}
                 out:slide={{ duration: 400, easing: cubicOut }}>
              <hr class="my-3 border-gray-200 dark:border-gray-700" />
              <div class="prose prose-sm dark:prose-invert max-w-none">
                <p class="text-gray-600 dark:text-gray-300">{@html item.content}</p>
              </div>
              <div class="mt-4">
                <span class="text-sm bg-gray-200 text-gray-700 px-3 py-1 rounded-full dark:bg-gray-700 dark:text-gray-300"
                      in:fade={{ duration: 500, delay: 300 }}>
                  {item.category}
                </span>
              </div>
            </div>
          {/if}
        </div>
      </div>
    {/each}
  </div>
</div>

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
