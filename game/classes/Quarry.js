import GameOverModal from "../modals/GameOverModal.js";
import BanditRaider from "./raiders/BanditRaider.js";
import GoblinRaider from "./raiders/GoblinRaider.js";
import TrollRaider from "./raiders/TrollRaider.js";
import BowAndArrowWeapon from "./weapons/BowAndArrowWeapon.js";
import CrossbowWeapon from "./weapons/CrossbowWeapon.js";
import GrenadeWeapon from "./weapons/GrenadeWeapon.js";
import PistolWeapon from "./weapons/PistolWeapon.js";
import RifleWeapon from "./weapons/RifleWeapon.js";
import SlingshotWeapon from "./weapons/SlingshotWeapon.js";

class Quarry 
{
    constructor(game) {
        this.game = game 
        this.timer = null

        this.weapons = {
            "slingshot" : new SlingshotWeapon(), 
            "bow-and-arrow" : new BowAndArrowWeapon(), 
            "crossbow" : new CrossbowWeapon(), 
            "pistol" : new PistolWeapon(), 
            "rifle" : new RifleWeapon(), 
            "grenade" : new GrenadeWeapon()
        }

        this.raiders = [
          
        ]

        this.raidWords = [

        ]

        this.setupWeapons()
    }

    dealDamage(damage) {
        game.gameState.state.quarry.health -= damage 
        if(game.gameState.state.quarry.health <= 0) {
            game.gameState.state.quarry.health = 0 
        }
    } 

    getRaidWords() {
        return this.raidWords
    }

    newRaidWords() {
        this.raidWords = []
        while (!this.raidWordsHasUniqueFirstLetters() || this.raidWords.length == 0) {
            this.raidWords = []
            for(let i = 0; i < 4; i++) {
                this.raidWords.push(this.getActiveWeapon().createWord())
            }        
            m.redraw()
        }
    }

    newRaid() {
        this.assignRaiders()
        this.newRaidWords()
    }

    raidWordsHasUniqueFirstLetters() {
        let dictionary = {} 
        for(let word of this.raidWords) {
            dictionary[word[0]] = true
        }
        return Object.keys(dictionary).length == 4
    }

    assignRaiders() {
        this.raiders = []
        for(let i = 0; i < 4; i++) {
            const Raider = chance.pick([GoblinRaider, TrollRaider, BanditRaider])
            const raider = new Raider() 
            this.raiders.push(raider)
        }
    }

    getActiveWeapon() {
        const weapon = game.gameState.state.quarry.weapon
        return this.weapons[weapon] 
    }

    setupWeapons() {
        for(let weapon in this.weapons) {
            this.weapons[weapon].bulletType = "steel"
        }
    }

    newWord() {
        let word;
        const self = this;
        
        this.game.gameState.state.quarry.position = 0
        
        do { 
            word = self.generateWord()
        } while(word.length == undefined)

        this.game.gameState.state.quarry.word = word

        this.resetTimer(false)
    }

    resetTimer(start = true) {
        clearInterval(this.timer) 
        this.game.gameState.state.quarry.time = 3000
        
        if(start) {
            const self = this;
            this.timer = setInterval(function() {
                self.game.gameState.state.quarry.time -= 33
                if(self.game.gameState.state.quarry.time  <= 0) {
                    self.game.gameState.state.quarry.time  = 0
                    m.redraw()
                    clearInterval(self.timer)
                }
                m.redraw()
            }, 33)
        }
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
            return __wordlist__.generateWord(3, 20)
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
        else {
            throw Error("Unknown length.")
        }
    }

    submitWord(word, reward = 1) {
        const mode   = this.determineMineral(word.length)
        this.game.gameState.state.quarry.resources[mode] += reward
        this.game.gameState.state.quarry.lastReward = {
            mineral : mode, 
            amount  : reward
        }

        if(this.game.gameState.state.recentWords.length >= 10) {
            this.game.gameState.state.recentWords.shift()
        }

        this.game.gameState.state.recentWords.push({ mode, reward, word })


        game.quarry.newWord()
        m.redraw()
    }

       
}

export default Quarry