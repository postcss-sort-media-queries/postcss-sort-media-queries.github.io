import { highlightElement } from 'prismjs';

import 'prismjs/themes/prism.css';

class App {
	constructor() {
		this.loadChunks();
	}

	async loadChunks() {
		const modules = [import('postcss'), import('postcss-sort-media-queries')];
		const [postcss, mqSorter] = await Promise.all(modules);
		this.postcss = postcss.default;
		this.mqSorter = mqSorter.default;

		this.vars();
		this.init();
	}

	vars() {
		this.$source = document.getElementById('_source');
		this.$sorted = document.getElementById('_sorted');
	}

	init() {
		this.listeners();
		this.runSorter();
	}

	listeners() {
		this.$source.addEventListener('keyup', this.runSorter.bind(this), false);
	}

	runSorter() {
		const inputCSS = this.$source.value;

		this.postcss([this.mqSorter()])
			.process(inputCSS)
			.then((compiled) => {
				let html = '';

				html += this.textPrepare(compiled.css);

				this.$sorted.innerHTML = html;
				highlightElement(this.$sorted);
			})
			.catch((error) => {
				console.log(error);
				this.$sorted.innerHTML = this.textPrepare(error.toString());
			});
	}

	textPrepare(text = '') {
		return text.replace(/\</g, "&lt;").replace(/\>/g, "&gt;");
	}
}

new App();
