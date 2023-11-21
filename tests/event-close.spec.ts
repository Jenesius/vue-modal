import {mount} from "@vue/test-utils";
import {fireEvent, render} from "@testing-library/vue";
import {container, openModal} from "../src/index";
import ModalTitle from "./components/modal-title.vue";
import wait from "./wait";
import triggerClickClose from "./assets/trigger-click-close";

describe("Testing event close", () => {
	test("event.background should be true, after background click", async () => {
		const wrap = mount(container);
		const modal = await openModal(ModalTitle);
		let backgroundValue = null;
		modal.onclose = (v) => {
			backgroundValue = v.background;
		}

		await triggerClickClose(wrap);
		await wait();
		expect(backgroundValue).toBe(true)
	})
	test("event.background should be false by default", async () => {
		mount(container);
		const modal = await openModal(ModalTitle);
		let backgroundValue = null;
		modal.onclose = (v) => {
			backgroundValue = v.background;
		}
		await modal.close()
		await wait()
		expect(backgroundValue).toBe(false);
	})
	test("event.esc should be false by default", async () => {
		const wrap = await mount(container);
		const modal = await openModal(ModalTitle);

		let escValue = null;

		modal.onclose = (v) => {
			escValue = v.esc;
		}
		await modal.close()
		expect(escValue).toBe(false);
	})
	test("event.esc should be true if modal was closed by pressed Esc", async () => {
		const wrap = await render(container);
		const modal = await openModal(ModalTitle);
		let escValue = null;

		modal.onclose = (v) => {
			escValue = v.esc;
		}
		await fireEvent.keyUp(document, {key: "Escape"});
		await wait(10)
		expect(escValue).toBe(true)
	})
})