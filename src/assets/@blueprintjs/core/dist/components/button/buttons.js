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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
// HACKHACK: these components should go in separate files
// tslint:disable max-classes-per-file
var classNames = require("classnames");
var React = require("react");
var Classes = require("../../common/classes");
var props_1 = require("../../common/props");
var spinner_1 = require("../spinner/spinner");
var abstractButton_1 = require("./abstractButton");
var Button = (function (_super) {
    __extends(Button, _super);
    function Button() {
        _super.apply(this, arguments);
    }
    Button.prototype.render = function () {
        var _a = this.props, children = _a.children, loading = _a.loading, onClick = _a.onClick, rightIconName = _a.rightIconName, text = _a.text;
        var disabled = isButtonDisabled(this.props);
        return (React.createElement("button", __assign({type: "button"}, props_1.removeNonHTMLProps(this.props), {className: getButtonClasses(this.props, this.state.isActive), onClick: disabled ? undefined : onClick, onKeyDown: this.onKeyDown, onKeyUp: this.onKeyUp, ref: this.refHandlers.button}), 
            maybeRenderSpinner(loading), 
            maybeRenderText(text), 
            children, 
            maybeRenderRightIcon(rightIconName)));
    };
    Button.displayName = "Blueprint.Button";
    return Button;
}(abstractButton_1.AbstractButton));
exports.Button = Button;
exports.ButtonFactory = React.createFactory(Button);
var AnchorButton = (function (_super) {
    __extends(AnchorButton, _super);
    function AnchorButton() {
        _super.apply(this, arguments);
    }
    AnchorButton.prototype.render = function () {
        var _a = this.props, children = _a.children, href = _a.href, onClick = _a.onClick, loading = _a.loading, rightIconName = _a.rightIconName, _b = _a.tabIndex, tabIndex = _b === void 0 ? 0 : _b, text = _a.text;
        var disabled = isButtonDisabled(this.props);
        return (React.createElement("a", __assign({role: "button"}, props_1.removeNonHTMLProps(this.props), {className: getButtonClasses(this.props, this.state.isActive), href: disabled ? undefined : href, onClick: disabled ? undefined : onClick, onKeyDown: this.onKeyDown, onKeyUp: this.onKeyUp, ref: this.refHandlers.button, tabIndex: disabled ? undefined : tabIndex}), 
            maybeRenderSpinner(loading), 
            maybeRenderText(text), 
            children, 
            maybeRenderRightIcon(rightIconName)));
    };
    AnchorButton.displayName = "Blueprint.AnchorButton";
    return AnchorButton;
}(abstractButton_1.AbstractButton));
exports.AnchorButton = AnchorButton;
exports.AnchorButtonFactory = React.createFactory(AnchorButton);
function getButtonClasses(props, isActive) {
    if (isActive === void 0) { isActive = false; }
    return classNames(Classes.BUTTON, (_a = {},
        _a[Classes.ACTIVE] = isActive,
        _a[Classes.DISABLED] = isButtonDisabled(props),
        _a[Classes.LOADING] = props.loading,
        _a
    ), Classes.iconClass(props.iconName), Classes.intentClass(props.intent), props.className);
    var _a;
}
function isButtonDisabled(props) {
    return props.disabled || props.loading;
}
function maybeRenderSpinner(loading) {
    return loading
        ? React.createElement(spinner_1.Spinner, {className: "pt-small pt-button-spinner"})
        : undefined;
}
function maybeRenderText(text) {
    return text
        ? React.createElement("span", null, text)
        : undefined;
}
function maybeRenderRightIcon(iconName) {
    if (iconName == null) {
        return undefined;
    }
    else {
        return React.createElement("span", {className: classNames(Classes.ICON_STANDARD, Classes.iconClass(iconName), Classes.ALIGN_RIGHT)});
    }
}

//# sourceMappingURL=buttons.js.map
