import {getNamespace} from "../utils/state";
import {INamespaceKey} from "../utils/NamespaceStore";
/**
 * @return {Modal} Last opened modal in active status. Return undefined if there is not opened modal.
 * */
export default function getCurrentModal(namespace?: INamespaceKey) {
	const namespaceState = getNamespace(namespace);
	const modalQueue = namespaceState.queue;

	if (modalQueue.length === 0) return undefined;

	return modalQueue[modalQueue.length - 1];
}