/**
 * last change: 25.11.2021
 *
 * STATE ПРЕДНАЗНАЧЕН ДЛЯ ВНУТРЕННЕГО ХРАНИЛИЩА ДАННЫХ
 * НЕПУТАТЬ С КОНФИГУРАЦИЕЙ, ЕЁ ЗАДАЁТ ПОЛЬЗОВАТЕЛЬ
 *
 * initialized - параметра принимает true, когда приложение было проинициализировано, то есть WidgetModalContainer
 * был добавлен на страницу
 *
 * */
import guards from "./guards";
import { ModalComponentInterface } from "./types";
declare const modalQueue: import("vue").Ref<{
    id: number;
    closed: any;
    component: import("vue").FunctionalComponent<any, any> | {
        new (...args: any[]): any;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } | {
        [x: string]: any;
        setup?: ((this: void, props: Readonly<import("@vue/shared").LooseRequired<any>>, ctx: import("vue").SetupContext<any>) => any) | undefined;
        name?: string | undefined;
        template?: string | object | undefined;
        render?: Function | undefined;
        components?: {
            [x: string]: import("vue").FunctionalComponent<any, any> | {
                new (...args: any[]): any;
                __isFragment?: undefined;
                __isTeleport?: undefined;
                __isSuspense?: undefined;
            } | any;
        } | undefined;
        directives?: {
            [x: string]: import("vue").DirectiveHook<any, any, any> | {
                created?: import("vue").DirectiveHook<any, null, any> | undefined;
                beforeMount?: import("vue").DirectiveHook<any, null, any> | undefined;
                mounted?: import("vue").DirectiveHook<any, null, any> | undefined;
                beforeUpdate?: import("vue").DirectiveHook<any, import("vue").VNode<any, any, {
                    [key: string]: any;
                }>, any> | undefined;
                updated?: import("vue").DirectiveHook<any, import("vue").VNode<any, any, {
                    [key: string]: any;
                }>, any> | undefined;
                beforeUnmount?: import("vue").DirectiveHook<any, null, any> | undefined;
                unmounted?: import("vue").DirectiveHook<any, null, any> | undefined;
                getSSRProps?: ((binding: import("vue").DirectiveBinding<any>, vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>) => Record<string, unknown> | undefined) | undefined;
                deep?: boolean | undefined;
            };
        } | undefined;
        inheritAttrs?: boolean | undefined;
        emits?: any;
        expose?: string[] | undefined;
        serverPrefetch?: (() => Promise<any>) | undefined;
        compilerOptions?: {
            isCustomElement?: ((tag: string) => boolean) | undefined;
            whitespace?: "preserve" | "condense" | undefined;
            comments?: boolean | undefined;
            delimiters?: [string, string] | undefined;
        } | undefined;
        call?: ((this: unknown, ...args: unknown[]) => never) | undefined;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
        __defaults?: {} | undefined;
        compatConfig?: {
            GLOBAL_MOUNT?: boolean | "suppress-warning" | undefined;
            GLOBAL_MOUNT_CONTAINER?: boolean | "suppress-warning" | undefined;
            GLOBAL_EXTEND?: boolean | "suppress-warning" | undefined;
            GLOBAL_PROTOTYPE?: boolean | "suppress-warning" | undefined;
            GLOBAL_SET?: boolean | "suppress-warning" | undefined;
            GLOBAL_DELETE?: boolean | "suppress-warning" | undefined;
            GLOBAL_OBSERVABLE?: boolean | "suppress-warning" | undefined;
            GLOBAL_PRIVATE_UTIL?: boolean | "suppress-warning" | undefined;
            CONFIG_SILENT?: boolean | "suppress-warning" | undefined;
            CONFIG_DEVTOOLS?: boolean | "suppress-warning" | undefined;
            CONFIG_KEY_CODES?: boolean | "suppress-warning" | undefined;
            CONFIG_PRODUCTION_TIP?: boolean | "suppress-warning" | undefined;
            CONFIG_IGNORED_ELEMENTS?: boolean | "suppress-warning" | undefined;
            CONFIG_WHITESPACE?: boolean | "suppress-warning" | undefined;
            CONFIG_OPTION_MERGE_STRATS?: boolean | "suppress-warning" | undefined;
            INSTANCE_SET?: boolean | "suppress-warning" | undefined;
            INSTANCE_DELETE?: boolean | "suppress-warning" | undefined;
            INSTANCE_DESTROY?: boolean | "suppress-warning" | undefined;
            INSTANCE_EVENT_EMITTER?: boolean | "suppress-warning" | undefined;
            INSTANCE_EVENT_HOOKS?: boolean | "suppress-warning" | undefined;
            INSTANCE_CHILDREN?: boolean | "suppress-warning" | undefined;
            INSTANCE_LISTENERS?: boolean | "suppress-warning" | undefined;
            INSTANCE_SCOPED_SLOTS?: boolean | "suppress-warning" | undefined;
            INSTANCE_ATTRS_CLASS_STYLE?: boolean | "suppress-warning" | undefined;
            OPTIONS_DATA_FN?: boolean | "suppress-warning" | undefined;
            OPTIONS_DATA_MERGE?: boolean | "suppress-warning" | undefined;
            OPTIONS_BEFORE_DESTROY?: boolean | "suppress-warning" | undefined;
            OPTIONS_DESTROYED?: boolean | "suppress-warning" | undefined;
            WATCH_ARRAY?: boolean | "suppress-warning" | undefined;
            PROPS_DEFAULT_THIS?: boolean | "suppress-warning" | undefined;
            V_ON_KEYCODE_MODIFIER?: boolean | "suppress-warning" | undefined;
            CUSTOM_DIR?: boolean | "suppress-warning" | undefined;
            ATTR_FALSE_VALUE?: boolean | "suppress-warning" | undefined;
            ATTR_ENUMERATED_COERCION?: boolean | "suppress-warning" | undefined;
            TRANSITION_CLASSES?: boolean | "suppress-warning" | undefined;
            TRANSITION_GROUP_ROOT?: boolean | "suppress-warning" | undefined;
            COMPONENT_ASYNC?: boolean | "suppress-warning" | undefined;
            COMPONENT_FUNCTIONAL?: boolean | "suppress-warning" | undefined;
            COMPONENT_V_MODEL?: boolean | "suppress-warning" | undefined;
            RENDER_FUNCTION?: boolean | "suppress-warning" | undefined;
            FILTERS?: boolean | "suppress-warning" | undefined;
            PRIVATE_APIS?: boolean | "suppress-warning" | undefined;
            MODE?: 2 | 3 | ((comp: import("vue").ComponentOptions<any, any, any, Record<string, import("vue").ComputedGetter<any> | import("vue").WritableComputedOptions<any>>, import("vue").MethodOptions, any, any, any> | import("vue").FunctionalComponent<any, any> | {
                new (...args: any[]): any;
                __isFragment?: undefined;
                __isTeleport?: undefined;
                __isSuspense?: undefined;
            } | null) => 2 | 3) | undefined;
        } | undefined;
        data?: ((this: any, vm: any) => any) | undefined;
        computed?: {
            [x: string]: import("vue").ComputedGetter<any> | {
                get: import("vue").ComputedGetter<any>;
                set: import("vue").ComputedSetter<any>;
            };
        } | undefined;
        methods?: {
            [x: string]: Function;
        } | undefined;
        watch?: {
            [x: string]: string | import("vue").WatchCallback<any, any> | {
                handler: string | import("vue").WatchCallback<any, any>;
                immediate?: boolean | undefined;
                deep?: boolean | undefined;
                flush?: "pre" | "post" | "sync" | undefined;
                onTrack?: ((event: import("vue").DebuggerEvent) => void) | undefined;
                onTrigger?: ((event: import("vue").DebuggerEvent) => void) | undefined;
            } | (string | import("vue").WatchCallback<any, any> | {
                handler: string | import("vue").WatchCallback<any, any>;
                immediate?: boolean | undefined;
                deep?: boolean | undefined;
                flush?: "pre" | "post" | "sync" | undefined;
                onTrack?: ((event: import("vue").DebuggerEvent) => void) | undefined;
                onTrigger?: ((event: import("vue").DebuggerEvent) => void) | undefined;
            })[];
        } | undefined;
        provide?: Function | {
            [x: string]: unknown;
        } | undefined;
        inject?: string[] | {
            [x: string]: string | symbol | {
                from?: string | symbol | undefined;
                default?: unknown;
            };
        } | undefined;
        filters?: {
            [x: string]: Function;
        } | undefined;
        mixins?: any[] | undefined;
        extends?: any;
        beforeCreate?: (() => void) | undefined;
        created?: (() => void) | undefined;
        beforeMount?: (() => void) | undefined;
        mounted?: (() => void) | undefined;
        beforeUpdate?: (() => void) | undefined;
        updated?: (() => void) | undefined;
        activated?: (() => void) | undefined;
        deactivated?: (() => void) | undefined;
        beforeDestroy?: (() => void) | undefined;
        beforeUnmount?: (() => void) | undefined;
        destroyed?: (() => void) | undefined;
        unmounted?: (() => void) | undefined;
        renderTracked?: ((e: import("vue").DebuggerEvent) => void) | undefined;
        renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | undefined;
        errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | undefined;
        delimiters?: [string, string] | undefined;
        __differentiator?: string | number | symbol | undefined;
        __isBuiltIn?: boolean | undefined;
        __file?: string | undefined;
        beforeRouteEnter?: import("vue-router").NavigationGuardWithThis<undefined> | undefined;
        beforeRouteUpdate?: import("vue-router").NavigationGuard | undefined;
        beforeRouteLeave?: import("vue-router").NavigationGuard | undefined;
    };
    props: any;
    eventCallbacks: {
        [x: string]: (data?: any) => any;
    };
    backgroundClose: boolean;
    close: () => Promise<void>;
    onclose: import("./types").GuardFunctionWithHandle;
    readonly instance: {
        [x: string]: any;
    };
    on: (eventName: string, callback: (data?: any) => any) => void;
}[]>;
interface InstancesStorageInterface {
    [index: number]: ModalComponentInterface;
}
interface StateInterface {
    initialized: boolean;
    instanceStorage: InstancesStorageInterface;
}
declare const state: StateInterface;
export { modalQueue, guards, state };
