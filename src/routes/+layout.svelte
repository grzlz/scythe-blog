<script>
	import BlogHeader from '$lib/components/BlogHeader.svelte';
	import BlogFooter from '$lib/components/BlogFooter.svelte';
	import '../app.css';
	import { fly } from 'svelte/transition';
	import { page } from '$app/state';

	let { children } = $props();
</script>

<div class="flex flex-col min-h-screen">
	<BlogHeader />

	{#key page.url.pathname}
		<div in:fly={{ y: 50, duration: 300 }} out:fly={{ y: -50, duration: 300 }}>
			{@render children?.()}
		</div>
	{/key}

	<BlogFooter />
</div>
