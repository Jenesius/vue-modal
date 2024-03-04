import {en} from "./en";
import {shared} from "./shared";
import {ru} from "./ru";

export default {
	...shared,
	locales: {
		root: { label: "English", ...en },
		ru: { label: "Русский", ...ru },

	},
}