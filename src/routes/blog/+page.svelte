<script>
  import { onMount } from 'svelte';
  import { fade, fly, slide } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  let { data } = $props();
  let items = data.posts;

  let active = $state({ index: null, level: 0 });
  let mounted = $state(false);

  onMount(() => {
    mounted = true;
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

<div class="container">
  <div class="grid-layout">
    {#each items as item, i (item.slug)}
      <div 
        class="card"
        class:col-span-all="{active.index === i && active.level >= 1}" 
        class:expanded-vertical="{active.index === i && active.level === 2}"
        on:click={() => handleCardClick(i)} 
        animate:flip={{ duration: 500, easing: quintOut }}>
        
        {#if item.image}
          <div class="card-image" style="height: {active.index === i ? '250px' : '150px'};">
            <img src={item.image} alt={item.title} class="image" />
          </div>
        {/if}
        
        <div class="card-content">
          <div class="flex justify-between items-start mb-2">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
            {#if mounted && (active.index !== i || active.level < 2)}
              <span 
                class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-300"
                transition:fade={{ duration: 200 }}>
                {item.readTime}
              </span>
            {/if}
          </div>
          
          <div class="text-xs text-gray-500 dark:text-gray-400 mb-2">
            {formatDate(item.date)} • {item.author}
          </div>
          
          <p class="text-gray-700 dark:text-gray-300">{item.excerpt}</p>
          
          {#if item.tags?.length}
            <div class="mt-3 flex flex-wrap gap-1">
              {#each item.tags as tag}
                <span class="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded dark:bg-gray-700 dark:text-gray-300">
                  #{tag}
                </span>
              {/each}
            </div>
          {/if}

          {#if active.index === i && active.level === 2 && mounted}
            <div class="mt-4" transition:slide={{ duration: 400, easing: quintOut }}>
              <hr class="my-3 border-gray-200 dark:border-gray-700" />
              <div class="prose prose-sm dark:prose-invert max-w-none">
                <p class="text-gray-600 dark:text-gray-300">{item.content}</p>
              </div>
              <div class="mt-4">
                <span class="text-sm bg-gray-200 text-gray-700 px-3 py-1 rounded-full dark:bg-gray-700 dark:text-gray-300">
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
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .card {
    background: white;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    transition: all 0.5s ease-in-out;
    cursor: pointer;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .col-span-all {
    grid-column: 1 / -1;
  }

  .expanded-vertical {
    z-index: 10;
    transform: scale(1.01);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
                0 8px 10px -6px rgba(0, 0, 0, 0.1);
  }

  .card-image {
    width: 100%;
    transition: height 0.5s ease-in-out;
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card-content {
    padding: 1rem;
    display: flex;
    flex-direction: column;
  }
</style>
