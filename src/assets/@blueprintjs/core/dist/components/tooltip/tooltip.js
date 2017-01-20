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
var position_1 = require("../../common/position");
var popover_1 = require("../popover/popover");
var Tooltip = (function (_super) {
    __extends(Tooltip, _super);
    function Tooltip() {
        _super.apply(this, arguments);
        this.displayName = "Blueprint.Tooltip";
    }
    Tooltip.prototype.render = function () {
        var _a = this.props, children = _a.children, intent = _a.intent, tooltipClassName = _a.tooltipClassName;
        var classes = classNames(Classes.TOOLTIP, Classes.intentClass(intent), tooltipClassName);
        return (React.createElement(popover_1.Popover, __assign({}, this.props, {arrowSize: 22, autoFocus: false, canEscapeKeyClose: false, enforceFocus: false, interactionKind: popover_1.PopoverInteractionKind.HOVER_TARGET_ONLY, lazy: true, popoverClassName: classes, transitionDuration: 200}), children));
    };
    Tooltip.defaultProps = {
        className: "",
        content: "",
        hoverCloseDelay: 0,
        hoverOpenDelay: 150,
        isDisabled: false,
        position: position_1.Position.TOP,
        rootElementTag: "span",
        tooltipClassName: "",
        transitionDuration: 100,
        useSmartArrowPositioning: true,
        useSmartPositioning: false,
    };
    Tooltip = __decorate([
        PureRender
    ], Tooltip);
    return Tooltip;
}(React.Component));
exports.Tooltip = Tooltip;
exports.TooltipFactory = React.createFactory(Tooltip);

//# sourceMappingURL=tooltip.js.map
