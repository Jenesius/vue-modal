import {IEventClose} from "./dto";
import {Component, ComputedRef, ExtractPropTypes, Ref, UnwrapRef} from "vue";
import {INamespaceKey} from "./NamespaceStore";
import {ConfigInterface} from "./state";

export type GuardFunction           = (e: IEventClose) => void | boolean | Promise<boolean>
export type GuardFunctionPromisify  = () => Promise<void>

export interface IModalCloseOptions {
    namespace?: INamespaceKey
}

export type WrapComponent<T = {}> = Component &  {
    props?: T,
}
export type WrapComponentProps<P extends WrapComponent = WrapComponent> = P["props"] | UnwrapRef<P["props"]> | Ref<any> | ComputedRef<P["props"]> | ExtractPropTypes<P["props"]>

export type IStoreElement = IStoreComponentConfiguration | Component

export interface IStoreComponentConfiguration extends Partial<Pick<ConfigInterface, 'beforeEach' | 'backgroundClose'  |  'draggable'>>{
    component: Component,
}

/**
 * @description Callback, which will be called before each attempt to open the modal window.
 */
export type IBeforeEachCallback = () => any;