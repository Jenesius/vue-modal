/*eslint-disable*/
import {mount} from "@vue/test-utils";
import App from "./App";
import {closeModal, modalQueue, openModal} from "../../../plugin";
import ModalTest from "./ModalTest";
import {nextTick} from "vue";

let wrapper = null;

beforeAll(async () => {
	wrapper = await mount(App);
})

beforeEach(() => {
	modalQueue.value = [];
})

describe("onclose test", () => {

	it("Without onclose", async () => {
		await openModal(ModalTest, {title: "test"});

		expect(wrapper.text()).toBe("test");

		await closeModal();

		expect(modalQueue.value.length).toBe(0);
	});

	it("With onclose without return", async () => {
		const modal = await openModal(ModalTest, {title: "test"});

		let testValue = 0;

		modal.onclose = () => {
			testValue = 5;
		}
		await modal.close();

		expect(testValue).toBe(5);
		expect(modalQueue.value.length).toBe(0)
	})

	it("With onclose returned false", async() => {

		const modal = await openModal(ModalTest, {title: "test-2"});
		modal.onclose =() => false;

		await (expect(modal.close())).rejects.toThrow()

		expect(modalQueue.value.length).toBe(1);
		expect(wrapper.text()).toBe("test-2");
	})

	it("With onclose returned true", async () => {
		const modal = await openModal(ModalTest, {title: "test-2"});
		modal.onclose =() => true;

		await modal.close();

		await nextTick();

		expect(modalQueue.value.length).toBe(0);
		expect(wrapper.text()).toBe("");
	})

	it("Onclose set error value", async () => {

		const modal = await openModal(ModalTest);

		expect(() => modal.onclose = 4).toThrow();

	})
/*
		it("Closing after 3 attempts.", async () => {

			try {
				let modal = null;
				modal = await openModal(ModalTest);
				let count = 3;
				modal.onclose = () => {
					count--;
					if (count > 0) return false;
				}

				closeModal();
				closeModal();


				expect(modalQueue.value.length).toBe(1);

				try {
					await closeModal();

				} catch (e){}
				expect(modalQueue.value.length).toBe(0);

			} catch(e) {
				console.log(e);
			}

		})*/

			it("Opening modal, before prev window can't be closed", async () => {
				const wrapper = await mount(App);

				const modal = await openModal(ModalTest, {title: "1"});
				modal.onclose = () => false;

				await expect(openModal(ModalTest, {title: "2"})).rejects.toThrow()


				expect(wrapper.text()).toBe("1");
			})

			it("Multi onclose", async () => {

				let count = 0;
				const modal = await openModal(ModalTest);

				const add = () => count++;

				modal.onclose = add;
				modal.onclose = add;
				modal.onclose = add;

				await modal.close();

				expect(modalQueue.value.length).toBe(0);

				expect(count).toBe(3);

			})

})