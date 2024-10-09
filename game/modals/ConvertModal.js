import ModalContent from "/game/components/ModalContent.js"

import uiState from "/game/state/ui.js"

const ResourcePicker = function () { 


    return {
        view (vnode) {
            const context = vnode.attrs.context; 
            const selected = vnode.attrs.selected;

            function classes(mode) {
                let classes_ = "";

                if(selected == mode) {
                    classes_ += "selected"
                }

                return classes_
            }

            return m("div", { class: "resource-picker" }, [
                m(
                    "div", 
                    {
                        onclick () {
                            vnode.attrs.selectMode("steel") 
                        },
                        class : classes("steel")
                    },
                    m("img", { src: "/assets/steel.png" })
                ),  
                m(
                    "div", 
                    {
                        onclick () {
                            vnode.attrs.selectMode("bronze") 
                        },
                        class : classes("bronze")
                    },
                    m("img", { src: "/assets/bronze.png" })
                ),  
                m(
                    "div", 
                    {
                        onclick () {
                            vnode.attrs.selectMode("silver") 
                        },
                        class : classes("silver")
                    },
                    m("img", { src: "/assets/silver.png" })
                ),  
                m(
                    "div", 
                    {
                        onclick () {
                            vnode.attrs.selectMode("gold") 
                        },
                        class : classes("gold")
                    },
                    m("img", { src: "/assets/gold.png" })
                ),  
                m(
                    "div", 
                    {
                        onclick () {
                            vnode.attrs.selectMode("diamond") 
                        },
                        class : classes("diamond")
                    },
                    m("img", { src: "/assets/diamond.png" })
                ),  
            ])
        }
    }
}

const ConvertModal = function() {

    let convertFrom = {
        amount : 0, 
        mode : "steel"
    }

    let convertTo = {
        amount : 0, 
        mode : "bronze"
    }
    

    function close(vnode) {
        uiState.activeModal = null
    }

    function confirm(vnode) {

    }

    return {
        view (vnode) {
            const self = this; 

            console.log(self)

            return m(ModalContent, {
                title: "Convert", 
                content: m("div", { class: "convert-modal" }, [
                    m("div", { class: "convert-from" }, [
                        m("div", { class: "input-from" }, [
                            m("input", { 
                                type: "number", 
                                min: 0, 
                                value: convertFrom.amount 
                            })
                        ]), 
                        m("div", { class: "mode" }, [
                            m(ResourcePicker, { 
                                selected : convertFrom.mode,
                                selectMode(mode) {  
                                    console.log(`Selecting mode: ${mode}`)
                                    convertFrom.mode = mode        
                                }
                            })
                        ])
                    ]),
                    m("div", { class: "to-label"}, m("b", "to")), 
                    m("div", { class: "convert-to" }, [
                        m("div", { class: "input-to" }, [
                            m("input", { 
                                type: "number", 
                                min: 0, 
                                value: convertTo.amount
                            })
                        ]),
                        m("div", { class: "mode" }, [
                            m(ResourcePicker, {
                                selected : convertTo.mode, 
                                selectMode(mode) {  
                                    console.log(`Selecting mode: ${mode}`)
                                    convertTo.mode = mode  
                                }
                            })
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

export default ConvertModal