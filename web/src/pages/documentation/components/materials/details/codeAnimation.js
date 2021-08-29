import {useVocabulary} from "../../../assets/js/Vocabulary";

export const codeConfigAnimation =
`import {config} from "../../../../plugin";

config({
	animation: "fade" // ${useVocabulary.anyName}
})`;

export const codeAnimationExample =
`.fade-enter-active, // ${useVocabulary.timeOfAnimationForDefaultBlock}
.fade-leave-active,
.fade-enter-active .modal-item,
.fade-leave-active .modal-item{
	transition: 1.2s;
}

.fade-enter-from .modal-item,
.fade-leave-to .modal-item{
	transform: translateX(100px);
}`;