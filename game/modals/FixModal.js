import ModalContent from "/game/components/ModalContent.js"

import uiState from "/game/state/ui.js"

const FixModal = function() {

    function close(vnode) {
        uiState.activeModal = null
    }

    function confirm(vnode) {

    }

    return {
        view (vnode) {
            return m(ModalContent, {
                title: "Fix", 
                content : m("div", { class: "fix-modal" }, [
                    m("div", { class: "amount" }, [
                        m("div", { class: "input-value" }, [
                            m("input", { type: "number" }), 
                            m("div", m("b", "HP"))
                        ])
                    ]), 
                    m("div", { class : "cost" }, [
                        m("div", { class: "text" }, [
                            m.trust("This will cost <b>560 steel</b>.")
                        ])
                    ]),
                    m("div", { class: "buttons" }, [
                        m("button", { class: "cancel", onclick: close }, "CANCEL"), 
                        m("button", { class: "confirm", onclick: confirm }, "CONFIRM")
                    ])
                ])
            })
        }
    }
}

export default FixModal 