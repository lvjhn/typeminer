

const RewardIndicator = function () {
    return {
        view (vnode) {
            const amount = game.gameState.state.quarry.lastReward.amount 
            const mineral = game.gameState.state.quarry.lastReward.mineral 
                
            if(amount == 0) {
                return m("div", { class: "reward-indicator" }, [
                    m("div", { class: "text" }, [
                        m.trust(`<small>Type word above to get reward.</small>`)
                    ])
                ])
            } else {
                return m("div", { class: "reward-indicator" }, [
                    m("div", { class: "text" }, [
                        m.trust(`You got ${amount.toFixed(2)} ${mineral}.`)
                    ])
                ])
            }
        }
    }
}

export default RewardIndicator