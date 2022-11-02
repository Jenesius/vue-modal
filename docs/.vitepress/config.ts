export default {
	title: 'JenesiusVueModal',
	description: "Modal system for Vue.",
	
	themeConfig: {
		nav: nav(),
		sidebar: sidebar(),
		logo: './../images/logo.svg',
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/Jenesius/vue-modal' },
		]
	},
	
}

function nav() {
	return [
		{ text: 'Guide', link: '/guide/getting-started', activeMatch: '/guide/' },
		{ text: 'Examples', link: '/examples/list', activeMatch: '/examples/' }
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
				{ text: 'Returned value', link: '/guide/guide-returned-value' }
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
				
			]
		}
	]
}
