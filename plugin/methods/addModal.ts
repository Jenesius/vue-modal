import {modalQueue} from "../utils/state";
import Modal from "../utils/Modal";
import {state} from "../utils/state";
import ModalError from "../utils/ModalError";
import {markRaw} from "vue";
/**
 * СИНХРОННАЯ ФУНКЦИЯ ДЛЯ ДОБАВЛЕНИЯ КОМПОНЕНТЫ
 * ПРОВЕРКА ИДЁТ ТОЛЬКО НА ВХОДНЫЕ ПАРАМЕТРЫ:
 * - ИНИЦИАЛИЗАЦИЯ ПРИЛОЖЕНИЯ(СОЗДАНИЕ КОНТЕЙНЕРА В КОТОРОМ МОДАЛЬНЫЕ ОКНА ПОКАЗЫВАЮТСЯ)
 * - ПЕРЕДАЧА КОМПОНЕНТЫ В КАЧЕСТВЕ ПАРАМЕТРА
 * */
export default function _addModal(component: any, params: any):Modal{

	if (!state.initialized) throw ModalError.NotInitialized();

	if (!component) throw ModalError.ModalComponentNotProvided();


	const modal = new Modal(component, params);

	/**
	 * modalQueue.value.push(Object.freeze(modal)) - фундаментальная ошибка!
	 * Таким способо мы запрещаем изменение любых свойст объекта - что является
	 * недопустим исключением, ведь объект может хранить, например, свойство
	 * `version`, которое по итогу будет не изменяемым.
	 *
	 * computed свойство 'closed' так-же потеряет реактивность в таком случае
	 * */
	//modalQueue.value.push(modal);
	modalQueue.value.push(markRaw(modal));

	return modal;
}
