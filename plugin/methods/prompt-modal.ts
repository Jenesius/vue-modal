import pushModal from "./pushModal";
import Modal from "../utils/Modal";
import {WrapComponent, WrapComponentProps} from "../types/types";

/**
 * @description Method push modalComponent with provided options and then wait until current component will trigger event
 * Modal.EVENT_PROMPT. After triggering will close the modal window and return provided data to event.
 */

export default async function promptModal<T, P extends WrapComponent>(component: P, props: WrapComponentProps<P> = {}): Promise<T> {
    const modal = await pushModal(component, props);

    return new Promise(resolve => {
        modal.on(Modal.EVENT_PROMPT, async data => {
            await modal.close();
            resolve(data);
        });
    })
}