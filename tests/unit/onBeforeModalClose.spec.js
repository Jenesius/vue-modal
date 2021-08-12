import {mount} from "@vue/test-utils";
import {closeModal, container, modalQueue, onBeforeModalClose, openModal} from "../../plugin";


beforeEach(() => {
	modalQueue.value = [];
});

function waitTime(n) {
	return new Promise(resolve => {
		setTimeout(resolve, n);
	})
}

describe("onBeforeModalClose", () => {
	const component = {
		template: "<p>1</p>"
	}
	it("onBeforeModalClose run", async () => {
		await mount(container);

		let isClosed = false;

		component.setup = () => {
			onBeforeModalClose(() => {
				isClosed = true;
			})
		}

		const modal = await openModal(component);
		await modal.close();

		expect(isClosed).toBeTruthy();

	})

	it("onBeforeModalClose next(false)", async () => {
		await mount(container);

		component.setup = () => {
			onBeforeModalClose(() => {
				return false;
			})
		}

		await openModal(component);
		await closeModal();

		expect(modalQueue.value.length).toBe(1);
	})
	it("onBeforeModalClose next(true)", async () => {
		await mount(container);

		component.setup = () => {
			onBeforeModalClose(() => {
				return true;
			})
		}

		await openModal(component);
		await closeModal();

		expect(modalQueue.value.length).toBe(0);
	})

	it("onBeforeModalClose async next(false)", async () => {
		await mount(container);

		component.setup = () => {
			onBeforeModalClose(async () => {
				await waitTime(100);

				return false;
			})
		}

		await openModal(component);
		await closeModal();

		expect(modalQueue.value.length).toBe(1);
	})
	it("onBeforeModalClose async next(true)", async () => {
		await mount(container);

		component.setup = () => {
			onBeforeModalClose(async () => {
				await waitTime(100);

				return true;
			})
		}

		await openModal(component);
		await closeModal();

		expect(modalQueue.value.length).toBe(0);
	})


})