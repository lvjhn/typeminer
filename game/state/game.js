
const gameState = {
    origState : {
        quarry : {
            health : 1000,
            mining : "steel",
            raidTimer: 120,
            word : "parachute",
            position : 0,
            weapon : "slingshot", 
            bulletType : "steel",
            weaponInfo : {
                damage: 0, 
                requirement: 0
            },
            raidTimer: 180,
            raidsSurvived: 0,
            time: 3000,
            lastReward : {
                mineral: "steel",
                amount : 0
            },
            resources : {
                steel : 100,
                bronze : 100,
                silver : 100,
                gold : 100, 
                diamond : 100
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
        activeEnemy: -1,
        recentWords : [
           
        ]
    }, 

    initState() {
        this.state = structuredClone(this.origState)
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