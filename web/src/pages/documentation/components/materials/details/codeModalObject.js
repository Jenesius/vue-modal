export const codeOnClose =
`import {openModal} from "jenesius-vue-modal;
const modal = await openModal(Modal);
modal.onclose = (next) => next(false);

modal.close() // Модальное окно не закроется
`;

export const codeModalObject =
`const modal = await openModal(Modal);

modal.id; //Уникальный идентификатор. 1,2,3 ...

modal.onclose = (next) => {
    console.log("Меня пытаются закрыть!");
    if (погода === "дождливая") return next(false);
}
 
modal.close() //Закроет модальное окно, если погода не дождливая`;