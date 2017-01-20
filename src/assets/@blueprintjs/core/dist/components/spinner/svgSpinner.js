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
// import * to avoid "cannot be named" error on factory
var spinner = require("./spinner");
var SVGSpinner = (function (_super) {
    __extends(SVGSpinner, _super);
    function SVGSpinner() {
        _super.apply(this, arguments);
    }
    SVGSpinner.prototype.renderContainer = function (classes, content) {
        return (React.createElement("g", {className: classNames(Classes.SVG_SPINNER, classes)}, 
            React.createElement("g", {className: "pt-svg-spinner-transform-group"}, content)
        ));
    };
    return SVGSpinner;
}(spinner.Spinner));
exports.SVGSpinner = SVGSpinner;
exports.SVGSpinnerFactory = React.createFactory(SVGSpinner);

//# sourceMappingURL=svgSpinner.js.map
