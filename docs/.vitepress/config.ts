export default {
	title: 'JenesiusVueModal',
	description: "Modal system for Vue.",
	head: [
		['link', { rel: 'icon', href: `/images/logo.png` }]
	],
	themeConfig: {
		nav: nav(),
		sidebar: sidebar(),
		logo: './../images/logo.svg',
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/Jenesius/vue-modal' },
		],
		footer: {
			message: "Released under the MIT License.",
			copyright: "Copyright © 2022-present Jenesius",
		},
	},
	
}

function nav() {
	return [
		{ text: 'Guide', link: '/guide/getting-started', activeMatch: '/guide/' },
		{ text: 'Examples', link: '/examples/list', activeMatch: '/examples/' },
		{ text: 'Found mistake?', link: 'https://github.com/Jenesius/vue-modal/issues/new?assignees=&labels=bug&projects=&template=bug_report.md&title=[BUG]'},
	]
}
function sidebar() {
	return [
		{
			text: 'Guide',
			items: [
				{ text: 'Getting started', link: '/guide/getting-started' },
				{ text: 'Methods', link: '/guide/guide-methods' },
				{ text: 'Navigation Guards', link: '/guide/guide-navigation-guards' },
				{ text: 'Returned value', link: '/guide/guide-returned-value' },
				{ text: 'Store', link: "/guide/store" }
			]
		},
		{
			text: 'Details',
			items: [
				{ text: 'ModalObject', link: '/guide/modal-object'},
				{ text: 'Styles', link: '/guide/details-styles'},
				{ text: 'Config', link: '/guide/config.md'},
				{ text: 'Event close', link: '/guide/event-close' },
				{ text: 'Animation', link: '/guide/details-animation'},
			]
		},
		{
			text: 'Integration With VueRouter',
			items: [
				{ text: 'Introduction', link: '/guide/integration-introduction'},
				{ text: 'Installation', link: '/guide/integration-installation'},
				{ text: 'Practical', link: '/guide/integration-practical'},
				{ text: 'Closing Modal with Router', link: '/vue-router-integration/close-after-route-changed' }
			]
		}
	]
}
