import Weapon from "../Weapon.js";

class RifleWeapon extends Weapon
{
    constructor() {
        super() 
        this.wordSize = [11, 12]
        this.requirement = 10
    }

    getDamage() {
        if(this.getBulletType() == "steel") {
            return 14
        }
        else if(this.getBulletType() == "bronze") {
            return 15
        }
        else if(this.getBulletType() == "silver") {
            return 16
        }
        else if(this.getBulletType() == "gold") {
            return 17
        }
        else if(this.getBulletType() == "diamond") {
            return 18
        }
        return 0
    }
}

export default RifleWeapon