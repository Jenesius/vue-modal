import {useVocabulary} from "../../../assets/js/Vocabulary";

export const codeBeforeModalClose =
`import {onBeforeModalClose} from "jenesius-vue-modal"

export default {
  setup() {
    onBeforeModalClose(() => {
      const answer = window.confirm(
        "${useVocabulary.doYouWantToLeave}"
      )
      if (!answer) return false
    })
  }
}`;