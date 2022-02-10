/**
 * last change: 25.11.2021
 *
 * STATE ПРЕДНАЗНАЧЕН ДЛЯ ВНУТРЕННЕГО ХРАНИЛИЩА ДАННЫХ
 * НЕПУТАТЬ С КОНФИГУРАЦИЕЙ, ЕЁ ЗАДАЁТ ПОЛЬЗОВАТЕЛЬ
 *
 * initialized - параметра принимает true, когда приложение было проинициализировано, то есть WidgetModalContainer
 * был добавлен на страницу
 *
 * */
import guards from "./guards";
import { ModalComponentInterface } from "./types";
declare const modalQueue: import("vue").Ref<{
    id: number;
    closed: any;
    eventCallbacks: {
        [x: string]: (data?: any) => any;
    };
    close: () => Promise<void>;
    onclose: import("./types").GuardFunctionWithHandle;
    readonly instance: {
        [x: string]: any;
    };
    on: (eventName: string, callback: (data?: any) => any) => void;
}[]>;
interface InstancesStorageInterface {
    [index: number]: ModalComponentInterface;
}
interface StateInterface {
    initialized: boolean;
    instanceStorage: InstancesStorageInterface;
}
declare const state: StateInterface;
export { modalQueue, guards, state };
