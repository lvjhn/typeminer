import Raider from "../Raider.js";

class GoblinRaider extends Raider
{
    constructor() {
        super() 
        this.type = "goblin"
        this.health = chance.integer({ min: 20, max: 50 })
        this.maxHealth = this.health
        this.damage = chance.integer({ min: 3, max: 8 })
        this.attackRate = chance.integer({ min: 3000, max: 5000 })
        this.attackRateCurrent = this.attackRate
    }
}

export default GoblinRaider