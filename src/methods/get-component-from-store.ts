import {configuration} from "../utils/state";
import {Component} from "vue";
import {IStoreElement} from "../utils/types";

/**
 * @description Method using for checking exist modal in store.
 * */
export default function getComponentFromStore(modalName: string): IStoreElement | undefined {
	return configuration.store[modalName] || undefined
}

