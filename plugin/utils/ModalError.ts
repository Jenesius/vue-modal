/**
 * last change: 25.11.2021
 * */

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

    static NotInitialized(){
        return new ModalError("Modal Container not found. Put container from jenesius-vue-modal in App's template. Check documentation for more information https://modal.jenesius.com/docs.html/installation#getting-started.");
    }

    static ModalComponentNotProvided(){
        return new ModalError("The first parameter(VueComponent) was not specified.");
    }

}