<!-- svelte-ignore non_reactive_update -->
<!-- src/lib/Card.svelte -->
<script>
  // Svelte 5 'runes' API for reactive state
  let zoomLevel = $state(0);         // 0=Level1, 1=Level2, 2=Level3
  const { title, content, extra, image } = $props(); 

  function toggleZoom() {
    const newLevel = (zoomLevel + 1) % 3;
    // If transitioning to Level 3 (zoomLevel == 2), measure container height
    if (newLevel === 2) {
      const container = document.querySelector('.masonry-container');
      if (container) {
        cardHeight = container.clientHeight;
      }
    }
    zoomLevel = newLevel;  // update reactive state (triggers UI update)
  }

  let cardHeight = $state(0);  // will hold measured container height for Level 3
</script>

<!-- Padding increases with zoom -->
<div class="relative transition-all duration-300 ease-in-out"
     class:p-4={zoomLevel === 0}
     class:p-6={zoomLevel === 1}
     class:p-8={zoomLevel === 2}
     class:w-full={zoomLevel > 0}
     style:column-span={zoomLevel > 0 ? 'all' : 'none'}
     style:height={zoomLevel === 2 ? `${cardHeight}px` : 'auto'}>
  <!-- Card Image -->
  <img src="{image}" alt="{title}" 
       class="w-full object-cover rounded transition-all duration-300"
       class:h-40={zoomLevel === 0}   
       class:h-60={zoomLevel === 1}
       class:h-80={zoomLevel === 2} />
  <!-- Card Title -->
  <h2 class="mt-2 font-bold transition-all duration-300"
      class:text-lg={zoomLevel === 0}
      class:text-xl={zoomLevel === 1}
      class:text-2xl={zoomLevel === 2}>
    {title}
  </h2>
  <!-- Card Content -->
  <p class="mt-1 transition-all duration-300"
     class:text-sm={zoomLevel === 0}
     class:text-base={zoomLevel === 1}
     class:text-lg={zoomLevel === 2}>
    {content}
  </p>
  {#if zoomLevel === 2}
    <!-- Extra content revealed at Level 3 -->
    <p class="mt-1 text-lg">{extra}</p>
  {/if}
  <!-- Read More button to cycle through zoom levels -->
  <button onclick={toggleZoom} class="mt-3 text-blue-600 hover:underline">
    Read More
  </button>
</div>
