/**
 * last change: 25.11.2021
 * */
interface GuardsInterface {
    store: {
        [index: number]: {
            [index: string]: Array<Function>;
        };
    };
    add(id: number, name: string, func: Function): void;
    get(id: number, name: string): Array<Function>;
    delete(id: number): void;
}
declare const guards: GuardsInterface;
export default guards;
export declare function runGuardQueue(guards: Array<Function>): Promise<void>;
export declare function guardToPromiseFn(guard: Function, id: number): () => Promise<void>;
