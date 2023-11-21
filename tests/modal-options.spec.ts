import {mount} from "@vue/test-utils";
import {
	config,
	container,
	openModal,
} from "../src/index";
import wait from "./wait";
import ModalTitle from "./components/modal-title.vue";
import NamespaceStore from "./../src/utils/NamespaceStore";
import triggerClickClose from "./assets/trigger-click-close";

let wrapper:any = null;

beforeAll(async () => {
	wrapper = await mount(container);
})
beforeEach(async () => {
	NamespaceStore.instance.forceClean()
	await wait()
})

describe("Testing modal options", () => {
	
	test('options {backgroundClose: false} ', async () => {
		const modal = await openModal(ModalTitle, {}, {backgroundClose: false})
		
		wrapper.find(".modal-container").trigger('click');
		await wait();

		expect(modal.closed.value).toBe(false)
	})
	test('modal.backGroundClose = false', async () => {
		const modal = await openModal(ModalTitle, {})
		modal.backgroundClose = false;
		
		wrapper.find(".modal-container").trigger('click');
		await wait();
		
		expect(modal.closed.value).toBe(false)
	})
	
	test('modal.backGroundClose = true, configuration = false', async () => {
		config({backgroundClose: false});
		
		const modal = await openModal(ModalTitle, {}, {backgroundClose: true})

		await triggerClickClose(wrapper);
		await wait();
		
		expect(modal.closed.value).toBe(true)
	})
	test('Modal.isRoute should be false by default', async () => {
		const modal = await openModal(ModalTitle);
		expect(modal.isRoute).toBe(false);
	})


})
