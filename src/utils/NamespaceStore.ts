import Modal from "./Modal";
import {reactive} from "vue";

export default class NamespaceStore {
	static readonly DEFAULT_NAMESPACE: INamespaceKey = "default"
	static instance: NamespaceStore

	constructor() {
		NamespaceStore.instance = this
	}

	state = new Map<INamespaceKey, INamespaceState>();

	/**
	 * @description Метод возвращает состояние для переданного namespace. Если для переданного namespace состояния не
	 * существует, оно будет создано со значениями по умолчанию.
	 *
	 * @param {String} namespace - Имя namespace, если значение не передано, оно устанавливается как "default"
	 * */
	getByName(namespace: INamespaceKey = NamespaceStore.DEFAULT_NAMESPACE) {
		if (!this.state.has(namespace)) {
			this.state.set(namespace, {
				queue: reactive([]),
				initialized: false
			})
		}

		return this.state.get(namespace) as INamespaceState;
	}

	/**
	 * @description Is Dev method. Using for cleaning all namespace without run quards.
	 * */
	forceClean() {
		this.state.forEach(item => {
			item.queue.splice(0, item.queue.length)
		})
	}
}

export interface INamespaceState {
	queue: Modal[],
	initialized: boolean
}
export type INamespaceKey = number | string;