<script>
  let cards = $state([
    {
      id: 1,
      title: "Card 1",
      content: "This is a short summary for card 1. De todos modos necesito decir que esto es un texto de prueba. Necesito evaluar qiué pasa cuando hay conteido distinto",
      extra: "This is additional content for card 1. Bla bla bla y entonces por eso bla bla bla. Entonces uwiwi.",
      image: "https://picsum.photos/id/1015/600/400",
      zoom: 0
    },
    {
      id: 2,
      title: "Card 2",
      content: "This is a short summary for card 2.",
      extra: "This is additional content for card 2. Bla bla bla y entonces por eso bla bla bla. Entonces uwiwi.",
      image: "https://picsum.photos/id/1025/600/400",
      zoom: 0
    },
    {
      id: 3,
      title: "Card 3",
      content: "This is a short summary for card 3.",
      extra: "This is additional content for card 3. Bla bla bla y entonces por eso bla bla bla. Entonces uwiwi.",
      image: "https://picsum.photos/id/1035/600/400",
      zoom: 0
    },
    {
      id: 4,
      title: "Card 4",
      content: "This is a short summary for card 4.",
      extra: "This is additional content for card 4. Bla bla bla y entonces por eso bla bla bla. Entonces uwiwi.",
      image: "https://picsum.photos/id/1045/600/400",
      zoom: 0
    }
  ]);

  function cycleZoom(index) {
    cards[index].zoom = (cards[index].zoom + 1) % 3;
    if (cards[index].zoom === 2) {
      setTimeout(() => {
        document.getElementById(`card-${cards[index].id}`)?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }, 10);
    }
  }
</script>

<div class="bg-gray-100 min-h-screen p-8">
  <h1 class="text-4xl font-bold text-center mb-10">Zoomable Cards in Masonry Layout</h1>

  <!-- Masonry layout using CSS columns -->
  <div class="columns-2 gap-2 space-y-2">
    {#each cards as card, i (card.id)}
      <div
        id={`card-${card.id}`}
        class="break-inside-avoid mb-2 transition-all duration-300 ease-in-out bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
        class:p-4={card.zoom === 0}
        class:p-6={card.zoom === 1}
        class:p-8={card.zoom === 2}
        animate:flip
      >
        <img
          src={card.image}
          alt={card.title}
          class="w-full object-cover rounded transition-all duration-300"
          class:h-40={card.zoom === 0}
          class:h-60={card.zoom === 1}
          class:h-80={card.zoom === 2}
        />
        <h2
          class="mt-4 font-bold transition-all duration-300"
          class:text-lg={card.zoom === 0}
          class:text-xl={card.zoom === 1}
          class:text-2xl={card.zoom === 2}
        >
          {card.title}
        </h2>
        <p
          class="mt-2 text-gray-700 transition-all duration-300 flex-1"
          class:text-sm={card.zoom === 0}
          class:text-base={card.zoom === 1}
          class:text-lg={card.zoom === 2}
        >
          {card.content}
        </p>
        {#if card.zoom === 2}
          <p class="mt-2 text-gray-600 text-lg">{card.extra}</p>
        {/if}
        <button
          onclick={() => cycleZoom(i)}
          class="mt-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
        >
          {card.zoom === 0 ? 'Read More' : card.zoom === 1 ? 'Expand Fully' : 'Collapse'}
        </button>
      </div>
    {/each}
  </div>
</div>