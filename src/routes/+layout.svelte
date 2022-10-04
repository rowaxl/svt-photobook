<script>
	import Header from '../components/Header.svelte';
	import '../app.css';
</script>

<div class="container min-w-full min-h-screen bg-slate-200 dark:bg-slate-70">
	<Header />

	<main class="py-4 px-4 min-h-full">
		<slot />
	</main>
</div>
