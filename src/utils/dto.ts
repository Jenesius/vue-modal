import {ModalOptions} from "./Modal";
import moduleState from "./state"
import {IModalCloseOptions} from "./types";
import NamespaceStore from "./NamespaceStore";

export function DTOModalOptions(options: Partial<ModalOptions>): ModalOptions {
	const output: ModalOptions = {
		backgroundClose: moduleState.configuration.backgroundClose,
		isRoute: false,
		namespace: NamespaceStore.DEFAULT_NAMESPACE
	};

	if (options.backgroundClose !== undefined)
		output.backgroundClose = options.backgroundClose;

	if (options.isRoute) output.isRoute = options.isRoute;
	if (options.namespace) output.namespace = options.namespace;

	return output;
}
export function DTOEventClose(obj: Partial<IEventClose> = {}): IEventClose{
	const defaultValues: IEventClose = {
		background: false,
		esc: false,
		namespace: NamespaceStore.DEFAULT_NAMESPACE
	}

	return Object.assign(defaultValues, obj);
}
export function DTOModalCloseOptions(options?: Partial<IModalCloseOptions>) {
	if (!options) options = {};
	if (!options.namespace) options.namespace = NamespaceStore.DEFAULT_NAMESPACE;

	return options;
}
/**
 * background - Attempt to close modal by clicking on the background.
 *
 */
export interface IEventClose {
	background: boolean,
	esc: boolean,
	namespace: string
}

