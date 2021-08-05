/*eslint-disable*/

import { mount } from '@vue/test-utils'
import {nextTick} from "vue";

import App from "./Example";
import {modalQueue, closeModal,pushModal} from "../../plugin";
import ModalTest from "./ModalTest";
import WidgetModalContainerItem from "../../plugin/WidgetModalContainerItem";

beforeEach(() => {
	modalQueue.value = [];
});

describe('onClose hook', () => {

	/*onclose test*/

	it("dont close", async () => {

		const wrapper = await mount(App);

		const modal1 = pushModal(ModalTest);
		modal1.onclose = () => {
			return false;
		}

		await nextTick();

		expect(modalQueue.value.length).toBe(1);
		expect(wrapper.findAllComponents(WidgetModalContainerItem).length).toBe(1);

	})
	it("close after 3 try", async () => {
		const wrapper = await mount(App);
		const modal = pushModal(ModalTest);

		let count = 3;
		modal.onclose = () => {
			count--;
			if (count > 0) return false;
		}

		closeModal();
		closeModal();
		await nextTick();

		expect(wrapper.findAllComponents(WidgetModalContainerItem).length).toBe(1);

		closeModal();
		await nextTick();
		expect(wrapper.findAllComponents(WidgetModalContainerItem).length).toBe(0);
	})

	it("function set onclose return null", async () => {

		const wrapper = await mount(App);

		const modal1 = pushModal(ModalTest);
		modal1.onclose = () => {
			return null;
		}
		closeModal();

		await nextTick();

		expect(wrapper.findAllComponents(WidgetModalContainerItem).length).toBe(0);
	})
	it("async function set onclose", async () => {

		const wrapper = await mount(App);

		const modal1 = pushModal(ModalTest);
		modal1.onclose = () => {
			return new Promise(resolve => {

				setTimeout(() => {
					resolve();
				}, 10);

			});
		}
		closeModal();

		await nextTick();

		expect(wrapper.findAllComponents(WidgetModalContainerItem).length).toBe(0);

	})

	it("onclose dont return", async () => {
		const wrapper = await mount(App);

		const modal1 = pushModal(ModalTest);
		modal1.onclose = () => {



		}
		closeModal();

		await nextTick();

		expect(wrapper.findAllComponents(WidgetModalContainerItem).length).toBe(0);
	})

	it("onclose set like not function", async () => {
		const wrapper = await mount(App);

		const modal1 = pushModal(ModalTest);
		modal1.onclose = 5;
		closeModal();

		await nextTick();

		expect(wrapper.findAllComponents(WidgetModalContainerItem).length).toBe(0);
	})

	it("close return true", async () => {
		const modal1 = pushModal(ModalTest);
		modal1.onclose = 5;


		await nextTick();

		expect(closeModal()).toBe(true);
	})
	it("close return false", async () => {

		const modal1 = pushModal(ModalTest);
		modal1.onclose = () => false;


		await nextTick();

		expect(closeModal()).toBe(false);
	})

	it("pop return false", async () => {
		const modal1 = pushModal(ModalTest);
		modal1.onclose = () => false;


		await nextTick();

		expect(closeModal()).toBe(false);
	})

	it("pop return true", async () => {
		pushModal(ModalTest);

		await nextTick();

		expect(closeModal()).toBe(true);
	})

	it("close modalObject return false", async () => {
		const modal1 = pushModal(ModalTest);
		modal1.onclose = () => false;


		await nextTick();

		expect(modal1.close()).toBe(false);
	})

	it("close modalObject return true", async () => {
		const modal1 = pushModal(ModalTest);

		await nextTick();

		expect(modal1.close()).toBe(true);
	})

})
