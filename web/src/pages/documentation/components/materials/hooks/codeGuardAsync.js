import {useVocabulary} from "../../../assets/js/Vocabulary";

export const codeAsync =
`{
	async beforeModalClose(){
		await updateData();
	}
}`;

export const codePromise =
`const modal = await openModal(Modal);
	
modal.onclose = () => {
	return new Promise(resolve => {
		setTimeout(resolve, 1000); // ${useVocabulary.modalWillCloseAfterSecond}
	})
}`;