import gameState from "../state/game.js"

const WordInput = function() {
    let word = null 
    let position = null
    let time = 3000
    let dirty = false

    return {
        oncreate () {
            addEventListener("keydown", (e) => {
                const nextLetter = word[position]
                if(position == 0 && !dirty) {
                    game.quarry.resetTimer()
                    dirty = true
                }

                if(e.key == nextLetter) {
                    gameState.state.quarry.position += 1
                    m.redraw()

                    if(position == word.length - 1) {
                        game.quarry.submitWord(word, parseFloat(((time / 1000) + 1).toFixed(2)))
                    }
                    dirty = false
                }
            })
        },

        view (vnode) {
            word = gameState.state.quarry.word
            position = gameState.state.quarry.position 
            time = gameState.state.quarry.time 

            function classes(i) {
                if(position > i) {
                    return "correct"
                } else {
                    return ""
                }
            }

            function buildElements() {
                var elements = [] 
                
                for(let i = 0; i < word.length; i++) {
                    elements.push(
                        m(  
                            "span", 
                            { 
                                class: `letter-${i}` + " " + classes(i)
                            }, 
                            word[i]
                        )
                    )
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