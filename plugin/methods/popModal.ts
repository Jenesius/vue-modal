import getCurrentModal from "./getCurrentModal";

/**
 * @description Try to close the last opened modal window.
 * */
export default function popModal():Promise<void>{
    const modal = getCurrentModal();
    if (!modal) return Promise.resolve();
    return modal.close();
}