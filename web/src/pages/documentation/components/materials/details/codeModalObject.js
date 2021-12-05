import {useVocabulary} from "../../../assets/js/Vocabulary";

export const codeOnClose =
`import {openModal} from "jenesius-vue-modal";
const modal = await openModal(Modal, {
	message: "Welcome"
});
modal.onclose = () => false

modal.instance.message; // "Welcome"
modal.closed.value; // true

modal.close() // ${useVocabulary("modalWillNotBeClosed")}
`;

export const codeModalObject =
`const modal = await openModal(Modal);

modal.id; // ${useVocabulary.uniqueIdentity}

modal.onclose = () => {
    if (${useVocabulary.weather} === "${useVocabulary.rainy}") return false;
}

modal.close() // ${useVocabulary.closeModalIfWeatherIsRainy}`;

export const codeModalOnCloseAccess =
`const modal = await openModal(Modal);
modal.onclose = function(){
	this.insideValue; // "Hello"
	modal.instance.insideValue; // "Hello"
}
`

export const codeModalExample =
`//Modal.vue
{
	props: {},
	data: () => {
		return {
			insideValue: "Hello"
		}
	}
}`
