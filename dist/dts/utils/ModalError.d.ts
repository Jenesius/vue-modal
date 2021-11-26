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
    static EmptyModalQueue(): ModalError;
}
