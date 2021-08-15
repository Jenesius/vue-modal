import {mount} from "@vue/test-utils";
import {closeModal, container, modalQueue, openModal} from "../../plugin";
/*eslint-disable*/

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
		template: `<p>3</p>`,
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

		component.beforeModalClose = function(){
			return false;
		}

		await openModal(component);
		try {
			expect(await closeModal()).toThrow()

		} catch (e) {

		}

		expect(modalQueue.value.length).toBe(1);
	})
	it("beforeModalClose next(true)", async () => {
		await mount(container);

		const testComponent = {
			template: "<p>a</p>",
			beforeModalClose(){
				return true;
			}
		}

		await openModal(testComponent);
		await closeModal();

		expect(modalQueue.value.length).toBe(0);
	})
	it("beforeModalClose retrun undefined", async () => {
		await mount(container);

		component.beforeModalClose = function(){

		}

		await openModal(component);
		await closeModal();

		expect(modalQueue.value.length).toBe(0);
	})

	it("beforeModalClose async next(false)", async () => {
		await mount(container);

		component.beforeModalClose = async function(){
			await waitTime(100);

			return false;
		}

		await openModal(component);
		try {
			expect(await closeModal()).toThrow()

		} catch (e) {

		}

		expect(modalQueue.value.length).toBe(1);
	})
	it("beforeModalClose async next(true)", async () => {
		await mount(container);


		await openModal({
			...component,
			beforeModalClose: async function(){
				await waitTime(100);
				return true;
			}
		});
		const a = await closeModal();

		console.log(a);

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