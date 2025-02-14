import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$routes: path.resolve('./src/routes')
		}
	},
	server: {
		allowedHosts: ['frontend_web', 'amanagrawal1.com'],
		host: true
	}
};

export default config;
