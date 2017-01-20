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
var classNames = require("classnames");
var React = require("react");
var Classes = require("../../common/classes");
var Errors = require("../../common/errors");
var utils_1 = require("../../common/utils");
var coreSlider_1 = require("./coreSlider");
var handle_1 = require("./handle");
var RangeEnd;
(function (RangeEnd) {
    RangeEnd[RangeEnd["LEFT"] = 0] = "LEFT";
    RangeEnd[RangeEnd["RIGHT"] = 1] = "RIGHT";
})(RangeEnd || (RangeEnd = {}));
var RangeSlider = (function (_super) {
    __extends(RangeSlider, _super);
    function RangeSlider() {
        var _this = this;
        _super.apply(this, arguments);
        this.displayName = "Blueprint.RangeSlider";
        this.className = classNames(Classes.SLIDER, Classes.RANGE_SLIDER);
        this.handles = [];
        this.addHandleRef = function (ref) {
            if (ref != null) {
                _this.handles.push(ref);
            }
        };
        this.getHandlerForIndex = function (index, callback) { return function (newValue) {
            if (utils_1.isFunction(callback)) {
                var _a = _this.props.value, leftValue = _a[0], rightValue = _a[1];
                if (index === RangeEnd.LEFT) {
                    callback([Math.min(newValue, rightValue), rightValue]);
                }
                else {
                    callback([leftValue, Math.max(newValue, leftValue)]);
                }
            }
        }; };
        this.handleChange = function (newValue) {
            var _a = _this.props.value, leftValue = _a[0], rightValue = _a[1];
            var newLeftValue = newValue[0], newRightValue = newValue[1];
            if ((leftValue !== newLeftValue || rightValue !== newRightValue) && utils_1.isFunction(_this.props.onChange)) {
                _this.props.onChange(newValue);
            }
        };
    }
    RangeSlider.prototype.renderFill = function () {
        var _a = this.props.value, leftValue = _a[0], rightValue = _a[1];
        if (leftValue === rightValue) {
            return undefined;
        }
        // expand by 1px in each direction so it sits under the handle border
        var left = Math.round((leftValue - this.props.min) * this.state.tickSize) - 1;
        var width = Math.round((rightValue - leftValue) * this.state.tickSize) + 2;
        if (width < 0) {
            left += width;
            width = Math.abs(width);
        }
        return React.createElement("div", {className: Classes.SLIDER + "-progress", style: { left: left, width: width }});
    };
    RangeSlider.prototype.renderHandles = function () {
        var _this = this;
        var _a = this.props, disabled = _a.disabled, max = _a.max, min = _a.min, onRelease = _a.onRelease, stepSize = _a.stepSize, value = _a.value;
        return value.map(function (val, index) { return (React.createElement(handle_1.Handle, {disabled: disabled, key: index, label: _this.formatLabel(val), max: max, min: min, onChange: _this.getHandlerForIndex(index, _this.handleChange), onRelease: _this.getHandlerForIndex(index, onRelease), ref: _this.addHandleRef, stepSize: stepSize, tickSize: _this.state.tickSize, value: val})); });
    };
    RangeSlider.prototype.handleTrackClick = function (event) {
        var _this = this;
        this.handles.reduce(function (min, handle) {
            // find closest handle to the mouse position
            var value = handle.clientToValue(event.clientX);
            return _this.nearestHandleForValue(value, min, handle);
        }).beginHandleMovement(event);
    };
    RangeSlider.prototype.handleTrackTouch = function (event) {
        var _this = this;
        this.handles.reduce(function (min, handle) {
            // find closest handle to the touch position
            var value = handle.clientToValue(handle.touchEventClientX(event));
            return _this.nearestHandleForValue(value, min, handle);
        }).beginHandleTouchMovement(event);
    };
    RangeSlider.prototype.nearestHandleForValue = function (value, firstHandle, secondHandle) {
        var firstDistance = Math.abs(value - firstHandle.props.value);
        var secondDistance = Math.abs(value - secondHandle.props.value);
        return secondDistance < firstDistance ? secondHandle : firstHandle;
    };
    RangeSlider.prototype.validateProps = function (props) {
        var value = props.value;
        if (value == null || value[RangeEnd.LEFT] == null || value[RangeEnd.RIGHT] == null) {
            throw new Error(Errors.RANGESLIDER_NULL_VALUE);
        }
    };
    RangeSlider.defaultProps = {
        disabled: false,
        labelStepSize: 1,
        max: 10,
        min: 0,
        showTrackFill: true,
        stepSize: 1,
        value: [0, 10],
    };
    return RangeSlider;
}(coreSlider_1.CoreSlider));
exports.RangeSlider = RangeSlider;
exports.RangeSliderFactory = React.createFactory(RangeSlider);

//# sourceMappingURL=rangeSlider.js.map
