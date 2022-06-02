/**
 * last change: 25.11.2021
 * */
import { GuardFunction, GuardFunctionPromisify } from "./types";
declare type AvailableKeys = 'close';
interface GuardsInterface {
    store: {
        [index: number]: {
            [key in AvailableKeys]: Array<GuardFunction>;
        };
    };
    add(id: number, name: AvailableKeys, func: GuardFunction): void;
    get(id: number, name: AvailableKeys): Array<GuardFunction>;
    delete(id: number): void;
}
declare const guards: GuardsInterface;
export default guards;
/**
 * Accumulator for guard queue
 * */
export declare function runGuardQueue(guards: Array<GuardFunctionPromisify>): Promise<void>;
/**
 * @description Function just only for one guard.
 * @return {Promise} promisify guard.
 *
 * If guard return void or true value - resolve.
 * Otherwise reject(err)
 * */
export declare function guardToPromiseFn(guard: GuardFunction, id: number): GuardFunctionPromisify;
