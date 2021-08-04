/*eslint-disable*/

import { mount } from '@vue/test-utils'
import {nextTick} from "vue";

import App from "./Example";
import {modalQueue, closeModal, openModal, popModal, pushModal, container} from "../../plugin";
import ModalTest from "./ModalTest";
import WidgetModalContainerItem from "../../plugin/WidgetModalContainerItem";


function longWait(){

  return new Promise(resolve => {
    setTimeout(resolve, 1000);
  })

}

describe('tests', () => {

  it ("Not initialized", () => {

    expect(() => openModal(ModalTest)).toThrow()


  })
  it ("Initialized", async () => {

    const wrap = await mount(container);

    expect(() => openModal(ModalTest)).not.toThrow()


  })
  it("openModal", async () => {

    const wrap = await mount(container);

    openModal(ModalTest, {title: "Modal-1"});
    expect(modalQueue.value.length).toBe(1);

    //Повторное открытие окна, должно заменить предыдущее
    const modalObject2 = openModal(ModalTest, {title: "Modal-2"});
    expect(modalQueue.value.length).toBe(1);

    await nextTick()

    expect(wrap.text()).toEqual("Modal-2");
    modalObject2.close();
    expect(modalQueue.value.length).toBe(0);

  })

  it("closeModal", async () => {

    openModal(ModalTest);
    await nextTick();
    closeModal();

    expect(modalQueue.value.length).toBe(0);

    pushModal(ModalTest);
    pushModal(ModalTest);
    pushModal(ModalTest);

    await nextTick();
    closeModal();

    expect(modalQueue.value.length).toBe(0);

  })

  it("pushModal", async () => {

    const wrapper = await mount(App);

    pushModal(ModalTest);
    pushModal(ModalTest);
    pushModal(ModalTest);
    pushModal(ModalTest);

    await nextTick();

    expect(modalQueue.value.length).toBe(4);

    pushModal(ModalTest);
    pushModal(ModalTest);

    await nextTick();

    expect(modalQueue.value.length).toBe(6);
    expect(wrapper.findAll(".widget__modal-container__item").length).toBe(6);

  })

  it("popModal", async () => {

    const wrapper = await mount(App);

    openModal(ModalTest);

    await nextTick();

    popModal();
    await nextTick();

    expect(modalQueue.value.length).toBe(0);
    expect(wrapper.findAll(".widget__modal-container__item").length).toBe(0);


    pushModal(ModalTest);
    pushModal(ModalTest);
    pushModal(ModalTest);
    pushModal(ModalTest);

    await nextTick();

    popModal();
    await nextTick();

    expect(modalQueue.value.length).toBe(3);
    expect(wrapper.findAll(".widget__modal-container__item").length).toBe(3);

    popModal();
    popModal();

    await nextTick();
    expect(modalQueue.value.length).toBe(1);
    expect(wrapper.findAll(".widget__modal-container__item").length).toBe(1);
  })

  it("click on modal's back ", async () => {

    const wrapper = await mount(App);

    openModal(ModalTest, {title: "test"});

    await nextTick();

    wrapper.find(".widget__modal-back").trigger("click");

    await nextTick();

    expect(wrapper.findAllComponents(WidgetModalContainerItem).length).toBe(0);

  })

  it("provide props", async () => {
    const wrapper = await mount(App);

    openModal(ModalTest, {
      title: "Jenesius",
      age  : 22
    });

    await nextTick();

    expect(wrapper.text()).toBe("Jenesius 22");
  })

  it("press escape", async () => {

    const wrapper = await mount(App);

    openModal(ModalTest);

    await nextTick();

    expect(modalQueue.value.length).toBe(1);

    const event = new KeyboardEvent('keyup', {key: 'Escape'});
    document.dispatchEvent(event);

    await nextTick();

    expect(modalQueue.value.length).toBe(0);

  })

  it("close destroyed modal", async () => {

    const wrapper = await mount(App);

    const modal = openModal(ModalTest);
    pushModal(ModalTest);

    closeModal();

    await nextTick();

    modal.close()

    expect(modalQueue.value.length).toBe(0);

  })

  it("close by id", async () => {

    const wrapper = await mount(App);

    const modal1 = pushModal(ModalTest);
    const modal2 = pushModal(ModalTest);
    const modal3 = pushModal(ModalTest);


    modal2.close()
    await nextTick();


    expect(modalQueue.value.map(item => item.id)).toEqual([modal1.id,modal3.id]);

  })

  it("close destroyed modal", async () => {
    const wrapper = await mount(App);

    const modal1 = openModal(ModalTest);
    const modal2 = openModal(ModalTest);
    const modal3 = openModal(ModalTest);


    await nextTick();

    expect(modalQueue.value[0].id).toBe(modal3.id);

    modal2.close()

    await nextTick();

    expect(modalQueue.value.length).toBe(1);
    expect(modalQueue.value[0].id).toBe(modal3.id);


  })

})
