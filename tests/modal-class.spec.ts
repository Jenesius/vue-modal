import {mount} from "@vue/test-utils";
import {container, modalQueue, openModal} from "../plugin/index";
import Modal from "../plugin/utils/Modal";
import pushModal from "../plugin/methods/pushModal";
import ModalTitle from "./components/modal-title.vue";
beforeEach(async () => {
	modalQueue.value = [];
})

describe("ModalClass", () => {
	
	test("Default return openModal", async () => {
		
		await mount(container);
		
		const modal = await openModal(ModalTitle);
		
		expect(modal instanceof Modal).toBeTruthy();
		
	})
	test("Default return pushModal", async () => {
		
		await mount(container);
		
		const modal = await pushModal(ModalTitle);
		
		expect(modal instanceof Modal).toBeTruthy();
		
	})
})