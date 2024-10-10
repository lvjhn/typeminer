import Weapon from "../Weapon.js";

class CrossbowWeapon extends Weapon
{
    constructor() {
        super() 
        this.wordSize = [9, 10]
        this.requirement = 3
    }

    getDamage() {
        if(this.getBulletType() == "steel") {
            return 6
        }
        else if(this.getBulletType() == "bronze") {
            return 7 
        }
        else if(this.getBulletType() == "silver") {
            return 8
        }
        else if(this.getBulletType() == "gold") {
            return 9
        }
        else if(this.getBulletType() == "diamond") {
            return 10
        }
        return 0
    }
}

export default CrossbowWeapon