<script>
	import BlogHeader from '$lib/components/BlogHeader.svelte';
	import BlogFooter from '$lib/components/BlogFooter.svelte';
	import '../../app.css'; // Ensure global styles are imported

	let { children } = $props();
</script>

<div class="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-800">
	<BlogHeader />
		{@render children()}
	<BlogFooter />
</div>