import Weapon from "../Weapon.js";

class GrenadeWeapon extends Weapon
{
    constructor() {
        super() 
        this.wordSize = [11, 12]
        this.requirement = 20
    }

    getDamage() {
        if(this.getBulletType() == "steel") {
            return 5
        }
        else if(this.getBulletType() == "bronze") {
            return 10
        }
        else if(this.getBulletType() == "silver") {
            return 15
        }
        else if(this.getBulletType() == "gold") {
            return 20
        }
        else if(this.getBulletType() == "diamond") {
            return 25
        }
        return 0
    }
}

export default GrenadeWeapon