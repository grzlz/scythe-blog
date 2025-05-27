<script>
  import { onMount } from 'svelte';
  import { fade, fly, slide } from 'svelte/transition';
  import { quintOut, elasticOut } from 'svelte/easing';
  
  // Import the data from +page.js
  export let data;
  
  // Access the loaded posts
  let items = data.posts;

  // State for the active (expanded) card and its zoom level
  let active = { index: null, level: 0 };
  
  // Track if the component is mounted (for smoother initial rendering)
  let mounted = false;
  
  onMount(() => {
    mounted = true;
  });

  function handleCardClick(i) {
    if (active.index !== i) {
      // Open clicked card to level 1
      active = { index: i, level: 1 };
    } else {
      // Same card clicked again
      if (active.level === 1) {
        active = { index: i, level: 2 }; // expand further to level 2
      } else if (active.level === 2) {
        active = { index: null, level: 0 }; // collapse (optional)
      }
    }
  }
  
  // Format date nicely
  function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }
</script>

<!-- Masonry container: 2 columns on medium+, 1 column on small -->
<div class="columns-2 sm:columns-1 gap-4 md:gap-6">
  {#each items as item, i (item.slug)}
    <!-- Each card with improved transitions -->
    <div 
      class="relative bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-4 md:mb-6
             hover:shadow-lg transition-all duration-500 ease-in-out 
             hover:cursor-pointer break-inside-avoid-column"
      class:col-span-all="{active.index === i && active.level >= 1}" 
      class:expanded-vertical="{active.index === i && active.level === 2}"
      on:click={() => handleCardClick(i)} 
      animate:flip={{ duration: 500, easing: quintOut }}>
      
      <!-- Card image (if available) -->
      {#if item.image}
        <div class="w-full" style="height: {active.index === i ? '250px' : '150px'}; transition: height 0.5s ease-in-out;">
          <img 
            src={item.image} 
            alt={item.title} 
            class="w-full h-full object-cover transition-all duration-500"
          />
        </div>
      {/if}
      
      <!-- Card content with padding -->
      <div class="p-4 md:p-5">
        <!-- Card header/summary content (always visible) -->
        <div class="flex justify-between items-start mb-2">
          <h3 class="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h3>
          {#if mounted && (active.index !== i || active.level < 2)}
            <span 
              class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-300"
              transition:fade={{ duration: 200 }}
            >
              {item.readTime}
            </span>
          {/if}
        </div>
        
        <!-- Post metadata -->
        <div class="text-xs text-gray-500 dark:text-gray-400 mb-2">
          {formatDate(item.date)} • {item.author}
        </div>
        
        <!-- Summary -->
        <p class="text-gray-700 dark:text-gray-300">{item.excerpt}</p>
        
        <!-- Tags -->
        {#if item.tags && item.tags.length > 0}
          <div class="mt-3 flex flex-wrap gap-1">
            {#each item.tags as tag}
              <span class="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded dark:bg-gray-700 dark:text-gray-300">
                #{tag}
              </span>
            {/each}
          </div>
        {/if}

        <!-- Extended content (visible only at zoom level 2) -->
        {#if active.index === i && active.level === 2 && mounted}
          <div class="mt-4" transition:slide={{ duration: 400, easing: quintOut }}>
            <hr class="my-3 border-gray-200 dark:border-gray-700" />
            <div class="prose prose-sm dark:prose-invert max-w-none">
              <p class="text-gray-600 dark:text-gray-300">{item.content}</p>
            </div>
            
            <!-- Category -->
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

<style>
  /* Custom utility for column-span if not using a plugin */
  :global(.col-span-all) {
    column-span: all;
    margin-bottom: 1.5rem;
  }
  
  /* Styling for fully expanded card (zoom level 2) */
  :global(.expanded-vertical) {
    /* Ensure the expanded card is above others */
    z-index: 10;
    /* Add more vertical space for expanded content */
    max-height: none;
    transform: scale(1.01);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
                0 8px 10px -6px rgba(0, 0, 0, 0.1);
  }
  
  /* Add smooth transitions to all elements that might change */
  :global(.transition-all) {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
</style>
