/*eslint-disable*/
import {mount} from "@vue/test-utils";

import { createRouter, createWebHistory } from 'vue-router';

import useRouterModal from "../../../web/src/pages/test/path";

import App from "./App";
import ModalRoute from "./ModalRoute";
import {nextTick} from "vue";
import ContainerUsers from "./ContainerUsers";
import ModalUser from "./ModalUser";
import {modalQueue} from "../../../plugin";

const waiter = (n) => {

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

beforeEach(() => {
	modalQueue.value = [];
})


const router = createRouter({
	history: createWebHistory(),
	routes: [

		{
			path: "/simple-modal",
			component: useRouterModal.add(ModalRoute)
		},

		{
			path: "/users",
			component: ContainerUsers,
			children: [
				{
					path: ":id",
					components: {
						modal: useRouterModal.add(ModalUser)
					}
				}
			]
		},
		{
			path: '/',
			component: {
				template: 'Test'
			}
		},
	]
})

useRouterModal(router);

describe("Integration with VueRouter", () => {

	it("Default", async () => {
		await router.push('/');
		// After this line, router is ready
		await router.isReady();

		const wrapper = await mount(App, {global: {plugins: [router]}});

		expect(wrapper.text()).toBe("Test");
	})
	it("Opening a window on a simple match", async () => {
		await router.push("/simple-modal");
		await router.isReady();

		const wrapper = await mount(App, {global: {plugins: [router]}});

		await nextTick();

		expect(wrapper.text()).toBe("Modal router");
	})
	it("Opening and the closing", async () => {
		await router.push("/simple-modal");
		await router.isReady();

		const wrapper = await mount(App, {global: {plugins: [router]}});
		await nextTick();
		expect(wrapper.text()).toBe("Modal router");
		await router.push("/");
		await nextTick();
		expect(wrapper.text()).toBe("Test");

	})
	it("Open child routeModal with params", async () => {
		await router.push("/users/3");
		await router.isReady();

		const wrapper = await mount(App, {global: {plugins: [router]}});

		await nextTick();

		expect(wrapper.text()).toBe("user-3");
	})
	it("Open a list of child routeModal", async () => {
		await router.push("/users/3");
		await router.isReady();

		const wrapper = await mount(App, {global: {plugins: [router]}});

		for(let i = 0; i < 5; i++) {
			await router.push("/users/"+i);
			await nextTick();

			expect(wrapper.text()).toBe(`user-${i}`);
		}




	})
	it("Push", async () => {

		console.log("++++++++++++")

		await router.push("/");
		await router.isReady();

		const wrapper = await mount(App, {global: {plugins: [router]}});

		await nextTick();
		await router.push("/users/3");

		await nextTick();
		await nextTick();

		expect(wrapper.text()).toBe("user-3");

		await router.push("/");
		await waiter(2000)

		expect(wrapper.text()).toBe("Test");


		console.log("++++++++++++")

	})
	it("Back", async () => {
		await router.push("/");
		await router.isReady();

		const wrapper = await mount(App, {global: {plugins: [router]}});

		await nextTick();
		await router.push("/users/3");

		await nextTick();
		await waiter(1000)

		expect(wrapper.text()).toBe("user-3");

		await router.go(-1);
		await waiter(1000)


		expect(wrapper.text()).toBe("Test");
	})
});