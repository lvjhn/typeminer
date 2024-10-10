import Raider from "../Raider.js";

class BanditRaider extends Raider
{
    constructor() {
        super() 
        this.type = "bandit"
        this.health = chance.integer({ min: 20, max: 50  })
        this.maxHealth = this.health
        this.damage = chance.integer({ min: 5, max: 10 })
        this.attackRate = chance.integer({ min: 3000, max: 5000 })
        this.attackRateCurrent = this.attackRate
    }
}

export default BanditRaider