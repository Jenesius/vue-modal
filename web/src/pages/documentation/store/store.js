import {createStore} from 'vuex'


export default createStore({
	state: {
		isMenuActive: false,

		arrayUser: [
			{
				id: 1,
				name: "Bob",
				age: "31",
				info: "Senior Frontend Developer (JS, Vue, HTML, Webpack, CSS, Vuex, VueRouter, React, React Native)"
			},
			{
				id: 2,
				name: "Alice",
				age: "30",
				info: "Junior Backend Developer(Python, Go)"
			},
			{
				id: 3,
				name: "Jenesius",
				age: 22,
				info: "Middle Frontend Developer (JS)"
			}
		]

	},
	mutations: {
		toggleMenu(state, v = !state.isMenuActive) {

			state.isMenuActive = v;

		}
	},
	actions: {

	},

})
