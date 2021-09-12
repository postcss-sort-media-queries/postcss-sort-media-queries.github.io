import { defineConfig } from 'vite';
import nodePolyfills from 'rollup-plugin-polyfill-node';

export default defineConfig({
	define: {
		'process.env': {},
	},
	build: {
		outDir: 'docs',
		rollupOptions: {
			input: {
				main: './index.html',
			},
			// plugins: [
			// 	nodePolyfills(),
			// ]
		},
	},
});
