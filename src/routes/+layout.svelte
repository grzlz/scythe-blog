<script>
		import BlogHeader from '$lib/components/BlogHeader.svelte';
	import BlogFooter from '$lib/components/BlogFooter.svelte';
	import '../app.css'; // Import global styles once here
	let { children } = $props();
</script>

<div class="flex flex-col min-h-screen">

		<BlogHeader />
	{@render children()}
		<BlogFooter />
</div>
