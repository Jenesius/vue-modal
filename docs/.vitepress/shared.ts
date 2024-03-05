import {defineConfig} from "vitepress";

export const shared = defineConfig({
	title: 'Jenesius vue-modal',
	lastUpdated: true,

	head: [
		['link', { rel: 'icon', href: `/images/logo.png` }],
		['meta', { name: 'keywords', content: 'jenesius-vue-modal, vue-modal, vue3 modal, modal vue,Vue 3, modal windows, popup, modal vue-router, open modal, close modal, vue modal documentation' }]
	],
	sitemap: {
		hostname: "https://modal.jenesius.com"
	},
	themeConfig: {
		logo: '/images/logo.svg',
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/Jenesius/vue-modal' },
		],
	},
})