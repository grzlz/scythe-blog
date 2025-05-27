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
    .masonry-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
        grid-auto-rows: min-content;
        grid-auto-flow: row dense;
        align-items: start;
    }
    
    .masonry-item {
        transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        border-radius: 16px;
        overflow: hidden;
        position: relative;
        background: rgb(17 24 39);
        will-change: transform, grid-column, grid-row;
        contain: layout style paint;
    }
    
    /* Zoom level styles with advanced grid positioning */
    .zoom-0 {
        grid-column: span 1;
        transform: scale(1) translateZ(0);
        z-index: 1;
        filter: brightness(0.95);
    }
    
    .zoom-1 {
        grid-column: span 1;
        transform: scale(1.03) translateZ(10px);
        z-index: 10;
        box-shadow: 
            0 10px 25px -5px rgba(0, 0, 0, 0.25),
            0 20px 40px -12px rgba(0, 0, 0, 0.25);
        filter: brightness(1.05);
    }
    
    .zoom-2 {
        grid-column: span 2;
        transform: scale(1.01) translateZ(20px);
        z-index: 20;
        box-shadow: 
            0 25px 50px -12px rgba(0, 0, 0, 0.35),
            0 0 0 1px rgba(255, 255, 255, 0.05);
        filter: brightness(1.1);
    }
    
    .zoom-3 {
        grid-column: 1 / -1;
        transform: scale(1) translateZ(30px);
        z-index: 30;
        box-shadow: 
            0 35px 70px -12px rgba(0, 0, 0, 0.45),
            0 0 0 1px rgba(255, 255, 255, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        filter: brightness(1.15);
    }
    
    /* Mobile-specific adjustments - always 2 columns */
    @media (max-width: 768px) {
        .masonry-grid {
            gap: 1rem;
        }
        
        /* Adjust zoom behavior for mobile */
        .zoom-2 {
            grid-column: span 2;
        }
        
        .zoom-3 {
            grid-column: span 2;
        }
    }
    
    @media (max-width: 480px) {
        .masonry-grid {
            gap: 0.75rem;
        }
    }
    
    /* Smooth content transitions */
    .content-wrapper {
        transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        transform: translateZ(0);
    }
    
    .text-fluid {
        transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    
    .image-fluid {
        transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        transform: translateZ(0);
    }
    
    /* Enhanced hover effects */
    .masonry-item:hover {
        transform: scale(1.02) translateY(-4px) translateZ(5px);
        transition-duration: 0.3s;
    }
    
    .zoom-1:hover {
        transform: scale(1.05) translateY(-6px) translateZ(15px);
    }
    
    .zoom-2:hover {
        transform: scale(1.03) translateY(-8px) translateZ(25px);
    }
    
    .zoom-3:hover {
        transform: scale(1.01) translateY(-2px) translateZ(35px);
    }
    
    /* Advanced backdrop effects */
    .backdrop-blur-card {
        backdrop-filter: blur(8px) saturate(120%);
        -webkit-backdrop-filter: blur(8px) saturate(120%);
    }
    
    /* Smooth stagger animations */
    .stagger-item {
        animation: staggerIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        opacity: 0;
        transform: translateY(30px) scale(0.95);
    }
    
    @keyframes staggerIn {
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }
</style>

<!-- Advanced Grid Masonry Layout -->
<div class="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 min-h-screen">
    <div class="relative">
        <!-- Background Pattern -->
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)] pointer-events-none"></div>
        
        <!-- Content Container -->
        <div class="relative z-10 p-4 sm:p-6 lg:p-8">
            <div class="max-w-7xl mx-auto">
                <!-- Header with advanced styling -->
                <div class="text-center mb-8 lg:mb-12">
                    <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent mb-4">
                        Latest Blog Posts
                    </h1>
                    <p class="text-gray-400 text-lg max-w-2xl mx-auto">
                        Discover insights, tutorials, and stories through our interactive masonry layout
                    </p>
                </div>
                
                <!-- Advanced Grid Masonry Container -->
                <div class="masonry-grid">
                    {#each posts as post, index}
                        {@const zoomLevel = getZoomLevel(post.id || index)}
                        <article 
                            class="masonry-item backdrop-blur-card stagger-item zoom-{zoomLevel} 
                                   group cursor-pointer select-none"
                            style="
                                animation-delay: {index * 0.1}s;
                                border-radius: {16 + zoomLevel * 4}px;
                                background: linear-gradient(135deg, 
                                    rgba(17, 24, 39, 0.95) 0%, 
                                    rgba(31, 41, 55, 0.9) 100%);
                                border: 1px solid rgba(255, 255, 255, {0.05 + zoomLevel * 0.05});
                            "
                        >
                            <!-- Image Container with advanced effects -->
                            {#if post.image}
                                <div class="relative overflow-hidden"
                                     style="border-radius: {16 + zoomLevel * 4}px {16 + zoomLevel * 4}px 0 0;">
                                    <img 
                                        src={post.image} 
                                        alt={post.title}
                                        class="w-full object-cover image-fluid group-hover:scale-105"
                                        style="
                                            height: {(post.imageHeight || 200) * (1 + zoomLevel * 0.4)}px;
                                            filter: brightness({0.9 + zoomLevel * 0.1}) contrast({1 + zoomLevel * 0.1});
                                        "
                                        loading="lazy"
                                    />
                                    <!-- Overlay gradient -->
                                    <div class="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                            {/if}
                            
                            <!-- Content Container with fluid spacing -->
                            <div class="content-wrapper flex flex-col justify-between min-h-full"
                                 class:p-4={zoomLevel === 0}
                                 class:p-5={zoomLevel === 1}
                                 class:p-6={zoomLevel === 2}
                                 class:p-8={zoomLevel === 3}>
                                
                                <!-- Category Badge with fluid scaling -->
                                <div class="mb-3 flex flex-wrap gap-2">
                                    <span class="inline-flex items-center gap-1 bg-gradient-to-r from-blue-600 to-purple-600 
                                               text-white font-semibold px-3 py-1.5 text-fluid
                                               hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
                                          class:text-xs={zoomLevel === 0}
                                          class:text-sm={zoomLevel === 1}
                                          class:text-base={zoomLevel === 2}
                                          class:text-lg={zoomLevel === 3}
                                          style="border-radius: {12 + zoomLevel * 3}px;">
                                        <span class="w-2 h-2 bg-white/50 rounded-full"></span>
                                        {post.category}
                                    </span>
                                </div>
                                
                                <!-- Title with fluid typography -->
                                <h2 class="font-bold mb-3 text-white leading-tight text-fluid 
                                         group-hover:text-blue-100 transition-colors duration-300"
                                    class:text-lg={zoomLevel === 0}
                                    class:text-xl={zoomLevel === 1}
                                    class:text-2xl={zoomLevel === 2}
                                    class:text-3xl={zoomLevel === 3}>
                                    {post.title}
                                </h2>
                                
                                <!-- Excerpt with fluid sizing -->
                                <div class="flex-1 mb-4">
                                    <p class="text-gray-300 leading-relaxed text-fluid"
                                       class:text-sm={zoomLevel === 0}
                                       class:text-base={zoomLevel === 1}
                                       class:text-lg={zoomLevel === 2}
                                       class:text-xl={zoomLevel === 3}>
                                        {post.excerpt}
                                    </p>
                                </div>
                                
                                <!-- Progressive Content Reveal -->
                                {#if zoomLevel >= 2}
                                    <div class="text-gray-300 mb-6 leading-relaxed prose prose-invert max-w-none 
                                               content-wrapper prose-headings:text-white prose-links:text-blue-400
                                               prose-code:text-pink-400 prose-code:bg-gray-800/50 prose-code:px-1 prose-code:rounded"
                                         class:prose-sm={zoomLevel === 2}
                                         class:prose-base={zoomLevel === 3}>
                                        {@html post.content}
                                    </div>
                                {/if}
                                
                                <!-- Metadata Section with advanced layout -->
                                <div class="mt-auto space-y-3">
                                    <!-- Author and Reading Time -->
                                    <div class="flex items-center justify-between text-gray-400 text-fluid"
                                         class:text-xs={zoomLevel === 0}
                                         class:text-sm={zoomLevel === 1}
                                         class:text-base={zoomLevel === 2}
                                         class:text-lg={zoomLevel === 3}>
                                        <div class="flex items-center gap-2">
                                            <div class="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full 
                                                       flex items-center justify-center text-white font-semibold text-xs">
                                                {post.author?.charAt(0) || 'A'}
                                            </div>
                                            <span class="font-medium">{post.author}</span>
                                        </div>
                                        <span class="flex items-center gap-1">
                                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                                            </svg>
                                            {post.readTime}
                                        </span>
                                    </div>
                                    
                                    <!-- Date -->
                                    <div class="text-gray-500 text-fluid flex items-center gap-2"
                                         class:text-xs={zoomLevel === 0}
                                         class:text-sm={zoomLevel === 1}
                                         class:text-base={zoomLevel === 2}
                                         class:text-lg={zoomLevel === 3}>
                                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                                        </svg>
                                        {new Date(post.date).toLocaleDateString('en-US', { 
                                            year: 'numeric', 
                                            month: 'long', 
                                            day: 'numeric' 
                                        })}
                                    </div>
                                    
                                    <!-- Tags with fluid layout -->
                                    {#if post.tags && post.tags.length > 0}
                                        <div class="flex flex-wrap gap-2">
                                            {#each post.tags as tag}
                                                <span class="bg-gray-800/60 text-gray-300 px-2.5 py-1 text-fluid 
                                                           border border-gray-700/50 hover:border-gray-600/50 
                                                           hover:bg-gray-700/60 transition-all duration-200"
                                                      class:text-xs={zoomLevel === 0}
                                                      class:text-sm={zoomLevel === 1}
                                                      class:text-base={zoomLevel === 2}
                                                      class:text-lg={zoomLevel === 3}
                                                      style="border-radius: {8 + zoomLevel * 2}px;">
                                                    #{tag}
                                                </span>
                                            {/each}
                                        </div>
                                    {/if}
                                    
                                    <!-- Interactive Zoom Button -->
                                    <button class="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 
                                                 hover:from-blue-500 hover:via-purple-500 hover:to-blue-600
                                                 text-white font-medium transition-all duration-500 text-fluid 
                                                 hover:scale-[1.02] active:scale-[0.98] group/btn
                                                 shadow-lg hover:shadow-xl transform-gpu"
                                            class:text-sm={zoomLevel === 0}
                                            class:text-base={zoomLevel === 1}
                                            class:text-lg={zoomLevel === 2}
                                            class:text-xl={zoomLevel === 3}
                                            class:py-2={zoomLevel === 0}
                                            class:py-3={zoomLevel >= 1}
                                            class:py-4={zoomLevel >= 3}
                                            style="border-radius: {12 + zoomLevel * 4}px;"
                                            onclick={() => toggleZoom(post.id || index)}>
                                        <span class="flex items-center justify-center gap-2 group-hover/btn:gap-3 transition-all duration-300">
                                            {#if zoomLevel === 0}
                                                <span class="text-lg group-hover/btn:scale-110 transition-transform duration-300">🔍</span>
                                                Explore Post
                                            {:else if zoomLevel === 1}
                                                <span class="text-lg group-hover/btn:scale-110 transition-transform duration-300">✨</span>
                                                Zoom Deeper
                                            {:else if zoomLevel === 2}
                                                <span class="text-lg group-hover/btn:scale-110 transition-transform duration-300">🚀</span>
                                                Full Experience
                                            {:else}
                                                <span class="text-lg group-hover/btn:scale-110 transition-transform duration-300">↩️</span>
                                                Minimize View
                                            {/if}
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </article>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div>