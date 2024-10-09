
const StatBar = function () {
    
    return {
        view (vnode) {
            var width = null;
            var height = null; 
            var status = null; 
            var height = null; 

            if(vnode.attrs.width) {
                width = vnode.attrs.width + "px"
            } 

            if(vnode.attrs.height) {
                height = vnode.attrs.height + 'px'
            } else {
                height = "10px"
            }

            if(vnode.attrs.status) {
                status = (
                    (vnode.attrs.status / vnode.attrs.full * vnode.attrs.width)
                    + "px"
                )
            } else {
                status = "50px"
            }


            return m(
                "div", 
                { 
                    class: "stat-bar",
                    style: {
                        width: width,
                        border: "1px solid black",
                        height: height
                    }
                }, 
                [
                    m(
                        "div", 
                        { 
                            class: "stat-bar-inner",
                            style: {
                                width: status,
                                height: height,
                                backgroundColor: vnode.attrs.color ?? "red"
                            }
                        }
                    )
                ]
            )
        } 
    }
}

export default StatBar