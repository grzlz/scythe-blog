<script>
	import BlogHeader from '$lib/components/BlogHeader.svelte';
	import BlogFooter from '$lib/components/BlogFooter.svelte';
	import '../app.css';
	import { fade } from 'svelte/transition';
	import { page } from '$app/state';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';

	let { children } = $props();

	injectAnalytics();

</script>

<div class="flex flex-col min-h-screen">
	<BlogHeader />

	{#key page.url.pathname}
	<div in:fade={{ duration: 300 }}>
		{@render children?.()}
	</div>
	{/key}
	
	<BlogFooter />
</div>
