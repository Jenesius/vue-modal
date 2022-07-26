import {IEventClose} from "./event-close";

export type GuardFunction           = (e: IEventClose) => void | boolean | Promise<boolean>
export type GuardFunctionPromisify  = () => Promise<void>


export interface ModalComponentInterface{
    [name: string]: any
}

