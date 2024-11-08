import StatBar from "./StatBar.js"
import FixModal from "../modals/FixModal.js"

import uiState from "/game/state/ui.js"
import gameState from "../state/game.js"

const QuarryIndicator = function () {
    return {
        view (vnode) {
            const health = gameState.state.quarry.health 

            return m("div", { class: "quarry-indicator" }, [
                m("div", { class: "icon" }, [
                    m("img", { src: "assets/truck.png"})
                ]), 
                m("div", { class: "stats" }, [
                    m("div", { class: "top-line" }, [
                        m(
                            "div", 
                            { class: "quarry-text" }, 
                            m("b", "QUARRY")
                        ), 
                        m(
                            "div", 
                            { 
                                class: "fix-btn",
                                onclick () {
                                    uiState.activeModal = FixModal
                                    m.redraw()
                                }
                            }, 
                            m("button", { class: "fix-btn"}, "FIX")
                        )
                    ]),
                    m("div", { class: "bottom-line" }, [
                        m(
                            "div", 
                            { class: "hp-text" }, 
                            m("b", health + "/1000")
                        ), 
                        m(StatBar, { full: 1000, status: health, width: 237 })
                    ])
                ])
            ])
        }
    }
}

export default QuarryIndicator