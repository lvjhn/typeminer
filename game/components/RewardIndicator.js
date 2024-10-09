
const RewardIndicator = function () {
    return {
        view (vnode) {
            return m("div", { class: "reward-indicator" }, [
                m("div", { class: "text" }, [
                    m.trust(`You got 25 silver.`)
                ])
            ])
        }
    }
}

export default RewardIndicator