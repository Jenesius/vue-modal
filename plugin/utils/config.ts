/**
 * last change: 18.02.2022
 * */
import ModalError from "./ModalError";

export const configuration = {
    scrollLock: true,           // Disable scrolling in time when modal is open.
    animation: "modal-list",    // Animation name for transition-group.
    backgroundClose: true,      // Closing on click back area of modal.
    escClose: true,             // Closing on press ESC key
}


export interface ConfigInterface{
    scrollLock?: boolean,
    animation? : string,
    backgroundClose? : boolean,
    escClose?   : boolean
}

/**
 * @description Method for changing default configuration.
 * @param {object} options - The Configuration Options of Modal System.
 * @param {boolean} options.scrollLock - if true: Disable scrolling in time when modal is open.
 * @param {string} options.animation - Animation name for transition-group.
 * @param {boolean} options.backgroundClose - Closing on click back area of modal.
 * @param {boolean} options.escClose - Closing on press ESC key
 * */
export function config (options: ConfigInterface){
    if (typeof options !== "object") throw ModalError.ConfigurationType(options);

    Object.assign(configuration, options)
}
