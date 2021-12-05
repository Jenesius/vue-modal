/**
 * last change: 05.12.2021
 * МЕТОД ДЛЯ СОХРАНЕНИЯ ЭКЗЕМПЛЯРА МОДАЛЬНОГО ОКНА.
 * ВЫЗЫВАЕТСЯ КАЖДЫЙ РАЗ В МОМЕНТ ИНИЦИАЛИЗАЦИИ.
 *
 * INSTANCE это не ModalObject. INSTANCE - СБИЛДЕННАЯ VUE КОМПОНЕНТА, КОТОРУЮ ПЕРЕДАЛ
 * ПОЛЬЗОВАТЕЛЬ
 * * */

import {state} from "./state";
import {ModalComponentInterface} from "./types";


export function saveInstance(id:number, instance: ModalComponentInterface) {
    state.instanceStorage[id] = instance;
}
export function getInstance(id : number){
    return state.instanceStorage[id];
}
