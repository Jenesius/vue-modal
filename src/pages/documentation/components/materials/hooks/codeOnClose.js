export const codeOnClose =
`import {openModal} from "jenesius-vue-modal";
const modal = openModal(VueComponent);

let count = 5;

modal.onclose = () => {
    count--;
    if (count > 0 ) return false;
}`;

export const codeOnCloseMiddle =
`import {openModal, closeModal} from "jenesius-vue-modal";

const modal1 = openModal(VueComponent);
const modal2 = openModal(VueComponent);
const modal3 = openModal(VueComponent);

modal2.onclose = () => false;

closeModal(); // close only modal3

`;