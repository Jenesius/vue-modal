/**
 * last change: 25.11.2021
 * */
import Modal from "./Modal";
interface InstancesStorageInterface {
    [index: number]: Modal;
}
export declare const instanceStorage: InstancesStorageInterface;
export declare function saveInstance(id: number, instance: Modal): void;
export {};
