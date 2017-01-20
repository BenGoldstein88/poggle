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
var NonIdealState = (function (_super) {
    __extends(NonIdealState, _super);
    function NonIdealState() {
        _super.apply(this, arguments);
    }
    NonIdealState.prototype.render = function () {
        return (React.createElement("div", {className: classNames(Classes.NON_IDEAL_STATE, this.props.className)}, 
            this.maybeRenderVisual(), 
            this.maybeRenderTitle(), 
            this.maybeRenderDescription(), 
            this.maybeRenderAction()));
    };
    NonIdealState.prototype.maybeRenderAction = function () {
        if (this.props.action == null) {
            return undefined;
        }
        return React.createElement("div", {className: Classes.NON_IDEAL_STATE_ACTION}, this.props.action);
    };
    NonIdealState.prototype.maybeRenderDescription = function () {
        if (this.props.description == null) {
            return undefined;
        }
        return React.createElement("div", {className: Classes.NON_IDEAL_STATE_DESCRIPTION}, this.props.description);
    };
    NonIdealState.prototype.maybeRenderTitle = function () {
        if (this.props.title == null) {
            return undefined;
        }
        return React.createElement("h4", {className: Classes.NON_IDEAL_STATE_TITLE}, this.props.title);
    };
    NonIdealState.prototype.maybeRenderVisual = function () {
        var visual = this.props.visual;
        if (visual == null) {
            return undefined;
        }
        else if (typeof visual === "string") {
            return (React.createElement("div", {className: classNames(Classes.NON_IDEAL_STATE_VISUAL, Classes.NON_IDEAL_STATE_ICON)}, 
                React.createElement("span", {className: classNames("pt-icon", Classes.iconClass(visual))})
            ));
        }
        else {
            return (React.createElement("div", {className: Classes.NON_IDEAL_STATE_VISUAL}, visual));
        }
    };
    NonIdealState = __decorate([
        PureRender
    ], NonIdealState);
    return NonIdealState;
}(React.Component));
exports.NonIdealState = NonIdealState;
exports.NonIdealStateFactory = React.createFactory(NonIdealState);

//# sourceMappingURL=nonIdealState.js.map
