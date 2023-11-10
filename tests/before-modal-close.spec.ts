import {mount} from "@vue/test-utils";
import {closeModal, container, getQueueByNamespace, openModal} from "../src/index";
import wait from "./wait";
import NamespaceStore from "./../src/utils/NamespaceStore";

let modalQueue = getQueueByNamespace();
beforeEach(async () => {
	NamespaceStore.instance.forceClean()
})


describe("beforeModalClose", () => {
	const component = {
		beforeModalClose: () => {},
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

		expect(modalQueue.length).toBe(1);
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

		expect(modalQueue.length).toBe(0);
	})
	it("beforeModalClose retrun undefined", async () => {
		await mount(container);

		component.beforeModalClose = function(){

		}

		await openModal(component);
		await closeModal();

		expect(modalQueue.length).toBe(0);
	})

	it("beforeModalClose async next(false)", async () => {
		await mount(container);

		component.beforeModalClose = async function(){
			await wait()

			return false;
		}

		await openModal(component);
		try {
			expect(await closeModal()).toThrow()

		} catch (e) {

		}

		expect(modalQueue.length).toBe(1);
	})
	it("beforeModalClose async next(true)", async () => {
		await mount(container);


		await openModal({
			...component,
			beforeModalClose: async function(){
				await wait()
				return true;
			}
		});
		await closeModal();
		expect(modalQueue.length).toBe(0);
	})

	it("Access to this", async () => {
		await mount(container);

		let value = null;

		component.beforeModalClose = async function(this: {title: string}){
			value = this.title;
		}

		await openModal(component);
		await closeModal();

		expect(value).toBe("Test");
	})

})