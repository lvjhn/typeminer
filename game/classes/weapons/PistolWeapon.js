import Weapon from "../Weapon.js";

class PistolWeapon extends Weapon
{
    constructor() {
        super() 
        this.wordSize = [11, 12]
        this.requirement = 5
    }

    getDamage() {
        if(this.getBulletType() == "steel") {
            return 10
        }
        else if(this.getBulletType() == "bronze") {
            return 11
        }
        else if(this.getBulletType() == "silver") {
            return 12
        }
        else if(this.getBulletType() == "gold") {
            return 13
        }
        else if(this.getBulletType() == "diamond") {
            return 14
        }
        return 0
    }
}

export default PistolWeapon