import {container, openModal} from "../src/index";
import ModalTitle from "./components/modal-title.vue";
import {mount} from "@vue/test-utils";
import wait from "./wait";
import NamespaceStore from "./../src/utils/NamespaceStore";

let wrapper = null;

beforeAll(async () => {
	wrapper = await mount(container);
})
beforeEach(async () => {
	NamespaceStore.instance.forceClean()
})

describe("ModalObject test", () => {
	
	test("target test, when modal opened", async () => {
		
		const modal = await openModal(ModalTitle, {title: "Test", age: 15});
		
		expect(modal.instance.title + modal.instance.age).toBe("Test15");
	})

	/**
	 * @description Тест был ранее добавлен, когда instance очищался при закрытии модального окна. Однако теперь он
	 * встроен в класс Modal. А поскольку ссылка на modal осталась, то и компонента не очистилась.
	 * */
	test("target test, when modal closed", async () => {
		const modal = await openModal(ModalTitle, {title: "Test", age: 15});
		await modal.close();
		expect(modal.instance).toEqual({title: "Test", age: 15});
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
