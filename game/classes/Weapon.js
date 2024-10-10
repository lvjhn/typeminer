
class Weapon 
{
    constructor(target) {
        this.target = null
        this.wordSize = null
        this.requirement = null 
    }
    
    setTarget(target) {
        this.target = target
    }

    shoot() {
        if(this.target.indexOf) {
            for(let target of this.target) {
                target.dealDamage(this.getDamage())
            }
        } else {
            this.target.dealDamage(this.getDamage())
        }
        m.redraw()
    }

    getBulletType() {
        return game.gameState.state.quarry.bulletType
    }

    getDamage() {
        
    }

    createWord() {
        return __wordlist__.generateWord(this.wordSize[0], this.wordSize[1])
    }
}

export default Weapon