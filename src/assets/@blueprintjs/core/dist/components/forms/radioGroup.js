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
var React = require("react");
var abstractComponent_1 = require("../../common/abstractComponent");
var Classes = require("../../common/classes");
var Errors = require("../../common/errors");
var controls_1 = require("./controls");
var counter = 0;
function nextName() { return RadioGroup.displayName + "-" + counter++; }
var RadioGroup = (function (_super) {
    __extends(RadioGroup, _super);
    function RadioGroup() {
        _super.apply(this, arguments);
        // a unique name for this group, which can be overridden by `name` prop.
        this.autoGroupName = nextName();
    }
    RadioGroup.prototype.render = function () {
        var label = this.props.label;
        return (React.createElement("div", {className: this.props.className}, 
            label == null ? null : React.createElement("label", {className: Classes.LABEL}, label), 
            Array.isArray(this.props.options) ? this.renderOptions() : this.renderChildren()));
    };
    RadioGroup.prototype.validateProps = function () {
        if (this.props.children != null) {
            if (this.props.options != null) {
                throw new Error(Errors.RADIOGROUP_CHILDREN_OPTIONS_MUTEX);
            }
            React.Children.forEach(this.props.children, function (child) {
                var radio = child;
                if (radio.type !== controls_1.Radio) {
                    throw new Error(Errors.RADIOGROUP_RADIO_CHILDREN);
                }
            });
        }
    };
    RadioGroup.prototype.renderChildren = function () {
        var _this = this;
        return React.Children.map(this.props.children, function (child) {
            var radio = child;
            return React.cloneElement(radio, _this.getRadioProps(radio.props));
        });
    };
    RadioGroup.prototype.renderOptions = function () {
        var _this = this;
        return this.props.options.map(function (option) { return (React.createElement(controls_1.Radio, __assign({}, option, _this.getRadioProps(option), {key: option.value}))); });
    };
    RadioGroup.prototype.getRadioProps = function (optionProps) {
        var name = this.props.name;
        var value = optionProps.value, disabled = optionProps.disabled;
        return {
            checked: value === this.props.selectedValue,
            disabled: disabled || this.props.disabled,
            name: name == null ? this.autoGroupName : name,
            onChange: this.props.onChange,
        };
    };
    RadioGroup.displayName = "Blueprint.RadioGroup";
    return RadioGroup;
}(abstractComponent_1.AbstractComponent));
exports.RadioGroup = RadioGroup;
;

//# sourceMappingURL=radioGroup.js.map
