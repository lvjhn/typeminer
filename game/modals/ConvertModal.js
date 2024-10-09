import ModalContent from "/game/components/ModalContent.js"
import InsufficientFundsModal from "./InsufficientFundsModal.js"

import uiState from "/game/state/ui.js"
import ConvertedModal from "./ConvertedModal.js"

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
    let convertFrom = {}
    let convertTo = {}
    
    const rates = {
        "steel" : {
            "steel"   : 1,
            "bronze"  : 1 / 3,
            "silver"  : 1 / 9, 
            "gold"    : 1 / 27, 
            "diamond" : 1 / 81
        },
        "bronze" : {
            "steel"   : 3,
            "bronze"  : 1,
            "silver"  : 1 / 3, 
            "gold"    : 1 / 9, 
            "diamond" : 1 / 81
        },
        "silver" : {
            "steel"   : 9,
            "bronze"  : 3,
            "silver"  : 1, 
            "gold"    : 1 / 3, 
            "diamond" : 1 / 9
        },
        "gold" : {
            "steel"   : 81,
            "bronze"  : 9,
            "silver"  : 3, 
            "gold"    : 1, 
            "diamond" : 1 / 3
        },
        "diamond" : {
            "steel"   : 81,
            "bronze"  : 27,
            "silver"  : 9, 
            "gold"    : 3, 
            "diamond" : 1 
        }
    }
    

    function close(vnode) {
        uiState.activeModal = null
    }

    function confirm(vnode) {
        const resources = game.gameState.state.quarry.resources 
        const fromMode = convertFrom.mode 
        const fromAmount = convertFrom.amount 
        const toAmount = convertTo.amount
        const toMode = convertTo.mode
        if(fromAmount <= resources[fromMode]) {
            game.gameState.state.quarry.resources[fromMode] -= parseFloat(fromAmount)
            game.gameState.state.quarry.resources[toMode] += parseFloat(toAmount)
            game.uiState.activeModal = ConvertedModal
        } else {
            game.uiState.activeModal = InsufficientFundsModal
        }
    }

    function convert(from, to) {
        const fromMode = from.mode 
        const toMode = to.mode 
        const val = (rates[fromMode][toMode] * from.amount).toFixed(2)
        return val
    }

    return {
        oninit() {
            convertFrom = game.gameState.state.quarry.convert.from
            convertTo = game.gameState.state.quarry.convert.to
        },

        view (vnode) {
            const self = this; 


            return m(ModalContent, {
                title: "Convert", 
                content: m("div", { class: "convert-modal" }, [
                    m("div", { class: "convert-from" }, [
                        m("div", { class: "input-from" }, [
                            m("input", { 
                                type: "number", 
                                min: 0, 
                                value: convertFrom.amount,
                                oninput (e)  {
                                    convertFrom.amount = parseInt(e.target.value)
                                    convertTo.amount = convert(convertFrom, convertTo)
                                }
                            })
                        ]), 
                        m("div", { class: "mode" }, [
                            m(ResourcePicker, { 
                                selected : convertFrom.mode,
                                selectMode(mode) {  
                                    console.log(`Selecting mode: ${mode}`)
                                    convertFrom.mode = mode    
                                    convertTo.amount = convert(convertFrom, convertTo)    
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
                                value: convertTo.amount,
                                oninput (e)  {
                                    convertTo.amount = parseInt(e.target.value)
                                    convertFrom.amount = convert(convertTo, convertFrom) 
                                }                                
                            })
                        ]),
                        m("div", { class: "mode" }, [
                            m(ResourcePicker, {
                                selected : convertTo.mode, 
                                selectMode(mode) {  
                                    console.log(`Selecting mode: ${mode}`)
                                    convertTo.mode = mode
                                    convertFrom.amount = convert(convertTo, convertFrom) 
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