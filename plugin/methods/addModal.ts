import {modalQueue} from "../utils/state";
import Modal from "../utils/Modal";
import {state} from "../utils/state";
import ModalError from "../utils/ModalError";

/**
 * СИНХРОННАЯ ФУНКЦИЯ ДЛЯ ДОБАВЛЕНИЯ КОМПОНЕНТЫ
 * ПРОВЕРКА ИДЁТ ТОЛЬКО НА ВХОДНЫЕ ПАРАМЕТРЫ:
 * - ИНИЦИАЛИЗАЦИЯ ПРИЛОЖЕНИЯ(СОЗДАНИЕ КОНТЕЙНЕРА В КОТОРОМ МОДАЛЬНЫЕ ОКНА ПОКАЗЫВАЮТСЯ)
 * - ПЕРЕДАЧА КОМПОНЕНТЫ В КАЧЕСТВЕ ПАРАМЕТРА
 * */
export default function _addModal(component: any, params: any = {}):Modal{

	if (!state.initialized) throw ModalError.NotInitialized();
	if (!component) 		throw ModalError.ModalComponentNotProvided();

	const modal = new Modal(component, params);
	modalQueue.value.push(modal);
	return modal;
}
