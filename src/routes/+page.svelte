<script>
    let { data } = $props();

    let articles = data.posts
  // Mock article data (array of objects)

</script>

<!-- Masonry container: 1 column on mobile, 2 on sm, 3 on lg, with gap between columns -->
<div class="bg-primary-300 p-8">
	<div class="columns-2 gap-6 [column-fill:_balance]">
		{#each articles as article}
			<div class="mb-6 break-inside-avoid rounded-lg bg-secondary-900 shadow p-4 inline-block w-full">
				<h3 class="text-xl font-bold mb-2">{article.title}</h3>
				                       <div class="text-gray-300 text-sm mb-4 leading-relaxed prose prose-sm prose-invert max-w-none">
                            {@html article.content}
                        </div>
			</div>
		{/each}
	</div>
</div>