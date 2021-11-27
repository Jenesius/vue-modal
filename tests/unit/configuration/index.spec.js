import {mount} from "@vue/test-utils";
import {closeModal, config, container, modalQueue, openModal, popModal} from "../../../plugin/index";
import ModalTest from "../ModalTest";
import wait from "../../wait";

beforeEach(async () => {
	modalQueue.value = [];
	await wait();
})
/**
 * ТЕСТЫ ДЛЯ ФУНКЦИИ CONFIG
 * + backClose
 * - scrollLock
 * ? animation - не знаю, как проверить этот параметр
 *
 * */
describe("Configuration function", () => {
	
	/**
	 * Тест для проверки закрытия модального окна по клику на задний фон, в случае дефолтного значения параметра
	 * backClose: true
	 * */
	test("backClose (true)", async () => {
		
		const wrapper = await mount(container);
		
		await openModal(ModalTest);
		
		expect(modalQueue.value.length).toBe(1);
		
		console.log(wrapper.find(".modal-container"))
		
		wrapper.find(".modal-container").trigger('click');
		await wait();
		
		expect(modalQueue.value.length).toBe(0);
	})
	/**
	 * В случае клика на заднюю область, и установлении параметра backClos
	 * */
	test("backClose (false)", async () => {
		const wrapper = await mount(container);
		config({backClose: false});
		
		await openModal(ModalTest);
		
		expect(modalQueue.value.length).toBe(1);
		
		wrapper.find(".modal-container").trigger('click');
		await wait();
		
		expect(modalQueue.value.length).toBe(1);
	})
	/**
	 * BackClose: false, закрытие при помощи closeModal
	 * */
	test("backClose (false) => closeModal", async () => {
		const wrapper = await mount(container);
		config({backClose: false});
		
		await openModal(ModalTest);
		
		expect(modalQueue.value.length).toBe(1);
		
		await closeModal();
		
		expect(modalQueue.value.length).toBe(0);
	})
	/**
	 * BackClose: false, закрытие при помощи popModal
	 * */
	test("backClose (false) => popModal", async () => {
		const wrapper = await mount(container);
		config({backClose: false});
		
		await openModal(ModalTest);
		
		expect(modalQueue.value.length).toBe(1);
		
		await popModal();
		
		expect(modalQueue.value.length).toBe(0);
	})
	
})