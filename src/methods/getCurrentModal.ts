import {getNamespace} from "../utils/state";
/**
 * @return {Modal} Last opened modal in active status. Return undefined if there is not opened modal.
 * */
export default function getCurrentModal(namespace?: string) {
	const namespaceState = getNamespace(namespace);
	const modalQueue = namespaceState.queue;

	if (modalQueue.value.length === 0) return undefined;

	return  modalQueue.value[modalQueue.value.length - 1];
}