import {container, modalQueue, openModal} from "../plugin/index";
import ModalTitle from "./components/modal-title.vue";
import {mount} from "@vue/test-utils";
import wait from "./wait";

let wrapper = null;

beforeAll(async () => {
	wrapper = await mount(container);
})
beforeEach(async () => {
	modalQueue.value = [];
	await wait()
})

describe("ModalObject test", () => {
	
	test("target test, when modal opened", async () => {
		
		const modal = await openModal(ModalTitle, {title: "Test", age: 15});
		
		expect(modal.instance.title + modal.instance.age).toBe("Test15");
	})
	test("target test, when modal closed", async () => {
		

		
		const modal = await openModal(ModalTitle, {title: "Test", age: 15});
		await modal.close();
		expect(modal.instance).toBe(undefined);
		
	})
	
	test('ModalObject.closed, when modal open', async () => {
		const modal = await openModal(ModalTitle, {title: "Test", age: 15});
		expect(modal.closed.value).toBe(false);
	})
	
	test('ModalObject.closed, when modal closed', async () => {
		
		const modal = await openModal(ModalTitle);
		await modal.close();
		await wait();
		
		expect(modal.closed.value).toBe(true);
		
	})
	
})
