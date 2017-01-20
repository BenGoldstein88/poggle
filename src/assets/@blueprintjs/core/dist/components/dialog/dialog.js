/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var classNames = require("classnames");
var React = require("react");
var abstractComponent_1 = require("../../common/abstractComponent");
var Classes = require("../../common/classes");
var Errors = require("../../common/errors");
var overlay_1 = require("../overlay/overlay");
var Dialog = (function (_super) {
    __extends(Dialog, _super);
    function Dialog() {
        _super.apply(this, arguments);
        this.displayName = "Blueprint.Dialog";
    }
    Dialog.prototype.render = function () {
        return (React.createElement(overlay_1.Overlay, __assign({}, this.props, {className: classNames((_a = {}, _a[Classes.OVERLAY_SCROLL_CONTAINER] = !this.props.inline, _a)), hasBackdrop: true}), 
            React.createElement("div", {className: classNames(Classes.DIALOG, this.props.className), style: this.props.style}, 
                this.maybeRenderHeader(), 
                this.props.children)
        ));
        var _a;
    };
    Dialog.prototype.validateProps = function (props) {
        if (props.title == null) {
            if (props.iconName != null) {
                console.error(Errors.WARNING_DIALOG_NO_HEADER_ICON);
            }
            if (props.isCloseButtonShown != null) {
                console.error(Errors.WARNING_DIALOG_NO_HEADER_CLOSE_BUTTON);
            }
        }
    };
    Dialog.prototype.maybeRenderCloseButton = function () {
        // for now, show close button if prop is undefined or null
        // this gives us a behavior as if the default value were `true`
        if (this.props.isCloseButtonShown !== false) {
            var classes = classNames(Classes.DIALOG_CLOSE_BUTTON, Classes.iconClass("small-cross"));
            return React.createElement("button", {"aria-label": "Close", className: classes, onClick: this.props.onClose});
        }
        else {
            return undefined;
        }
    };
    Dialog.prototype.maybeRenderHeader = function () {
        if (this.props.title == null) {
            return undefined;
        }
        var maybeIcon;
        if (this.props.iconName != null) {
            maybeIcon = React.createElement("span", {className: classNames(Classes.ICON_LARGE, Classes.iconClass(this.props.iconName))});
        }
        return (React.createElement("div", {className: Classes.DIALOG_HEADER}, 
            maybeIcon, 
            React.createElement("h5", null, this.props.title), 
            this.maybeRenderCloseButton()));
    };
    Dialog.defaultProps = {
        isOpen: false,
    };
    return Dialog;
}(abstractComponent_1.AbstractComponent));
exports.Dialog = Dialog;
exports.DialogFactory = React.createFactory(Dialog);

//# sourceMappingURL=dialog.js.map
