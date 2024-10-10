
class Raider 
{
    constructor() {
        this.maxHealth = null
        this.health = null 
        this.damage = null 
        this.attackRate = null
        this.attackRateCurrent = null
        this.target = null
        this.attacking = false
    }

    destroy() {
        clearInterval(this.attackInterval)
    }

    isDead() {
        return this.health <= 0
    }

    dealDamage(damage) {
        this.health -= damage 
        if(this.health <= 0) {
            this.health = 0 
            this.destroy()
        }
    }

    setTarget(target) {
        this.target = target
    }

    attackTarget() {
        this.attacking = true
        const self = this;
        this.attackInterval = setInterval(() => {
            self.attackRateCurrent -= 1000/30
            if(self.attackRateCurrent < 0) {
                self.attackRateCurrent = self.attackRate
                self.target.dealDamage(this.damage)
                m.redraw()
            }
            m.redraw()
        }, 1000 / 30)
    }
}

export default Raider