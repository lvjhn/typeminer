import ConvertModal from "./ConvertModal.js"
import ModalContent from "/game/components/ModalContent.js"

import uiState from "/game/state/ui.js"

const GameOverModal = function() {

    function close(vnode) {
        uiState.activeModal = null
        uiState.switchScreen('main-menu')
    }


    return {
        view (vnode) {
            return m(ModalContent, {
                title: "Game Over", 
                content : m("div", { class: "fix-modal" }, [
                    m("div", { class: "centered-modal-content" }, [
                        m("h3", "The quarry was destroyed, the game is over."),
                    ]),
                    m("div", { class: "buttons" }, [
                        m("button", { class: "cancel", onclick: close }, "OK"),
                    ])
                ])
            })
        }
    }
}

export default GameOverModal 