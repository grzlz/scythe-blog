<script>
  // Sample data for demonstration
  let items = [
    { id: 1, title: "Card One", summary: "This is a short summary.", details: "Here is the extended content for card one. It has more details that are revealed on the second click." },
    { id: 2, title: "Card Two", summary: "Another summary goes here.", details: "Extended details for card two. You can put any content here, including images, lists, etc." },
    { id: 3, title: "Card Three", summary: "Summary for the third card.", details: "Extended details for card three. This content becomes visible when the card is fully expanded." },
    // ... add more cards as needed
  ];

  // State for the active (expanded) card and its zoom level
  let active = { index: null, level: 0 };

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
</script>

<!-- Masonry container: 2 columns on medium+, 1 column on small -->
<div class="columns-2 sm:columns-1 gap-4 md:gap-6">
  {#each items as item, i (item.id)}
    <!-- Each card -->
    <div 
      class="relative bg-white rounded-lg shadow-md p-4 transition-all duration-300 ease-in-out 
             hover:cursor-pointer break-inside-avoid-column"
      class:col-span-all="{active.index === i && active.level >= 1}" 
      class:expanded-vertical="{active.index === i && active.level === 2}"
      on:click={() => handleCardClick(i)} 
      animate:flip>  <!-- animate:flip for smooth reflow animation -->
      
      <!-- Card header/summary content (always visible) -->
      <h3 class="text-lg font-semibold">{item.title}</h3>
      <p class="text-gray-700">{item.summary}</p>

      <!-- Extended content (visible only at zoom level 2) -->
      {#if active.index === i && active.level === 2}
        <div class="mt-4">
          <p class="text-gray-600">{item.details}</p>
          <!-- Additional extended content could go here (images, links, etc.) -->
        </div>
      {/if}
    </div>
  {/each}
</div>

<style>
  /* Custom utility for column-span if not using a plugin */
  :global(.col-span-all) {
    column-span: all;
  }
  /* Example styling for fully expanded card (zoom level 2) */
  :global(.expanded-vertical) {
    /* Ensure the expanded card is above others (if overlapping) */
    z-index: 10;
  }
  /* (Optional) You can add a smooth max-height transition for extended content, 
     but since we're using conditional rendering, it's not necessary here. */
</style>
