import Modal from "./Modal";
import {ref, Ref} from "vue";

export default class NamespaceStore {
	static readonly DEFAULT_NAMESPACE = "default"
	static instance: NamespaceStore

	constructor() {
		NamespaceStore.instance = this
	}

	state = new Map<string, INamespaceState>();

	/**
	 * @description Метод возвращает состояние для переданного namespace. Если для переданного namespace состояния не
	 * существует, оно будет создано со значениями по умолчанию.
	 *
	 * @param {String} namespace - Имя namespace, если значение не передано, оно устанавливается как "default"
	 * */
	getByName(namespace: string = NamespaceStore.DEFAULT_NAMESPACE) {
		if (!this.state.has(namespace))
			this.state.set(namespace, {
				queue: ref([]),
				initialized: false
			})

		return this.state.get(namespace) as INamespaceState;
	}
}

export interface INamespaceState {
	queue: Ref<Modal[]>,
	initialized: boolean
}