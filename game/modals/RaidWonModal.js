import ConvertModal from "./ConvertModal.js"
import ModalContent from "/game/components/ModalContent.js"

import uiState from "/game/state/ui.js"

const RaidWonModal = function() {

    function close(vnode) {
        uiState.activeModal = null
        uiState.switchScreen('quarry')
    }


    return {
        view (vnode) {
            return m(ModalContent, {
                title: "Raid Won", 
                content : m("div", { class: "fix-modal" }, [
                    m("div", { class: "centered-modal-content" }, [
                        m("h3", "You have won the raid."),
                    ]),
                    m("div", { class: "buttons" }, [
                        m("button", { class: "cancel", onclick: close }, "OK"),
                    ])
                ])
            })
        }
    }
}

export default RaidWonModal 