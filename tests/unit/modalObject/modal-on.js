import {container, openModal} from "../../../plugin/index";
import {mount} from "@vue/test-utils";
import ModalEmitter from "./ModalEmitter";
import wait from "../../wait";
import App from "../IntegrationRouter/App";

const waiter = (n = 10) => {
	
	return new Promise(resolve => {
		
		setTimeout(() => {
			resolve();
		}, n);
		
	})
	
}
let wrapper = null;

beforeAll(async () => {
	wrapper = await mount(App);
})
/*
describe("Testing modal.on", () => {
	
	test('Default', async () => {
		
		const value = Math.random();
		let output = null;
		
		const modal = await openModal(ModalEmitter, {value});
		modal.on('update', function (v) {
			output = v;
		})
		
		let v = wrapper;
		console.log(modal.instance);
		console.log(modal.instance.emitted());
		
		await wrapper.find('button').trigger('click')
		
		await wait()
		
		expect(output).toBe(value);
		
		
	})
	
})

*/
