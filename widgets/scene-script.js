'use strict';

module.exports = {
    'fill-parent': function (event, uuid) {
        fillWidget(getWidget(uuid))
    }
}

function getWidget(uuid) {
    const scene = cc.director.getScene()
    const node = findChildByUuid(scene, uuid)
    if (!node) return
    return node.getComponent(cc.Widget) || node.addComponent(cc.Widget)
}

function findChildByUuid(root, uuid) {
    let retval = root.uuid == uuid ? root : null
    if (retval) return retval
    root.children.some(value => {
        retval = findChildByUuid(value, uuid)
        return !!retval
    })
    return retval
}

function fillWidget(widget) {
    widget.isAlignLeft = widget.isAlignRight = widget.isAlignBottom = widget.isAlignTop = true
    widget.left = widget.right = widget.bottom = widget.top = 0
}