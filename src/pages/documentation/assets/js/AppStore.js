import FragmentOnClose from "../../components/materials/hooks/FragmentOnClose";
import FragmentModalObject from "../../components/materials/details/FragmentModalObject";
import FragmentNpm from "../../components/materials/Installation/FragmentNpm";
import FragmentOpenModal from "../../components/materials/methods/FragmentOpenModal";
import FragmentPushModal from "../../components/materials/methods/FragmentPushModal";
import FragmentCloseModal from "../../components/materials/methods/FragmentCloseModal";
import FragmentPopModal from "../../components/materials/methods/FragmentPopModal";
import {useVocabulary} from "./Vocabulary";
import FragmentGettingStarted from "../../components/materials/Installation/FragmentGettingStarted";
import FragmentBeforeModalClose from "../../components/materials/hooks/FragmentBeforeModalClose";
import FragmentOnBeforeModalClose from "../../components/materials/hooks/FragmentOnBeforeModalClose";

export const config = [
	{
		title: useVocabulary("installation"),
		link : "installation",
		array: [
			{
				title: "npm",
				link : "npm",
				component: FragmentNpm
			},
			{
				title: useVocabulary("getting started"),
				link : "getting-started",
				component: FragmentGettingStarted
			}
		]
	},
	{
		title: useVocabulary("methods"),
		link : "methods",
		array: [
			{
				title: "OpenModal",
				link : "open-modal",
				component: FragmentOpenModal
			},
			{
				title: "PushModal",
				link : "push-modal",
				component: FragmentPushModal
			},
			{
				title: "CloseModal",
				link : "close-modal",
				component: FragmentCloseModal
			},
			{
				title: "PopModal",
				link : "pop-modal",
				component: FragmentPopModal
			}
		]
	},
	{
		title: "Lifecycle Hooks",
		link : "lifecycle-hooks",
		array: [
			{
				title: "onClose",
				link : "on-close",
				component: FragmentOnClose
			},
			{
				title: "Хуки для конкретных компонентов",
				link: "before-modal-close",
				component: FragmentBeforeModalClose
			},
			{
				title: "Composition Api",
				link: "composition-api",
				component: FragmentOnBeforeModalClose
			}
		]
	},
	{
		title: "Details",
		link : "details",
		array: [
			{
				title: "ModalObject",
				link : "modal-object",
				component: FragmentModalObject
			},
			{
				title: "Styles",
				link : "styles"
			},
			{
				title: "Animation",
				link : "animation"
			}
		]
	},
	{
		title: "Best practices",
		link : "best-practices",
		array: [
			{
				title: "Wrapping",
				link : "wrapping"
			}
		]
	}
]

export function getConfigObject(link) {
	return config.find(item => item.link === link);
}