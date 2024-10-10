import Weapon from "../Weapon.js";

class BowAndArrowWeapon extends Weapon
{
    constructor() {
        super() 
        this.wordSize = [6, 8]
        this.requirement = 1
    }

    getDamage() {
        if(this.getBulletType() == "steel") {
            return 2 
        }
        else if(this.getBulletType() == "bronze") {
            return 3 
        }
        else if(this.getBulletType() == "silver") {
            return 4
        }
        else if(this.getBulletType() == "gold") {
            return 5
        }
        else if(this.getBulletType() == "diamond") {
            return 6
        }
        return 0
    }

}

export default BowAndArrowWeapon