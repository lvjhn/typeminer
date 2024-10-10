
const RaidScreen = function () {
    let saves = null 
    let saveList = null 

    function back() {
        game.uiState.switchScreen("main-menu")
    }

    function loadSave(i) {
        game.gameState.loadState(saveList[i])
        game.uiState.switchScreen("quarry")
    }

    function listSaves() {
        saves = []
        saveList = game.gameState.listStates()

        for(let i = 0; i < saveList.length; i++) {
            saves.push(
                m(
                    "div", 
                    { 
                        class: "save-item",
                        onclick: () => loadSave(i)
                    },
                    m("b", saveList[i])
                )
            )
        }

        return saves
    }

    return {
        view (vnode) {
            return m("div", { class: "load-game" }, [
                m("div", { class: "header" }, [
                    m("div", { class: "back-button", onclick: back }, m("b", "BACK")),
                    m("div", { class: "title" }, m("b", "Load Game"))
                ]), 
                m("div", { class: "saves" }, [
                    ...listSaves()
                ])
            ])
        }
    }
}

export default RaidScreen