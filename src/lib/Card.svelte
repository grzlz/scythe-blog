<script>
  let { item } = $props();
  let isExpanded = $state(false);
  let cardEl;
  
  $effect(() => {
    if (isExpanded) {
      // Smooth scroll expanded card into view
      cardEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
</script>

<div bind:this={cardEl} class="rounded-lg bg-white shadow transition-all duration-300 ease-in-out overflow-hidden {isExpanded ? 'p-6' : 'p-4'}">
  <img src="{item.image}" alt="{item.title}" 
       class="w-full h-auto transition-transform duration-300 ease-in-out transform {isExpanded ? 'scale-105' : 'scale-100'}" />
  <h2 class="mt-2 font-semibold transition-all duration-300 {isExpanded ? 'text-xl' : 'text-lg'}">
    {item.title}
  </h2>
  <p class="mt-1 text-gray-700 transition-all duration-300 {isExpanded ? 'text-base' : 'text-sm'}">
    {item.text}
  </p>
  <button class="mt-3 text-blue-600 hover:underline" on:click={() => (isExpanded = !isExpanded)}>
    {#if isExpanded}Show Less{:else}Read More{/if}
  </button>
</div>
