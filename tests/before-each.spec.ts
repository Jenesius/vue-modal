import {container, config, pushModal} from "../src/index";
import ModalTitle from "./components/modal-title.vue";
import NamespaceStore from "../src/utils/NamespaceStore";
import {render} from "@testing-library/vue";


beforeEach(async () => {
	NamespaceStore.instance.forceClean()
})

afterEach(() => {
	config({
		beforeEach() {
		    return true;
		},
	})
})

describe("beforeEach", () => {
	
	test("Reject all modals", async () => {
		await render(container);
		config({
			beforeEach() {
			    return false;
			},
		})
		
		await pushModal(ModalTitle).catch(() => {});
		await pushModal(ModalTitle).catch(() => {});
		await pushModal(ModalTitle).catch(() => {});
		
		expect(NamespaceStore.instance.getByName().queue.length).toBe(0)
		
	})
	test("Default return pushModal", async () => {
		
		let count = 0;
		
		await render(container);
		config({
			beforeEach() {
				count++;
				
				return count > 2
			},
		})
		
		await pushModal(ModalTitle).catch(() => {});
		await pushModal(ModalTitle).catch(() => {});
		await pushModal(ModalTitle).catch(() => {});
		await pushModal(ModalTitle).catch(() => {});
		await pushModal(ModalTitle).catch(() => {});
		
		expect(NamespaceStore.instance.getByName().queue.length).toBe(3)
		
	})
})