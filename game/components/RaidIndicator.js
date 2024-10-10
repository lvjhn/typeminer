

const RaidIndicator = function () {
    return {
        view (vnode) {
            return m("div", { class: "raid-indicator" }, [
                m("div", { class: "header" }, [
                    m("div", "NO. OF RAIDS SURVIVED")
                ]), 
                m("div", { class: "amount" }, [
                    m("div", game.gameState.state.quarry.raidsSurvived)
                ])
            ])
        }
    }
}

export default RaidIndicator