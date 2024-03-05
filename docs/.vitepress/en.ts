import {defineConfig} from "vitepress";

export const en = defineConfig({
	lang: 'en-US',
	description: "Documentation for vue-modal. Flexible and simple library for creating modal windows in Vue3",
	themeConfig: {
		nav: nav(),
		sidebar: {
			'/guide/': {base: '/guide/', items: sidebarGuide()},
		},
		footer: {
			message: "Released under the MIT License.",
			copyright: "Copyright © 2022-present Jenesius",
		},
	},
})

function nav() {
	return [
		{text: 'Guide', link: '/guide/getting-started', activeMatch: '/guide/'},
		{text: 'Examples', link: '/examples/list', activeMatch: '/examples/'},
		{
			text: 'Found mistake?',
			link: 'https://github.com/Jenesius/vue-modal/issues/new?assignees=&labels=bug&projects=&template=bug_report.md&title=[BUG]'
		},
	]
}

function sidebarGuide() {
	return [
		{
			text: 'Guide',
			items: [
				{text: 'Get started!', link: 'getting-started'},
				{text: 'Methods', link: 'guide-methods'},
				{text: 'Navigation guards', link: 'guide-navigation-guards'},
				{text: 'Returned value', link: 'guide-returned-value'},
				{text: 'Store', link: "store"}
			]
		},
		{
			text: 'Details',
			items: [
				{text: 'ModalObject', link: 'modal-object'},
				{text: 'Styles', link: 'details-styles'},
				{text: 'Config', link: 'config'},
				{text: 'Event close', link: 'event-close'},
				{text: 'Animation', link: 'details-animation'},
				{text: 'Namespace', link: 'namespace'},
				{text: 'Sidebar modal', link: 'sidebar'},
			]
		},
		{
			text: 'Integration With VueRouter',
			items: [
				{text: 'Introduction', link: 'integration-introduction'},
				{text: 'Installation', link: 'integration-installation'},
				{text: 'Passing parameters', link: 'integration-practical'},
				{text: 'Closing Modal with Router', link: 'close-after-route-changed'}
			]
		}
	]
}