
const ModalContent = function () {
    return {
        view (vnode) {
            return m("div", { class: "modal-content" }, [
                m("div", { class: "header" }, [
                    m("div", { class: "header-text" }, vnode.attrs.title)
                ]), 
                m("div", { class: "content" }, vnode.attrs.content)
            ])
        }
    }
}

export default ModalContent