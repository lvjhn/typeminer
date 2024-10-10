
const gameState = {
    state : {
        quarry : {
            health : 890,
            mining : "steel",
            word : "parachute",
            position : 0,
            weapon : "slingshot", 
            bulletType : "steel",
            weaponInfo : {
                damage: 0, 
                requirement: 0
            },
            raidsSurvived: 0,
            time: 3000,
            lastReward : {
                mineral: "steel",
                amount : 0
            },
            resources : {
                steel : 1,
                bronze : 2,
                silver : 3,
                gold : 4, 
                diamond : 5
            },
            convert: {
                from: {
                    amount : 0, 
                    mode : "steel"
                },
                to : {
                    amount : 0, 
                    mode : "bronze"
                }
            }
        },
        recentWords : [
           
        ]
    }, 
    
    saveState (key) {
        localStorage.setItem("SAVE--" + key, JSON.stringify(this.state))
    },

    loadState (key) {
        this.state = JSON.parse(localStorage.getItem("SAVE--" + key))
        m.redraw()
    },

    listStates () {
        let saves = []
        for(let key in localStorage) {
            if(key.substring(0, 6) == "SAVE--") {
                saves.push(key.substring(6))
            }
        }
        return saves
    },

    clearStates() {
        let saves = []
        for(let key in localStorage) {
            if(key.substring(0, 6) == "SAVE--") {
                localStorage.removeItem(key)
            }
        }
    }
}

export default gameState