import {container, config, pushModal} from "../src/index";
import ModalTitle from "./components/modal-title.vue";
import NamespaceStore from "../src/utils/NamespaceStore";
import {mount} from "@vue/test-utils";


beforeEach(async () => {
	NamespaceStore.instance.forceClean()
})

afterEach(() => {
	config({
		store: {}
	})
})

describe("Configuration using Extend Store Element", () => {
	test("Default opening modal", async () => {
		const wrapper = await mount(container);
		config({
			store: {
				Foo: {
					component: ModalTitle
				}
			}
		})
		await pushModal('Foo');
		await pushModal('Foo');
		
		expect(NamespaceStore.instance.getByName().queue.length).toBe(2)
		
	})
	
	test("Opening modal by name should add options from configuration", async () => {
		const wrapper = await mount(container);
		config({
			store: {
				Foo: {
					component: ModalTitle,
					backgroundClose: false,
					draggable: true,
				}
			}
		})
		const modal = await pushModal('Foo');
		const modal_2 = await pushModal(ModalTitle);
		
		expect(modal.backgroundClose).toBe(false);
		expect(modal.draggable).toBe(true);
		
		expect(modal_2.backgroundClose).toBe(true);
		expect(modal_2.draggable).toBe(false);
	})
	
	test("Configuration with beforeEach", async () => {
		await mount(container);
		let count = 3;
		config({
			store: {
				Foo: {
					component: ModalTitle,
					beforeEach() {
						if (count-- > 0) return false;
					}
				}
			}
		})
		await pushModal('Foo').catch(() => {});
		await pushModal('Foo').catch(() => {});
		await pushModal('Foo').catch(() => {});
		await pushModal('Foo');
		await pushModal('Foo');
		
		expect(NamespaceStore.instance.getByName().queue.length).toBe(2)
		
	})
})