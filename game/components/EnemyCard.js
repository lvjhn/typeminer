import StatBar from "./StatBar.js"


const EnemyCard = function () {
    return  {
        view (vnode) {
            const raider = vnode.attrs.raider
            const word = vnode.attrs.word
            const activeWordPos = vnode.attrs.activeWordPos

            raider.target = game.quarry

            function buildLetters() {
                let letters = []
                for(let i = 0; i < word.length; i++) {
                    letters.push(
                        m(
                            "span", 
                            {
                                style : {
                                    color: activeWordPos > i ? "rgb(91, 216, 91)" : "black"
                                }
                            },
                            word[i]
                        )
                    )
                }
                return letters
            }

            return m("div", { class: "enemy-card"  }, [
                m("div.avatar", [
                    m("div.content", [
                        m("img", { "src" : "/assets/" + raider.type + ".png"}),
                        m("br"),
                        m("b", "DAM " + raider.damage)
                    ])
                ]),
                m("div.status", [
                    m("div.topline", [
                        m("div.word", buildLetters()), 
                        m("div.health", raider.health + "/" + raider.maxHealth)
                    ]),
                    m(
                        "div.health", 
                        m(
                            StatBar, 
                            { 
                                width: 220,
                                full: raider.maxHealth, 
                                status: raider.health
                            }
                        )
                    ),
                    m(
                        "div.ar",
                        m(
                            StatBar, 
                            { 
                                width: 170,
                                full: raider.attackRate, 
                                status: raider.attackRateCurrent, 
                                color: "rgb(50, 70, 80)",
                            }
                        )
                    )
                ])
            ])
        }
    }
}

export default EnemyCard