/**
 * last change: 18.02.2022
 * */
import ModalError from "./ModalError";
import {configuration} from "./state";
import {ConfigInterface} from "./state";

/**
 * @description Method for changing default configuration.
 * @param {object} options - The Configuration Options of Modal System.
 * @param {boolean} options.scrollLock - if true: Disable scrolling in time when modal is open.
 * @param {string} options.animation - Animation name for transition-group.
 * @param {boolean} options.backgroundClose - Closing on click back area of modal.
 * @param {boolean} options.escClose - Closing on press ESC key
 * */
export function config (options: Partial<ConfigInterface>){
    if (typeof options !== "object") throw ModalError.ConfigurationType(options);

    Object.assign(configuration, options)
}