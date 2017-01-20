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
var Classes = require("../../common/classes");
var utils_1 = require("../../common/utils");
var coreSlider_1 = require("./coreSlider");
var handle_1 = require("./handle");
var Slider = (function (_super) {
    __extends(Slider, _super);
    function Slider() {
        var _this = this;
        _super.apply(this, arguments);
        this.handleHandleRef = function (ref) {
            _this.handle = ref;
        };
    }
    Slider.prototype.renderFill = function () {
        var initialValue = utils_1.clamp(this.props.initialValue, this.props.min, this.props.max);
        var left = Math.round((initialValue - this.props.min) * this.state.tickSize);
        var width = Math.round((this.props.value - initialValue) * this.state.tickSize);
        if (width < 0) {
            left += width;
            width = Math.abs(width);
        }
        return React.createElement("div", {className: Classes.SLIDER + "-progress", style: { left: left, width: width }});
    };
    Slider.prototype.renderHandles = function () {
        // make sure to *not* pass this.props.className to handle
        return (React.createElement(handle_1.Handle, __assign({}, this.props, this.state, {className: "", label: this.formatLabel(this.props.value), ref: this.handleHandleRef})));
    };
    Slider.prototype.handleTrackClick = function (event) {
        if (this.handle != null) {
            this.handle.beginHandleMovement(event);
        }
    };
    Slider.prototype.handleTrackTouch = function (event) {
        if (this.handle != null) {
            this.handle.beginHandleTouchMovement(event);
        }
    };
    Slider.defaultProps = {
        disabled: false,
        initialValue: 0,
        labelStepSize: 1,
        max: 10,
        min: 0,
        showTrackFill: true,
        stepSize: 1,
        value: 0,
    };
    return Slider;
}(coreSlider_1.CoreSlider));
exports.Slider = Slider;
exports.SliderFactory = React.createFactory(Slider);

//# sourceMappingURL=slider.js.map
