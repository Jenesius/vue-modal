export const codeOnClose =
`import {openModal} from "jenesius-vue-modal";
const modal = await openModal(VueComponent);

let count = 5;

modal.onclose = (next) => {
    count--;
    if (count > 0 ) return next(false);
}`;

export const codeOnCloseMiddle =
`import {openModal, closeModal} from "jenesius-vue-modal";

const modal1 = await openModal(VueComponent);
const modal2 = await openModal(VueComponent);
const modal3 = await openModal(VueComponent);

modal2.onclose = (next) => next(false);

closeModal(); // close only modal3

`;