import {
    Component,
    computed,
    ComputedRef, reactive,
    ref,
    Ref,
} from "vue";
import guards from "./guards";
import {GuardFunction} from "./types";
import closeById from "../methods/closeById";
import {DTOModalOptions} from "./dto";
import {getNamespace} from "./state";
import {INamespaceKey} from "./NamespaceStore";

export interface ModalOptions {
    backgroundClose: boolean,
    isRoute: boolean,
    namespace: Modal['namespace']
}
export type ModalID = number;


export default class Modal{
    static readonly STORE= new Map<ModalID, Modal>()
    protected static modalId = 0;

    /**
     * @description Unique id of each modal window.
     * */
    public id:ModalID;
    events = reactive<Record<string, EventCallback[]>>({})
    /**
     * @description Computed value. True - when the modal was closed.
     * */
    public closed: ComputedRef;
    /**
     * @description Ссылка на VueComponent. Используется для получения состояния модального окна. Доступ к data, props,
     * methods and other.
     * */
    public instance?: any
    /**
     * @description The text name of namespace which owns the modal windows.
     * */
    public readonly namespace: INamespaceKey

    /**
     * @description VueComponent that will be mounted like modal.
     * */
    public component: Component

    /**
     * @description Props for VueComponent.
     * */
    public props: Ref;

    /**
     * @description Click on the background will close modal windows.
     * */
    public backgroundClose:boolean = true;

    /**
     * @description If modal was opened like Route instance (useModalRouter) the value is true, otherwise false.
     */
    public readonly isRoute: boolean = false;

    /**
     * @description Event using for promptModal.
     */
     public static readonly EVENT_PROMPT = 'jenesius-vue-modal:____P____R____O____M____P____T'
    /**
     * Создаёт объект управления модальным окном.
     * Для управления идентификатором используется статическое поле modalId.
     * ЕСЛИ В КОМПОНЕНТЕ ЕСТЬ beforeModalClose параметр, то добавляем его в guards
     *
     * @param {Object} component Any VueComponent that will be used like modal window
     * @param {Object} props Object of input params. Used like props.
     * @param {Object} options
     * */
    constructor(component: Component | any, props: any, options: Partial<ModalOptions>) {
        this.id         = Modal.modalId++;
        this.component  = component;

        this.props     = ref(props);

        /**
         * БЛЯТЬ, ПОЧЕМУ ОНО ТАК?
         * ОТВЕТ: ЭТОТ ЕБУЧИЙ ВЬЮ, ПРИ ДОБАВЛЕНИИ В modalQueue
         * РАСКРЫВАЕТ COMPUTED(THIS.CLOSED) И КЛАДЁТ ТУДА ТУПО ЗНАЧЕНИЕ, А НЕ
         * COMPUTED PROP {VALUE: BOOLEAN}
         * ЧТО ЛОГИЧНО, НО ПО УЕБАНСКИ
         * ----
         * Более деликатное объяснение:
         * Раньше в modalQueue клали просто объект Modal.
         * modalQueue.value.push(Modal)
         * Т.к. modalQueue является реактивным объектом, оно автоматически делает
         * реактивным и все свойства объекта, который кладётся в него. И у нас
         * closed.value пропадало, оставалось лишь closed. Т.к. modalQueue и так
         * полностью реактивно.
         * Сейчас в modalQueue кладётся markRaw(помечаем, что не надо делать об
         * ект реактивным). И close.value - остаётся
         *
         * 10.02.2022 @ЖЕНЯ, КОТОРЫЙ ЕЩЁ ПЛОХО ЗНАЕТ TS.
         * */
        this.closed = computed(() => !getNamespace(options.namespace).queue.value.includes(this));

        /*
        this.closed = computed(
            () => !modalQueue.value.find(item => item.id === this.id)
        );
        */
        if (component.beforeModalClose)
            guards.add(this.id, "close", component.beforeModalClose);
        
        const dtoOptions = DTOModalOptions(options);
        this.backgroundClose = dtoOptions.backgroundClose;
        this.isRoute = dtoOptions.isRoute;
        this.namespace = dtoOptions.namespace;

        Modal.STORE.set(this.id, this);
    }

    /**
     * @description Method for closing the modal window
     * */
    public close() :Promise<void> {
        return closeById(this.id);
    }

    /**
     * @description Hook for handling modal closing
     * */
    public set onclose(func: GuardFunction) {
        guards.add(this.id, "close", func);
    }


    /**
     * @description Method for handle default events from VueComponent.
     * */
    public on(eventName: string, callback: EventCallback) {
        if (!Array.isArray(this.events[eventName])) this.events[eventName] = [];

        this.events[eventName].push(callback);

        return () => {
            const index = this.events[eventName].indexOf(callback);
            if (index === -1) return; // Callback not founded
            this.events[eventName].splice(index, 1);
        }
    }

}

export function getModalById(id: ModalID) {
    return Modal.STORE.get(id);
}

export type EventCallback = (v: any) => any