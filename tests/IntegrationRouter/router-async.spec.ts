/**
 * ОСНОВНАЯ ПРОБЛЕМА:
 * ПАУЗА В ВЫЗОВАХ, НЕОБХОДИМО ПОСЛЕ КАЖДОГО ROUTER.PUSH ДЕЛАТЬ ПАУЗУ
 * ДАННЫЕ ТЕСТЫ ПРЕДНАЗНАЧЕНЫ ДЛЯ ПРОВЕРКИ ДАННЫХ СИТУАЦИЙ В РАБОТЕ С ROUTER-INTEGRATION
 * */
import router from "./router";
import {mount} from "@vue/test-utils";
import {useModalRouter, container, getQueueByNamespace} from "./../../src/index";
import wait from "../wait";
import NamespaceStore from "../../src/utils/NamespaceStore";

const modalQueue = getQueueByNamespace();
beforeEach(async () => {
	NamespaceStore.instance.forceClean()
})
useModalRouter.init(router);

describe("Router async", () => {
	
	test("Changing modalQueue length", async () => {
		await mount(container, {global: {plugins: [router]}});
		
		await router.push('/');
		// After this line, router is ready
		await router.isReady();
		
		await router.push("/router-simple-modal");
		await wait();
		
		expect(modalQueue.length).toBe(1);
	})
	
	test("Entering modal", async () => {
		const wrapper = await mount(container, {global: {plugins: [router]}});
		
		await router.push('/');
		// After this line, router is ready
		await router.isReady();
		
		await router.push("/router-simple-modal");
		await wait();
		
		expect(wrapper.text()).toBe("Modal router");
	})
	
	
})
