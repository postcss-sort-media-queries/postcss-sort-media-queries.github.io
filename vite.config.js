import { resolve } from 'path'
import { defineConfig } from 'vite';

export default defineConfig({
	define: {
		'process.env': {},
	},
	build: {
		outDir: 'docs',
		rollupOptions: {
			input: {
				en: './index.html',
				uz: './uz/index.html',
			},
		},
	},
});
