
const BottomBar = function () {
    let selected = game.gameState.state.quarry.bulletType
    let weapon = game.gameState.state.quarry.weapon
    
    function classes(item) {
        if(item == selected) {
            return "selected"
        } else {
            return ""
        }
    }

    addEventListener("keydown", (e) => {
        if(e.key == 1)      select("slingshot")
        else if(e.key == 2) select("bow-and-arrow")
        else if(e.key == 3) select("crossbow")
        else if(e.key == 4) select("pistol")
        else if(e.key == 5) select("rifle")
        else if(e.key == 6) select("grenade")
        m.redraw()
    })

    function select(mode) {
        selected = mode 
        game.gameState.state.quarry.bulletType = mode
        m.redraw()
    }


    return {
        view (vnode) {
            selected = game.gameState.state.quarry.bulletType
            weapon = game.gameState.state.quarry.weapon
            
            return m(
                "div", 
                {
                    class : "bottom-bar"
                },
                [
                    m("div.bt", m("div", "BULLET TYPE")),
                    (weapon != "slingshot") && m("div.bullet-picker", [
                        m(
                            "div",
                            {
                                onclick : () => select("steel"),
                                class : classes("steel")
                            },
                            m("img", { src: "/assets/steel.png" })
                        ),
                        m(
                            "div",
                            {
                                onclick : () => select("bronze"),
                                class : classes("bronze")
                            },
                            m("img", { src: "/assets/bronze.png" })
                        ),
                        m(
                            "div",
                            {
                                onclick : () => select("silver"),
                                class : classes("silver")
                            },
                            m("img", { src: "/assets/silver.png" })
                        ),
                        m(
                            "div",
                            {
                                onclick : () => select("gold"),
                                class : classes("gold")
                            },
                            m("img", { src: "/assets/gold.png" })
                        ),
                        m(
                            "div",
                            {
                                onclick : () => select("diamond"),
                                class : classes("diamond")
                            },
                            m("img", { src: "/assets/diamond.png" })
                        )
                    ]),
                    (weapon == "slingshot") && m("div.bullet-picker", [
                        m(
                            "div",
                            {
                                onclick : () => select("stone"),
                                class : classes("stone")
                            },
                            m("img", { src: "/assets/stone.png" })
                        )
                    ])
                ]
            )
        }
    }
}

export default BottomBar