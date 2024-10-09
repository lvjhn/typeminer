import MainMenuScreen from "/game/screens/MainMenuScreen.js"
import QuarryScreen from "/game/screens/QuarryScreen.js"
import RaidScreen from "/game/screens/RaidScreen.js"
import LoadGameScreen from "/game/screens/LoadGameScreen.js"

const uiState = {
    
    currentScreen : "main-menu",
    screenMapping : {
        "main-menu" : MainMenuScreen, 
        "quarry" : QuarryScreen, 
        "raid" : RaidScreen,
        "load-game" : LoadGameScreen
    },

    switchScreen(screen) {
        this.currentScreen = screen
        m.redraw()
    }
}

export default uiState