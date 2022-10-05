<script>
	import Header from '../lib/components/Header.svelte';
	import '../app.css';
</script>

<div class="container min-w-full h-full bg-slate-200 dark:bg-slate-700">
	<Header />

	<main class="py-4 px-4">
		<slot />
	</main>

	<footer class="px-4 text-sm dark:text-white">
		Powered by <a href="https://unsplash.com/">Unsplash</a>
	</footer>
</div>
