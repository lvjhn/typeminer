


const MainMenuScreen = {
    oninit() {

    },

    view (vnode) {

        return m("div", { class: "main-menu-screen" }, [
            // TITLE TEXT
            m("div", { class: "title" }, [
                m("h1", { class: "title-text" }, "TypeMiner")
            ]), 
            // MENU OPTIONS 
            m("div", { class: "main-menu" }, [
                m(
                    "button", 
                    { 
                        class: "game-btn",
                        onclick : () => {
                            game.uiState.switchScreen("quarry")
                        }
                    }, 
                    "New Game"
                ), 
                m(
                    "button", 
                    { 
                        class: "game-btn",
                        onclick : () => {
                            game.uiState.switchScreen("load-game")
                        }
                    }, 
                    "Load Game"
                )
            ])
        ])
    }
}

export default MainMenuScreen