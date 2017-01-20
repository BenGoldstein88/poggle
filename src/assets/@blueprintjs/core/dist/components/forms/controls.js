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
var utils_1 = require("../../common/utils");
/** Base Component class for all Controls */
var Control = (function (_super) {
    __extends(Control, _super);
    function Control() {
        _super.apply(this, arguments);
    }
    // generates control markup for given input type.
    // optional inputRef in case the component needs reference for itself (don't forget to invoke the prop!).
    Control.prototype.renderControl = function (type, typeClassName, inputRef) {
        if (inputRef === void 0) { inputRef = this.props.inputRef; }
        var className = classNames(Classes.CONTROL, typeClassName, (_a = {}, _a[Classes.DISABLED] = this.props.disabled, _a), this.props.className);
        return (React.createElement("label", {className: className, style: this.props.style}, 
            React.createElement("input", __assign({}, props_1.removeNonHTMLProps(this.props, ["children"], true), {ref: inputRef, type: type})), 
            React.createElement("span", {className: Classes.CONTROL_INDICATOR}), 
            this.props.label, 
            this.props.children));
        var _a;
    };
    return Control;
}(React.Component));
exports.Control = Control;
var Checkbox = (function (_super) {
    __extends(Checkbox, _super);
    function Checkbox() {
        var _this = this;
        _super.apply(this, arguments);
        this.handleInputRef = function (ref) {
            _this.input = ref;
            utils_1.safeInvoke(_this.props.inputRef, ref);
        };
    }
    Checkbox.prototype.render = function () {
        return this.renderControl("checkbox", "pt-checkbox", this.handleInputRef);
    };
    Checkbox.prototype.componentDidMount = function () {
        if (this.props.defaultIndeterminate != null) {
            this.input.indeterminate = this.props.defaultIndeterminate;
        }
        this.updateIndeterminate();
    };
    Checkbox.prototype.componentDidUpdate = function () {
        this.updateIndeterminate();
    };
    Checkbox.prototype.updateIndeterminate = function () {
        if (this.props.indeterminate != null) {
            this.input.indeterminate = this.props.indeterminate;
        }
    };
    Checkbox.displayName = "Blueprint.Checkbox";
    return Checkbox;
}(Control));
exports.Checkbox = Checkbox;
var Switch = (function (_super) {
    __extends(Switch, _super);
    function Switch() {
        _super.apply(this, arguments);
    }
    Switch.prototype.render = function () {
        return this.renderControl("checkbox", "pt-switch");
    };
    Switch.displayName = "Blueprint.Switch";
    return Switch;
}(Control));
exports.Switch = Switch;
var Radio = (function (_super) {
    __extends(Radio, _super);
    function Radio() {
        _super.apply(this, arguments);
    }
    Radio.prototype.render = function () {
        return this.renderControl("radio", "pt-radio");
    };
    Radio.displayName = "Blueprint.Radio";
    return Radio;
}(Control));
exports.Radio = Radio;
exports.CheckboxFactory = React.createFactory(Checkbox);
exports.SwitchFactory = React.createFactory(Switch);
exports.RadioFactory = React.createFactory(Radio);

//# sourceMappingURL=controls.js.map
