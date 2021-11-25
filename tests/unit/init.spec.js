/*eslint-disable*/

import { mount } from '@vue/test-utils'
import {nextTick} from "vue";

import App from "./Example";
import {modalQueue, closeModal, openModal, popModal, pushModal, container} from "../../plugin";
import ModalTest from "./ModalTest";
import WidgetModalContainerItem from "../../plugin/components/WidgetModalContainerItem";


function waitTime(n) {
  return new Promise(resolve => {
    setTimeout(resolve, n);
  })
}
beforeEach(async () => {
  modalQueue.value = [];
  await waitTime(10);
})
afterAll(() => {
  modalQueue.value = [];
});


describe('Init', () => {


  it ("Initialized", async () => {

    await mount(container);

    expect(() => openModal(ModalTest)).not.toThrow()


  })
  it("openModal", async () => {

    const wrap = await mount(container);

    await openModal(ModalTest, {title: "Modal-1"});
    expect(modalQueue.value.length).toBe(1);

    //Повторное открытие окна, должно заменить предыдущее
    const modalObject2 = await openModal(ModalTest, {title: "Modal-2"});
    expect(modalQueue.value.length).toBe(1);


    expect(wrap.text()).toEqual("Modal-2");
    await modalObject2.close();
    expect(modalQueue.value.length).toBe(0);

  })

  it("closeModal", async () => {
    const wrap = await mount(container);

    await openModal(ModalTest);
    await closeModal();

    expect(modalQueue.value.length).toBe(0);

    pushModal(ModalTest);
    pushModal(ModalTest);
    pushModal(ModalTest);

    await closeModal();

    expect(modalQueue.value.length).toBe(0);
  })

  it("pushModal", async () => {

    const wrapper = await mount(App);

    pushModal(ModalTest);
    pushModal(ModalTest);
    pushModal(ModalTest);
    pushModal(ModalTest);

    expect(modalQueue.value.length).toBe(4);

    pushModal(ModalTest);
    pushModal(ModalTest);

    await nextTick();

    expect(modalQueue.value.length).toBe(6);
    expect(wrapper.findAll(".widget__modal-container__item").length).toBe(6);

  })

  it("popModal", async () => {
    const wrapper = await mount(App);

    await openModal(ModalTest);
    await popModal();

    expect(modalQueue.value.length).toBe(0);
    expect(wrapper.findAll(".widget__modal-container__item").length).toBe(0);

    pushModal(ModalTest);
    pushModal(ModalTest);
    pushModal(ModalTest);
    pushModal(ModalTest);

    await popModal();

    expect(modalQueue.value.length).toBe(3);
    expect(wrapper.findAll(".widget__modal-container__item").length).toBe(3);

    await popModal();
    await popModal();

    expect(modalQueue.value.length).toBe(1);
    expect(wrapper.findAll(".widget__modal-container__item").length).toBe(1);
  })

  it("click on modal", async () => {
    const wrapper = await mount(App);

    const modal = await openModal(ModalTest, {title: "test"});
    wrapper.find(".modal-item").trigger("click");

    await waitTime(100);

    expect(wrapper.findAllComponents(WidgetModalContainerItem).length).toBe(1);
  })

  it("click on modal's back ", async () => {

    const wrapper = await mount(App);

    const modal = await openModal(ModalTest, {title: "test"});
    wrapper.find(".modal-container").trigger("click");

    await waitTime(100);

    expect(wrapper.findAllComponents(WidgetModalContainerItem).length).toBe(0);

  })

  it("provide props", async () => {
    const wrapper = await mount(App);

    await openModal(ModalTest, {
      title: "Jenesius",
      age  : 22
    });


    expect(wrapper.text()).toBe("Jenesius 22");
  })

  it("press escape", async () => {

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
    const modal = await openModal(ModalTest);
    await pushModal(ModalTest);

    await closeModal();


    try {
      await modal.close()

    } catch (e){}

    expect(modalQueue.value.length).toBe(0);

  })

  it("close by id", async () => {

    const wrapper = await mount(App);
    const modal1 = await pushModal(ModalTest);
    const modal2 = await pushModal(ModalTest);
    const modal3 = await pushModal(ModalTest);

    try {
      await modal2.close()
    } catch (e) {}

    expect(modalQueue.value.map(item => item.id)).toEqual([modal1.id,modal3.id]);

  })

})
