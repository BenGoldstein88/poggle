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
var popover_1 = require("./popover");
var SVGPopover = (function (_super) {
    __extends(SVGPopover, _super);
    function SVGPopover() {
        _super.apply(this, arguments);
    }
    SVGPopover.prototype.render = function () {
        return React.createElement(popover_1.Popover, __assign({rootElementTag: "g"}, this.props), this.props.children);
    };
    return SVGPopover;
}(React.Component));
exports.SVGPopover = SVGPopover;
exports.SVGPopoverFactory = React.createFactory(SVGPopover);

//# sourceMappingURL=svgPopover.js.map
