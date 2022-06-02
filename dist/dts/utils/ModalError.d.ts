/**
 * last change: 25.11.2021
 * */
export default class ModalError extends Error {
    readonly isModalError: boolean;
    details: any;
    constructor(message: string, details?: any);
    static Undefined(id: number): ModalError;
    static UndefinedGuardName(name: string): ModalError;
    static NextReject(id: number): ModalError;
    static GuardDeclarationType(func: Function): ModalError;
    static ConfigurationType(config: object): ModalError;
    static ConfigurationUndefinedParam(param: string, availableParams: Array<string>): ModalError;
    static QueueNoEmpty(): ModalError;
    static EmptyModalQueue(): ModalError;
    static NotInitialized(): ModalError;
    static ModalComponentNotProvided(): ModalError;
    static DuplicatedRouterIntegration(): ModalError;
    static ModalRouterIntegrationNotInitialized(): ModalError;
    static ModalEventNameMustBeString(eventName: string): ModalError;
}
