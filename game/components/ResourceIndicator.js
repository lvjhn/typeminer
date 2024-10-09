
const ResourceIndicator = function () {
    return {
        view (vnode) {
            return m("div", { class: "resource-indicator" }, [
                m(
                    "div", 
                    { class : "icon" }, 
                    [
                        m("img", { 
                            src: `/assets/${vnode.attrs.type}.png`, 
                            width: 30, 
                            height: 20
                        })
                    ]
                ), 
                m(
                    "div", 
                    { class : "amount" }, 
                    [
                        m("div", vnode.attrs.amount)
                    ]
                )
            ])
        }
    }
}

export default ResourceIndicator