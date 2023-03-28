import {Component, ExtractPropTypes, UnwrapRef} from "vue";

export type WrapComponent<T = {}> = Component &  {
	props?: T,
}
export type WrapComponentProps<P = WrapComponent> = P["props"] | UnwrapRef<P["props"]>

