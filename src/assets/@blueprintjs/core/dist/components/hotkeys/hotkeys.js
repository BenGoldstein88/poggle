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
var react_1 = require("react");
var React = require("react");
var common_1 = require("../../common");
var hotkey_1 = require("./hotkey");
var hotkey_2 = require("./hotkey");
exports.Hotkey = hotkey_2.Hotkey;
var keyCombo_1 = require("./keyCombo");
exports.KeyCombo = keyCombo_1.KeyCombo;
var hotkeysTarget_1 = require("./hotkeysTarget");
exports.HotkeysTarget = hotkeysTarget_1.HotkeysTarget;
var hotkeyParser_1 = require("./hotkeyParser");
exports.comboMatches = hotkeyParser_1.comboMatches;
exports.getKeyCombo = hotkeyParser_1.getKeyCombo;
exports.getKeyComboString = hotkeyParser_1.getKeyComboString;
exports.parseKeyCombo = hotkeyParser_1.parseKeyCombo;
var hotkeysDialog_1 = require("./hotkeysDialog");
exports.hideHotkeysDialog = hotkeysDialog_1.hideHotkeysDialog;
exports.setHotkeysDialogProps = hotkeysDialog_1.setHotkeysDialogProps;
var Hotkeys = (function (_super) {
    __extends(Hotkeys, _super);
    function Hotkeys() {
        _super.apply(this, arguments);
    }
    Hotkeys.prototype.render = function () {
        var hotkeys = react_1.Children.map(this.props.children, function (child) { return child.props; });
        // sort by group label alphabetically, globals first
        hotkeys.sort(function (a, b) {
            if (a.global) {
                return b.global ? 0 : -1;
            }
            if (b.global) {
                return 1;
            }
            return a.group.localeCompare(b.group);
        });
        var lastGroup = null;
        var elems = [];
        for (var _i = 0, hotkeys_1 = hotkeys; _i < hotkeys_1.length; _i++) {
            var hotkey = hotkeys_1[_i];
            var groupLabel = hotkey.group;
            if (groupLabel !== lastGroup) {
                elems.push(React.createElement("h4", {key: "group-" + elems.length, className: "pt-hotkey-group"}, groupLabel));
                lastGroup = groupLabel;
            }
            elems.push(React.createElement(hotkey_1.Hotkey, __assign({key: elems.length}, hotkey)));
        }
        return React.createElement("div", {className: "pt-hotkey-column"}, elems);
    };
    Hotkeys.prototype.validateProps = function (props) {
        react_1.Children.forEach(props.children, function (child) {
            if (typeof child !== "object" || !hotkey_1.Hotkey.isInstance(child)) {
                throw new Error("Hotkeys only accepts <Hotkey> children");
            }
        });
    };
    Hotkeys.defaultProps = {
        tabIndex: 0,
    };
    return Hotkeys;
}(common_1.AbstractComponent));
exports.Hotkeys = Hotkeys;

//# sourceMappingURL=hotkeys.js.map
