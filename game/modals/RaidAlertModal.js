import ConvertModal from "./ConvertModal.js"
import ModalContent from "/game/components/ModalContent.js"

import uiState from "/game/state/ui.js"

const RaidAlertModal = function() {

    function close(vnode) {
        uiState.activeModal = null
        uiState.switchScreen('raid')
    }


    return {
        view (vnode) {
            return m(ModalContent, {
                title: "Raid", 
                content : m("div", { class: "fix-modal" }, [
                    m("div", { class: "centered-modal-content" }, [
                        m("h3", "You are being raided."),
                    ]),
                    m("div", { class: "buttons" }, [
                        m("button", { class: "cancel", onclick: close }, "OK"),
                    ])
                ])
            })
        }
    }
}

export default RaidAlertModal 