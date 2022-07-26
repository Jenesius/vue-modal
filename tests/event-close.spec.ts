import {mount} from "@vue/test-utils";
import {container} from "../plugin/index";
import openModal from "../plugin/methods/openModal";
import ModalTitle from "./components/modal-title.vue";

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
})