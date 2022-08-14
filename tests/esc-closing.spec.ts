import {config} from "../plugin/utils/config";
import {container} from "../plugin/index";
import {fireEvent, render} from "@testing-library/vue";
import openModal from "../plugin/methods/openModal";
import ModalTitle from "./components/modal-title.vue";
import wait from "./wait";

afterEach(() => {
	config({
		escClose: true
	})
})
describe("Test Esc closing", () => {
	test("Modal should close after pressed Esc", async () => {
		await render(container);
		const modal = await openModal(ModalTitle);
		await fireEvent.keyUp(document, {key: "Escape"});
		await wait(5);
		expect(modal.closed.value).toBe(true);
	})
	test("Modal shouldn't close, if using config.escClose = false", async () => {
		await render(container);
		const modal = await openModal(ModalTitle);
		config({
			escClose: false
		})
		await fireEvent.keyUp(document, {key: "Escape"});
		await wait(5);
		expect(modal.closed.value).toBe(false);
	})
})