import GameOverModal from "../modals/GameOverModal.js"
import OutOfAmmoModal from "../modals/OutOfAmmoModal.js"
import gameState from "../state/game.js"
import EnemyCard from "./EnemyCard.js"
import RaidWonModal from "../modals/RaidWonModal.js"

const BattleArea = function () {
    let words = null 
    let weapon = null
    let activeWord = null
    let raiders = null
    let activeWordPos = [0, 0, 0, 0] 

    game.quarry.newRaid()

    function restartProcessing() {
        activeWord = -1 
        activeWordPos = [0, 0, 0, 0]  
    }

    function hasWon() {
        for(let i = 0; i < raiders.length; i++) {
            if(raiders[i].health > 0) {
              return false
            }   
        }
        return true
    }

    addEventListener("keydown", (e) => {
        const resources = game.gameState.state.quarry.resources
        const bulletType = game.gameState.state.quarry.bulletType

        if(activeWord == -1) {
            for(let i = 0; i < words.length; i++) {
                if(words[i][0] == e.key) {
                    if(weapon.requirement <= resources[bulletType]) {
                        console.log("Word is " + words[i])
                        activeWord = i
                        activeWordPos[i] = 0
                        weapon.setTarget(raiders[i])    
                        game.gameState.state.quarry.resources[bulletType] -= weapon.requirement
                    } else {
                        game.uiState.activeModal = OutOfAmmoModal
                    }
                }
            }
        } 

        if(words[activeWord][activeWordPos[activeWord] + 1] == e.key) {
            activeWordPos[activeWord] += 1
            m.redraw()
        }


        if(activeWordPos[activeWord] >= words[activeWord].length - 1) {
            do {
                let word = game.quarry.getActiveWeapon().createWord()
                game.quarry.raidWords[activeWord] = word
                m.redraw()
            } while((!game.quarry.raidWordsHasUniqueFirstLetters()))


            weapon.shoot()

            activeWord = -1
            activeWordPos = [0, 0, 0, 0]
            
            m.redraw()
        }
    })

    function classes(i) {
        if(activeWord == i) {
            return "selected"
        } else {
            return ""
        }
    }

    return  {
        view (vnode) {
            if(weapon != game.quarry.getActiveWeapon()) {
                restartProcessing()
            }
            
            words = game.quarry.getRaidWords()
            weapon = game.quarry.getActiveWeapon()
            raiders = game.quarry.raiders 

            if(game.gameState.state.quarry.health <= 0) {
                game.uiState.activeModal = GameOverModal
            }


            if(hasWon()) {
                game.gameState.state.quarry.raidsSurvived += 1
                game.gameState.state.quarry.raidTimer = 180
                game.uiState.activeModal = RaidWonModal
            }

            for(let i = 0; i < 4; i++) {
                raiders[i].target = game.quarry
                if(!raiders[i].attacking)
                    raiders[i].attackTarget()
            }

            const state = gameState.state
            
            
            return m("div", { class: "battle-area"}, [
                m(EnemyCard, { raider: raiders[0], word: words[0], activeWordPos: activeWordPos[0], class: classes(0), isEnemy: 0 == activeWord }),
                m(EnemyCard, { raider: raiders[1], word: words[1], activeWordPos: activeWordPos[1], class: classes(1), isEnemy: 1 == activeWord }),
                m(EnemyCard, { raider: raiders[2], word: words[2], activeWordPos: activeWordPos[2], class: classes(2), isEnemy: 2 == activeWord }),
                m(EnemyCard, { raider: raiders[3], word: words[3], activeWordPos: activeWordPos[3], class: classes(3), isEnemy: 3 == activeWord })
            ])
        }
    }
}

export default BattleArea