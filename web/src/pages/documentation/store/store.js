import {createStore} from 'vuex'


export default createStore({
	state: {
		isMenuActive: false
	},
	mutations: {
		toggleMenu(state, v = !state.isMenuActive) {

			state.isMenuActive = v;

		}
	},
	actions: {

	},

})
