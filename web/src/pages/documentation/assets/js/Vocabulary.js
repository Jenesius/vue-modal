/*eslint-disable*/



const store =  {

	example: {
		en: "example",
		ru: "пример"
	},
	styles: {
		en: "styles",
		ru: "Стили"
	},

	returnValue: {
		ru: "Возвращаемое значение",
		en: "Return value"
	},
	anyName: {
		en: "Any name",
		ru: "Любое имя"
	},
	timeOfAnimationForDefaultBlock: {
		en: "Don't forget to include the animation time for the start block",
		ru: "Не забывайте указывать время анимации для начального блока."
	},

	insteadOfFadeAnyName: {
		en: "Instead of fade, you can use modal-list. In this case, you do not need to redefine the name in the configuration.",
		ru: "Вместо fade можно использовать modal-list. В этом случае не нужно переопределять имя в конфигурации."
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
		ru: "Наконец, навигационный хук можно указать и непосредственно в компоненте, используя следующие опции:",
		en: "Finally, the navigation hook can be specified directly in the component using the following options:"
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
	},


	integrationWithVueRouter: {
		en: "Integration with VueRouter",
		ru: 'Интеграция с VueRouter'
	},


	integrationInfo: {
		ru: "Иногда появляется необходимость связать vue-router с показом модального окна. Для этого нужно писать свой обработчик для router и интегрировать его " +
			"с открытием/закрытием модального окна. Одна в Jenesius Vue Modal это всё уже есть, нужно только подключить.",
		en: "Sometimes it becomes necessary to link vue-router to show a modal window. To do this, you need to write your own handler for router and integrate it\n" +
			"with opening/closing a modal window. One in Jenesius Vue Modal already has it all, you just need to connect it."

	},
	integrationExample: {
		ru: `Для примера была создана таблица пользователей, на маршруте <b>/users</b>. На маршрут <b>/users/:id</b> был добавлен обработчик модальных окон. Теперь при переходе на <b>/users/3</b> откроется модальное окно в которое будут переданы входные параметры из route, доступные в props.`,
		en: 'For example, a table of users was created, on the route <b>/users</b>. A modal handler has been added to the route <b>/users/:id</b>.\n' +
			'Now, when switching to <b>/users/3</b>, a modal window will open into which the input parameters from route, available in props, will be passed.'
	},
	goToExample: {
		en: "Go to example",
		ru: "Перейти к примеру"
	},
	orAnyOther: {
		en: "Or any other",
		ru: "Или любой другой"
	},
	dontForgetAboutInitialize: {
		en: "Don't forget to <a> initialize </a> Jenesius Vue Modal",
		ru: "Не забудьте <a>проинициализировать</a> Jenesius Vue Modal"
	},
	onRouterCreatedAddModal: {
		ru: "При создании router добавьте интеграцию с modal:",
		en: "When creating router add modal integration:"
	},
	resultRouterCreatedAddModal: {
		ru: "Теперь обработчик модальных окон будет реагировать на смену навигации.",
		en: "Now the modal handler will react to navigation changes."
	},
	addRouterModal: {
		ru: "Добавьте модальный маршрут:",
		en: "Add new route:"
	},
	resultAddRouterModal: {
		ru: "Теперь при переходе на <b>/any-route</b> будет показываться модально окно, которые было передано в <b>useModalRouter</b>",
		en: "Now, when switching to <b>/any-route</b>, the window that was passed to <b> useModalRouter </b> will be shown modally"
	},
	particularQualities: {
		ru: "Особенности",
		en: "Particular Qualities"
	},
	propsRouterModal: {
		ru: "Для получения входных параметров можно использовать <b>props.</b>",
		en: "You can use <b> props</b> to get input parameters. "
	},
	useRouterNavigationGuard: {
		ru: "Использование <b>beforeRouteEnter</b>, <b>beforeRouteUpdate</b>, <b>beforeRouteLeave</b> на данном этапе невозможно. Я попытаюсь вскоре решить эту проблему. Как временное решение можно использовать beforeModalClose.",
		en: "Using <b> beforeRouteEnter </b>, <b> beforeRouteUpdate </b>, <b> beforeRouteLeave </b> is not possible at this stage. I will try to fix this problem shortly. BeforeModalClose can be used as a temporary solution."
	},
	yourHTML:{
		ru: "Ваш HTML",
		en: "Your HTML"
	},

	changeStylesInfo: {
		en: "To control the background and position of the modal window, you need to work with the css class <b> .modal-container </b>. When a modal window is opened, it is placed in" +
			"container with the aforementioned class. It has the following properties:",
		ru: "Для управления фоном и расположением модального окна, нужно работать с css классом <b>.modal-container</b>. При открытии модального окна, оно помещается в" +
			"контейнер с вышеупомянуытым классом. Он имеет слудующие свойства:"
	},
	changeStylesExample: {
		en: "For example, let's change the background of the modal and make it open at the bottom:",
		ru: "Для примера, давайте поменяем фон у модального окна, и сделаем так, чтобы оно открывалось внизу:"
	},
	infoAnimation: {
		en: "If you need to change the animation of showing and hiding the modal, you need to override some properties and styles. Default for animating modal windows\n" +
			"uses <b> modal-list </b> as the animation name. To override the animation name, you need to specify a new one in the configuration:",
		ru: "Если вам нужно изменить анимацию показа и скрытия модального окно необхожимо переопределить некотрые свойста и стили. По умолчанию для анимации модальных окон\n" +
			"используется <b>modal-list</b> в качестве имени анимации. Для переопределения имени анимации, нужно указать новое в конфигурации:"
	},
	infoAnimationWarning: {
		en: "When changing the animation, it is necessary to take into account that we must animate both the <b> .modal-container </b> and the modal window itself <b> .modal-item </b>.",
		ru: "При изменении анимации, необходимо учитывать то, что мы должны анимировать как <b>.modal-container</b> так и само модальноке окно <b>.modal-item</b>."
	},
	infoAnimationExample: {
		en: "For example, let's change the animation and the length of the appearance of the modal window:",
		ru: "Для примера поменяем анимацию и протяженность появления модлаьного окна:"
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

export  default store;