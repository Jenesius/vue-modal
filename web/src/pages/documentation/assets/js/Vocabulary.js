/*eslint-disable*/



const store =  {

	example: {
		en: "example",
		ru: "пример"
	},

	returnValue: {
		ru: "Возвращаемое значение",
		en: "Return value"
	},

	pluginInformation: {
		ru: "Jenesius Vue Modal это легковесная и простая библиотека для работы с модальными окнами в Vue3. Она глубоко интегрируется с Vue.js и позволяет создавать модальные окна любой сложности.",
		en: "Jenesius Vue Modal is a lightweight and simple library for working with modal windows in Vue3. It integrates deeply with Vue.js and allows you to create modals of any complexity.",
	},
	informationNpm: {
		ru: "Npm рекомендуется для инсталяции пакета.",
		en: "Npm is recommended for installing a package."
	},
	informationGetStarted: {
		ru: "Для начала работы нам необходимо проинициализировать модальные окна, добавим контейнер в котором будут показываться наши компоненты. Контейнер импортируем из библиотеки:",
		en: "To get started, we need to initialize modal windows, add a container in which our components will be displayed. We import the container from the library:"
	},


	openModalInfo: {
		ru: "Метод openModal используется для показа компоненты в контейнере модальных окон. Перед показом модального окна, метод закроет все открытые модальные окна, если у него получится сделать это, он откроет новое. На вход принимаются два параметра:",
		en: "The openModal method is used to display a component in a modal window container. Before showing the modal window, the method will close all open modal windows, if it succeeds, it will open a new one. Two parameters are accepted as input:"
	},
	addModalFirstParam : {
		ru: "объект компоненты, который будет отрисован в качестве модального окна.",
		en: "a component object that will be rendered as a modal window."
	},
	addModalSecondParam: {
		ru: "объект в котором находятся входные параметры, которые передаются в модальное окно и будут доступным из props.",
		en: "the object that contains the input parameters that are passed to the modal and will be accessible from props."
	},

	addModalReturnValue: {
		ru: `Promise, который в случае успеха вернёт объект <a>ModalObject</a>.`,
		en: `Promise that, if successful, will return a <a> ModalObject </a>.`
	},

	pushModalInfo: {
		ru: "Метод pushModal используется для показа модального окна, но ,в отличии от openModal, он не закрывает откртые ранее модальные окна, а показывает новое поверх остальных. На вход принимаются два параметра:",
		en: "The pushModal method is used to show a modal window, but, unlike openModal, it does not close previously opened modals, but shows the new one on top of the rest. Two parameters are accepted as input:"
	},
	howCloseLastModal: {
		ru: "Чтобы закрыть только последнее окно, необходимо использовать метод <a>popModal</a>",
		en: "To close only the last window, you need to use the <a> popModal </a> method"
	},

	closeModalInfo: {
		ru: "Для закрытия <b>всех</b> модальных окон используется метод closeModal:",
		en: "To close <b> all </b> modals, use the closeModal method"
	},
	popModalInfo: {
		en: "To close <b> only the last </b> modal window, if several were opened using the pushModal method, use the <a> popModal </a> method:",
		ru: "Для закрытия <b>только последнего</b> модального окна, если их было открыто несколько при помощи метода pushModal, используется метод <a>popModal</a>:"
	},


	guardInformation: {
		en: "Sometimes it is necessary to catch the closing of a modal and manage this state. This can be useful to prevent the user from closing the modal until they have entered input, or to send a request to the server.",
		ru: "Иногда необходимо отлавливать закрытие модального окна и управлять этим состоянием. Это может быть удобно для того, чтобы не дать пользователю закрыть модальное окно, пока он не ввёл входные данные, или отправить запрос на сервер."
	},

	guardReturn: {
		en: "If the handler returns <b> false </b> or <b> throws an error </b>, closing the modal window will be interrupted.",
		ru: "Если обработчик вернёт <b>false</b> или <b>выбросит ошибку</b>, закрытие модалього окна будет прервано."
	},
	guardMethods: {
		en: "Jenesius Vue Modal provides three ways to catch closures:",
		ru: "Jenesius Vue Modal предоставляет три способа отлавливать закрытие:"
	},


	guardNavigationHooksOncloseInfo: {
		ru: `Методы <a>openModal</a> и <a>pushModal</a> возвращают Promise, который в случае успеха вернёт объект <a>modalObject</a>. Для того, чтобы отлавливать закрытие модального окна, нужно добавить эвент <b>onclose</b> к этому объекту:`,
		en: "The <a> openModal </a> and <a> pushModal </a> methods return Promise, which, if successful, will return the <a> modalObject </a> object. In order to catch the closing of a modal window, you need to add an event <b>onclose</b> to this object:"
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

	hasAccessToThis: {
		en: "has access to the context of the component instance this.",
		ru: "имеет доступ к контексту экземпляра компонента this."
	},
	doYouWantToLeave: {
		en: "Do you really want to leave? You have unsaved changes!",
		ru: "Вы действительно хотите уйти? У вас есть несохранённые данные!"
	},
	navigationGuards: {
		en: "Navigation Guards",
		ru: "Навигационные хуки"
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
	closeOnly: {
		en: "close only",
		ru: "закроет только"
	},
	closeModalAfterFiveAttempts: {
		en: "The modal window will be closed after five attempts.",
		ru: "Модальное окно будет закрыто после пяти попыток."
	},
	closeModalIfWeatherIsRainy: {
		ru: "Закрыть модальное окно, если погода дождливая",
		en: "Close modal if the weather is rainy",
	},
	Information: {
		en: "information",
		ru: "информация"
	},
	details: {
		en: "details",
		ru: "подробности"
	},
	InComponentGuards: {
		en: "in-Component guards",
		ru: "хуки внутри компонент"
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
	guardAsyncInfo: {
		ru: "Навигационный хук может быть асинхронным. Модальное окно будет закрыто только тогда, когда он завершит свою работу:",
		en: "The navigation hook can be asynchronous. The modal window will be closed only when it finishes its work:"
	},
	modalWillCloseAfterSecond: {
		ru: "Модальное окно будет закрыто после одной секунды.",
		en: "The modal will be closed after one second."
	},
	asyncGuards: {
		ru: "асинхронные хуки",
		en: "async guards"
	},

	or: {
		ru: "или"
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

export const useVocabulary = new Proxy((name) => {
	return useVocabulary[name]
}, {

});

for(let key in store) {
	if (["ru", "en"].includes(key)) continue;

	if (!store[key][lang]) useVocabulary[key] = key;
	else
	useVocabulary[key] = store[key][lang];
}

console.log(useVocabulary);
export  default store;