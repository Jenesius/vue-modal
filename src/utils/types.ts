import {IEventClose} from "./dto";
import {Component, ComputedRef, ExtractPropTypes, Ref, UnwrapRef} from "vue";

export type GuardFunction           = (e: IEventClose) => void | boolean | Promise<boolean>
export type GuardFunctionPromisify  = () => Promise<void>

export interface IModalCloseOptions {
    namespace?: string
}
export interface ModalComponentInterface{
    [name: string]: any
}


export type WrapComponent<T = {}> = Component &  {
    props?: T,
}
export type WrapComponentProps<P extends WrapComponent = WrapComponent> = P["props"] | UnwrapRef<P["props"]> | Ref<any> | ComputedRef<P["props"]> | ExtractPropTypes<P["props"]>

