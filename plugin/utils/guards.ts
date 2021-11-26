/**
 * last change: 25.11.2021
 * */

import ModalError from "./ModalError";
import {instanceStorage} from "./instances";
import {GuardFunction, GuardFunctionPromisify} from "./types";

interface GuardsInterface{
    store: {
        [index: number]: {
            [index: string]: Array<GuardFunction>
        }
    },
    add(id: number, name: string, func: GuardFunction):void,
    get(id: number, name: string): Array<GuardFunction>,
    delete(id: number):void
}

const guards:GuardsInterface = {

    store: {},

    add(id, name, func){
        const availableNames = ["close"];

        if (!availableNames.includes(name)) throw ModalError.UndefinedGuardName(name);

        if (!this.store[id]) this.store[id] = {};

        if (!this.store[id][name]) this.store[id][name] = [];

        if (typeof func !== "function") throw ModalError.GuardDeclarationType(func);

        this.store[id][name].push(func);
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


export function runGuardQueue(guards:Array<GuardFunctionPromisify>): Promise<void> {
    return guards.reduce((promiseAccumulator, guard) => promiseAccumulator.then(() => guard()), Promise.resolve());
}
/*
* FUNCTION ONLY FOR ONE GUARD.
* Возвращет промис для любой функции хука
* */
export function guardToPromiseFn(guard:GuardFunction, id:number): GuardFunctionPromisify{
    return () => new Promise((resolve, reject) => {

        const next = (valid:boolean | void = true):void => {

            if (valid === false) reject(ModalError.NextReject(id));

            resolve();
        };

        //First params is function-warning: next now is not available


        Promise.resolve(guard.call(instanceStorage[id]))
            .then(next)
            .catch(err => reject(err));
    });
}
