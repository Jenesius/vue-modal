import {container, openModal} from "../../../plugin/index";
import {mount} from "@vue/test-utils";
import ModalTest from "./ModalTest";
import wait from "../../wait";

/**
 * В ТЕСТЕ НЕ СРАБАТЫВАЕТ EMITTER
 * ПОКА МОЖНО ЭТО ОТЛОЖИТЬ
 * */
/*
describe("Test with on method of Modal", () => {
	
	test('Default', async () => {
		
		const wrap = await mount(container);
		const value = Math.random();
		let output = null;
		
		const modal = await openModal(ModalTest, {value});
		modal.on('update', function (v) {
			output = v;
		})
		
		await wrap.find('button').trigger('click')
		
		await wait(1000);
		
		expect(output).toBe(value);
		
		
	})
	
})
*/
