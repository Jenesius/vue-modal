import {config, configuration} from "../../plugin/utils/config";
import {container, pushModal} from "../../plugin/index";
import {mount} from "@vue/test-utils";
import ModalError from "../../plugin/utils/ModalError";
import ModalTitle from "../components/modal-title.vue";

beforeEach(() => {
	configuration.store = {};
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

})