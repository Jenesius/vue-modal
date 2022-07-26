import {container, openModal} from "../plugin/index";
import ModalTitle from "./components/modal-title.vue";
import {render} from "@testing-library/vue";

describe("Test init library", () => {
	test("Throw error without mounting container", async () => {
		await expect(openModal(ModalTitle)).rejects.toThrow();
	})
	test("Normal working. Container was mounted", async () => {
		render(container);
		await expect(openModal(ModalTitle)).resolves.not.toThrow()
	})

})