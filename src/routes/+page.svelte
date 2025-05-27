<script>
    let { data } = $props();
    let posts = data.posts.slice(0, 9); // Limit to max 9 posts as requested
    // Track zoom levels for each post (0, 1, 2, 3)
    let zoomLevels = $state({});
    
    function toggleZoom(postId) {
        const currentLevel = zoomLevels[postId] || 0;
        zoomLevels[postId] = currentLevel >= 3 ? 0 : currentLevel + 1;
    }
    
    function getZoomLevel(postId) {
        return zoomLevels[postId] || 0;
    }
    
    // Helper functions for grid layout
    function getGridArea(postId, zoomLevel) {
        // For a true masonry layout, we need to calculate grid areas dynamically
        // based on zoom level to ensure consistent spacing
        if (zoomLevel === 0) return ""; // Default placement
        
        // For zoomed items, we'll return specific grid areas
        // This ensures they take up the right amount of space
        if (zoomLevel === 1) return "span 1 / span 2"; // Span 2 columns
        if (zoomLevel === 2) return "span 2 / span 2"; // Span 2 columns and 2 rows
        if (zoomLevel === 3) return "span 2 / span 3"; // Span 3 columns and 2 rows
        
        return "";
    }
    
    // Calculate z-index based on zoom level for proper stacking
    function getZIndex(zoomLevel) {
        return zoomLevel * 10;
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
        transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    }
    
    /* Responsive gap adjustments */
    @media (min-width: 1024px) {
        .masonry-container {
            gap: 2rem;
        }
    }
    
    @media (max-width: 768px) {
        .masonry-container {
            gap: 1rem;
        }
    }
    
    @media (max-width: 480px) {
        .masonry-container {
            gap: 0.75rem;
        }
    }
    
    .masonry-item {
        transition: all 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        border-radius: 16px;
        overflow: hidden;
        position: relative;
        background: rgb(17 24 39);
        will-change: transform, width, height, opacity;
        contain: layout style paint;
        transform-origin: center center;
        backface-visibility: hidden;
        perspective: 1000px;
        flex-shrink: 0;
    }
    
    /* Base widths for different screen sizes */
    .zoom-0 {
        width: calc(50% - 0.75rem); /* 2 columns on mobile */
        transform: scale(1) translateZ(0) rotateX(0deg);
        z-index: 1;
        filter: brightness(0.95);
        transition: all 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    
    /* First zoom: Expand horizontally (x-axis) */
    .zoom-1 {
        width: calc(100% - 0rem); /* Takes full width, pushes others to next row */
        transform: scale(1.01) translateZ(10px) rotateX(-1deg);
        z-index: 10;
        box-shadow: 
            0 10px 25px -5px rgba(0, 0, 0, 0.25),
            0 20px 40px -12px rgba(0, 0, 0, 0.25);
        filter: brightness(1.05);
        transition: all 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    
    /* Second zoom: Expand vertically (y-axis) while maintaining full width */
    .zoom-2 {
        width: calc(100% - 0rem);
        min-height: 600px; /* Expand vertically */
        transform: scale(1) translateZ(20px) rotateX(0deg);
        z-index: 20;
        box-shadow: 
            0 25px 50px -12px rgba(0, 0, 0, 0.35),
            0 0 0 1px rgba(255, 255, 255, 0.05);
        filter: brightness(1.1);
        transition: all 1.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    
    /* Third zoom: Maximum expansion */
    .zoom-3 {
        width: calc(100% - 0rem);
        min-height: 800px; /* Even more vertical expansion */
        transform: scale(1) translateZ(30px) rotateX(0deg);
        z-index: 30;
        box-shadow: 
            0 35px 70px -12px rgba(0, 0, 0, 0.45),
            0 0 0 1px rgba(255, 255, 255, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        filter: brightness(1.15);
        transition: all 1.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    
    /* Responsive width adjustments */
    @media (min-width: 768px) {
        .zoom-0 {
            width: calc(50% - 1rem); /* 2 columns on tablet */
        }
    }
    
    @media (min-width: 1024px) {
        .zoom-0 {
            width: calc(33.333% - 1.33rem); /* 3 columns on desktop */
        }
        
        .zoom-1 {
            width: calc(66.666% - 0.66rem); /* 2/3 width on desktop for horizontal expansion */
        }
    }
    
    /* Smooth content transitions with enhanced fluidity */
    .content-wrapper {
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        transform: translateZ(0);
        will-change: transform, opacity;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    
    .text-fluid {
        transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        will-change: font-size, transform;
    }
    
    .image-fluid {
        transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        transform: translateZ(0);
        will-change: transform, filter;
    }
    
    /* Enhanced hover effects with fluid motion */
    .masonry-item:hover {
        transform: scale(1.02) translateY(-4px) translateZ(5px) rotateX(-1deg);
        transition-duration: 0.4s;
        transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    
    .zoom-1:hover {
        transform: scale(1.02) translateY(-6px) translateZ(15px) rotateX(-2deg);
        transition-duration: 0.4s;
    }
    
    .zoom-2:hover {
        transform: scale(1.01) translateY(-4px) translateZ(25px) rotateX(-1deg);
        transition-duration: 0.4s;
    }
    
    .zoom-3:hover {
        transform: scale(1.005) translateY(-2px) translateZ(35px) rotateX(-0.5deg);
        transition-duration: 0.4s;
    }
    
    /* Advanced backdrop effects */
    .backdrop-blur-card {
        backdrop-filter: blur(8px) saturate(120%);
        -webkit-backdrop-filter: blur(8px) saturate(120%);
    }
    
    /* Image reveal animation */
    .image-reveal {
        animation: imageSlideIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        transform-origin: top center;
    }
    
    @keyframes imageSlideIn {
        0% {
            opacity: 0;
            transform: translateY(-20px) scale(0.9);
            clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
        }
        50% {
            opacity: 0.7;
            transform: translateY(-5px) scale(0.95);
            clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
        }
        100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }
    }
    
    .stagger-item {
        animation: staggerIn 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        opacity: 0;
        transform: translateY(40px) scale(0.92) rotateX(8deg);
        will-change: transform, opacity;
        backface-visibility: hidden;
    }
    
    @keyframes staggerIn {
        0% {
            opacity: 0;
            transform: translateY(40px) scale(0.92) rotateX(8deg);
        }
        50% {
            opacity: 0.7;
            transform: translateY(10px) scale(0.98) rotateX(2deg);
        }
        100% {
            opacity: 1;
            transform: translateY(0) scale(1) rotateX(0deg);
        }
    }
    
    /* Cascade effect animation for flex wrap */
    .cascade-push {
        animation: cascadePush 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    }
    
    @keyframes cascadePush {
        0% {
            transform: translateX(0) translateY(0);
            opacity: 1;
        }
        50% {
            transform: translateX(20px) translateY(-10px);
            opacity: 0.8;
        }
        100% {
            transform: translateX(0) translateY(0);
            opacity: 1;
        }
    }
</style>

<!-- Advanced Flex Masonry Layout -->
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
                
                <!-- True CSS Grid Masonry Layout -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
                    {#each posts as post, index}
                        {@const zoomLevel = getZoomLevel(post.id || index)}
                        {@const gridArea = getGridArea(post.id || index, zoomLevel)}
                        {@const zIndex = getZIndex(zoomLevel)}
                        <article 
                            class="relative overflow-hidden rounded-xl shadow-lg transition-all duration-700 ease-in-out
                                  bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800
                                  hover:shadow-xl group"
                            style="
                                grid-area: {gridArea};
                                z-index: {zIndex};
                                transform: scale({1 + zoomLevel * 0.01}) translateZ({zoomLevel * 10}px);
                                transition-delay: {index * 0.05}s;
                                border-radius: {16 + zoomLevel * 4}px;
                                border-color: rgba(255, 255, 255, {0.05 + zoomLevel * 0.05});
                                box-shadow: 0 {10 + zoomLevel * 10}px {20 + zoomLevel * 15}px rgba(0, 0, 0, 0.3);
                            "
                        >
                            <!-- Image Container - show for all zoom levels -->
                            {#if post.image}
                                <div class="relative overflow-hidden" 
                                     style="
                                        height: {zoomLevel === 0 ? 150 : zoomLevel === 1 ? 200 : zoomLevel === 2 ? 250 : 300}px;
                                        transition: height 0.7s cubic-bezier(0.4, 0, 0.2, 1);
                                     ">
                                    <img 
                                        src={post.image} 
                                        alt={post.title}
                                        class="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
                                        style="
                                            filter: brightness({0.9 + zoomLevel * 0.1}) contrast({1 + zoomLevel * 0.05});
                                        "
                                        loading="lazy"
                                    />
                                    <!-- Overlay gradient -->
                                    <div class="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                            
                                    <!-- Category Badge - positioned on image -->
                                    <div class="absolute bottom-4 left-4">
                                        <span class="inline-flex items-center gap-1 bg-gradient-to-r from-blue-600 to-purple-600 
                                                   text-white font-semibold px-3 py-1.5 
                                                   transition-all duration-300 rounded-full"
                                          class:text-xs={zoomLevel === 0}
                                          class:text-sm={zoomLevel === 1}
                                              class:text-base={zoomLevel >= 2}>
                                            <span class="w-2 h-2 bg-white/50 rounded-full"></span>
                                        {post.category}
                                    </span>
                                </div>
                                </div>
                                {/if}
                                
                            <!-- Content Container -->
                            <div class="p-5 flex flex-col h-[calc(100%-{zoomLevel === 0 ? 150 : zoomLevel === 1 ? 200 : zoomLevel === 2 ? 250 : 300}px)]"
                                 style="transition: padding 0.5s ease-out;">
                                <!-- Title with fluid typography -->
                                <h2 class="font-bold mb-3 text-white leading-tight 
                                         group-hover:text-blue-100 transition-colors duration-300"
                                    class:text-lg={zoomLevel === 0}
                                    class:text-xl={zoomLevel === 1}
                                    class:text-2xl={zoomLevel === 2}
                                    class:text-3xl={zoomLevel === 3}>
                                    {post.title}
                                </h2>
                                <!-- Excerpt with fluid sizing -->
                                <div class="mb-4">
                                    <p class="text-gray-300 leading-relaxed"
                                            class:text-sm={zoomLevel === 0}
                                            class:text-base={zoomLevel === 1}
                                       class:line-clamp-3={zoomLevel <= 1}
                                       class:text-lg={zoomLevel >= 2}>
                                        {post.excerpt}
                                    </p>
                                </div>
                                
                                <!-- Progressive Content Reveal -->
                                {#if zoomLevel >= 2}
                                    <div class="text-gray-300 mb-6 leading-relaxed prose prose-invert max-w-none 
                                               prose-headings:text-white prose-links:text-blue-400
                                               prose-code:text-pink-400 prose-code:bg-gray-800/50 prose-code:px-1 prose-code:rounded
                                               overflow-y-auto"
                                         class:prose-sm={zoomLevel === 2}
                                         class:prose-base={zoomLevel === 3}
                                         style="max-height: {zoomLevel === 2 ? '200px' : '400px'}; transition: max-height 0.7s ease-out;">
                                        {@html post.content}
                                    </div>
                                {/if}
                                
                                <!-- Metadata Section -->
                                <div class="mt-auto space-y-3">
                                    <!-- Author and Reading Time -->
                                    <div class="flex items-center justify-between text-gray-400"
                                         class:text-xs={zoomLevel === 0}
                                         class:text-sm={zoomLevel >= 1}>
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
                                    {#if zoomLevel >= 1}
                                        <div class="text-gray-500 flex items-center gap-2"
                                             class:text-xs={zoomLevel === 1}
                                             class:text-sm={zoomLevel >= 2}>
                                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                                            </svg>
                                            {new Date(post.date).toLocaleDateString('en-US', { 
                                                year: 'numeric', 
                                                month: 'long', 
                                                day: 'numeric' 
                                            })}
    </div>
                                    {/if}
                                    
                                    <!-- Tags -->
                                    {#if post.tags && post.tags.length > 0 && zoomLevel >= 1}
                                        <div class="flex flex-wrap gap-2">
                                            {#each post.tags as tag}
                                                <span class="bg-gray-800/60 text-gray-300 px-2.5 py-1 
                                                           border border-gray-700/50 rounded-full
                                                           hover:bg-gray-700/60 transition-all duration-200"
                                                      class:text-xs={zoomLevel === 1}
                                                      class:text-sm={zoomLevel >= 2}>
                                                    #{tag}
                                                </span>
                                            {/each}
</div>
                                    {/if}
                                    
                                    <!-- Interactive Zoom Button -->
                                    <button class="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 
                                                 hover:from-blue-500 hover:via-purple-500 hover:to-blue-600
                                                 text-white font-medium transition-all duration-500
                                                 hover:scale-[1.02] active:scale-[0.98] group/btn
                                                 shadow-lg hover:shadow-xl rounded-lg"
                                            class:text-sm={zoomLevel === 0}
                                            class:text-base={zoomLevel >= 1}
                                            class:py-2={zoomLevel === 0}
                                            class:py-3={zoomLevel >= 1}
                                            onclick={() => toggleZoom(post.id || index)}>
                                        <span class="flex items-center justify-center gap-2 group-hover/btn:gap-3 transition-all duration-300">
                                            {#if zoomLevel === 0}
                                                <span class="text-lg group-hover/btn:scale-110 transition-transform duration-300">🔍</span>
                                                Expand
                                            {:else if zoomLevel === 1}
                                                <span class="text-lg group-hover/btn:scale-110 transition-transform duration-300">📏</span>
                                                More Details
                                            {:else if zoomLevel === 2}
                                                <span class="text-lg group-hover/btn:scale-110 transition-transform duration-300">🚀</span>
                                                Full View
                                            {:else}
                                                <span class="text-lg group-hover/btn:scale-110 transition-transform duration-300">↩️</span>
                                                Collapse
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