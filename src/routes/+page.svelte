<script>
  import { posts } from '$lib/posts.js';
</script>

<section class="max-w-3xl mx-auto px-4 py-12">
  <h1 class="text-4xl font-bold mb-8">El Blog de Scythe</h1>

  {#each posts as post}
    <article class="mb-8">
      <a href={`/blog/${post.slug}`} class="text-2xl font-semibold text-primary-500 hover:underline">{post.title}</a>
      <p class="text-sm text-gray-500">por {post.author} — {post.date}</p>
      <p class="mt-2 text-primary-300">{post.content.match(/<p>(.*?)<\/p>/)?.[1]}</p>
    </article>
  {/each}
</section>
