/**
 * last change: 25.11.2021
 * */

import {state} from "./state";
import popModal from "../methods/popModal";

export default function initialize(){
    state.initialized = true;
    /**
     * If user press Escape then close last opened modal
     * */
    document.addEventListener("keyup", e => {
        if (e.key === "Escape" || e.code === "Escape") popModal();
    })
}