import {mount} from "@vue/test-utils";
import {container, openModal, pushModal} from "../src/index";
import ModalTitle from "./components/modal-title.vue"
import {computed, reactive, ref} from "vue";
import wait from "./wait";
import NamespaceStore from "./../src/utils/NamespaceStore";

let wrapper = null;

beforeAll(async () => {
	wrapper = await mount(container);
})
beforeEach(async () => {
	NamespaceStore.instance.forceClean()
	await wait()
})

describe('Props of Modal', () => {
	
	/**
	 * Проверка на передачу простых аргументов в модальное окно
	 * */
	test('Simple props', async () => {
		const title = "Text"
		const modal = await openModal(ModalTitle, {title});

		expect(modal.instance.title).toBe(title)
	})
	/**
	 * Проверка на передачу простых аргументов в модальное окно
	 * */
	test('Simple props with push', async () => {
		const title = "Text"
		const modal = await pushModal(ModalTitle, {title});

		expect(modal.instance.title).toBe(title)
	})
	/**
	 * Проверка на объект целиком
	 * */
	test('Ref props', async () => {
		const state = { title: 'Hello'};
		const modal = await openModal(ModalTitle, state);

		expect(modal.instance.title).toBe('Hello')
	})
	/**
	 * Проверка на передачу ref
	 * */
	test('Ref props', async () => {
		const state = ref({ title: 'Hello'});
		const modal = await openModal(ModalTitle, state);
		
		expect(modal.instance.title).toBe('Hello')
	})
	
	/**
	 * Проверка на передачу reactive
	 * */
	test('Reactive props', async () => {
		const state = reactive({title: 'base'});
		const modal = await openModal(ModalTitle, state);
		
		expect(modal.instance.title).toBe('base');
	})
	
	/**
	 * Проверка на передачу вычисляемого объекта, в качестве props целиком
	 * */
	test('Computed props', async () => {
		const refState = ref({title: 'ref'});
		const state = computed(() => refState.value);
		
		const modal = await openModal(ModalTitle, state);
		expect(modal.instance.title).toBe('ref');
	})
	
	/**
	 * Передача props, одно из свойств которого является вычисляемое значение
	 * */
	test('Computed prop in object', async () => {

		const modal = await openModal(ModalTitle, {
			title: "Hello",
			age: 1
		})
		expect(modal.instance.title).toBe('Hello')
	})
	
	/**
	 * ПРОВЕРКА НА ИЗМЕНЕНИЕ PROPS: REF, REACTIVE, COMPUTED
	 * */
	
	test('Changing ref in props', async () => {
		const state = ref({ title: 'Hello', age: 1});
		const modal = await openModal(ModalTitle, state);
		
		state.value.title = 'New value';
		
		await wait();
		
		expect(modal.instance.title).toBe('New value')
	})
	test('Changing reactive in props', async () => {
		const state = reactive({title: 'base', age: 4});
		const modal = await openModal(ModalTitle, state);
		
		state.title = 'New value';
		
		await wait();
		
		expect(modal.instance.title).toBe('New value');
	})
	test('Changing computed in props', async () => {
		const refState = ref({title: 'ref'});
		const state = computed(() => refState.value);
		
		const modal = await openModal(ModalTitle, state);
		
		refState.value.title = 'New value';
		await wait();
		expect(modal.instance.title).toBe('New value');
	})

	
})
