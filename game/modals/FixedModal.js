
import ModalContent from "/game/components/ModalContent.js"

import uiState from "/game/state/ui.js"

const ConvertedModal = function() {

    function ok(vnode) {
        uiState.activeModal = null
    }

    return {
        view (vnode) {
            let health = game.gameState.state.quarry.health 
            
            return m(ModalContent, {
                title: "Fixing OK", 
                content : m("div", { class: "fix-modal" }, [
                    m("div", { class: "centered-modal-content" }, [
                        m("h3", "Quarry fixed, health is now " + health + " HP.")
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