import { highlightElement } from 'prismjs';

import 'prismjs/themes/prism.css';
import './main.css';

class App {
	constructor() {
		this.loadChunks();
	}

	async loadChunks() {
		const modules = [import('postcss'), import('postcss-sort-media-queries/browser')];
		const [postcss, mqSorter] = await Promise.all(modules);
		this.postcss = postcss.default;
		this.mqSorter = mqSorter.default;

		this.vars();
		this.init();
	}

	vars() {
		this.$methods = document.querySelectorAll('[name="sorting_method"]');
		this.$unitlessMqAlwaysFirst = document.getElementById('unitlessMqAlwaysFirst');
		this.$source = document.getElementById('_source');
		this.$sorted = document.getElementById('_sorted');
	}

	init() {
		this.$source.innerHTML = `@media (min-width: 576px) {
	body { color: aliceblue }
}

@media (min-width: 576px) {
	header { color: orange }
}

@media (max-width: 768px) {
	main { color: red }
}

@media (max-width: 992px) {
	footer { color: blue }
}
`;

		this.listeners();
		this.runSorter();
	}

	listeners() {
		this.$source.addEventListener('keyup', this.runSorter.bind(this), false);

		this.$methods.forEach(($method) => {
			$method.addEventListener('change', this.runSorter.bind(this), false);
		});

		this.$unitlessMqAlwaysFirst.addEventListener('click', this.runSorter.bind(this), false);
	}

	runSorter() {
		const inputCSS = this.$source.value;
		const options = {
			sort: this.getSortingMethod(),
			configuration: {
				unitlessMqAlwaysFirst: this.$unitlessMqAlwaysFirst.checked,
			},
		};

		this.postcss([this.mqSorter(options)])
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

	getSortingMethod() {
		return [...this.$methods].filter(($method) => $method.checked)[0].value;
	}
}

new App();
