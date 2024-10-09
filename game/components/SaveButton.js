
const SaveButton = function () {
    return {
        view (vnode) {
            return m(
                "button", 
                {
                    class : "save-btn",
                    onclick: () => {
                        while(true) {
                            const name = prompt("Enter save name :")
                            if(name.trim() == "") {
                                alert("Please enter valid name.")
                                continue;
                            }
                            if(name == null) {
                                continue;
                            }
                            game.gameState.saveState(name)
                            break;
                        }
                        alert("Game saved.")
                    }
                },
                "Save Game"
            )
        }
    }
}

export default SaveButton