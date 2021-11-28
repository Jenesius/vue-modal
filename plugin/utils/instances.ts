/**
 * last change: 29.11.2021
 * МЕТОД ДЛЯ СОХРАНЕНИЯ ЭКЗЕМПЛЯРА МОДАЛЬНОГО ОКНА.
 * ВЫЗЫВАЕТСЯ КАЖДЫЙ РАЗ В МОМЕНТ ИНИЦИАЛИЗАЦИИ.
 *
 * * */

import Modal from "./Modal";
import {state} from "./state";

export function saveInstance(id:number, instance: Modal) {
    state.instanceStorage[id] = instance;
}