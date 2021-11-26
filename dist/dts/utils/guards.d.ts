/**
 * last change: 25.11.2021
 * */
import { GuardFunction, GuardFunctionPromisify } from "./types";
interface GuardsInterface {
    store: {
        [index: number]: {
            [index: string]: Array<GuardFunction>;
        };
    };
    add(id: number, name: string, func: GuardFunction): void;
    get(id: number, name: string): Array<GuardFunction>;
    delete(id: number): void;
}
declare const guards: GuardsInterface;
export default guards;
export declare function runGuardQueue(guards: Array<GuardFunctionPromisify>): Promise<void>;
export declare function guardToPromiseFn(guard: GuardFunction, id: number): GuardFunctionPromisify;
