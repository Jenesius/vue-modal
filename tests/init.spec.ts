import { mount } from '@vue/test-utils'
import {nextTick} from "vue";


import {closeModal, openModal, popModal, pushModal, container, getQueueByNamespace} from "../src/index";

import WidgetModalContainerItem from "../src/components/WidgetModalContainerItem.vue";
import wait from "./wait";
import ModalTitle from "./components/modal-title.vue";
import ModalError from "../src/utils/ModalError";
import NamespaceStore from "./../src/utils/NamespaceStore";
import triggerClickClose from "./assets/trigger-click-close";

const modalQueue = getQueueByNamespace();
beforeEach(async () => {
  NamespaceStore.instance.forceClean()
  await wait();
})


describe('Init', () => {
	it('Run without container, must throw the error', async function () {
		await expect(() => pushModal(ModalTitle)).rejects.toThrowError(ModalError.NotInitialized("default"));
	});

  it ("Initialized", async () => {
    await mount(container);

    expect(() => openModal(ModalTitle)).not.toThrow()
  })

  it("openModal", async () => {

    const wrap = await mount(container);

    await openModal(ModalTitle, {title: "Modal-1"});
    expect(modalQueue.length).toBe(1);

    //Повторное открытие окна, должно заменить предыдущее
    const modalObject2 = await openModal(ModalTitle, {title: "Modal-2"});
    expect(modalQueue.length).toBe(1);


    expect(wrap.text()).toEqual("Modal-2");
    await modalObject2.close();
    expect(modalQueue.length).toBe(0);

  })

  it("closeModal", async () => {
    await mount(container);

    await openModal(ModalTitle);
    await closeModal();

    expect(modalQueue.length).toBe(0);

    await pushModal(ModalTitle);
    await pushModal(ModalTitle);
    await pushModal(ModalTitle);

    await closeModal();

    expect(modalQueue.length).toBe(0);
  })

  it("pushModal", async () => {

    const wrapper = await mount(container);

    await pushModal(ModalTitle);
    await pushModal(ModalTitle);
    await pushModal(ModalTitle);
    await pushModal(ModalTitle);

    expect(modalQueue.length).toBe(4);

    await pushModal(ModalTitle);
    await pushModal(ModalTitle);

    await nextTick();

    expect(modalQueue.length).toBe(6);
    expect(wrapper.findAll(".widget__modal-container__item").length).toBe(6);

  })

  it("popModal", async () => {
    const wrapper = await mount(container);

    await openModal(ModalTitle);
    await popModal();

    expect(modalQueue.length).toBe(0);
    expect(wrapper.findAll(".widget__modal-container__item").length).toBe(0);

    await pushModal(ModalTitle);
    await pushModal(ModalTitle);
    await pushModal(ModalTitle);
    await pushModal(ModalTitle);

    await popModal();

    expect(modalQueue.length).toBe(3);
    expect(wrapper.findAll(".widget__modal-container__item").length).toBe(3);

    await popModal();
    await popModal();

    expect(modalQueue.length).toBe(1);
    expect(wrapper.findAll(".widget__modal-container__item").length).toBe(1);
  })

  it("click on modal", async () => {
    const wrapper = await mount(container);

    await openModal(ModalTitle, {title: "test"});
    await wrapper.find(".modal-item").trigger("pointerdown");


    expect(wrapper.findAllComponents(WidgetModalContainerItem).length).toBe(1);
  })

  it("click on modal's back ", async () => {

    const wrapper = await mount(container);

    await openModal(ModalTitle, {title: "test"});
    await triggerClickClose(wrapper);


    expect(wrapper.findAllComponents(WidgetModalContainerItem).length).toBe(0);

  })

  it("provide props", async () => {
    const wrapper = await mount(container);

    await openModal(ModalTitle, {
      title: "Jenesius",
      age  : 22
    });

    expect(wrapper.text()).toBe("Jenesius 22");
  })

  it("press escape", async () => {

    await openModal(ModalTitle);

    await nextTick();

    expect(modalQueue.length).toBe(1);

    const event = new KeyboardEvent('keyup', {key: 'Escape'});
    document.dispatchEvent(event);

    await nextTick();

    expect(modalQueue.length).toBe(0);

  })

  it("close destroyed modal", async () => {
    await mount(container);
    const modal = await openModal(ModalTitle);
    await pushModal(ModalTitle);

    await closeModal();


    try {
      await modal.close()

    } catch (e){}

    expect(modalQueue.length).toBe(0);

  })

  it("close by id", async () => {

    await mount(container);
    const modal1 = await pushModal(ModalTitle);
    const modal2 = await pushModal(ModalTitle);
    const modal3 = await pushModal(ModalTitle);

    try {
      await modal2.close()
    } catch (e) {}

    expect(modalQueue.map(item => item.id)).toEqual([modal1.id,modal3.id]);

  })



})
