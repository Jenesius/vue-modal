/*eslint-disable*/

import { mount } from '@vue/test-utils'
import {nextTick} from "vue";


import {modalQueue, closeModal, openModal, popModal, pushModal, container} from "../plugin/index";

import WidgetModalContainerItem from "../plugin/components/WidgetModalContainerItem.vue";
import wait from "./wait";
import ModalTitle from "./components/modal-title.vue";

beforeEach(async () => {
  modalQueue.value = [];
  await wait();
})
afterAll(() => {
  modalQueue.value = [];
});


describe('Init', () => {


  it ("Initialized", async () => {
    await mount(container);

    expect(() => openModal(ModalTitle)).not.toThrow()
  })

  it("openModal", async () => {

    const wrap = await mount(container);

    await openModal(ModalTitle, {title: "Modal-1"});
    expect(modalQueue.value.length).toBe(1);

    //Повторное открытие окна, должно заменить предыдущее
    const modalObject2 = await openModal(ModalTitle, {title: "Modal-2"});
    expect(modalQueue.value.length).toBe(1);


    expect(wrap.text()).toEqual("Modal-2");
    await modalObject2.close();
    expect(modalQueue.value.length).toBe(0);

  })

  it("closeModal", async () => {
    await mount(container);

    await openModal(ModalTitle);
    await closeModal();

    expect(modalQueue.value.length).toBe(0);

    await pushModal(ModalTitle);
    await pushModal(ModalTitle);
    await pushModal(ModalTitle);

    await closeModal();

    expect(modalQueue.value.length).toBe(0);
  })

  it("pushModal", async () => {

    const wrapper = await mount(container);

    await pushModal(ModalTitle);
    await pushModal(ModalTitle);
    await pushModal(ModalTitle);
    await pushModal(ModalTitle);

    expect(modalQueue.value.length).toBe(4);

    await pushModal(ModalTitle);
    await pushModal(ModalTitle);

    await nextTick();

    expect(modalQueue.value.length).toBe(6);
    expect(wrapper.findAll(".widget__modal-container__item").length).toBe(6);

  })

  it("popModal", async () => {
    const wrapper = await mount(container);

    await openModal(ModalTitle);
    await popModal();

    expect(modalQueue.value.length).toBe(0);
    expect(wrapper.findAll(".widget__modal-container__item").length).toBe(0);

    await pushModal(ModalTitle);
    await pushModal(ModalTitle);
    await pushModal(ModalTitle);
    await pushModal(ModalTitle);

    await popModal();

    expect(modalQueue.value.length).toBe(3);
    expect(wrapper.findAll(".widget__modal-container__item").length).toBe(3);

    await popModal();
    await popModal();

    expect(modalQueue.value.length).toBe(1);
    expect(wrapper.findAll(".widget__modal-container__item").length).toBe(1);
  })

  it("click on modal", async () => {
    const wrapper = await mount(container);

    await openModal(ModalTitle, {title: "test"});
    await wrapper.find(".modal-item").trigger("click");


    expect(wrapper.findAllComponents(WidgetModalContainerItem).length).toBe(1);
  })

  it("click on modal's back ", async () => {

    const wrapper = await mount(container);

    await openModal(ModalTitle, {title: "test"});
    await wrapper.find(".modal-container").trigger("click");


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

    expect(modalQueue.value.length).toBe(1);

    const event = new KeyboardEvent('keyup', {key: 'Escape'});
    document.dispatchEvent(event);

    await nextTick();

    expect(modalQueue.value.length).toBe(0);

  })

  it("close destroyed modal", async () => {
    await mount(container);
    const modal = await openModal(ModalTitle);
    await pushModal(ModalTitle);

    await closeModal();


    try {
      await modal.close()

    } catch (e){}

    expect(modalQueue.value.length).toBe(0);

  })

  it("close by id", async () => {

    await mount(container);
    const modal1 = await pushModal(ModalTitle);
    const modal2 = await pushModal(ModalTitle);
    const modal3 = await pushModal(ModalTitle);

    try {
      await modal2.close()
    } catch (e) {}

    expect(modalQueue.value.map(item => item.id)).toEqual([modal1.id,modal3.id]);

  })

})
