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
import FragmentInformation from "../../components/materials/Installation/FragmentInformation";
import FragmentGuardsInformation from "../../components/materials/hooks/FragmentGuardsInformation";
import FragmentGuardAsync from "../../components/materials/hooks/FragmentGuardAsync";
import FragmentIntegrationInstallation
	from "../../components/materials/integrationRouter/FragmentIntegrationInstallation";
import FragmentIntegrationInformation
	from "../../components/materials/integrationRouter/FragmentIntegrationInformation";
import FragmentParticularQualities from "../../components/materials/integrationRouter/FragmentParticularQualities";
import FragmentStyles from "../../components/materials/details/FragmentStyles";
import FragmentAnimation from "../../components/materials/details/FragmentAnimation";

export const config = [
	{
		title: useVocabulary("installation"),
		link : "installation",
		array: [
			{
				component: FragmentInformation
			},
			{
				title: "npm",
				link : "npm",
				component: FragmentNpm
			},
			{
				title: useVocabulary("gettingStarted"),
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
		title: useVocabulary.navigationGuards,
		link : "navigation-guards",
		array: [
			{
				title: useVocabulary.Information,
				link: "information",
				component: FragmentGuardsInformation
			},
			{
				title: "onclose",
				link : "on-close",
				component: FragmentOnClose
			},
			{
				title: useVocabulary.InComponentGuards,
				link: "before-modal-close",
				component: FragmentBeforeModalClose
			},
			{
				title: "Composition Api",
				link: "composition-api",
				component: FragmentOnBeforeModalClose
			},
			{
				title: useVocabulary.asyncGuards,
				link: "async",
				component: FragmentGuardAsync
			}
		]
	},
	{
		title: useVocabulary.details,
		link : "details",
		array: [
			{
				title: "ModalObject",
				link : "modal-object",
				component: FragmentModalObject
			},
			{
				title: useVocabulary.styles,
				link : "styles",
				component: FragmentStyles
			},
			{
				title: useVocabulary.animation,
				link : "animation",
				component: FragmentAnimation
			}
		]
	},
	{
		title: useVocabulary.integrationWithVueRouter,
		link : "integration-vue-router",
		array: [
			{
				component: FragmentIntegrationInformation
			},
			{
				title: useVocabulary.installation,
				link : "installation",
				component: FragmentIntegrationInstallation
			},
			{
				title: useVocabulary.particularQualities,
				link : "particular-qualities",
				component: FragmentParticularQualities
			}
		]
	},
	/*
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

	 */
]

export function getConfigObject(link) {
	return config.find(item => item.link === link);
}