import {config, configuration} from "../../src/utils/config";
import getComponentFromStore from "../../src/methods/get-component-from-store";
import ModalTitle from "../components/modal-title.vue";

// Clean store
beforeEach(() => {
	configuration.store = {};
})

describe("Checking modal in the store", () => {
	test("Be default is undefined", () => {
		expect(getComponentFromStore('any')).toBe(undefined)
	})
	test('Add new component, but getting by wrong name', () => {
		config({
			store: {
				'alert': ModalTitle
			}
		})
		expect(getComponentFromStore('aler')).toBe(undefined)
	})
	test('Add new component and get it', () => {
		config({
			store: {
				'alert': ModalTitle
			}
		})
		expect(getComponentFromStore('alert')).toBe(ModalTitle)
	})
})