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
var abstractComponent_1 = require("../../common/abstractComponent");
var Classes = require("../../common/classes");
var utils_1 = require("../../common/utils");
var buttons_1 = require("../button/buttons");
var Toast = (function (_super) {
    __extends(Toast, _super);
    function Toast() {
        var _this = this;
        _super.apply(this, arguments);
        this.displayName = "Blueprint.Toast";
        this.handleActionClick = function (e) {
            utils_1.safeInvoke(_this.props.action.onClick, e);
            _this.triggerDismiss(false);
        };
        this.handleCloseClick = function () { return _this.triggerDismiss(false); };
        this.startTimeout = function () {
            if (_this.props.timeout > 0) {
                _this.setTimeout(function () { return _this.triggerDismiss(true); }, _this.props.timeout);
            }
        };
    }
    Toast.prototype.render = function () {
        var _a = this.props, className = _a.className, intent = _a.intent, message = _a.message;
        return (React.createElement("div", {className: classNames(Classes.TOAST, Classes.intentClass(intent), className), onBlur: this.startTimeout, onFocus: this.clearTimeouts, onMouseEnter: this.clearTimeouts, onMouseLeave: this.startTimeout}, 
            this.maybeRenderIcon(), 
            React.createElement("span", {className: Classes.TOAST_MESSAGE}, message), 
            React.createElement("div", {className: classNames(Classes.BUTTON_GROUP, Classes.MINIMAL)}, 
                this.maybeRenderActionButton(), 
                React.createElement(buttons_1.Button, {iconName: "cross", onClick: this.handleCloseClick}))));
    };
    Toast.prototype.componentDidMount = function () {
        this.startTimeout();
    };
    Toast.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.timeout <= 0 && this.props.timeout > 0) {
            this.startTimeout();
        }
        else if (prevProps.timeout > 0 && this.props.timeout <= 0) {
            this.clearTimeouts();
        }
    };
    Toast.prototype.componentWillUnmount = function () {
        this.clearTimeouts();
    };
    Toast.prototype.maybeRenderActionButton = function () {
        var action = this.props.action;
        return action == null ? undefined : React.createElement(buttons_1.Button, __assign({}, action, {intent: null, onClick: this.handleActionClick}));
    };
    Toast.prototype.maybeRenderIcon = function () {
        var iconName = this.props.iconName;
        if (iconName == null) {
            return undefined;
        }
        else {
            return React.createElement("span", {className: classNames(Classes.ICON_STANDARD, Classes.iconClass(iconName))});
        }
    };
    Toast.prototype.triggerDismiss = function (didTimeoutExpire) {
        utils_1.safeInvoke(this.props.onDismiss, didTimeoutExpire);
        this.clearTimeouts();
    };
    Toast.defaultProps = {
        className: "",
        message: "",
        timeout: 5000,
    };
    Toast = __decorate([
        PureRender
    ], Toast);
    return Toast;
}(abstractComponent_1.AbstractComponent));
exports.Toast = Toast;
exports.ToastFactory = React.createFactory(Toast);

//# sourceMappingURL=toast.js.map
