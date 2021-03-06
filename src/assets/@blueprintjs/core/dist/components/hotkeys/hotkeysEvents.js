/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var react_1 = require("react");
var utils_1 = require("../../common/utils");
var hotkey_1 = require("./hotkey");
var hotkeyParser_1 = require("./hotkeyParser");
var hotkeysDialog_1 = require("./hotkeysDialog");
var SHOW_DIALOG_KEY = "?";
(function (HotkeyScope) {
    HotkeyScope[HotkeyScope["LOCAL"] = 0] = "LOCAL";
    HotkeyScope[HotkeyScope["GLOBAL"] = 1] = "GLOBAL";
})(exports.HotkeyScope || (exports.HotkeyScope = {}));
var HotkeyScope = exports.HotkeyScope;
var HotkeysEvents = (function () {
    function HotkeysEvents(scope) {
        var _this = this;
        this.scope = scope;
        this.actions = [];
        this.handleKeyDown = function (e) {
            if (_this.isTextInput(e) || hotkeysDialog_1.isHotkeysDialogShowing()) {
                return;
            }
            var combo = hotkeyParser_1.getKeyCombo(e);
            if (hotkeyParser_1.comboMatches(hotkeyParser_1.parseKeyCombo(SHOW_DIALOG_KEY), combo)) {
                hotkeysDialog_1.showHotkeysDialog(_this.actions.map(function (action) { return action.props; }));
                return;
            }
            for (var _i = 0, _a = _this.actions; _i < _a.length; _i++) {
                var action = _a[_i];
                if (hotkeyParser_1.comboMatches(action.combo, combo)) {
                    utils_1.safeInvoke(action.props.onKeyDown, e);
                }
            }
        };
        this.handleKeyUp = function (e) {
            if (_this.isTextInput(e) || hotkeysDialog_1.isHotkeysDialogShowing()) {
                return;
            }
            var combo = hotkeyParser_1.getKeyCombo(e);
            for (var _i = 0, _a = _this.actions; _i < _a.length; _i++) {
                var action = _a[_i];
                if (hotkeyParser_1.comboMatches(action.combo, combo)) {
                    utils_1.safeInvoke(action.props.onKeyUp, e);
                }
            }
        };
    }
    HotkeysEvents.prototype.count = function () {
        return this.actions.length;
    };
    HotkeysEvents.prototype.clear = function () {
        this.actions = [];
    };
    HotkeysEvents.prototype.setHotkeys = function (props) {
        var _this = this;
        var actions = [];
        react_1.Children.forEach(props.children, function (child) {
            if (hotkey_1.Hotkey.isInstance(child) && _this.isScope(child.props)) {
                actions.push({
                    combo: hotkeyParser_1.parseKeyCombo(child.props.combo),
                    props: child.props,
                });
            }
        });
        this.actions = actions;
    };
    HotkeysEvents.prototype.isScope = function (props) {
        return (props.global ? HotkeyScope.GLOBAL : HotkeyScope.LOCAL) === this.scope;
    };
    HotkeysEvents.prototype.isTextInput = function (e) {
        var elem = e.target;
        // we check these cases for unit testing, but this should not happen
        // during normal operation
        if (elem == null || elem.closest == null) {
            return false;
        }
        var editable = elem.closest("input, textarea, [contenteditable=true]");
        if (editable == null) {
            return false;
        }
        // don't let checkboxes, switches, and radio buttons prevent hotkey behavior
        if (editable.tagName.toLowerCase() === "input") {
            var inputType = editable.type;
            if (inputType === "checkbox" || inputType === "radio") {
                return false;
            }
        }
        // don't let read-only fields prevent hotkey behavior
        if (editable.readOnly) {
            return false;
        }
        return true;
    };
    return HotkeysEvents;
}());
exports.HotkeysEvents = HotkeysEvents;

//# sourceMappingURL=hotkeysEvents.js.map
