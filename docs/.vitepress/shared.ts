import {defineConfig} from "vitepress";

export const shared = defineConfig({
	title: 'JenesiusVueModal',

	lastUpdated: true,

	head: [
		['link', { rel: 'icon', href: `/images/logo.png` }]
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