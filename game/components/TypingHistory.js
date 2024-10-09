import TypingHistoryItem from "./TypingHistoryItem.js"

import gameState from "../state/game.js";

const TypingHistory = function () {

    return {
        oncreate (vnode) {
            vnode.dom.scrollTo(0, vnode.dom.scrollHeight);
        },

        onupdate (vnode) {
            vnode.dom.scrollTo(0, vnode.dom.scrollHeight);
        },

        view (vnode) {
            var items = gameState.state.recentWords

            function buildItemsList() {
                var elements = []
                for(let i = 0; i < items.length; i++) {
                    const item = items[i]
                    elements.push(m(TypingHistoryItem, item))
                }
                return elements
            }

            return m("div", { class: "typing-history" }, [
                ...buildItemsList()
            ])
        }
    }
}

export default TypingHistory