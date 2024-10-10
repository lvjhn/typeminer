import RaidAlertModal from "../modals/RaidAlertModal.js";

const RaidTimer = function() {
    let timer = null;
    let state = game.gameState.state.quarry

    function runTimer() {
        state = game.gameState.state.quarry; 
        
        timer = setInterval(() => {
            state.raidTimer -= 1 
            if(state.raidTimer <= 0) {
                game.uiState.activeModal = RaidAlertModal
                clearInterval(timer)
            }
            m.redraw()
        }, 1000)
    }

    runTimer()

    return {
        view (vnode) {
            return m("div", { class: "raid-timer" }, [
                m("div", { class: "right-panel-header "}, m("b", "Raid In")),
                m("div", { class: "timer" }, [
                    m("div", { class: "text" }, [
                        m("div", state.raidTimer),
                        m("b", m("small", "seconds"))
                    ])
                ])
            ])
        }
    }
} 

export default RaidTimer