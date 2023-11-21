import {VueWrapper} from "@vue/test-utils";

/**
 * @description The function is used to simulate a click on the background
 */
export default function triggerClickClose(wrapper: VueWrapper) {
	return wrapper.find(".modal-container").trigger("pointerdown");
}