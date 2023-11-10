/**
 * last change: 25.11.2021
 * */

import ModalError from "./ModalError";
import {GuardFunction, GuardFunctionPromisify} from "./types";
import {getModalById, ModalID} from "./Modal";

type AvailableKeys = 'close'
interface GuardsInterface{
    store: {
        [index: number]: {
            [key in AvailableKeys]: Array<GuardFunction>
        }
    },
    add(id: number, name: AvailableKeys, func: GuardFunction):void,
    get(id: number, name: AvailableKeys): Array<GuardFunction>,
    delete(id: number):void
}

const guards:GuardsInterface = {

    store: {},

    add(modalId, name, func){

        if (typeof func !== "function") throw ModalError.GuardDeclarationType(func);

        if (!this.store[modalId]) this.store[modalId] = {
            [name]: []
        };

        if (!this.store[modalId][name]) this.store[modalId][name] = [];

        this.store[modalId][name].push(func);
    },

    get(id, name) {

        if (!(id in this.store)) return [];
        if (!(name in this.store[id])) return [];

        return this.store[id][name];
    },

    delete(id:number){
        if (!(id in this.store)) return;

        delete this.store[id];
    }
}

export default guards

/**
 * Accumulator for guard queue
 * */
export function runGuardQueue(guards:Array<GuardFunctionPromisify>): Promise<void> {
    return guards.reduce(
        (promiseAccumulator, guard) =>
            promiseAccumulator.then(
                () => guard()
            ), Promise.resolve());
}

/**
 * @description Function just only for one guard.
 * @return {Promise} promisify guard.
 *
 * If guard return void or true value - resolve.
 * Otherwise reject(err)
 * */
export function guardToPromiseFn(guard:GuardFunction, id: ModalID, props?: any): GuardFunctionPromisify{
    return () => new Promise((resolve, reject) => {
        /**
         * Next - hook for returned value from guard.
         * */
        const next = (valid:boolean | void = true):void => {
            if (valid === false) reject(ModalError.NextReject(id));
            resolve();
        };

        Promise.resolve(guard.call(getModalById(id)?.instance, props))
        .then(next)
        .catch(err => reject(err));
    });
}
