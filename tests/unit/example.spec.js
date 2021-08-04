/*eslint-disable*/

import { mount } from '@vue/test-utils'
import {nextTick} from "vue";

import App from "./Example";
import {modalQueue, closeModal, openModal, popModal, pushModal, container} from "../../plugin";
import ModalTest from "./ModalTest";

describe('tests', () => {

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

})
