/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var React = require("react");
var utils_1 = require("../../common/utils");
var ContextMenu = require("./contextMenu");
function ContextMenuTarget(constructor) {
    var _a = constructor.prototype, render = _a.render, renderContextMenu = _a.renderContextMenu;
    if (!utils_1.isFunction(renderContextMenu)) {
        throw new Error("@ContextMenuTarget-decorated class must implement `renderContextMenu`. " + constructor);
    }
    // patching classes like this requires preserving function context
    // tslint:disable-next-line only-arrow-functions
    constructor.prototype.render = function () {
        var _this = this;
        /* tslint:disable:no-invalid-this */
        var element = render.call(this);
        if (element == null) {
            // always return `element` in case caller is distinguishing between `null` and `undefined`
            return element;
        }
        var oldOnContextMenu = element.props.onContextMenu;
        var onContextMenu = function (e) {
            // support nested menus (inner menu target would have called preventDefault())
            if (e.defaultPrevented) {
                return;
            }
            var menu = _this.renderContextMenu(e);
            if (menu != null) {
                e.preventDefault();
                ContextMenu.show(menu, { left: e.clientX, top: e.clientY });
            }
            utils_1.safeInvoke(oldOnContextMenu, e);
        };
        return React.cloneElement(element, { onContextMenu: onContextMenu });
        /* tslint:enable:no-invalid-this */
    };
}
exports.ContextMenuTarget = ContextMenuTarget;
;

//# sourceMappingURL=contextMenuTarget.js.map
