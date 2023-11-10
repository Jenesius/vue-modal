import {mount} from "@vue/test-utils";
import {container, openModal} from "../src/index";
import Modal from "../src/utils/Modal";
import pushModal from "../src/methods/pushModal";
import ModalTitle from "./components/modal-title.vue";
import NamespaceStore from "./../src/utils/NamespaceStore";
beforeEach(async () => {
	NamespaceStore.instance.forceClean()
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