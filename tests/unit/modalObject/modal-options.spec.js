import {mount} from "@vue/test-utils";
import {
	config,
	container,
	modalQueue,
	openModal,
} from "../../../plugin/index";
import wait from "../../wait";
import ModalTest from "../ModalTest";

let wrapper = null;

beforeAll(async () => {
	wrapper = await mount(container);
})
beforeEach(async () => {
	modalQueue.value = [];
	await wait()
})

describe("Testing modal options", () => {
	
	test('options {backgroundClose: false} ', async () => {
		const modal = await openModal(ModalTest, {}, {backgroundClose: false})
		
		wrapper.find(".modal-container").trigger('click');
		await wait();

		expect(modal.closed.value).toBe(false)
	})
	test('modal.backGroundClose = false', async () => {
		const modal = await openModal(ModalTest, {})
		modal.backgroundClose = false;
		
		wrapper.find(".modal-container").trigger('click');
		await wait();
		
		expect(modal.closed.value).toBe(false)
	})
	
	test('modal.backGroundClose = true, configuration = false', async () => {
		config({backgroundClose: false});
		
		const modal = await openModal(ModalTest, {}, {backgroundClose: true})
		
		wrapper.find(".modal-container").trigger('click');
		await wait();
		
		expect(modal.closed.value).toBe(true)
	})
	
})
