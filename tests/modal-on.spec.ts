import {container, openModal} from "../plugin/index";
import {fireEvent, render} from "@testing-library/vue";
import ModalButton from "./components/modal-button.vue";

describe("Test with on method of Modal", () => {
	
	test('Default', async () => {

		const wrap = await render(container)
		const value = Math.random();
		let output = null;
		
		const modal = await openModal(ModalButton, {value});

		modal.on('update', function (v) {
			output = v;
		})

		const button = await wrap.findByRole("button")
		await fireEvent.click(button);

		expect(output).toBe(value);

	})
	test("Event should not be handled, after unsubscribe", async() => {
		const wrap = await render(container);
		let output = 0;

		const modal = await openModal(ModalButton);

		const off = modal.on('update', () => {
			output++;
		})
		const button = await wrap.findByRole("button");
		await fireEvent.click(button);
		expect(output).toBe(1);
		off();
		await fireEvent.click(button);
		expect(output).toBe(1);

	})
})
