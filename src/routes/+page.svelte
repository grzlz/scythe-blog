<script>
    let { data } = $props();
    let posts = data.posts;
</script>

<svelte:head>
    <title>All Posts | Svelte & Tailwind Blog</title>
    <meta name="description" content="A collection of insightful blog posts." />
</svelte:head>

<!-- Masonry container with responsive columns -->
<div class="bg-primary-300 p-8 min-h-screen">
    <div class="max-w-7xl mx-auto">
        <h1 class="text-4xl font-bold text-center mb-8 text-white">Latest Blog Posts</h1>
        
        <!-- Masonry grid: 1 column on mobile, 2 on sm, 3 on lg, 4 on xl -->
        <div class="sm:columns-2 lg:columns-3 xl:columns-4 gap-6 [column-fill:_balance]">
            {#each posts as post}
                <article class="mb-6 break-inside-avoid rounded-lg bg-secondary-900 shadow-lg overflow-hidden inline-block w-full hover:shadow-xl transition-shadow duration-300">
                    <!-- Image -->
                    {#if post.image}
                        <img 
                            src={post.image} 
                            alt={post.title}
                            class="w-full object-cover"
                            style="height: {post.imageHeight}px"
                            loading="lazy"
                        />
                    {/if}
                    
                    <!-- Content -->
                    <div class="p-6">
                        <!-- Category badge -->
                        <div class="mb-3">
                            <span class="inline-block bg-primary-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                {post.category}
                            </span>
                        </div>
                        
                        <!-- Title -->
                        <h2 class="text-xl font-bold mb-3 text-white leading-tight">
                            {post.title}
                        </h2>
                        
                        <!-- Excerpt -->
                        <p class="text-gray-300 text-sm mb-4 leading-relaxed">
                            {post.excerpt}
                        </p>
                        
                        <!-- Content (HTML rendered) -->
                        <div class="text-gray-300 text-sm mb-4 leading-relaxed prose prose-sm prose-invert max-w-none">
                            {@html post.content}
                        </div>
                        
                        <!-- Author and meta info -->
                        <div class="flex items-center justify-between text-xs text-gray-400 mb-4">
                            <span class="font-medium">{post.author}</span>
                            <span>{post.readTime}</span>
                        </div>
                        
                        <!-- Date -->
                        <div class="text-xs text-gray-500 mb-4">
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
                                    <span class="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">
                                        {tag}
                                    </span>
                                {/each}
                            </div>
                        {/if}
                        
                        <!-- Read more button -->
                        <button class="w-full bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium py-2 px-4 rounded transition-colors duration-200">
                            Read More
                        </button>
                    </div>
                </article>
            {/each}
        </div>
    </div>
</div>