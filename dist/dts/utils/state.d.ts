/**
 * last change: 25.11.2021
 * */
import guards from "./guards";
declare const modalQueue: import("vue").Ref<{
    id: number;
    component: any;
    params: any;
    closed: any;
    close: () => Promise<void>;
    onclose: import("./types").GuardFunctionWithHandle;
}[]>;
declare const state: {
    initialized: boolean;
};
export { modalQueue, guards, state };
