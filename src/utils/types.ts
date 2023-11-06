import {IEventClose} from "./dto";
import {Component, ComputedRef, ExtractPropTypes, Ref, UnwrapRef} from "vue";
import {INamespaceKey} from "./NamespaceStore";

export type GuardFunction           = (e: IEventClose) => void | boolean | Promise<boolean>
export type GuardFunctionPromisify  = () => Promise<void>

export interface IModalCloseOptions {
    namespace?: INamespaceKey
}

export type WrapComponent<T = {}> = Component &  {
    props?: T,
}
export type WrapComponentProps<P extends WrapComponent = WrapComponent> = P["props"] | UnwrapRef<P["props"]> | Ref<any> | ComputedRef<P["props"]> | ExtractPropTypes<P["props"]>

