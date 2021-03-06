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
var abstractComponent_1 = require("../../common/abstractComponent");
var Classes = require("../../common/classes");
var utils_1 = require("../../common/utils");
var CoreSlider = (function (_super) {
    __extends(CoreSlider, _super);
    function CoreSlider() {
        var _this = this;
        _super.apply(this, arguments);
        this.state = {
            tickSize: 0,
        };
        this.className = Classes.SLIDER;
        this.refHandlers = {
            track: function (el) { return _this.trackElement = el; },
        };
        this.maybeHandleTrackClick = function (event) {
            if (_this.canHandleTrackEvent(event)) {
                _this.handleTrackClick(event);
            }
        };
        this.maybeHandleTrackTouch = function (event) {
            if (_this.canHandleTrackEvent(event)) {
                _this.handleTrackTouch(event);
            }
        };
        this.canHandleTrackEvent = function (event) {
            var target = event.target;
            // ensure event does not come from inside the handle
            return !_this.props.disabled && target.closest("." + Classes.SLIDER_HANDLE) == null;
        };
    }
    CoreSlider.prototype.render = function () {
        var disabled = this.props.disabled;
        var classes = classNames(this.className, (_a = {},
            _a[Classes.DISABLED] = disabled,
            _a[Classes.SLIDER + "-unlabeled"] = this.props.renderLabel === false,
            _a
        ), this.props.className);
        return (React.createElement("div", {className: classes, onMouseDown: this.maybeHandleTrackClick, onTouchStart: this.maybeHandleTrackTouch}, 
            React.createElement("div", {className: Classes.SLIDER + "-track", ref: this.refHandlers.track}), 
            this.maybeRenderFill(), 
            this.maybeRenderAxis(), 
            this.renderHandles()));
        var _a;
    };
    CoreSlider.prototype.componentDidMount = function () {
        this.updateTickSize();
    };
    CoreSlider.prototype.componentDidUpdate = function () {
        this.updateTickSize();
    };
    CoreSlider.prototype.formatLabel = function (value) {
        var renderLabel = this.props.renderLabel;
        if (renderLabel === false) {
            return undefined;
        }
        else if (utils_1.isFunction(renderLabel)) {
            return renderLabel(value);
        }
        else {
            return value;
        }
    };
    CoreSlider.prototype.maybeRenderAxis = function () {
        var _a = this.props, max = _a.max, min = _a.min, labelStepSize = _a.labelStepSize;
        if (this.props.renderLabel === false) {
            return undefined;
        }
        var stepSize = Math.round(this.state.tickSize * labelStepSize);
        var labels = [];
        // tslint:disable-next-line:one-variable-per-declaration
        for (var i = min, left = 0; i < max || utils_1.approxEqual(i, max); i += labelStepSize, left += stepSize) {
            labels.push(React.createElement("div", {className: Classes.SLIDER + "-label", key: i, style: { left: left }}, this.formatLabel(i)));
        }
        return React.createElement("div", {className: Classes.SLIDER + "-axis"}, labels);
    };
    CoreSlider.prototype.maybeRenderFill = function () {
        if (this.props.showTrackFill && this.trackElement != null) {
            return this.renderFill();
        }
        return undefined;
    };
    CoreSlider.prototype.updateTickSize = function () {
        if (this.trackElement != null) {
            var tickSize = this.trackElement.clientWidth / (this.props.max - this.props.min);
            this.setState({ tickSize: tickSize });
        }
    };
    CoreSlider = __decorate([
        PureRender
    ], CoreSlider);
    return CoreSlider;
}(abstractComponent_1.AbstractComponent));
exports.CoreSlider = CoreSlider;

//# sourceMappingURL=coreSlider.js.map
