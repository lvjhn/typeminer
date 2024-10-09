
import ResourceIndicator from "../components/ResourceIndicator.js"
import RaidIndicator from "../components/RaidIndicator.js"

import uiState from "/game/state/ui.js"
import gameState  from "/game/state/game.js"
import ConvertModal from "../modals/ConvertModal.js"

const DefaultLayout = {
    view (vnode) {
        const amounts = {
            steel : gameState.state.quarry.resources.steel,
            bronze : gameState.state.quarry.resources.bronze, 
            silver : gameState.state.quarry.resources.silver,
            gold : gameState.state.quarry.resources.gold,
            diamond : gameState.state.quarry.resources.diamond
        }

        return m("div", { class: "default-layout" }, [
            m("div", { class: "left-panel" }, [
                m(
                    "div", 
                    { class: "logo" }, 
                    m("div", "TYPEMINER")
                ), 
                m( 
                    "div", 
                    { class: "resources"}, 
                    m("div", [
                        m(
                            "div", 
                            { class: "steel" }, 
                            m(ResourceIndicator, { 
                                type: "steel", 
                                amount: amounts.steel 
                            })
                        )
                    ]),
                    m("div", [
                        m(
                            "div", 
                            { class: "gold" }, 
                            m(ResourceIndicator, { 
                                type: "bronze",
                                amount: amounts.gold 
                            })
                        )
                    ]),
                    m("div", [
                        m(
                            "div", 
                            { class: "gold" }, 
                            m(ResourceIndicator, { 
                                type: "silver",
                                amount: amounts.silver 
                            })
                        )
                    ]),
                    m("div", [
                        m(
                            "div", 
                            { class: "gold" }, 
                            m(ResourceIndicator, { 
                                type: "gold",
                                amount: amounts.gold
                            })
                        )
                    ]),
                    m("div", [
                        m(
                            "div", 
                            { class: "gold" }, 
                            m(ResourceIndicator, { 
                                type: "diamond",
                                amount: amounts.diamond
                            })
                        )
                    ]),
                ),
                m("div", { class: "aside-section" }, [
                    m(
                        "button", 
                        { 
                            class: "convert-btn", 
                            onclick () {
                                uiState.activeModal = ConvertModal
                            }
                        }, 
                        m("b", "CONVERT")
                    ),
                    m(RaidIndicator)
                ])
            ]), 
            m("div", { class: "center-panel" }, vnode.attrs.centerContent),
            m("div", { class: "right-panel" }, vnode.attrs.rightContent)
        ])
    } 
}

export default DefaultLayout