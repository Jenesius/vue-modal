import {modalQueue} from "../utils/state";
import Modal from "../utils/Modal";
import {state} from "../utils/state";

export default function _addModal(component: Object, params: Object){

	if (!state.initialized) {
		let err = `Modal Container not found. Put container from jenesius-vue-modal in App's template. Check documentation for more information https://modal.jenesius.com/docs.html/installation#getting-started.`;
		
		console.warn(err);
		throw err;
	}
	
	if (!component) {
		let err = `The first parameter(Component) was not specified.`
		console.warn(err)
		
		throw err;
	}
	
	
	const modal = new Modal(component, params);
	
	modalQueue.value.push(modal);
	
	return modal;
}
