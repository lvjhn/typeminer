import ConvertModal from "./ConvertModal.js"
import ModalContent from "/game/components/ModalContent.js"

import uiState from "/game/state/ui.js"

const FixModal = function() {

    function close(vnode) {
        uiState.activeModal = null
    }

    function modify(vnode) {
        uiState.activeModal = ConvertModal
    }

    return {
        view (vnode) {
            return m(ModalContent, {
                title: "Insufficient", 
                content : m("div", { class: "fix-modal" }, [
                    m("div", { class: "centered-modal-content" }, [
                        m("h3", "You don't have enough resources to convert this way.")
                    ]),
                    m("div", { class: "buttons" }, [
                        m("button", { class: "cancel", onclick: close }, "CANCEL"), 
                        m("button", { class: "confirm", onclick: modify }, "MODIFY")
                    ])
                ])
            })
        }
    }
}

export default FixModal 