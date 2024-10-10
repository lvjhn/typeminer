import Weapon from "../Weapon.js";

class SlingshotWeapon extends Weapon
{
    constructor() {
        super() 
        this.wordSize = [3, 5]
        this.requirement = 0
    }

    getDamage() {
        return 1
    }
}

export default SlingshotWeapon