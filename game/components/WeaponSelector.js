import gameState from "../state/game.js"

const WeaponSelector = function () {
    let selected = gameState.state.quarry.weapon
    
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
        gameState.state.quarry.weapon = mode
        game.quarry.getActiveWeapon().target
        game.quarry.newRaidWords()
    }

    return {
        view (vnode) {
            let activeWeapon = game.quarry.getActiveWeapon()

            return m("div", { class: "weapon-selector"}, [
                m(
                    "div", 
                    { class: "right-panel-header" }, 
                    m("div", "WEAPON")
                ), 
                m(
                    "div", 
                    { class: "which-weapon" }, 
                    [   
                        m(
                            "div", 
                            { 
                                class: "weapon-option" + " " + classes("slingshot"),
                                onclick : () => select("slingshot") 
                            }, 
                            [
                                m("div.label", "#1"), 
                                m("div.image", m("img", { src: "assets/slingshot.png" }))
                            ]
                        ),
                        m(
                            "div", 
                            { 
                                class: "weapon-option" + " " + classes("bow-and-arrow"),
                                onclick : () => select("bow-and-arrow") 
                            }, 
                            [
                                m("div.label", "#2"), 
                                m("div.image", m("img", { src: "assets/bow-and-arrow.png"}))
                            ]
                        ),
                        m(
                            "div", 
                            { 
                                class: "weapon-option" + " " + classes("crossbow"),
                                onclick : () => select("crossbow") 
                            }, 
                            [
                                m("div.label", "#3"), 
                                m("div.image", m("img", { src: "assets/crossbow.png"}))
                            ]
                        ),
                        m(
                            "div", 
                            { 
                                class: "weapon-option" + " " + classes("pistol"),
                                onclick : () => select("pistol") 
                            }, 
                            [
                                m("div.label", "#4"), 
                                m("div.image", m("img", { src: "assets/pistol.png"}))
                            ]
                        ),
                        m(
                            "div", 
                            { 
                                class: "weapon-option" + " " + classes("rifle"),
                                onclick : () => select("rifle") 
                            }, 
                            [
                                m("div.label", "#5"), 
                                m("div.image", m("img", { src: "assets/rifle.png"}))
                            ]
                        ),
                        m(
                            "div", 
                            { 
                                class: "weapon-option" + " " + classes("grenade"),
                                onclick : () => select("grenade") 
                            }, 
                            [
                                m("div.label", "#6"), 
                                m("div.image", m("img", { src: "assets/grenade.png"}))
                            ]
                        ),
                    ]
                ),
                m(
                    "div",
                    { class: "weapon-info" }, 
                    [
                        m("div", { class: "damage" }, [
                            m("div.key", "DAM"), 
                            m("div.val", activeWeapon.getDamage())
                        ]),
                        m("div", { class: "requirement" }, [
                            m("div.key", "REQ"), 
                            m("div.val", activeWeapon.requirement)
                        ]),
                    ]
                )
            ])
        }
    }
}

export default WeaponSelector