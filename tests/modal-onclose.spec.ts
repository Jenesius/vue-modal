/*eslint-disable*/
import {mount} from "@vue/test-utils";
import {closeModal, container, modalQueue, openModal} from "../plugin";
import {nextTick} from "vue";
import ModalTitle from "./components/modal-title.vue";
let wrapper:any = null;

beforeAll(async () => {
	wrapper = await mount(container);
})

beforeEach(() => {
	modalQueue.value = [];
})

describe("onclose test", () => {

	it("Without onclose", async () => {
		await openModal(ModalTitle, {title: "test"});

		expect(wrapper.text()).toBe("test");

		await closeModal();

		expect(modalQueue.value.length).toBe(0);
	});

	it("With onclose without return", async () => {
		const modal = await openModal(ModalTitle, {title: "test"});

		let testValue = 0;

		modal.onclose = () => {
			testValue = 5;
		}
		await modal.close();

		expect(testValue).toBe(5);
		expect(modalQueue.value.length).toBe(0)
	})

	it("With onclose returned false", async() => {

		const modal = await openModal(ModalTitle, {title: "test-2"});
		modal.onclose =() => false;

		await (expect(modal.close())).rejects.toThrow()

		expect(modalQueue.value.length).toBe(1);
		expect(wrapper.text()).toBe("test-2");
	})

	it("With onclose returned true", async () => {
		const modal = await openModal(ModalTitle, {title: "test-2"});
		modal.onclose =() => true;

		await modal.close();

		await nextTick();

		expect(modalQueue.value.length).toBe(0);
		expect(wrapper.text()).toBe("");
	})



	test("Closing after 3 attempts.", async () => {

		const modal = await openModal(ModalTitle);
		let count = 3;
		modal.onclose = () => {
			count--;
			if (count > 0) return false;
		}

		await closeModal().catch(() => {})
		await closeModal().catch(() => {})

		expect(modalQueue.value.length).toBe(1);

		await closeModal();
		expect(modalQueue.value.length).toBe(0);
	})
	it("Opening modal, before prev window can't be closed", async () => {
		const modal = await openModal(ModalTitle, {title: "1"});
		modal.onclose = () => false;

		await expect(openModal(ModalTitle, {title: "2"})).rejects.toThrow()


		expect(wrapper.text()).toBe("1");
	})
	it("Multi onclose", async () => {

		let count = 0;
		const modal = await openModal(ModalTitle);

		const add = () => {
			count++;
		};

		modal.onclose = add;
		modal.onclose = add;
		modal.onclose = add;

		await modal.close();

		expect(modalQueue.value.length).toBe(0);

		expect(count).toBe(3);

	})



})