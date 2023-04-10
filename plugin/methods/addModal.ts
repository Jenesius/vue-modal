import {modalQueue} from "../utils/state";
import Modal, {ModalOptions} from "../utils/Modal";
import {state} from "../utils/state";
import ModalError from "../utils/ModalError";
import {Component, markRaw} from "vue";
import {getComponentFromStore} from "../index";

/**
 * Sync function for adding modal window.
 * Two check:
 * - Application was initialized (ModalContainer was mounted).
 * - Component is required.
 * */

export default function _addModal(component: string | Component, params: any, options: Partial<ModalOptions>):Modal{

	if (!state.initialized) throw ModalError.NotInitialized();

	// If component is string. In this case we get the component from store.
	if (typeof component === "string") {
		const refComponent = getComponentFromStore(component);
		if (!refComponent) throw ModalError.ModalNotExistsInStore(component);
		component = refComponent;
	}

	if (!component) throw ModalError.ModalComponentNotProvided();


	const modal = new Modal(component, params, options);

	/**
	 * modalQueue.value.push(Object.freeze(modal)) - фундаментальная ошибка!
	 * Таким способо мы запрещаем изменение любых свойст объекта - что является
	 * недопустим исключением, ведь объект может хранить, например, свойство
	 * `version`, которое по итогу будет не изменяемым.
	 *
	 * computed свойство 'closed' так-же потеряет реактивность в таком случае
	 *
	 * modalQueue.value.push(modal) - ошибка!
	 * Т.к. modalQueue является реактивным объектом и создаётся при помощи ref.
	 * В итоге все элементы, добавленные в  неё, становятся реактивными полностью.
	 * Так же получим небольшие проблемы с computed свойствами, поскольку они
	 * И так уже находятся в реактивном объекте и разложаться.
	 *
	 * markRaw - пометка для vue, что к данному элементу не надо добавлять никак
	 * ой реактивности.
	 *
	 * */
	//modalQueue.value.push(modal);
	modalQueue.value.push(markRaw(modal));

	return modal;
}

