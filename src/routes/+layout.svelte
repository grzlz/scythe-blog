<script>
	import '../app.css'; // Import global styles once here
	let { children } = $props();
</script>

<div class="flex flex-col min-h-screen">

	{@render children()}
</div>
