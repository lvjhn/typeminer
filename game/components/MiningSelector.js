import gameState from "../state/game.js"

const MiningSelector = function () {
    let selected = gameState.state.quarry.mining
    
    function classes(item) {
        if(item == selected) {
            return ["selected"]
        } else {
            return []
        }
    }

    function select(mode) {
        selected = mode 
        gameState.state.quarry.mining = mode
        game.quarry.newWord()
    }

    return {
        view (vnode) {
            return m("div", { class: "mining-selector"}, [
                m(
                    "div", 
                    { class: "right-panel-header" }, 
                    m("div", "MINING")
                ), 
                m(
                    "div", 
                    { class: "which-resource" }, 
                    [   
                        m(
                            "div", 
                            { 
                                class: "resource-option" + " " + classes("steel"),
                                onclick : () => select("steel") 
                            }, 
                            "STEEL"
                        ),
                        m(
                            "div", 
                            { 
                                class: "resource-option" + " " + classes("bronze"),
                                onclick : () => select("bronze") 

                            }, 
                            "BRONZE"
                        ),
                        m(
                            "div", 
                            { 
                                class: "resource-option" + " " + classes("silver"),
                                onclick : () => select("silver") 
                            }, 
                            "SILVER"
                        ),
                        m(
                            "div", 
                            { 
                                class: "resource-option" + " " + classes("gold"),
                                onclick : () => select("gold") 
                            }, 
                            "GOLD"
                        ),
                        m(
                            "div", 
                            { 
                                class: "resource-option" + " " + classes("diamond"),
                                onclick : () => select("diamond") 
                            }, 
                            "DIAMOND"
                        ),
                        m(
                            "div", 
                            { 
                                class: "resource-option" + " " + classes("random"),
                                onclick : () => select("random") 
                            }, 
                            "RANDOM"
                        )
                    ]
                )
            ])
        }
    }
}

export default MiningSelector