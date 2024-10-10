import Raider from "../Raider.js";

class TrollRaider extends Raider
{
    constructor() {
        super() 
        this.type = "troll"
        this.health = chance.integer({ min: 20, max: 50 })
        this.maxHealth = this.health
        this.damage = chance.integer({ min: 1, max: 5 })
        this.attackRate = chance.integer({ min: 3000, max: 5000 })
        this.attackRateCurrent = this.attackRate
    }
}

export default TrollRaider