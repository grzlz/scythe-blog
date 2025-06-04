<script>
  import { fade, slide } from 'svelte/transition';
  import { quintOut, cubicOut } from 'svelte/easing';
  import { flip } from 'svelte/animate';

  let { itemsWithState, mounted, handleCardClick, formatDate, windowWidth } = $props();
</script>

<div class="container mx-auto mt-10 px-4">
  <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {#each itemsWithState as item, i (item.slug)}
      <article 
        class="card bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        class:col-span-full={item.isSelected} 
        class:min-h-96={item.isExpanded}
        onclick={() => handleCardClick(i)}
        onkeydown={(e) => e.key === 'Enter' && handleCardClick(i)}
        role="button"
        tabindex="0"
        animate:flip={{ duration: 700, easing: cubicOut, delay: item.isSelected ? 0 : 30 }}
      >
        
        <!-- Image Section -->
        {#if item.image}
          <div 
            class="relative overflow-hidden transition-all duration-500"
            style:height={item.isActive ? '280px' : '180px'}
          >
            <img 
              src={item.image} 
              alt={item.title} 
              class="w-full h-full object-cover transition-transform duration-700 ease-out"
              class:scale-105={item.isActive}
              loading="lazy"
            />
          </div>
        {/if}
        
        <!-- Content Section -->
        <div class="p-4">
          <!-- Header with title and read time -->
          <header class="flex justify-between items-start mb-3 gap-3">
            <h2 class="text-lg font-semibold text-gray-900 dark:text-white leading-tight flex-1">
              {item.title}
            </h2>
            
            {#if mounted && !item.isExpanded && item.readTime}
              <span 
                class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-300 flex-shrink-0"
                in:fade={{ duration: 300, delay: 200 }}
                out:fade={{ duration: 250 }}
              >
                {item.readTime}
              </span>
            {/if}
          </header>
          
          <!-- Excerpt -->
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3" 
             class:line-clamp-3={!item.isExpanded}
          >
            {item.excerpt}
          </p>
          
          <!-- Tags -->
          {#if item.tags?.length}
            <div class="flex flex-wrap gap-2 mb-3">
              {#each item.tags as tag}
                <span class="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded dark:bg-gray-700 dark:text-gray-300 transition-colors hover:bg-gray-200 dark:hover:bg-gray-600">
                  #{tag}
                </span>
              {/each}
            </div>
          {/if}

          <!-- Expanded Content -->
          {#if item.isExpanded && mounted}
            <div 
              class="border-t pt-4 mt-4 border-gray-200 dark:border-gray-700"
              in:slide={{ duration: 600, delay: 150, easing: quintOut }}
              out:slide={{ duration: 400, easing: cubicOut }}
            >
              <!-- Full Content -->
              <div class="prose prose-sm dark:prose-invert max-w-none mb-4">
                <div class="text-gray-600 dark:text-gray-300">
                  {@html item.content}
                </div>
              </div>
              
              <!-- Category and Date -->
              <footer class="flex flex-wrap gap-3 items-center">
                {#if item.category}
                  <span 
                    class="text-sm bg-gray-200 text-gray-700 px-3 py-1 rounded-full dark:bg-gray-700 dark:text-gray-300"
                    in:fade={{ duration: 500, delay: 300 }}
                  >
                    {item.category}
                  </span>
                {/if}
                
                {#if item.publishedAt}
                  <time 
                    class="text-sm text-gray-500 dark:text-gray-400"
                    datetime={item.publishedAt}
                    in:fade={{ duration: 500, delay: 400 }}
                  >
                    {formatDate(item.publishedAt)}
                  </time>
                {/if}
              </footer>
            </div>
          {/if}
        </div>
      </article>
    {/each}
  </div>
</div>

<style>
  .card:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }

  .col-span-full {
    grid-column: 1 / -1;
  }

  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  /* Responsive grid adjustments */
  @media (max-width: 768px) {
    .col-span-full {
      grid-column: 1;
    }
  }

  /* Smooth transitions for all interactive elements */
  .card * {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
</style>