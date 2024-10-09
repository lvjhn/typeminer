import gameState from "../state/game.js"

const WordInput = function() {
    
    return {
        oncreate () {
            addEventListener("keydown", (e) => {
                
            })
        },

        view (vnode) {
            var word = gameState.state.quarry.word

            function buildElements() {
                var elements = [] 
                
                for(let i = 0; i < word.length; i++) {
                    elements.push(m("span", { class: `letter-${i}`}, word[i]))
                }

                return elements
            }

            return m("div", { class: "word-input" }, [
                m("div", { class: "word" }, [   
                    ...buildElements()
                ])
            ])
        }
    }
}
export default WordInput