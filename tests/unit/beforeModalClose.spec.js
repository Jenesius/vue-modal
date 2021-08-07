import {mount} from "@vue/test-utils";
import {closeModal, container, modalQueue, openModal} from "../../plugin";


beforeEach(() => {
	modalQueue.value = [];
});

function waitTime(n) {
	return new Promise(resolve => {
		setTimeout(resolve, n);
	})
}

describe("beforeModalClose", () => {
	const component = {
		template: `<p></p>`,
		data: () => ({title: "Test"})
	}
	it("beforeModalClose run", async () => {
		await mount(container);

		let isClosed = false;

		component.beforeModalClose = function(){
			isClosed = true;
		}

		const modal = await openModal(component);
		await modal.close();

		expect(isClosed).toBeTruthy();

	})

	it("beforeModalClose next(false)", async () => {
		await mount(container);

		component.beforeModalClose = function(next){
			next(false);
		}

		await openModal(component);
		await closeModal();

		expect(modalQueue.value.length).toBe(1);
	})
	it("beforeModalClose next(true)", async () => {
		await mount(container);

		component.beforeModalClose = function(next){
			next(true);
		}

		await openModal(component);
		await closeModal();

		expect(modalQueue.value.length).toBe(0);
	})

	it("beforeModalClose async next(false)", async () => {
		await mount(container);

		component.beforeModalClose = async function(next){
			await waitTime(100);

			next(false);
		}

		await openModal(component);
		await closeModal();

		expect(modalQueue.value.length).toBe(1);
	})
	it("beforeModalClose async next(true)", async () => {
		await mount(container);

		component.beforeModalClose = async function(next){
			await waitTime(100);
			next(true);
		}

		await openModal(component);
		await closeModal();

		expect(modalQueue.value.length).toBe(0);
	})

	it("Access to this", async () => {
		await mount(container);

		let value = null;

		component.beforeModalClose = async function(){
			value = this.title;
		}

		await openModal(component);
		await closeModal();

		expect(value).toBe("Test");
	})

})