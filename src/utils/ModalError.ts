/**
 * last change: 25.11.2021
 * */
import {ModalID} from "./Modal";
import {INamespaceKey} from "./NamespaceStore";

export default class ModalError extends Error{
    readonly isModalError:boolean = true;
    details:any

    constructor(message: string, details: any = null) {
        super();

        this.message = message;
        this.details = details;
    }

    static Undefined(id:number) {
        return new ModalError(`Modal with id: ${id} not founded. The modal window may have been closed earlier.`);
    }
    static UndefinedGuardName(name:string) {
        return new ModalError(`Guard's name ${name} is not declaration.`);
    }

    static NextReject(id:number){
        return new ModalError(`Guard returned false. Modal navigation was stopped. Modal id ${id}`);
    }

    static GuardDeclarationType(func:Function){
        return new ModalError("Guard's type should be a function. Provided:", func);
    }
    static RejectedByBeforeEach() {
        return new ModalError("The opening of the modal was stopped in beforeEach");
    }
    static ConfigurationType(config:object) {
        return new ModalError("Configuration type must be an Object. Provided", config)
    }
    static ConfigurationUndefinedParam(param:string, availableParams:Array<string>) {
        return new ModalError(`In configuration founded unknown parameter: ${param}. Available are ${availableParams.join(", ")} `)
    }

    static QueueNoEmpty(){
        return new ModalError("Modal's queue is not empty. Probably some modal reject closing by onClose hook.")
    }
    static EmptyModalQueue(){
        return new ModalError("Modal queue is empty.");
    }

    static NotInitialized(namespace: INamespaceKey){
        return new ModalError(`Modal Container not found. Put container from jenesius-vue-modal in App's template. Namespace: ${namespace}. Check documentation for more information https://modal.jenesius.com/docs.html/installation#getting-started.`);
    }

    static ModalComponentNotProvided(){
        return new ModalError("The first parameter(VueComponent) was not specified.");
    }

    static DuplicatedRouterIntegration(){
        return new ModalError('useModalRouter.init should escaped only once.')
    }

    static ModalRouterIntegrationNotInitialized(){
        return new ModalError("The integration was not initialized. Please, use useModalRouter.init(router). For more information: https://modal.jenesius.com/docs.html/integration-vue-router#installation")
    }

    static ModalEventNameMustBeString(eventName: string) {
        return new ModalError(
            `Event name must be a string. Provided: ${eventName}`
        )
    }
    static ModalNotFoundByID(id: ModalID) {
        return new ModalError(`Modal with ID ${id} was not found.`)
    }
    static ModalNotExistsInStore(modalName: string) {
        return new ModalError(
            `Provided name(${modalName}) don't exist in the store. Has the given name been added to the store?`
        )
    }
}
