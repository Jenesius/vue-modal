/*eslint-disable*/

import { mount } from '@vue/test-utils'

import App from "./Example";
import {modalQueue, closeModal, pushModal, openModal, popModal} from "../../plugin";
import ModalTest from "./ModalTest";
import WidgetModalContainerItem from "../../plugin/WidgetModalContainerItem";

beforeEach(() => {
	modalQueue.value = [];
});

function waitTime(n) {
	return new Promise(resolve => {
		setTimeout(resolve, n);
	})
}

describe('onClose', () => {

	it ("Should closed", async () => {

		const wrapper = await mount(App);

		const modal = await openModal(ModalTest);
		await modal.close();

		expect(modalQueue.value.length).toBe(0);
	})
	it ("Should closed with onclose true", async () => {

		const wrapper = await mount(App);

		const modal = await openModal(ModalTest);

		modal.onclose = (next) => {
			next(true);
		}

		await modal.close();

		expect(modalQueue.value.length).toBe(0);
	})

	it ("Should not be closed", async () => {
		const wrapper = await mount(App)
		const modal = await openModal(ModalTest);

		modal.onclose = (next) => {
			next(false);
		}

		try {
			await modal.close();
		} catch (e) {}

		expect(modalQueue.value.length).toBe(1);
	})

	it("Should not be closed(async)", async () => {
		const wrapper = await mount(App)
		const modal = await openModal(ModalTest);

		modal.onclose = async (next) => {
			await waitTime(1000);

			next(false);
		}

		try {
			await modal.close();
		} catch (e) {}

		expect(modalQueue.value.length).toBe(1);
	})

	it("Should be closed(async)", async () => {
		const wrapper = await mount(App)
		const modal = await openModal(ModalTest);

		modal.onclose = (next) => {
			setTimeout(() => {
				next(true);
			}, 1000);
		}

		try {
			await modal.close();
		} catch (e) {}

		expect(modalQueue.value.length).toBe(0);
	})

	it ("Should be closed after 3 attempts", async () => {
		const wrapper = await mount(App);
		const modal = await pushModal(ModalTest);

		let count = 3;
		modal.onclose = (next) => {
			count--;

			if (count > 0) return next(false);
		}

		closeModal();
		closeModal();

		expect(wrapper.findAllComponents(WidgetModalContainerItem).length).toBe(1);

		await closeModal();
		expect(wrapper.findAllComponents(WidgetModalContainerItem).length).toBe(0);
	})

	it("onclose dont call next", async () => {
		const wrapper = await mount(App)
		const modal = await openModal(ModalTest);

		modal.onclose = () => {
			let a = 5;
			a++;
		}
		expect(modalQueue.value.length).toBe(1);
		await modal.close();

		expect(modalQueue.value.length).toBe(0);
	})

	it("onclose set like bad value(Number)", async () => {
		const wrapper = await mount(App)

		const modal = await openModal(ModalTest);

		modal.onclose = 5;

		await modal.close();

		expect(modalQueue.value.length).toBe(0);
	})

	it("onclose(true) by closeModal"		, async () => {
		const wrapper = await mount(App)
		await openModal(ModalTest);

		expect(modalQueue.value.length).toBe(1);
		await closeModal();
		expect(modalQueue.value.length).toBe(0);
	})
	it("onclose(false) by closeModal"		, async () => {
		const wrapper = await mount(App)
		const modal = await openModal(ModalTest);

		modal.onclose = (next) => next(false)

		expect(modalQueue.value.length).toBe(1);
		await closeModal();
		expect(modalQueue.value.length).toBe(1);
	})
	it("async onclose(false) by closeModal", async () => {
		const wrapper = await mount(App)
		const modal = await openModal(ModalTest);

		modal.onclose = async (next) => {
			await waitTime(100);

			next(false);
		}

		expect(modalQueue.value.length).toBe(1);
		await closeModal();
		expect(modalQueue.value.length).toBe(1);
	})
	it("async onclose(true) by closeModal"	, async () => {
		const wrapper = await mount(App)
		const modal = await openModal(ModalTest);

		modal.onclose = async (next) => {
			await waitTime(100);

			next(true);
		}

		expect(modalQueue.value.length).toBe(1);
		await closeModal();
		expect(modalQueue.value.length).toBe(0);
	})

	it("onclose(true) by popModal"		, async () => {
		const wrapper = await mount(App)
		await openModal(ModalTest);

		expect(modalQueue.value.length).toBe(1);
		await popModal();
		expect(modalQueue.value.length).toBe(0);
	})
	it("onclose(false) by popModal"		, async () => {
		const wrapper = await mount(App)
		const modal = await openModal(ModalTest);

		modal.onclose = (next) => next(false)

		expect(modalQueue.value.length).toBe(1);
		await popModal();
		expect(modalQueue.value.length).toBe(1);
	})
	it("async onclose(false) by popModal", async () => {
		const wrapper = await mount(App)
		const modal = await openModal(ModalTest);

		modal.onclose = async (next) => {
			await waitTime(100);

			next(false);
		}

		expect(modalQueue.value.length).toBe(1);
		await popModal();
		expect(modalQueue.value.length).toBe(1);
	})
	it("async onclose(true) by popModal"	, async () => {
		const wrapper = await mount(App)
		const modal = await openModal(ModalTest);

		modal.onclose = async (next) => {
			await waitTime(100);

			next(true);
		}

		expect(modalQueue.value.length).toBe(1);
		await popModal();
		expect(modalQueue.value.length).toBe(0);
	})

	it("Try open window, before prev window can't be closed", async () => {
		const wrapper = await mount(App);

		const modal1 = await openModal(ModalTest, {title: "1"});
		modal1.onclose = next => next(false);

		const modal2 = await openModal(ModalTest, {title: "2"});

		expect(wrapper.text()).toBe("1");
	})

	it("Multi next", async () => {

		const wrapper = await mount(App);

		const modal1 = await openModal(ModalTest, {title: "1"});
		modal1.onclose = next => {

			next(false);
			next(false);
			next(false);
			next(false);

		}

		await modal1.close();


	})

})
