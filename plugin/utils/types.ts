export type GuardFunctionWithHandle = () => void | boolean | Promise<boolean>
export type GuardFunction = () => void | boolean | Promise<boolean>
export type GuardFunctionPromisify = () => Promise<void>
