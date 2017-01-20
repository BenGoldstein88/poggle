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
var React = require("react");
var common_1 = require("../../common");
var keyCombo_1 = require("./keyCombo");
var Hotkey = (function (_super) {
    __extends(Hotkey, _super);
    function Hotkey() {
        _super.apply(this, arguments);
    }
    Hotkey.isInstance = function (element) {
        return element.type === Hotkey;
    };
    Hotkey.prototype.render = function () {
        var _a = this.props, combo = _a.combo, label = _a.label;
        return React.createElement("div", {className: "pt-hotkey"}, 
            React.createElement("div", {className: "pt-hotkey-label"}, label), 
            React.createElement(keyCombo_1.KeyCombo, {combo: combo}));
    };
    Hotkey.prototype.validateProps = function (props) {
        if (props.global !== true && props.group == null) {
            throw new Error("non-global <Hotkey>s must define a group");
        }
    };
    Hotkey.defaultProps = {
        global: false,
    };
    return Hotkey;
}(common_1.AbstractComponent));
exports.Hotkey = Hotkey;

//# sourceMappingURL=hotkey.js.map
