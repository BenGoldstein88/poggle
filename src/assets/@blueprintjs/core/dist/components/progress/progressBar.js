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
var utils_1 = require("../../common/utils");
var ProgressBar = (function (_super) {
    __extends(ProgressBar, _super);
    function ProgressBar() {
        _super.apply(this, arguments);
    }
    ProgressBar.prototype.render = function () {
        var _a = this.props, className = _a.className, intent = _a.intent, value = _a.value;
        var classes = classNames("pt-progress-bar", Classes.intentClass(intent), className);
        // don't set width if value is null (rely on default CSS value)
        var width = (value == null ? null : 100 * utils_1.clamp(value, 0, 1) + "%");
        return (React.createElement("div", {className: classes}, 
            React.createElement("div", {className: "pt-progress-meter", style: { width: width }})
        ));
    };
    ProgressBar.displayName = "Blueprint.ProgressBar";
    ProgressBar = __decorate([
        PureRender
    ], ProgressBar);
    return ProgressBar;
}(React.Component));
exports.ProgressBar = ProgressBar;
exports.ProgressBarFactory = React.createFactory(ProgressBar);

//# sourceMappingURL=progressBar.js.map
