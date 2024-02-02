import {mount} from "@vue/test-utils";
import {container, promptModal, closeModal} from "../src/index";
import ModalPromptValue from "./components/modal-prompt-value.vue";
import wait from "./wait";
import NamespaceStore from "./../src/utils/NamespaceStore";

beforeEach(async () => {
    NamespaceStore.instance.forceClean()
    await wait()
})

describe("Testing prompt-modal", () => {
    it('Test for opened modal window', async function () {
        const wrap = await mount(container);

        const value = '123';

        promptModal(ModalPromptValue, {value})

        await wait(1);

        expect(wrap.text()).toEqual(value);
    });
    it("Should be returned with provided value", async function () {
        const app = mount(container);

        const value = Math.random();
        const prResult = promptModal(ModalPromptValue, {
            value
        })
        await wait()
        app.find('button').trigger('click')

        await wait()

        expect(await prResult).toEqual(value)
    })
    it('If modal was prompted and then just closed, promise should be resolved with value null', async () => {
        await mount(container);

        const value = Math.random();
        const prResult = promptModal(ModalPromptValue, {
            value
        })
        await wait()
        await closeModal()

        expect(await prResult).toEqual(null)
    })

})