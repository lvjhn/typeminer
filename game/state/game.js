
const gameState = {
    state : {
        quarry : {
            health : 890,
            mining : "steel",
            word : "parachute",
            position : 0,
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
        raiders : [
            {
                type : "BANDIT",
                health : 100, 
                attackRate : 7,
                damage : 10
            }, 
            {
                type : "GOBLIN", 
                health : 75, 
                attackRate : 4, 
                damage : 3
            }, 
            {
                type : "TROLL",
                health : 50,
                attackRate : 2,
                damage : 1
            }
        ],
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