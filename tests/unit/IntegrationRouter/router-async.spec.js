/**
 * ОСНОВНАЯ ПРОБЛЕМА:
 * ПАУЗА В ВЫЗОВАХ, НЕОБХОДИМО ПОСЛЕ КАЖДОГО ROUTER.PUSH ДЕЛАТЬ ПАУЗУ
 * ДАННЫЕ ТЕСТЫ ПРЕДНАЗНАЧЕНЫ ДЛЯ ПРОВЕРКИ ДАННЫХ СИТУАЦИЙ В РАБОТЕ С ROUTER-INTEGRATION
 * */
import router from "./router";
import {mount} from "@vue/test-utils";
import App from "./App";
import {modalQueue, useModalRouter} from "../../../plugin/index";
import wait from "../../wait";

beforeEach(async () => {
	modalQueue.value = [];
	await wait();
})
useModalRouter.init(router);


describe("Router async", () => {
	
	test("Changing modalQueue length", async () => {
		const wrapper = await mount(App, {global: {plugins: [router]}});
		
		await router.push('/');
		// After this line, router is ready
		await router.isReady();
		
		await router.push("/router-simple-modal");
		await wait();
		
		expect(modalQueue.value.length).toBe(1);
	})
	
	test("Entering modal", async () => {
		const wrapper = await mount(App, {global: {plugins: [router]}});
		
		await router.push('/');
		// After this line, router is ready
		await router.isReady();
		
		await router.push("/router-simple-modal");
		await wait();
		
		expect(wrapper.text()).toBe("Modal router");
	})
	
	
})
