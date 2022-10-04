<script lang="ts">
	import { page } from '$app/stores';

	const navClassList = (isActive: boolean) => {
		return isActive ? 'bg-gray-400 text-gray-800' : ''
	}
</script>

<header class="w-full flex flex-row justify-center bg-gray-200 dark:bg-gray-800 text-black dark:text-white">
	<nav class="flex flex-row px-4 py-2">
		<ul class="flex flex-row text-center">
			<li class="px-4 py-2 rounded {navClassList($page.url.pathname === '/')}">
				<a href="/">Home</a>
			</li>
			<li class="px-4 py-2 rounded {navClassList($page.url.pathname.startsWith('/collections'))}">
				<a href="/collections">Collections</a>
			</li>
		</ul>
	</nav>
</header>
