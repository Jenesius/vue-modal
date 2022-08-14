import {mount} from "@vue/test-utils";
import {closeModal, container, modalQueue, onBeforeModalClose, openModal} from "../plugin/index";
import wait from "./wait";

let wrap;
beforeAll(async () => {
	wrap = await mount(container);
})
beforeEach(async () => {
	modalQueue.value = [];
})

describe("onBeforeModalClose", () => {

	test("onBeforeModalClose run", async () => {
		let isClosed = false;

		const component = {
			setup() {
				onBeforeModalClose(() => {
					isClosed = true;
				})
			}
		}

		const modal = await openModal(component);
		await modal.close();

		expect(isClosed).toBeTruthy();
	})

	test("onBeforeModalClose next(false)", async () => {
		const component = {
			template: "<p>Test</p>",
			setup() {
				onBeforeModalClose(() => {
					return false;
				})
			}
		}

		await openModal(component);
		await closeModal()
		.catch(() => {
			console.log(modalQueue.value.length)
		})

		expect(modalQueue.value.length).toBe(1);
	})
	test("onBeforeModalClose next(true)", async () => {
		const component = {
			setup() {
				onBeforeModalClose(() => {
					return true;
				})
			}
		}

		await openModal(component);
		await closeModal();

		expect(modalQueue.value.length).toBe(0);
	})

	test("onBeforeModalClose async next(false)", async () => {

		const component = {
			setup() {
				onBeforeModalClose(async () => {
					await wait(100);

					return false;
				})
			}
		}

		await openModal(component);
		try {
			expect(await closeModal()).toThrow()

		} catch (e) {

		}

		expect(modalQueue.value.length).toBe(1);
	})
	test("onBeforeModalClose async next(true)", async () => {

		const component = {
			setup() {
				onBeforeModalClose(async () => {
					await wait(100);

					return true;
				})
			}
		}

		await openModal(component);
		await closeModal();

		expect(modalQueue.value.length).toBe(0);
	})


})