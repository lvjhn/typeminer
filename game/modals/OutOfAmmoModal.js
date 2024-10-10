import ConvertModal from "./ConvertModal.js"
import ModalContent from "/game/components/ModalContent.js"

import uiState from "/game/state/ui.js"

const OutOfAmmoModal = function() {

    function close(vnode) {
        uiState.activeModal = null
    }

    function modify(vnode) {
        uiState.activeModal = ConvertModal
    }

    return {
        view (vnode) {
            return m(ModalContent, {
                title: "Out of Resources", 
                content : m("div", { class: "fix-modal" }, [
                    m("div", { class: "centered-modal-content" }, [
                        m("h3", "You are out of resources to use this weapon.")
                    ]),
                    m("div", { class: "buttons" }, [
                        m("button", { class: "cancel", onclick: close }, "OK"),
                    ])
                ])
            })
        }
    }
}

export default OutOfAmmoModal 