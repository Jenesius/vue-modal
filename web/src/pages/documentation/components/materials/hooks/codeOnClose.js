import {useVocabulary} from "../../../assets/js/Vocabulary";

export const codeOnClose =
`import {openModal} from "jenesius-vue-modal";
const modal = await openModal(VueComponent);

let count = 5;

modal.onclose = () => {
    count--;
    if (count > 0 ) return false; //${useVocabulary.closeModalAfterFiveAttempts}
}`;

export const codeOnCloseMiddle =
`import {openModal, closeModal} from "jenesius-vue-modal";

const modal1 = await openModal(VueComponent);
const modal2 = await openModal(VueComponent);
const modal3 = await openModal(VueComponent);

modal2.onclose = () => false;

closeModal(); // ${useVocabulary.closeOnly} modal3`;