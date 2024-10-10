import ModalContent from "/game/components/ModalContent.js"
import FixedModal from "./FixedModal.js"

import uiState from "/game/state/ui.js"

const FixModal = function() {

    let targetHealth = 1000
    let health = null
    let cost = null 
    let costOk = false
    let steel = null

    function close(vnode) {
        uiState.activeModal = null
    }

    function confirm(vnode) {
        game.gameState.state.quarry.health = targetHealth 
        game.gameState.state.quarry.resources.steel -= cost
        uiState.activeModal = FixedModal
    }

    return {
        view (vnode) {
            health = game.gameState.state.quarry.health 
            cost = targetHealth - health
            steel = game.gameState.state.quarry.resources.steel

            let costText;
            
            if (targetHealth > health && targetHealth <= 1000) {
                if(cost <= steel) {
                    costText = m("div", { class: "text" }, [
                        m.trust("This will cost <b>" + cost + " steel</b>.")
                    ])
                    costOk = true
                } else {
                    costText = m("div", { class: "text" }, [
                        m.trust("This will cost <b>" + cost + " steel</b>"),
                        m("br"),
                        m.trust("You have insufficient funds"),
                    ])
                    costOk = false
                }
            } else {
                costText = m("div", { class: "text" }, [
                    m.trust(
                        "Target health must be between " + health + " and " + 
                        Math.min(health + steel, 1000)
                    )
                ])
            }

            return m(ModalContent, {
                title: "Fix", 
                content : m("div", { class: "fix-modal" }, [
                    m("div", { class: "amount" }, [
                        m("div", { class: "input-value", max: 1000, min: health }, [
                            m("input", { 
                                type: "number", 
                                oninput (e) {
                                    targetHealth = e.target.value
                                },
                                value: targetHealth
                            }), 
                            m("div", m("b", "HP"))
                        ])
                    ]), 
                    m("div", { class : "cost" }, [
                        costText
                    ]),
                    m("div", { class: "buttons" }, [
                        m(
                            "button", 
                            { 
                                class: "cancel", 
                                onclick: close 
                            }, 
                            "CANCEL"
                        ), 
                        m(
                            "button", 
                            { 
                                class: "confirm", 
                                onclick: confirm,
                                disabled: (
                                    !costOk || 
                                    (targetHealth <= health || targetHealth > 1000)
                                )
                            }, 
                            "CONFIRM"
                        )
                    ])
                ])
            })
        }
    }
}

export default FixModal 