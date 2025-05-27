<script>
    let { data } = $props();
    let posts = data.posts;
    
    // Track zoom levels for each post (0, 1, 2, 3)
    let zoomLevels = $state({});
    
    function toggleZoom(postId) {
        const currentLevel = zoomLevels[postId] || 0;
        zoomLevels[postId] = currentLevel >= 3 ? 0 : currentLevel + 1;
    }
    
    function getZoomLevel(postId) {
        return zoomLevels[postId] || 0;
    }
</script>

<svelte:head>
    <title>All Posts | Svelte & Tailwind Blog</title>
    <meta name="description" content="A collection of insightful blog posts." />
</svelte:head>

<style>
    .masonry-container {
        display: flex;
        flex-wrap: wrap;
        gap: 1.5rem;
        align-items: flex-start;
    }
    
    .masonry-item {
        transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        border-radius: 12px;
        overflow: hidden;
        position: relative;
        background: rgb(17 24 39);
        min-height: fit-content;
    }
    
    .zoom-0 {
        flex: 0 0 calc(25% - 1.125rem);
        transform: scale(1);
        z-index: 1;
    }
    
    .zoom-1 {
        flex: 0 0 calc(33.333% - 1rem);
        transform: scale(1.05);
        z-index: 10;
        box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    }
    
    .zoom-2 {
        flex: 0 0 calc(50% - 0.75rem);
        transform: scale(1.02);
        z-index: 20;
        box-shadow: 0 30px 60px rgba(0,0,0,0.4);
    }
    
    .zoom-3 {
        flex: 0 0 calc(66.666% - 0.5rem);
        transform: scale(1);
        z-index: 30;
        box-shadow: 0 40px 80px rgba(0,0,0,0.5);
    }
    
    /* Tablet responsiveness */
    @media (max-width: 1024px) {
        .zoom-0 {
            flex: 0 0 calc(33.333% - 1rem);
        }
        .zoom-1 {
            flex: 0 0 calc(50% - 0.75rem);
        }
        .zoom-2 {
            flex: 0 0 calc(66.666% - 0.5rem);
        }
        .zoom-3 {
            flex: 0 0 calc(100% - 0rem);
        }
    }
    
    /* Mobile responsiveness */
    @media (max-width: 768px) {
        .zoom-0 {
            flex: 0 0 calc(50% - 0.75rem);
        }
        .zoom-1 {
            flex: 0 0 calc(66.666% - 0.5rem);
        }
        .zoom-2 {
            flex: 0 0 calc(100% - 0rem);
        }
        .zoom-3 {
            flex: 0 0 calc(100% - 0rem);
        }
    }
    
    @media (max-width: 480px) {
        .zoom-0, .zoom-1, .zoom-2, .zoom-3 {
            flex: 0 0 calc(100% - 0rem);
        }
    }
    
    .content-transition {
        transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .text-expand {
        transition: all 0.4s ease-out;
    }
    
    .image-expand {
        transition: height 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    
    .bubble-effect {
        transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    
    .bubble-effect:hover {
        transform: translateY(-2px) scale(1.02);
    }
</style>

<!-- Masonry container with flexbox wrap -->
<div class="bg-primary-300 p-8 min-h-screen">
    <div class="max-w-7xl mx-auto">
        <h1 class="text-4xl font-bold text-center mb-8 text-white">Latest Blog Posts</h1>
        
        <!-- Flexbox masonry layout -->
        <div class="masonry-container">
            {#each posts as post, index}
                {@const zoomLevel = getZoomLevel(post.id || index)}
                <article 
                    class="masonry-item bubble-effect zoom-{zoomLevel}"
                    style="transition-delay: {index * 0.05}s; border-radius: {12 + zoomLevel * 4}px;"
                >
                    <!-- Image -->
                    {#if post.image}
                        <img 
                            src={post.image} 
                            alt={post.title}
                            class="w-full object-cover image-expand"
                            style="height: {(post.imageHeight || 200) * (1 + zoomLevel * 0.3)}px"
                            loading="lazy"
                        />
                    {/if}
                    
                    <!-- Content -->
                    <div class="content-transition" 
                         class:p-4={zoomLevel === 0} 
                         class:p-6={zoomLevel === 1} 
                         class:p-8={zoomLevel === 2} 
                         class:p-10={zoomLevel === 3}>
                        <!-- Category badge -->
                        <div class="mb-3">
                            <span 
                                class="inline-block bg-primary-500 text-white font-semibold px-3 py-1 rounded-full text-expand"
                                class:text-xs={zoomLevel === 0}
                                class:text-sm={zoomLevel === 1}
                                class:text-base={zoomLevel === 2}
                                class:text-lg={zoomLevel === 3}
                                style="border-radius: {12 + zoomLevel * 2}px;"
                            >
                                {post.category}
                            </span>
                        </div>
                        
                        <!-- Title -->
                        <h2 
                            class="font-bold mb-3 text-white leading-tight text-expand"
                            class:text-lg={zoomLevel === 0}
                            class:text-xl={zoomLevel === 1}
                            class:text-2xl={zoomLevel === 2}
                            class:text-3xl={zoomLevel === 3}
                        >
                            {post.title}
                        </h2>
                        
                        <!-- Excerpt -->
                        <p 
                            class="text-gray-300 mb-4 leading-relaxed text-expand"
                            class:text-sm={zoomLevel === 0}
                            class:text-base={zoomLevel === 1}
                            class:text-lg={zoomLevel === 2}
                            class:text-xl={zoomLevel === 3}
                        >
                            {post.excerpt}
                        </p>
                        
                        <!-- Content (HTML rendered) - Show progressively more content -->
                        {#if zoomLevel >= 2}
                            <div class="text-gray-300 mb-4 leading-relaxed prose prose-invert max-w-none content-transition"
                                 class:prose-sm={zoomLevel === 2}
                                 class:prose-base={zoomLevel === 3}
                            >
                                {@html post.content}
                            </div>
                        {/if}
                        
                        <!-- Author and meta info -->
                        <div 
                            class="flex items-center justify-between text-gray-400 mb-4 text-expand"
                            class:text-xs={zoomLevel === 0}
                            class:text-sm={zoomLevel === 1}
                            class:text-base={zoomLevel === 2}
                            class:text-lg={zoomLevel === 3}
                        >
                            <span class="font-medium">{post.author}</span>
                            <span>{post.readTime}</span>
                        </div>
                        
                        <!-- Date -->
                        <div 
                            class="text-gray-500 mb-4 text-expand"
                            class:text-xs={zoomLevel === 0}
                            class:text-sm={zoomLevel === 1}
                            class:text-base={zoomLevel === 2}
                            class:text-lg={zoomLevel === 3}
                        >
                            {new Date(post.date).toLocaleDateString('en-US', { 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                            })}
                        </div>
                        
                        <!-- Tags -->
                        {#if post.tags && post.tags.length > 0}
                            <div class="flex flex-wrap gap-2 mb-4">
                                {#each post.tags as tag}
                                    <span 
                                        class="bg-gray-700 text-gray-300 px-2 py-1 rounded text-expand"
                                        class:text-xs={zoomLevel === 0}
                                        class:text-sm={zoomLevel === 1}
                                        class:text-base={zoomLevel === 2}
                                        class:text-lg={zoomLevel === 3}
                                        style="border-radius: {8 + zoomLevel * 2}px;"
                                    >
                                        {tag}
                                    </span>
                                {/each}
                            </div>
                        {/if}
                        
                        <!-- Read more button -->
                        <button 
                            class="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium transition-all duration-500 text-expand hover:scale-105 active:scale-95"
                            class:text-sm={zoomLevel === 0}
                            class:text-base={zoomLevel === 1}
                            class:text-lg={zoomLevel === 2}
                            class:text-xl={zoomLevel === 3}
                            class:py-2={zoomLevel === 0}
                            class:py-3={zoomLevel >= 1}
                            class:py-4={zoomLevel >= 3}
                            style="border-radius: {8 + zoomLevel * 4}px;"
                            onclick={() => toggleZoom(post.id || index)}
                        >
                            {#if zoomLevel === 0}
                                🔍 Read More
                            {:else if zoomLevel === 1}
                                ✨ Zoom More
                            {:else if zoomLevel === 2}
                                🚀 Full View
                            {:else}
                                ↩️ Collapse
                            {/if}
                        </button>
                    </div>
                </article>
            {/each}
        </div>
    </div>
</div>