
import ModalContent from "/game/components/ModalContent.js"

import uiState from "/game/state/ui.js"

const ConvertedModal = function() {

    function ok(vnode) {
        uiState.activeModal = null
    }

    return {
        view (vnode) {
            return m(ModalContent, {
                title: "Insufficient", 
                content : m("div", { class: "fix-modal" }, [
                    m("div", { class: "centered-modal-content" }, [
                        m("h3", "Successfully converted resources.")
                    ]),
                    m("div", { class: "buttons" }, [
                        m("button", { class: "ok", onclick: ok }, "OK"), 
                    ])
                ])
            })
        }
    }
}

export default ConvertedModal 