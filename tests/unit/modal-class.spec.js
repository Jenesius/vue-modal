import {mount} from "@vue/test-utils";
import {container, modalQueue, openModal} from "../../plugin/index";
import Example from "./Example";
import Modal from "../../plugin/utils/Modal";
import pushModal from "../../plugin/methods/pushModal";
import ModalTest from "./ModalTest";
function waitTime(n) {
	return new Promise(resolve => {
		setTimeout(resolve, n);
	})
}
beforeEach(async () => {
	modalQueue.value = [];
	await waitTime(10);
})
afterAll(() => {
	modalQueue.value = [];
});

describe("ModalClass", () => {
	
	test("Default return openModal", async () => {
		
		await mount(container);
		
		const modal = await openModal(ModalTest);
		
		expect(modal instanceof Modal).toBeTruthy();
		
	})
	test("Default return pushModal", async () => {
		
		await mount(container);
		
		const modal = await pushModal(ModalTest);
		
		expect(modal instanceof Modal).toBeTruthy();
		
	})
})