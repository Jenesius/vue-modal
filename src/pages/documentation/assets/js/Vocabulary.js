/*eslint-disable*/



const store =  {
	ru: {

		example: "пример",
		recommendation_npm: "Npm рекомендуется для инсталяции пакета.",
		info_get_started: "Для начала работы нам необходимо проинициализировать модальные окна, добавим контейнер в котором будут показываться наши компоненты. Контейнер импортируем из библиотеки:",

		//OPEN_MODAL
		using_openModal: "Метод openModal используется для показа компоненты в контейнере модальных окон.",
		first_param_openModal: "В качестве первого параметра выступает любой VueComponent, который нужно отобразить:",
		second_param_openModal: "В качестве второго параметра передаются входные данные props.",
		return_openModal: `Метод возвращает объект <a>modalObject.</a>`,
		about_close_openModal: `При показе модальных окон этим методом, все предыдущие окна будут закрыты. Для налаживания модальных окон друг на друг используйте <a>pushModal</a>.`,

		//PUSH_MODAL
		using_pushModal: "В случае, если вам необходимо показатьмодальное окно, а затем над ним показать ещё одно модальное окно(и т.д.), например окно подтверждения действия, необходимо использовать метод pushModal",
		return_pushModal: "Метод возвращает объект <a>modalObject.</a>",
		for_close_pushModal: "Для закрытия только последнего модального окна используется метод <a>popModal</a>",

		//CLOSE_MODAL
		info_closeModal: "Для закрытия <b>всех</b> модальных окон используется метод closeModal:",

		//POP_MODAL
		info_popModal: "Для закрытия <b>только последнего</b> модального окна, если их было открыто несколько при помощи метода pushModal, используется метод <a>popModal</a>:",

		//ON_CLOSE
		info_on_close: "Методы openModal и pushModal возвращают объект <a>modalObject</a>. Для того, чтобы отлавливать закрытие модального окна, нужно добавить эвент к этому объекту:",
		modal_was_close_after: "*Модальное окно будет закрыто после пяти попыток.",
		if_onclose_false_on_close: "В случае, если onclose вернёт <b>false</b>, модальное окно не будет закрыто.",
		if_will_open_some_modals_on_close: "Если будет открыто несколько модальных окон, и на одном из них будет стоять обработчик onclose, возвращающий false, можно закрыть будет только те, модальных окна, которые были открыты после него.",

	},
	en: {
		example: "example",
		recommendation_npm: "Npm is recommended for installing a package.",

		info_get_started: "To get started, we need to initialize the modals. We import the container from the library:",
		//OPEN_MODAL
		using_openModal: "The openModal method is used to display a component in a modal window container.",
		first_param_openModal: "The first parameter is any VueComponent that needs to be displayed:",
		second_param_openModal: "The props input is passed as the second parameter.",
		return_openModal: `The method returns a <a> modalObject. </a>`,
		about_close_openModal: `When displaying modals using this method, all previous windows will be closed. Use <a> pushModal </a> to stack modals on top of each other.`,

		//PUSH_MODAL
		using_pushModal: "In case you need to show a modal window, and then show another modal window (etc.) above it, for example, an action confirmation window, you must use the pushModal method.",
		return_pushModal: "The method returns a <a> modalObject. </a>",
		for_close_pushModal: "To close only the last modal window, use the <a> popModal </a> method.",

		//CLOSE_MODAL
		info_closeModal: "To close <b> all </b> modals, use the closeModal method:",

		//POP_MODAL
		info_popModal: "To close <b> only the last </b> modal window, if several were opened using the pushModal method, use the <a> popModal </a> method:",

		//ON_CLOSE
		info_on_close: "The openModal and pushModal methods return an <a> modalObject </a> object. In order to catch the closing of a modal window, you need to add an event to this object:",
		modal_was_close_after: "* The modal window will close after five attempts.",
		if_onclose_false_on_close: "If onclose returns <b> false </b>, the modal will not be closed.",
		if_will_open_some_modals_on_close: "If several modal windows are open, and one of them will have an onclose handler that returns false, you can close only those modal windows that were opened after it.",


		//ModalObject

	},

	navigationGuards: {
		ru: "Навигационные хуки",
		en: "Navigation Guards",
	},

	pluginInformation: {
		ru: "Jenesius Vue Modal это легковесная и простая библиотека для работы с модальными окнами в Vue3. Она глубоко интегрируется с Vue.js и позволяет создавать модальные окна любой сложности.",
		en: "Jenesius Vue Modal is a lightweight and simple library for working with modal windows in Vue3. It integrates deeply with Vue.js and allows you to create modals of any complexity.",
	},

	onAddModalReturn: {
		ru: "Метод возвращает промис, который в случае успеха вернёт <a>ModalObject</a>",
		en: "The method returns a promise, which, if successful, will return <a> ModalObject </a>"
	},

	guardNavigationHooksOncloseInfo: {
		ru: "Методы <a>openModal<a/> и <a>pushModal<a/> возвращают promoise, который в случае успеха вернёт объект <a>modalObject</a>. Для того, чтобы отлавливать закрытие модального окна, нужно добавить эвент к этому объекту:",
		en: "The <a> openModal <a/> and <a> pushModal <a/> methods return promoise, which, if successful, will return the <a> modalObject </a> object. In order to catch the closing of a modal window, you need to add an event to this object:"
	},
	guardNavigationHooksOncloseReturnFalse: {
		ru: "Если в функциюю 'next' будет передано значение false, модальное окно не будет закрыто.",
		en: "If false is passed to the 'next' function, the modal will not be closed."
	},
	guardNavigationHooksOncloseList: {
		ru: "Если будет открыто несколько модальных окон, и на одном из них будет стоять обработчик onclose, возвращающий false, можно закрыть будет только те, модальных окна, которые были открыты после него.",
		en: "If several modal windows are open, and one of them will have an onclose handler that returns false, you can close only those modal windows that were opened after it."
	},

	guardNavigationHooksInComponent: {
		ru: "Наконец, навигационный хук можно указать и непосредственно в компоненте (том, что указан в конфигурации маршрута), используя следующие опции:",
		en: "Finally, the navigation hook can be specified directly in the component (the one specified in the route configuration) using the following options:"
	},
	guardNavigationHooksCompositionApiInfo: {
		ru: "Хотя вы все еще можете использовать встроенные функции, Jenesius Vue Modal предоставляет функции для Composition API:",
		en: "While you can still use built-in functions, Jenesius Vue Modal provides functions for the Composition API:"
	},

	modalWillNotBeClosed: {
		ru: "Модальное окно не будет закрыто",
		en: "The modal will not be closed"
	},

	uniqueIdentity: {
		ru: "Уникальный идентификатор",
		en: "Unique identity",
	},

	weather: {
		ru: "погода",
		en: "weather"
	},

	rainy: {
		ru:"дождливая",
		en:"rainy"
	},

	closeModalIfWeatherIsRainy: {
		ru: "Закрыть модальное окно, если погода дождливая",
		en: "Close modal if the weather is rainy",
	},

	modalObjectParamId: {
		ru: "<b>id</b> - уникальныидентификатор модального окна.",
		en: "<b> id </b> - unique identifier of the modal window.",
	},
	modalObjectParamClose: {
		ru: "<b>close</b> - метод позволяющий закрыть созданное модальное окно.",
		en: "<b> close </b> - a method that allows you to close the created modal window.",
	},
	modalObjectParamOnclose: {
		ru: "<b>onclose</b> - функция, которая выполняется при попытке закрыть окно. Данную функцию можно переопределить для контроля закрытия окна. Если <b>onclose</b> вернёт false, модальное окно не будет закрыто.",
		en: "<b> onclose </b> is a function that is executed when an attempt is made to close a window. This function can be overridden to control the closing of the window. If <b> onclose </b> returns false, the modal will not be closed.",
	},

	methodsPushAndCloseReturnModalObject: {
		ru: "Методы pushModal и openModal возвращают объект следующего типа:",
		en: "The pushModal and openModal methods return an object of the following type:"
	},

	style: {
		ru: "стилизация",
	},
	animation: {
		ru: "анимация"
	},
	installation: {
		ru: "установка"
	},
	methods: {
		ru: "методы"
	},
	gettingStarted: {
		ru: "Начало работы",
		en: "getting started"
	}

}






let lang = localStorage.getItem("language") || navigator.language || "en";

if (/^ru\b/.test(lang)) {
	lang = 'ru';
}

export  const useVocabulary = new Proxy((name) => {
	return useVocabulary[name]
}, {
	get: (a, b, c) => {

		return a[b];
	}
});


for(let key in store) {
	if (["ru", "en"].includes(key)) continue;

	if (!store[key][lang]) useVocabulary[key] = key;
	else
	useVocabulary[key] = store[key][lang];
}

export  default store;