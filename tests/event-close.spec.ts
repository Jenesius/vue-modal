import {mount} from "@vue/test-utils";
import {fireEvent, render} from "@testing-library/vue";
import {container} from "../plugin/index";
import openModal from "../plugin/methods/openModal";
import ModalTitle from "./components/modal-title.vue";
import wait from "./wait";

describe("Testing event close", () => {
	test("event.background should be true, after background click", async () => {
		const wrap = mount(container);
		const modal = await openModal(ModalTitle);
		modal.onclose = (v) => {
			expect(v.background).toBeFalsy()
		}
		await wrap.find(".modal-container").trigger("click");
	})
	test("event.background should be false by default", async () => {
		mount(container);
		const modal = await openModal(ModalTitle);
		modal.onclose = (v) => {
			expect(v.background).toBeFalsy()
		}
		await modal.close()
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