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
var props_1 = require("../../common/props");
var utils_1 = require("../../common/utils");
var Classes = require("../../common/classes");
var Tag = (function (_super) {
    __extends(Tag, _super);
    function Tag() {
        _super.apply(this, arguments);
        this.displayName = "Blueprint.Tag";
    }
    Tag.prototype.render = function () {
        var _a = this.props, className = _a.className, intent = _a.intent, onRemove = _a.onRemove;
        var tagClasses = classNames(Classes.TAG, Classes.intentClass(intent), (_b = {},
            _b[Classes.TAG_REMOVABLE] = onRemove != null,
            _b
        ), className);
        return (React.createElement("span", __assign({}, props_1.removeNonHTMLProps(this.props), {className: tagClasses}), 
            this.props.children, 
            utils_1.isFunction(onRemove) ? React.createElement("button", {className: Classes.TAG_REMOVE, onClick: onRemove}) : null));
        var _b;
    };
    Tag = __decorate([
        PureRender
    ], Tag);
    return Tag;
}(React.Component));
exports.Tag = Tag;
exports.TagFactory = React.createFactory(Tag);

//# sourceMappingURL=tag.js.map
