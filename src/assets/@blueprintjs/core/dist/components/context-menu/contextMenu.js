/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var ReactDOM = require("react-dom");
var abstractComponent_1 = require("../../common/abstractComponent");
var Classes = require("../../common/classes");
var position_1 = require("../../common/position");
var utils_1 = require("../../common/utils");
var popover_1 = require("../popover/popover");
var CONSTRAINTS = [{ attachment: "together", pin: true, to: "window" }];
var TRANSITION_DURATION = 100;
var ContextMenu = (function (_super) {
    __extends(ContextMenu, _super);
    function ContextMenu() {
        var _this = this;
        _super.apply(this, arguments);
        this.state = {
            isOpen: false,
        };
        this.cancelContextMenu = function (e) { return e.preventDefault(); };
        this.handleBackdropContextMenu = function (e) {
            // HACKHACK: React function to remove from the event pool (not sure why it's not in typings #66)
            e.persist();
            e.preventDefault();
            // wait for backdrop to disappear so we can find the "real" element at event coordinates.
            // timeout duration is equivalent to transition duration so we know it's animated out.
            _this.setTimeout(function () {
                // retrigger context menu event at the element beneath the backdrop.
                // if it has a `contextmenu` event handler then it'll be invoked.
                // if it doesn't, no native menu will show (at least on OSX) :(
                var newTarget = document.elementFromPoint(e.clientX, e.clientY);
                newTarget.dispatchEvent(new MouseEvent("contextmenu", e));
            }, TRANSITION_DURATION);
        };
        this.handlePopoverInteraction = function (nextOpenState) {
            if (!nextOpenState) {
                _this.hide();
            }
        };
    }
    ContextMenu.prototype.render = function () {
        // prevent right-clicking in a context menu
        var content = React.createElement("div", {onContextMenu: this.cancelContextMenu}, this.state.menu);
        return (React.createElement(popover_1.Popover, {backdropProps: { onContextMenu: this.handleBackdropContextMenu }, constraints: CONSTRAINTS, content: content, enforceFocus: false, isModal: true, isOpen: this.state.isOpen, onInteraction: this.handlePopoverInteraction, position: position_1.Position.RIGHT_TOP, popoverClassName: Classes.MINIMAL, useSmartArrowPositioning: false, transitionDuration: TRANSITION_DURATION}, 
            React.createElement("div", {className: Classes.CONTEXT_MENU_POPOVER_TARGET, style: this.state.offset})
        ));
    };
    ContextMenu.prototype.show = function (menu, offset, onClose) {
        this.setState({ isOpen: true, menu: menu, offset: offset, onClose: onClose });
    };
    ContextMenu.prototype.hide = function () {
        var onClose = this.state.onClose;
        this.setState({ isOpen: false, onClose: null });
        utils_1.safeInvoke(onClose);
    };
    return ContextMenu;
}(abstractComponent_1.AbstractComponent));
var contextMenu;
/**
 * Show the given menu element at the given offset from the top-left corner of the viewport.
 * The menu will appear below-right of this point and will flip to below-left if there is not enough
 * room onscreen. The optional callback will be invoked when this menu closes.
 */
function show(menu, offset, onClose) {
    if (contextMenu == null) {
        var contextMenuElement = document.createElement("div");
        contextMenuElement.classList.add(Classes.CONTEXT_MENU);
        document.body.appendChild(contextMenuElement);
        contextMenu = ReactDOM.render(React.createElement(ContextMenu, null), contextMenuElement);
    }
    contextMenu.show(menu, offset, onClose);
}
exports.show = show;
/** Hide the open context menu. */
function hide() {
    if (contextMenu != null) {
        contextMenu.hide();
    }
}
exports.hide = hide;
/** Return whether a context menu is currently open. */
function isOpen() {
    return contextMenu != null && contextMenu.state.isOpen;
}
exports.isOpen = isOpen;

//# sourceMappingURL=contextMenu.js.map
