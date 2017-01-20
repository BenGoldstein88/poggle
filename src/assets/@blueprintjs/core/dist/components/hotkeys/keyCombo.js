/**
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
var hotkeyParser_1 = require("./hotkeyParser");
var KeyIcons = {
    alt: "pt-icon-key-option",
    ctrl: "pt-icon-key-control",
    delete: "pt-icon-key-delete",
    down: "pt-icon-arrow-down",
    enter: "pt-icon-key-enter",
    left: "pt-icon-arrow-left",
    meta: "pt-icon-key-command",
    right: "pt-icon-arrow-right",
    shift: "pt-icon-key-shift",
    up: "pt-icon-arrow-up",
};
var KeyCombo = (function (_super) {
    __extends(KeyCombo, _super);
    function KeyCombo() {
        _super.apply(this, arguments);
    }
    KeyCombo.prototype.render = function () {
        var keys = hotkeyParser_1.normalizeKeyCombo(this.props.combo);
        var components = [];
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            var icon = KeyIcons[key];
            if (icon != null) {
                components.push(React.createElement("kbd", {className: "pt-key pt-modifier-key", key: "key-" + i}, 
                    React.createElement("span", {className: "pt-icon-standard " + icon}), 
                    key));
            }
            else {
                if (key.length === 1) {
                    key = key.toUpperCase();
                }
                components.push(React.createElement("kbd", {className: "pt-key", key: "key-" + i}, key));
            }
        }
        return React.createElement("div", {className: "pt-key-combo"}, components);
    };
    return KeyCombo;
}(React.Component));
exports.KeyCombo = KeyCombo;

//# sourceMappingURL=keyCombo.js.map
