// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: true,
	}),

	kit: {
		trailingSlash: 'always',
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
		}),
		prerender: { 
			entries: [
				'/collections/8240068',
				'/collections/4474589',
				'/collections/99144643',
				'/collections/44204348',
				'/collections/1298463',
				'/collections/5Ak7qclzOBg',
				'/collections/8788025',
				'/collections/1dTgp8ML_DY',
				'/collections/1991725',
				'/collections/4315264',
			]
		}
	}
};

export default config;
