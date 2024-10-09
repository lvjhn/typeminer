
const gameState = {
    state : {
        quarry : {
            health : 890,
            mining : "steel",
            word : "parachute",
            resources : {
                steel : 1,
                bronze : 2,
                silver : 3,
                gold : 4, 
                diamond : 5
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
            { word: "gold", reward: 3, mode: "silver" },
            { word: "mineral", reward: 3, mode: "gold" },
            { word: "watermelon", reward: 3, mode: "bronze" },
            { word: "elephant", reward: 3, mode: "steel" },
        ]
    }, 
    
    saveState (key) {
        localStorage.setItem("SAVE--" + key, JSON.stringify(this.state))
    },

    loadState (key) {
        localStorage.getItem("SAVE--" + key)
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