import StatBar from "./StatBar.js"


const BonusIndicator = function() {
    return {
        view (vnode) {
            return m("div", { class: "bonus-indicator" }, [
                m("div", { class: "bonus-label" }, [
                    m("div", { class: "text" }, "BONUS")
                ]), 
                m("div", { class: "bonus-bars" }, [
                    m(StatBar, { width: "210", height: "5", color: "green"}),
                    m("div", { class: "bonus-multipliers" }, [
                        m("div", { class : "bonus-multiplier" }, m("div", "1x")),
                        m("div", { class : "bonus-multiplier" }, m("div", "2x")),
                        m("div", { class : "bonus-multiplier" }, m("div", "3x"))
                    ])
                ]),
            ])
        } 
    }
}

export default BonusIndicator