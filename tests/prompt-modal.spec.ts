import {mount} from "@vue/test-utils";
import {container, promptModal, closeModal} from "../src/index";
import ModalPromptValue from "./components/modal-prompt-value.vue";
import wait from "./wait";
import NamespaceStore from "./../src/utils/NamespaceStore";
import ModalPromptValueWithHandler from "./components/modal-prompt-value-with-handler.vue";
import guards from "./../src/utils/guards";

const app = mount(container);
beforeEach(async () => {
	NamespaceStore.instance.forceClean()
	guards.store = {}
	await wait()
})

describe("Testing prompt-modal", () => {

	it('Test for opened modal window', async function () {

		const value = '123';

		promptModal(ModalPromptValue, {value})

		await wait(1);

		expect(app.text()).toEqual(value);
	});
	it("Should be returned with provided value", async function () {

		const value = Math.random();
		const prResult = promptModal(ModalPromptValue, {
			value
		})
		await wait()
		app.find('button').trigger('click')

		await wait()

		expect(await prResult).toEqual(value)
	})

	it('If modal was prompted and then just closed, promise should be resolved with value null', async () => {

		const value = Math.random();
		const prResult = promptModal(ModalPromptValue, {
			value
		})
		await wait()
		await closeModal()

		expect(await prResult).toEqual(null)
	})


	it("Should not be executed, if on of close's handler stop closing process", async () => {
		const value = Math.random();
		let isResolved = false
		const prResult = promptModal(ModalPromptValueWithHandler, {
			value
		}).then(data => {
			isResolved = true;
			return data;
		})
		await wait()
		await app.find('button').trigger('click')
		await wait()
		await app.find('button').trigger('click')
		await wait()
		expect(await prResult).toEqual(value)
	})
})