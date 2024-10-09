import uiState from "/game/state/ui.js"

const ModalContainer = {
    view (vnode) {
        var activeModal = uiState.activeModal

        if(activeModal) {
            return m("div", { class: "modal-container" }, [
                m("div", { class: "modal-dimmer" }, [
                ]),
                m("div", { class: "main-content" }, m(activeModal))
            ])
        } else {
            return m("div")
        }
    }
}

export default ModalContainer