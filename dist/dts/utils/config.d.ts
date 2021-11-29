/**
 * last change: 25.11.2021
 * */
export declare const configuration: ConfigInterface;
export interface ConfigInterface {
    scrollLock?: boolean;
    animation?: string;
    backgroundClose?: boolean;
    escClose?: boolean;
}
/**
 * @description Method for changing default configuration.
 * */
export declare function config(data: ConfigInterface): void;
