import uiState from "/game/state/ui.js"
import gameState from "/game/state/game.js"
import Quarry from "./Quarry.js"

class Game 
{
    constructor()
    {
        this.uiState = uiState
        this.gameState = gameState
        this.quarry = new Quarry(this)
    }
}


export default Game