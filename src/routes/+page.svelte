<script>
    /** @type {import('./$types').PageData} */
    export let data;
    let posts = data.posts;

    let zoomLevels = {};

    function toggleZoom(id) {
        const current = zoomLevels[id] || 0;
        zoomLevels[id] = current >= 3 ? 0 : current + 1;
        zoomLevels = zoomLevels; // trigger reactivity
    }

    function getZoom(id) {
        return zoomLevels[id] || 0;
    }
</script>

<!-- Container -->
<div class="px-4 py-8 bg-gray-950 min-h-screen text-white">
    <h1 class="text-4xl font-bold text-center mb-10 text-blue-100">Masonic Blog</h1>

    <!-- Masonry Columns -->
    <div class="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {#each posts as post (post.slug)}
            {@const zoom = getZoom(post.slug)}

            <div
                class="break-inside-avoid cursor-pointer transition-all duration-500 ease-in-out bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-[1.01] p-4"
                style="
                    transform: scale({1 + zoom * 0.02});
                    filter: brightness({0.95 + zoom * 0.05});
                "
                on:click={() => toggleZoom(post.slug)}
                role="button"
                tabindex="0"
                aria-label="Expand post {post.title}"
            >
                {#if post.image}
                    <img
                        src={post.image}
                        alt={post.title}
                        class="w-full object-cover transition-all duration-500"
                        style="height: {200 + zoom * 80}px"
                    />
                {/if}

                <div class="mt-4 space-y-3">
                    <h2 class="font-bold leading-tight text-lg sm:text-xl">{post.title}</h2>
                    <p class="text-gray-300 text-sm sm:text-base">{post.excerpt}</p>

                    {#if zoom >= 2}
                        <div class="text-gray-400 text-sm mt-2">
                            {@html post.content}
                        </div>
                    {/if}

                    <!-- Button / Status -->
                    <div class="mt-3 text-sm text-blue-400 font-medium">
                        {#if zoom === 0}
                            🔍 Expand
                        {:else if zoom === 1}
                            📏 Taller
                        {:else if zoom === 2}
                            🚀 Full
                        {:else}
                            ↩️ Reset
                        {/if}
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>
