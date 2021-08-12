import {useVocabulary} from "../../../assets/js/Vocabulary";

export const codeOnClose =
`import {openModal} from "jenesius-vue-modal;
const modal = await openModal(Modal);
modal.onclose = () => false

modal.close() // ${useVocabulary("modalWillNotBeClosed")}
`;

export const codeModalObject =
`const modal = await openModal(Modal);

modal.id; // ${useVocabulary.uniqueIdentity}

modal.onclose = () => {
    if (${useVocabulary.weather} === "${useVocabulary.rainy}") return false;
}
 
modal.close() // ${useVocabulary.closeModalIfWeatherIsRainy}`;