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
`import {pushModal, closeModal} from "jenesius-vue-modal";

const modal1 = await pushModal(VueComponent);
const modal2 = await pushModal(VueComponent);
const modal3 = await pushModal(VueComponent);

modal2.onclose = () => false;

closeModal(); // ${useVocabulary.closeOnly} modal3`;