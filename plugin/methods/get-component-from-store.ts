import {configuration} from "../utils/config";
import {Component} from "vue";

/**
 * @description Method using for checking exist modal in store.
 * */
export default function getComponentFromStore(modalName: string): Component | undefined {
	return configuration.store[modalName] || undefined
}

