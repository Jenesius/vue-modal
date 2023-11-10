import {mount} from "@vue/test-utils";
import {container, getQueueByNamespace, pushModal, openModal, closeModal, Modal, getCurrentModal, closeById} from "./../src/index";
import ModalTitle from "./components/modal-title.vue";
import NamespaceStore from "./../src/utils/NamespaceStore";

let app
const space = "notification";

beforeEach(async () => {
	const app = await mount({
		template: `
				<div>
					<container/>
					<container namespace = ${space} />
				</div>
			`,
		components: {
			container
		}
	});
	const modals = [...Modal.STORE.values()];

	for await(const modal of modals) {
		await modal.close().catch(() => {});
	}


})

describe("Namespace tests", () => {
	test("Two separate namespace should display only bind modals", async () => {

		await openModal(ModalTitle);
		expect(getQueueByNamespace().length).toBe(1)
		expect(getQueueByNamespace(space).length).toBe(0)

		const t = await pushModal(ModalTitle);
		expect(getQueueByNamespace().length).toBe(2)
		expect(getQueueByNamespace(space).length).toBe(0)

		await openModal(ModalTitle, {msg: "test"}, {namespace: space});
		expect(getQueueByNamespace().length).toBe(2)
		expect(getQueueByNamespace(space).length).toBe(1)
	})
	test("Method closeModal must close only modals for passed namespace", async () => {
		await pushModal(ModalTitle);
		expect(getQueueByNamespace().length).toBe(1)

		await pushModal(ModalTitle);
		expect(getQueueByNamespace().length).toBe(2)
		expect(getQueueByNamespace(space).length).toBe(0)

		await closeModal({namespace: space});
		expect(getQueueByNamespace().length).toBe(2)
		expect(getQueueByNamespace(space).length).toBe(0)

		await closeModal();
		expect(getQueueByNamespace().length).toBe(0)
		expect(getQueueByNamespace(space).length).toBe(0)
	})
	test("Get current modal for namespace", async () => {
		const modalMain_1 = await pushModal(ModalTitle, {}, {})
		const modalMain_2 = await pushModal(ModalTitle, {}, {})
		const modalSub_1 = await pushModal(ModalTitle, {}, {namespace: space})
		const modalSub_2 = await pushModal(ModalTitle, {}, {namespace: space})
		const modalSub_3 = await pushModal(ModalTitle, {}, {namespace: space})

		expect(getCurrentModal()).toBe(modalMain_2);
		expect(getCurrentModal(space)).toBe(modalSub_3);
	})
	test("Queue for namespace should return right", async () => {
		const modalMain_1 = await pushModal(ModalTitle, {}, {})
		const modalMain_2 = await pushModal(ModalTitle, {}, {})
		const modalSub_1 = await pushModal(ModalTitle, {}, {namespace: space})

		expect(getQueueByNamespace().map(i => i.id)).toEqual([modalMain_1.id, modalMain_2.id])
		expect(getQueueByNamespace(space).map(i => i.id)).toEqual([modalSub_1.id])
	})
	test("CloseById should close modal from right namespace", async () => {
		const modalMain_1 = await pushModal(ModalTitle, {}, {})
		const modalMain_2 = await pushModal(ModalTitle, {}, {})
		const modalSub_1 = await pushModal(ModalTitle, {}, {namespace: space})
		const modalSub_2 = await pushModal(ModalTitle, {}, {namespace: space})

		await closeById(modalSub_1.id)

		expect(getQueueByNamespace().map(i => i.id)).toEqual([modalMain_1.id, modalMain_2.id])
		expect(getQueueByNamespace(space).map(i => i.id)).toEqual([modalSub_2.id])
	})
	test("Namespace should be set right", async () => {
		const modalMain_1 = await pushModal(ModalTitle, {}, {})
		const modalSub_1 = await pushModal(ModalTitle, {}, {namespace: space})

		expect(modalMain_1.namespace).toBe(NamespaceStore.DEFAULT_NAMESPACE);
		expect(modalSub_1.namespace).toBe(space);
	})
	test("Modal closed value must display correct data from namespace", async () => {
		const modalMain_1 = await pushModal(ModalTitle, {}, {})
		const modalMain_2 = await pushModal(ModalTitle, {}, {})
		const modalSub_1 = await pushModal(ModalTitle, {}, {namespace: space})
		const modalSub_2 = await pushModal(ModalTitle, {}, {namespace: space})

		await modalMain_1.close();
		await modalSub_2.close();

		expect(modalMain_1.closed.value).toBe(true);
		expect(modalMain_2.closed.value).toBe(false);
		expect(modalSub_1.closed.value).toBe(false);
		expect(modalSub_2.closed.value).toBe(true);

	})
	test("Modal.namespace must be set correctly.", async () => {
		const modal_default = await openModal(ModalTitle);
		const modal_notification = await openModal(ModalTitle, {}, { namespace: space });

		expect(modal_default.namespace).toBe(NamespaceStore.DEFAULT_NAMESPACE)
		expect(modal_notification.namespace).toBe(space)
	})
	test("Modal.closed should return right values from corresponding namespace", async () => {
		const modal_default = await openModal(ModalTitle);
		const modal_notification = await openModal(ModalTitle, {}, { namespace: space });

		expect(modal_default.closed.value).toBe(false)
		expect(modal_notification.closed.value).toBe(false)

		await closeModal()

		expect(modal_default.closed.value).toBe(true)
		expect(modal_notification.closed.value).toBe(false)

		await closeModal({namespace: space})

		expect(modal_default.closed.value).toBe(true)
		expect(modal_notification.closed.value).toBe(true)
	})
})