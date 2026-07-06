import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			adapter: adapter({
				pages: 'build',
				assets: 'build',
				fallback: undefined,
				strict: true
			}),
			prerender: {
				handleHttpError: ({ path, message }) => {
					// cv-jonathan-nielsen.pdf isn't in static/ yet — add it there when the CV is ready.
					if (path === '/cv-jonathan-nielsen.pdf') return;
					throw new Error(message);
				}
			}
		})
	]
});
