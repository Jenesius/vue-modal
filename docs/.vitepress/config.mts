export default {
	title: 'JenesiusVueModal',
	description: "Modal system for Vue.",
	head: [
		['link', { rel: 'icon', href: `/images/logo.png` }]
	],
	sitemap: {
		hostname: "https://modal.jenesius.com"
	},
	themeConfig: {
		lastUpdated: true,
		nav: nav(),
		sidebar: sidebar(),
		logo: '/images/logo.svg',
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/Jenesius/vue-modal' },
		],
		footer: {
			message: "Released under the MIT License.",
			copyright: "Copyright © 2022-present Jenesius",
		},
	},
	locales: {
		root: {
			dir: "en",
			label: "English",
		},
		ru: {

			label: "Русский",
			lang: "ru",
			description: "Система форм для Vue",
			themeConfig: {
				nav: nav('ru'),
				sidebar: sidebar('ru'),
				outline: {
					label: "На этой странице",
				},
				docFooter: {
					prev: 'Предыдущая страница',
					next: 'Следующая страница',
				},
				sidebarMenuLabel: 'Меню',
				returnToTopLabel: 'Вернуться наверх',
				langMenuLabel: 'Изменить язык',
				darkModeSwitchLabel: 'Изменить тему'
			},

		},

	},
}
const defaultLang = 'en';
type Lang = 'ru' | 'en'
function nav(lang: Lang = defaultLang) {
	const getLink = getLinkHandler(lang);
	const getLabel = getLabelHandler(lang);
	return [
		{ text: getLabel('guide'), link: getLink('/guide/getting-started'), activeMatch: getLink('/guide/') },
		{ text: getLabel('examples'), link: getLink('/examples/list'), activeMatch: getLink('/examples/') },
		{ text: getLabel('found mistake?'), link: 'https://github.com/Jenesius/vue-modal/issues/new?assignees=&labels=bug&projects=&template=bug_report.md&title=[BUG]'},
	]
}
function sidebar(lang: Lang = defaultLang) {
	const getLink = getLinkHandler(lang);
	const getLabel = getLabelHandler(lang);
	return [
		{
			text: getLabel('guide'),
			items: [
				{ text: getLabel('get started!'), link: getLink('/guide/getting-started') },
				{ text: getLabel('methods'), link: getLink('/guide/guide-methods') },
				{ text: getLabel('navigation guards'), link: getLink('/guide/guide-navigation-guards') },
				{ text: getLabel('returned value'), link: getLink('/guide/guide-returned-value') },
				{ text: getLabel('store'), link: getLink("/guide/store") }
			]
		},
		{
			text: getLabel('details'),
			items: [
				{ text: getLabel('modalObject'), link: getLink('/guide/modal-object')},
				{ text: getLabel('styles'), link: getLink('/guide/details-styles')},
				{ text: getLabel('config'), link: getLink('/guide/config.md')},
				{ text: getLabel('event close'), link: getLink('/guide/event-close') },
				{ text: getLabel('animation'), link: getLink('/guide/details-animation')},
				{ text: getLabel('namespace'), link: getLink('/guide/namespace') }
			]
		},
		{
			text: getLabel('integration With VueRouter'),
			items: [
				{ text: getLabel('introduction'), link: getLink('/guide/integration-introduction')},
				{ text: getLabel('installation'), link: getLink('/guide/integration-installation')},
				{ text: getLabel('practical'), link: getLink('/guide/integration-practical')},
				{ text: getLabel('closing Modal with Router'), link: getLink('/vue-router-integration/close-after-route-changed') }
			]
		}
	]
}




function getLabelHandler(lang: Lang) {
	const labelStore = {
		'namespace': {
			ru: 'namespace'
		},
		'details': {
			ru: 'детали'
		},
		'modalObject': {
			ru: 'modalObject'
		},
		'styles': {
			ru: 'стили'
		},
		'event close': {
			ru: 'Событие закрытия'
		},
		animation: {
			ru: 'анимация'
		},
		'integration With VueRouter': {
			ru: 'интеграция с VueRouter'
		},
		'introduction': {
			ru: 'введение'
		},
		'installation': {
			ru: 'установка'
		},
		'practical': {
			ru: 'передача параметров'
		},
		'closing Modal with Router': {
			ru: 'закрытие модального окна через маршрут'
		},
		'store': {
			ru: 'хранилище'
		},
		'returned value': {
			ru: 'возвращаемое значение'
		},
		'navigation guards': {
			ru: 'навигационные хуки'
		},
		'methods': {
			ru: 'методы'
		},
		'guide': {
			ru: 'руководство'
		},
		'examples': {
			ru: 'примеры'
		},
		'found mistake?': {
			ru: 'нашли ошибку?'
		},
		'get started!': {
			ru: 'приступим!'
		},
		'config': {
			ru: 'конфигурация'
		}
	}
	return function getLabel(label: keyof typeof labelStore) {
		function upper(str: string) {
			if (!str) return '---- -- -----'
			return str[0].toUpperCase() + str.slice(1);
		}
		if (lang === defaultLang) return upper(label);
		return upper(labelStore[label][lang])
	}
}
function getLinkHandler(lang: Lang) {
	return function getLink(link: string) {
		if (lang === defaultLang) return link;
		return [lang, link].join('/');
	}
}