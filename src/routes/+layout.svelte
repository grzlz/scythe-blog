<script>
	import BlogHeader from '$lib/components/BlogHeader.svelte';
	import BlogFooter from '$lib/components/BlogFooter.svelte';
	import '../app.css';
	import { fade } from 'svelte/transition';
	import { page } from '$app/state';
	import { injectAnalytics, track } from '@vercel/analytics/sveltekit';
	import { beforeNavigate } from '$app/navigation';

	let { children } = $props();

	injectAnalytics();

	// Time tracking analytics
	let start = Date.now();
	let currentPath = page.url.pathname;
	
	function trackTimeSpent(pathname) {
		const seconds = Math.round((Date.now() - start) / 1000);
		
		// Only track if user spent meaningful time (more than 1 second)
		if (seconds > 1) {
			const cleanPath = pathname === '/' ? 'home' : pathname.replace(/\//g, '-').replace(/^-/, '');
			
			track('time-spent', { 
				page: cleanPath,
				seconds: seconds 
			});
		}
	}

	function handleVisibilityChange() {
		if (document.visibilityState === 'hidden') {
			trackTimeSpent(currentPath);
		}
	}

	// Track time when navigating away from a route
	beforeNavigate(() => {
		trackTimeSpent(currentPath);
	});

	$effect(() => {
		document.addEventListener('visibilitychange', handleVisibilityChange);
		return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
	});

	// Reset timer on route change
	$effect(() => {
		const newPath = page.url.pathname;
		if (newPath !== currentPath) {
			currentPath = newPath;
			start = Date.now();
		}
	});
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