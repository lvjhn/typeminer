
class Quarry 
{
    constructor(game) {
        this.game = game 
    }

    newWord() {
        this.game.gameState.state.quarry.word = this.generateWord()
    }

    generateWord() {
        const mining = this.game.gameState.state.quarry.mining 

        if(mining == "steel") {
            return __wordlist__.generateWord(3, 5)
        }
        else if (mining == "bronze") {
            return __wordlist__.generateWord(6, 8)
        }
        else if (mining == "silver") {
            return __wordlist__.generateWord(9, 11)
        }
        else if (mining == "gold") {
            return __wordlist__.generateWord(12, 15)
        }
        else if (mining == "diamond") {
            return __wordlist__.generateWord(16, 31)
        }
        else if (mining == "random") {
            return __wordlist__.generateWord(3, 25)
        }
    }

    determineMineral(length) {
        if(length >= 3 && length <= 5) {
            return "steel"
        }
        else if(length >= 6 && length <= 8) {
            return "bronze"
        }
        else if(length >= 9 && length <= 11) {
            return "silver"
        }
        else if(length >= 12 && length <= 15) {
            return "gold"
        }
        else if(length >= 16 && length <= 31) {
            return "diamond"
        }
    }
}

export default Quarry