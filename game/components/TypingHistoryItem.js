
const TypingHistoryItem = function () {
    return {
        view (vnode) {
            let mode = vnode.attrs.mode ?? "silver"
            let reward = vnode.attrs.reward ?? 3
            let word = vnode.attrs.word ?? "elephant"

            return m("div", { class: "typing-history-item" }, [
                m("div", { class: "left-side" }, [
                    m("div", { class: "icon" }, [
                        m("img", { src: "assets/" + mode + ".png", width: 30, height: 20 }),
                    ]),
                    m("div", { class: "amount" }, [
                        m("div", "+" + reward)
                    ])
                ]), 
                m("div", { class: "right-side" }, [
                    m("div", { class: "word" }, [
                        m("div", { class: "text"}, word)
                    ])
                ])
            ])
        }
    }
}

export default TypingHistoryItem 