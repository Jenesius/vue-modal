export const codeOnClose =
`import {openModal} from "jenesius-vue-modal;
const modal = openModal(Modal);
modal.onclose = () => false;

modal.close() // Модальное окно не закроется
`;

export const codeModalObject =
`const modal = openModal(Modal);

modal.id; //Уникальный идентификатор. 1,2,3 ...

modal.onclose = () => {
    console.log("Меня пытаются закрыть!");
    if (погода === "дождливая") return false;
}
 
modal.close() //Закроет модальное окно, если погода не дождливая`;