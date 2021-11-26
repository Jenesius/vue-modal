/**
 * last change: 25.11.2021
 * */

import ModalError from "./ModalError";
import {instanceStorage} from "./instances";

interface GuardsInterface{
    store: {
        [index: number]: {
            [index: string]: Array<Function>
        }
    },
    add(id: number, name: string, func: Function):void,
    get(id: number, name: string): Array<Function>,
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

    get(id:number, name:string) {

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


export function runGuardQueue(guards:Array<Function>) {
    return guards.reduce((promise, guard) => promise.then(() => guard()), Promise.resolve());
}
/*
* FUNCTION ONLY FOR ONE GUARD.
* */
export function guardToPromiseFn(guard:Function, id:number){
    return () => new Promise<void>((resolve, reject) => {

        const next = (valid:boolean | Error) => {

            if (valid === false) return reject(ModalError.NextReject(id));
            if (valid instanceof Error) reject(valid);

            resolve();
        };

        //First params is function-warning: next now is not available


        Promise.resolve(guard.call(instanceStorage[id]))
            .then(next)
            .catch(err => reject(err));
    });
}
