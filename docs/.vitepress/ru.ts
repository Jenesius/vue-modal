import {defineConfig} from "vitepress";
export const ru = defineConfig({
	lang: 'ru-RU',
	description: "Документация для vue-modal. Гибкая и простая библиотека для создания модальных окон в Vue3.",

	themeConfig: {
		nav: nav(),
		sidebar: {
			'/ru/guide/': { base: '/ru/guide/', items: sidebarGuide()},
		},
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
		darkModeSwitchLabel: 'Изменить тему',
		lastUpdated: {
			text: "Последнее обновление"
		}
	},
})

function nav() {
	return [
		{ text: 'Руководство', link: '/guide/getting-started', activeMatch: '/guide/' },
		{ text: 'Примеры', link: '/ru/examples/list', activeMatch: '/examples/' },
		{ text: 'Нашли ошибку?', link: 'https://github.com/Jenesius/vue-modal/issues/new?assignees=&labels=bug&projects=&template=bug_report.md&title=[BUG]'},
	]
}

function sidebarGuide() {
	return [
		{
			text: 'Руководство',
			items: [
				{ text: 'Приступим!', link: 'getting-started' },
				{ text: 'Методы', link: 'guide-methods' },
				{ text: 'Навигационные хуки', link: 'guide-navigation-guards' },
				{ text: 'Возвращаемое значение', link: 'guide-returned-value' },
				{ text: 'Хранилище', link: "store" }
			]
		},
		{
			text: 'Детали',
			items: [
				{ text: 'ModalObject', link: 'modal-object'},
				{ text: 'Стили', link: 'details-styles'},
				{ text: 'Конфигурация', link: 'config'},
				{ text: 'Событие закрытия', link: 'event-close' },
				{ text: 'Анимация', link: 'details-animation'},
				{ text: 'Namespace', link: 'namespace' },
				{ text: 'Боковое окно', link: 'sidebar' },
			]
		},
		{
			text: 'Интеграция с VueRouter',
			items: [
				{ text: 'Введение', link: 'integration-introduction'},
				{ text: 'Установка', link: 'integration-installation'},
				{ text: 'Передача параметров', link: 'integration-practical'},
				{ text: 'Закрытие модального окна через маршрут', link: 'close-after-route-changed' }
			]
		}
	]
}