/**
 * last change: 05.12.2021
 * МЕТОД ДЛЯ СОХРАНЕНИЯ ЭКЗЕМПЛЯРА МОДАЛЬНОГО ОКНА.
 * ВЫЗЫВАЕТСЯ КАЖДЫЙ РАЗ В МОМЕНТ ИНИЦИАЛИЗАЦИИ.
 *
 * INSTANCE это не ModalObject. INSTANCE - СБИЛДЕННАЯ VUE КОМПОНЕНТА, КОТОРУЮ ПЕРЕДАЛ
 * ПОЛЬЗОВАТЕЛЬ
 * * */
import { ModalComponentInterface } from "./types";
export declare function saveInstance(id: number, instance: ModalComponentInterface): void;
export declare function getInstance(id: number): ModalComponentInterface;
