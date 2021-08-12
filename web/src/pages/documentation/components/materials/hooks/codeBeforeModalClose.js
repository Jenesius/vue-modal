import {useVocabulary} from "../../../assets/js/Vocabulary";

export const codeBeforeModalClose =
`const Foo = {
	template: "...",
	beforeModalClose() {
		// ${useVocabulary.hasAccessToThis}
	}
}`;