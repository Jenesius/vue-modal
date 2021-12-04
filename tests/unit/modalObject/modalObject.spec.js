import {container, openModal} from "../../../plugin/index";
import ModalTest from "../ModalTest";
import {mount} from "@vue/test-utils";

describe("ModalObject test", () => {
	
	test("target test, when modal opened", async () => {
		
		const wrapper = await mount(container);
		
		const modal = await openModal(ModalTest, {title: "Test", age: 15});
		
		expect(modal.target.title + modal.target.age).toBe("Test15");
		
	})
	test("target test, when modal closed", async () => {
		
		const wrapper = await mount(container);
		
		const modal = await openModal(ModalTest, {title: "Test", age: 15});
		await modal.close();
		expect(modal.target).toBe(undefined);
		
	})
})
