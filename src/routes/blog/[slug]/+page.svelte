<script>
  const { post } = $props();
</script>

<article class="prose dark:prose-invert max-w-3xl mx-auto px-4 py-12">
  <h1 class="text-4xl font-bold">{post.title}</h1>
  <p class="text-sm text-gray-500 mb-4">por {post.author} — {post.date}</p>
  {@html post.content}
</article>
