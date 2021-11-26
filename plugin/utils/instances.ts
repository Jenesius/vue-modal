/**
 * last change: 25.11.2021
 * */

import Modal from "./Modal";

interface InstancesStorageInterface{
    [index: number]: Modal
}

export const instanceStorage:InstancesStorageInterface = {};
export function saveInstance(id:number, instance: Modal) {
    instanceStorage[id] = instance;
}