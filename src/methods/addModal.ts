import Modal, {ModalOptions} from "../utils/Modal";
import {configuration, getNamespace} from "../utils/state";
import ModalError from "../utils/ModalError";
import {Component, markRaw} from "vue";
import {getComponentFromStore} from "../index";
import NamespaceStore from "../utils/NamespaceStore";
import {DTOModalOptions} from "../utils/dto";

/**
 * Sync function for adding modal window.
 * Two check:
 * - Application was initialized (ModalContainer was mounted).
 * - Component is required.
 * */

export default async function _addModal(component: string | Component, params: any, modalOptions: Partial<ModalOptions>):Promise<Modal>{

	const options = DTOModalOptions(modalOptions);
	const namespaceState = getNamespace(options.namespace);

	/**
	 * @description Проверка только для namespace по умолчанию. Это сделано из-за того, что дополнительные namespace
	 * подлежат инициализации. Однако пользователю намеренно не доступен этот метод.
	 * */
	if (options.namespace === NamespaceStore.DEFAULT_NAMESPACE && !namespaceState.initialized && !configuration.skipInitCheck)
		throw ModalError.NotInitialized(options.namespace);

	if ((await configuration.beforeEach()) === false)
		throw ModalError.RejectedByBeforeEach();
	
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
	 * Таким способом мы запрещаем изменение любых свойств объекта - что является
	 * недопустим исключением, ведь объект может хранить, например, свойство
	 * `version`, которое по итогу будет не изменяемым.
	 *
	 * computed свойство 'closed' так-же потеряет реактивность в таком случае
	 *
	 * modalQueue.value.push(modal) - ошибка!
	 * Т.к. modalQueue является реактивным объектом и создаётся при помощи ref.
	 * В итоге все элементы, добавленные в неё, становятся реактивными полностью.
	 * Так же получим небольшие проблемы с computed свойствами, поскольку они
	 * И так уже находятся в реактивном объекте и разложатся.
	 *
	 * markRaw - пометка для vue, что к данному элементу не надо добавлять никак
	 * ой реактивности.
	 *
	 * */
	//modalQueue.value.push(modal);
	namespaceState.queue.push(markRaw(modal));

	return modal;
}

