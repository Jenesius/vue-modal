export const codeBeforeModalClose =
`import {onBeforeModalClose} from 'jenesius-vue-modal'

export default {
  setup() {
    onBeforeModalClose(next => {
      const answer = window.confirm(
        'Do you really want to leave? you have unsaved changes!'
      )
      // cancel the navigation and stay on the same page
      if (!answer) return next(false)
    })

  },
}`;