import { configuration} from "../../src/utils/config";
import {container, modalQueue, openModal, promptModal, pushModal, config} from "../../src/index";
import {mount} from "@vue/test-utils";
import ModalError from "../../src/utils/ModalError";
import ModalTitle from "../components/modal-title.vue";
import wait from "../wait";

beforeEach(() => {
	configuration.store = {};
	modalQueue.value = []
})
describe("Add modal by name", () => {
	test("Add modal by name that don't exist", async () => {
		await mount(container);

		const name = 'confirm';
		await expect(() => pushModal(name)).rejects.toThrowError(ModalError.ModalNotExistsInStore(name));
	})
	test("Add modal by name that exists in store", async () => {
		const wrapper = await mount(container);
		const name = 'confirm';

		config({
			store: {
				[name]: ModalTitle
			}
		})
		await pushModal(name, {
			title: "Jenesius",
			age: 24
		});
		expect(wrapper.text()).toBe("Jenesius 24");
	})

	test("Open modal by name that exists in store", async () => {
		const wrapper = await mount(container);
		const name = 'confirm';

		config({
			store: {
				[name]: ModalTitle
			}
		})
		await openModal(name, {
			title: "Burdin",
			age: 17
		});
		expect(wrapper.text()).toBe("Burdin 17");
	})

	test("Prompt modal by name that exists in store", async () => {
		const wrapper = await mount(container);
		const name = 'confirm';

		config({
			store: {
				[name]: ModalTitle
			}
		})
		promptModal(name, {
			title: "Mother",
			age: 54
		});
		await wait();

		expect(wrapper.text()).toBe("Mother 54");
	})
})