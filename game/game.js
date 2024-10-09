import uiState from "/game/state/ui.js"

import ModalContainer from "./components/ModalContainer.js"
import ModalContent from "./components/ModalContent.js"

import FixModal from "./modals/FixModal.js"

const Game = {
    oninit() {
        uiState.switchScreen("quarry")
        uiState.activeModal = null
    },

    view (vnode) {
        const currentScreen = uiState.screenMapping[uiState.currentScreen]
        return [
            m(currentScreen),
            m(ModalContainer)
        ]
    }
}   

export default Game