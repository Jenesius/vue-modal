/**
 * last change: 25.11.2021
 * */

import ModalError from "./ModalError";

export const configuration:ConfigInterface = {
    scrollLock: true, // True - When modal was opened the page cannot be scrolled
    animation: "modal-list", // Animation name for transition-group
    backgroundClose: true, //Closing on click back block
    escClose: true, //Closing on click ESC key
}

export interface ConfigInterface{
    scrollLock?: boolean,
    animation? : string,
    backgroundClose? : boolean,
    escClose?   : boolean
}

/**
 * @description Method for changing default configuration.
 * */
export function config(data:ConfigInterface){
    if (typeof data !== "object") throw ModalError.ConfigurationType(data);

    const availableKeys:Array<string> = Object.keys(configuration);

    for(const key in data) {

        if (!availableKeys.includes(key)) throw ModalError.ConfigurationUndefinedParam(key, availableKeys);
        // @ts-ignore
        configuration[key] = data[key];
    }
}