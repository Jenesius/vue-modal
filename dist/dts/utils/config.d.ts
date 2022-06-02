export declare const configuration: {
    scrollLock: boolean;
    animation: string;
    backgroundClose: boolean;
    escClose: boolean;
};
export interface ConfigInterface {
    scrollLock?: boolean;
    animation?: string;
    backgroundClose?: boolean;
    escClose?: boolean;
}
/**
 * @description Method for changing default configuration.
 * @param {object} options - The Configuration Options of Modal System.
 * @param {boolean} options.scrollLock - if true: Disable scrolling in time when modal is open.
 * @param {string} options.animation - Animation name for transition-group.
 * @param {boolean} options.backgroundClose - Closing on click back area of modal.
 * @param {boolean} options.escClose - Closing on press ESC key
 * */
export declare function config(options: ConfigInterface): void;
