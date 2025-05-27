<script>
    let { data } = $props();
    let posts = data.posts.slice(0, 9); // Limit to 9 posts
    
    // Track zoom levels for each post (1, 2, 3)
    let zoomLevels = $state({});
    
    function toggleZoom(postId) {
        const currentLevel = zoomLevels[postId] || 1;
        zoomLevels[postId] = currentLevel >= 3 ? 1 : currentLevel + 1;
    }
    
    function getZoomLevel(postId) {
        return zoomLevels[postId] || 1;
    }
    
    function getGridPosition(index, zoomLevel) {
        // Calculate grid position based on index and zoom levels for 2-column layout
        const row = Math.floor(index / 2) + 1;
        const col = (index % 2) + 1;
        
        let rowSpan = 1;
        let colSpan = 1;
        
        if (zoomLevel === 2) {
            colSpan = 2; // Full width across 2 columns
        } else if (zoomLevel === 3) {
            colSpan = 2; // Full width across 2 columns
            rowSpan = 2; // Double height
        }
        
        return {
            gridColumn: zoomLevel === 1 ? col : '1 / -1',
            gridRow: row,
            gridRowEnd: zoomLevel === 3 ? `span 2` : 'auto'
        };
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
        grid-auto-rows: minmax(auto, max-content);
        align-items: start;
        transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    }
    
    /* Responsive gap adjustments only */
    @media (max-width: 767px) {
        .masonry-grid {
            gap: 1rem;
        }
    }
    
    @media (max-width: 480px) {
        .masonry-grid {
            gap: 0.75rem;
        }
    }
    
    .masonry-item {
        transition: all 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        border-radius: 16px;
        overflow: hidden;
        position: relative;
        background: rgb(17 24 39);
        will-change: transform, opacity;
        contain: layout style paint;
        transform-origin: center center;
        backface-visibility: hidden;
        perspective: 1000px;
        width: 100%;
        height: fit-content;
    }
    
    /* Zoom Level 1: Default state */
    .zoom-1 {
        transform: scale(1) translateZ(0);
        z-index: 1;
        filter: brightness(0.95);
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    
    /* Zoom Level 2: Full width expansion */
    .zoom-2 {
        transform: scale(1.02) translateZ(10px);
        z-index: 10;
        filter: brightness(1.05);
        box-shadow: 
            0 10px 25px -5px rgba(0, 0, 0, 0.25),
            0 20px 40px -12px rgba(0, 0, 0, 0.25);
        transition: all 1.0s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    
    /* Zoom Level 3: Full width + height expansion */
    .zoom-3 {
        transform: scale(1.01) translateZ(20px);
        z-index: 20;
        filter: brightness(1.1);
        box-shadow: 
            0 25px 50px -12px rgba(0, 0, 0, 0.35),
            0 0 0 1px rgba(255, 255, 255, 0.05);
        transition: all 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    
    /* Responsive zoom adjustments - maintain 2 columns always */
    @media (max-width: 767px) {
        .zoom-2, .zoom-3 {
            grid-column: 1 / -1 !important;
        }
    }
    
    /* Content transitions */
    .content-wrapper {
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        transform: translateZ(0);
        will-change: transform, opacity;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    
    .text-fluid, .image-fluid {
        transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        will-change: font-size, transform;
    }
    
    /* Enhanced hover effects */
    .masonry-item:hover {
        transform: scale(1.02) translateY(-4px) translateZ(5px);
        transition-duration: 0.4s;
        transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    
    .zoom-2:hover {
        transform: scale(1.03) translateY(-6px) translateZ(15px);
    }
    
    .zoom-3:hover {
        transform: scale(1.02) translateY(-4px) translateZ(25px);
    }
    
    /* Stagger animation */
    .stagger-item {
        animation: staggerIn 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        opacity: 0;
        transform: translateY(40px) scale(0.92);
    }
    
    @keyframes staggerIn {
        0% {
            opacity: 0;
            transform: translateY(40px) scale(0.92);
        }
        100% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }
    
    /* Image reveal animation */
    .image-reveal {
        animation: imageSlideIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    }
    
    @keyframes imageSlideIn {
        0% {
            opacity: 0;
            transform: translateY(-20px) scale(0.9);
        }
        100% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }
</style>

<!-- CSS Grid Masonry Layout -->
<div class="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 min-h-screen">
    <div class="relative">
        <!-- Background Pattern -->
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)] pointer-events-none"></div>
        
        <!-- Content Container -->
        <div class="relative z-10 p-4 sm:p-6 lg:p-8">
            <div class="max-w-7xl mx-auto">
                <!-- Header -->
                <div class="text-center mb-8 lg:mb-12">
                    <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent mb-4">
                        Latest Blog Posts
                    </h1>
                    <p class="text-gray-400 text-lg max-w-2xl mx-auto">
                        Discover insights through our interactive 2-column masonry grid
                    </p>
                </div>
                
                <!-- CSS Grid Masonry Container -->
                <div class="masonry-grid">
                    {#each posts as post, index}
                        {@const zoomLevel = getZoomLevel(post.id || index)}
                        {@const gridPos = getGridPosition(index, zoomLevel)}
                        
                        <article 
                            class="masonry-item stagger-item zoom-{zoomLevel} group cursor-pointer select-none"
                            style="
                                animation-delay: {index * 0.1}s;
                                grid-column: {gridPos.gridColumn};
                                grid-row-end: {gridPos.gridRowEnd};
                                border-radius: {16 + (zoomLevel - 1) * 4}px;
                                background: linear-gradient(135deg, 
                                    rgba(17, 24, 39, 0.95) 0%, 
                                    rgba(31, 41, 55, 0.9) 100%);
                                border: 1px solid rgba(255, 255, 255, {0.05 + (zoomLevel - 1) * 0.05});
                            "
                        >
                            <!-- Image Container -->
                            {#if post.image}
                                <div class="relative overflow-hidden image-reveal"
                                     style="border-radius: {16 + (zoomLevel - 1) * 4}px {16 + (zoomLevel - 1) * 4}px 0 0;">
                                    <img 
                                        src={post.image} 
                                        alt={post.title}
                                        class="w-full object-cover image-fluid group-hover:scale-105"
                                        style="
                                            height: {zoomLevel === 1 ? 200 : zoomLevel === 2 ? 280 : 400}px;
                                            filter: brightness({0.9 + (zoomLevel - 1) * 0.1}) contrast({1 + (zoomLevel - 1) * 0.1});
                                        "
                                        loading="lazy"
                                    />
                                    <!-- Overlay gradient -->
                                    <div class="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                            {/if}
                            
                            <!-- Content Container -->
                            <div class="content-wrapper"
                                 class:p-4={zoomLevel === 1}
                                 class:p-6={zoomLevel === 2}
                                 class:p-8={zoomLevel === 3}>
                                
                                <!-- Category Badge -->
                                <div class="mb-3 flex flex-wrap gap-2">
                                    <span class="inline-flex items-center gap-1 bg-gradient-to-r from-blue-600 to-purple-600 
                                               text-white font-semibold px-3 py-1.5 text-fluid
                                               hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
                                          class:text-xs={zoomLevel === 1}
                                          class:text-sm={zoomLevel === 2}
                                          class:text-base={zoomLevel === 3}
                                          style="border-radius: {12 + (zoomLevel - 1) * 3}px;">
                                        <span class="w-2 h-2 bg-white/50 rounded-full"></span>
                                        {post.category}
                                    </span>
                                </div>
                                
                                <!-- Title -->
                                <h2 class="font-bold mb-3 text-white leading-tight text-fluid 
                                         group-hover:text-blue-100 transition-colors duration-300"
                                    class:text-lg={zoomLevel === 1}
                                    class:text-xl={zoomLevel === 2}
                                    class:text-3xl={zoomLevel === 3}>
                                    {post.title}
                                </h2>
                                
                                <!-- Excerpt -->
                                <div class="flex-1 mb-4">
                                    <p class="text-gray-300 leading-relaxed text-fluid"
                                       class:text-sm={zoomLevel === 1}
                                       class:text-base={zoomLevel === 2}
                                       class:text-lg={zoomLevel === 3}>
                                        {post.excerpt}
                                    </p>
                                </div>
                                
                                <!-- Progressive Content Reveal -->
                                {#if zoomLevel >= 3}
                                    <div class="text-gray-300 mb-6 leading-relaxed prose prose-invert max-w-none 
                                               content-wrapper prose-headings:text-white prose-links:text-blue-400
                                               prose-code:text-pink-400 prose-code:bg-gray-800/50 prose-code:px-1 prose-code:rounded
                                               flex-1 prose-base">
                                        {@html post.content}
                                    </div>
                                {/if}
                                
                                <!-- Metadata Section -->
                                <div class="mt-auto space-y-3">
                                    <!-- Author and Reading Time -->
                                    <div class="flex items-center justify-between text-gray-400 text-fluid"
                                         class:text-xs={zoomLevel === 1}
                                         class:text-sm={zoomLevel === 2}
                                         class:text-base={zoomLevel === 3}>
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
                                         class:text-xs={zoomLevel === 1}
                                         class:text-sm={zoomLevel === 2}
                                         class:text-base={zoomLevel === 3}>
                                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                                        </svg>
                                        {new Date(post.date).toLocaleDateString('en-US', { 
                                            year: 'numeric', 
                                            month: 'long', 
                                            day: 'numeric' 
                                        })}
                                    </div>
                                    
                                    <!-- Tags -->
                                    {#if post.tags && post.tags.length > 0}
                                        <div class="flex flex-wrap gap-2">
                                            {#each post.tags as tag}
                                                <span class="bg-gray-800/60 text-gray-300 px-2.5 py-1 text-fluid 
                                                           border border-gray-700/50 hover:border-gray-600/50 
                                                           hover:bg-gray-700/60 transition-all duration-200"
                                                      class:text-xs={zoomLevel === 1}
                                                      class:text-sm={zoomLevel === 2}
                                                      class:text-base={zoomLevel === 3}
                                                      style="border-radius: {8 + (zoomLevel - 1) * 2}px;">
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
                                            class:text-sm={zoomLevel === 1}
                                            class:text-base={zoomLevel === 2}
                                            class:text-lg={zoomLevel === 3}
                                            class:py-2={zoomLevel === 1}
                                            class:py-3={zoomLevel === 2}
                                            class:py-4={zoomLevel === 3}
                                            style="border-radius: {12 + (zoomLevel - 1) * 4}px;"
                                            onclick={() => toggleZoom(post.id || index)}>
                                        <span class="flex items-center justify-center gap-2 group-hover/btn:gap-3 transition-all duration-300">
                                            {#if zoomLevel === 1}
                                                <span class="text-lg group-hover/btn:scale-110 transition-transform duration-300">🔍</span>
                                                Expand Horizontally
                                            {:else if zoomLevel === 2}
                                                <span class="text-lg group-hover/btn:scale-110 transition-transform duration-300">📏</span>
                                                Expand Vertically
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