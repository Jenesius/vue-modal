/**
 * last change: 25.11.2021
 * */
export declare const configuration: {
    scrollLock: boolean;
    animation: string;
};
export interface ConfigInterface {
    scrollLock: boolean;
    animation: string;
}
/**
 * @description Method for changing default configuration.
 * */
export declare function config(data: ConfigInterface): void;
