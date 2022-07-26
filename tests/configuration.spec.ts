import {mount} from "@vue/test-utils";
import {closeModal, config, container, modalQueue, openModal, popModal} from "../plugin/index";
import wait from "./wait";
import ModalTitle from "./components/modal-title.vue";
beforeEach(async () => {
	modalQueue.value = [];
	await wait();
})
/**
 * ТЕСТЫ ДЛЯ ФУНКЦИИ CONFIG
 * + backgroundClose
 * + escClose
 * - scrollLock
 * ? animation - не знаю, как проверить этот параметр
 *
 * */
describe("Configuration function", () => {
	
	/**
	 * Тест для проверки закрытия модального окна по клику на задний фон, в случае дефолтного значения параметра
	 * backClose: true
	 * */
	test("backgroundClose (true)", async () => {
		
		const wrapper = await mount(container);
		
		await openModal(ModalTitle);
		
		expect(modalQueue.value.length).toBe(1);
		
		await wrapper.find(".modal-container").trigger('click');

		expect(modalQueue.value.length).toBe(0);
	})
	/**
	 * В случае клика на заднюю область, и установлении параметра backClos
	 * */
	test("backgroundClose (false)", async () => {
		const wrapper = await mount(container);
		config({backgroundClose: false});
		
		await openModal(ModalTitle);
		
		expect(modalQueue.value.length).toBe(1);
		
		await wrapper.find(".modal-container").trigger('click');

		expect(modalQueue.value.length).toBe(1);
	})
	/**
	 * BackClose: false, закрытие при помощи closeModal
	 * */
	test("backgroundClose (false) => closeModal", async () => {
		await mount(container);
		config({backgroundClose: false});
		
		await openModal(ModalTitle);
		
		expect(modalQueue.value.length).toBe(1);
		
		await closeModal();
		
		expect(modalQueue.value.length).toBe(0);
	})
	/**
	 * BackClose: false, закрытие при помощи popModal
	 * */
	test("backgroundClose (false) => popModal", async () => {
		await mount(container);
		config({backgroundClose: false});
		
		await openModal(ModalTitle);
		
		expect(modalQueue.value.length).toBe(1);
		
		await popModal();
		
		expect(modalQueue.value.length).toBe(0);
	})
	
	/**
	 * Неопознанный параметр в конфигурации
	 * Нет необходимости в данном тесте.
	 * */
	/*
	test("Undefined params in config function", () => {
		expect(() =>config({backgroundClose___1: false})).toThrow()
	})
	*/
	/**
	 * Нажатие на ESC -> закрытие модального окна
	 * */
	test("escClose:true", async () => {
		
		await mount(container);
		
		await openModal(ModalTitle);
		
		const event = new KeyboardEvent('keyup', {'key': "Escape"});
		document.dispatchEvent(event);
		await wait(10);
		
		expect(modalQueue.value.length).toBe(0);
	})
	/**
	 * Нажатие на ESC в случае, когда escClose: false
	 * Модальное окно не должно быть закрыто
	 * */
	
	test("escClose: false", async () => {
		await mount(container);
		
		config({
			escClose: false
		})
		
		await openModal(ModalTitle);
		
		const event = new KeyboardEvent('keyup', {'key': "Escape"});
		document.dispatchEvent(event);
		await wait(10);
		
		expect(modalQueue.value.length).toBe(1);
	})
	
	
})
