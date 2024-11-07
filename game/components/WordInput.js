import gameState from "../state/game.js"

const WordInput = function() {
    let word = null 
    let position = null
    let time = 3000
    let dirty = false
    let incorrect = false
    let toggleIncorrect = false

    return {
        oncreate () {
            addEventListener("keydown", (e) => {
                const nextLetter = word[position]
                if(position == 0 && !dirty) {
                    game.quarry.resetTimer()
                    dirty = true
                }

                if(e.key == nextLetter) {
                    incorrect = false
                    gameState.state.quarry.position += 1
                    m.redraw()
                    const state = game.gameState.state.quarry; 

                    if(position == word.length - 1) {
                        let reward = parseFloat(((time / 1000) + 1).toFixed(2))   
                        if(time <= 0) {
                            reward = 0
                            state.raidTimer -= 10
                        }
                        game.quarry.submitWord(word, reward)
                    }
                    dirty = false
                }

                else {
                    const state = game.gameState.state.quarry; 
                    state.raidTimer -= 5
                    incorrect = true
                    toggleIncorrect = !toggleIncorrect
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
                }
                else if(position == i && !incorrect) {
                    return "active"
                }
                else if(position == i && incorrect && toggleIncorrect) {
                    return "incorrect-a"
                }
                else if(position == i && incorrect && !toggleIncorrect) {
                    return "incorrect-b"
                }
                else {
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