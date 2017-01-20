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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var classNames = require("classnames");
var PureRender = require("pure-render-decorator");
var React = require("react");
var Classes = require("../../common/classes");
var props_1 = require("../../common/props");
var InputGroup = (function (_super) {
    __extends(InputGroup, _super);
    function InputGroup() {
        var _this = this;
        _super.apply(this, arguments);
        this.state = {
            rightElementWidth: 30,
        };
        this.refHandlers = {
            rightElement: function (ref) { return _this.rightElement = ref; },
        };
    }
    InputGroup.prototype.render = function () {
        var _a = this.props, className = _a.className, intent = _a.intent, leftIconName = _a.leftIconName;
        var classes = classNames(Classes.INPUT_GROUP, Classes.intentClass(intent), (_b = {},
            _b[Classes.DISABLED] = this.props.disabled,
            _b
        ), className);
        var style = { paddingRight: this.state.rightElementWidth };
        return (React.createElement("div", {className: classes}, 
            leftIconName == null ? null : React.createElement("span", {className: "pt-icon " + Classes.iconClass(leftIconName)}), 
            React.createElement("input", __assign({type: "text"}, props_1.removeNonHTMLProps(this.props), {className: Classes.INPUT, ref: this.props.inputRef, style: style})), 
            this.maybeRenderRightElement()));
        var _b;
    };
    InputGroup.prototype.componentDidMount = function () {
        this.updateInputWidth();
    };
    InputGroup.prototype.componentDidUpdate = function () {
        this.updateInputWidth();
    };
    InputGroup.prototype.maybeRenderRightElement = function () {
        var rightElement = this.props.rightElement;
        if (rightElement == null) {
            return undefined;
        }
        return React.createElement("span", {className: "pt-input-action", ref: this.refHandlers.rightElement}, rightElement);
    };
    InputGroup.prototype.updateInputWidth = function () {
        if (this.rightElement != null) {
            var clientWidth = this.rightElement.clientWidth;
            // small threshold to prevent infinite loops
            if (Math.abs(clientWidth - this.state.rightElementWidth) > 2) {
                this.setState({ rightElementWidth: clientWidth });
            }
        }
    };
    InputGroup.displayName = "Blueprint.InputGroup";
    InputGroup = __decorate([
        PureRender
    ], InputGroup);
    return InputGroup;
}(React.Component));
exports.InputGroup = InputGroup;
exports.InputGroupFactory = React.createFactory(InputGroup);

//# sourceMappingURL=inputGroup.js.map
