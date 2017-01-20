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
var abstractComponent_1 = require("../../common/abstractComponent");
var Classes = require("../../common/classes");
var Keys = require("../../common/keys");
var utils_1 = require("../../common/utils");
var BUFFER_WIDTH = 30;
var EditableText = (function (_super) {
    __extends(EditableText, _super);
    function EditableText(props, context) {
        var _this = this;
        _super.call(this, props, context);
        this.refHandlers = {
            content: function (spanElement) {
                _this.valueElement = spanElement;
            },
            input: function (input) {
                if (input != null) {
                    input.focus();
                    var length_1 = input.value.length;
                    input.setSelectionRange(_this.props.selectAllOnFocus ? 0 : length_1, length_1);
                }
            },
        };
        this.cancelEditing = function () {
            var lastValue = _this.state.lastValue;
            _this.setState({ isEditing: false, value: lastValue });
            // invoke onCancel after onChange so consumers' onCancel can override their onChange
            utils_1.safeInvoke(_this.props.onChange, lastValue);
            utils_1.safeInvoke(_this.props.onCancel, lastValue);
        };
        this.toggleEditing = function () {
            if (_this.state.isEditing) {
                var value = _this.state.value;
                _this.setState({
                    isEditing: false,
                    lastValue: value,
                });
                utils_1.safeInvoke(_this.props.onChange, value);
                utils_1.safeInvoke(_this.props.onConfirm, value);
            }
            else if (!_this.props.disabled) {
                _this.setState({ isEditing: true });
            }
        };
        this.handleFocus = function () {
            if (!_this.props.disabled) {
                _this.setState({ isEditing: true });
            }
        };
        this.handleTextChange = function (event) {
            var value = event.target.value;
            // state value should be updated only when uncontrolled
            if (_this.props.value == null) {
                _this.setState({ value: value });
            }
            utils_1.safeInvoke(_this.props.onChange, value);
        };
        this.handleKeyEvent = function (_a) {
            var ctrlKey = _a.ctrlKey, metaKey = _a.metaKey, which = _a.which;
            if (which === Keys.ENTER && (!_this.props.multiline || ctrlKey || metaKey)) {
                _this.toggleEditing();
            }
            else if (which === Keys.ESCAPE) {
                _this.cancelEditing();
            }
        };
        this.state = {
            inputHeight: 0,
            inputWidth: 0,
            isEditing: props.isEditing === true && props.disabled === false,
            lastValue: getValue(props),
            value: getValue(props),
        };
    }
    EditableText.prototype.render = function () {
        var _a = this.props, disabled = _a.disabled, multiline = _a.multiline;
        var value = (this.props.value == null ? this.state.value : this.props.value);
        var hasValue = (value != null && value !== "");
        var classes = classNames(Classes.EDITABLE_TEXT, Classes.intentClass(this.props.intent), (_b = {},
            _b[Classes.DISABLED] = disabled,
            _b["pt-editable-editing"] = this.state.isEditing,
            _b["pt-editable-placeholder"] = !hasValue,
            _b["pt-multiline"] = multiline,
            _b
        ), this.props.className);
        var contentStyle;
        if (multiline) {
            // set height only in multiline mode when not editing
            // otherwise we're measuring this element to determine appropriate height of text
            contentStyle = { height: !this.state.isEditing ? this.state.inputHeight : null };
        }
        else {
            // minWidth only applies in single line mode (multiline == width 100%)
            contentStyle = {
                height: this.state.inputHeight,
                lineHeight: this.state.inputHeight != null ? this.state.inputHeight + "px" : null,
                minWidth: this.props.minWidth,
            };
        }
        // make enclosing div focusable when not editing, so it can still be tabbed to focus
        // (when editing, input itself is focusable so div doesn't need to be)
        var tabIndex = this.state.isEditing || disabled ? null : 0;
        return (React.createElement("div", {className: classes, onFocus: this.handleFocus, tabIndex: tabIndex}, 
            this.maybeRenderInput(value), 
            React.createElement("span", {className: "pt-editable-content", ref: this.refHandlers.content, style: contentStyle}, hasValue ? value : this.props.placeholder)));
        var _b;
    };
    EditableText.prototype.componentDidMount = function () {
        this.updateInputDimensions();
    };
    EditableText.prototype.componentDidUpdate = function (_, prevState) {
        if (this.state.isEditing && !prevState.isEditing) {
            utils_1.safeInvoke(this.props.onEdit);
        }
        this.updateInputDimensions();
    };
    EditableText.prototype.componentWillReceiveProps = function (nextProps) {
        var state = { value: getValue(nextProps) };
        if (nextProps.isEditing != null) {
            state.isEditing = nextProps.isEditing;
        }
        if (nextProps.disabled || (nextProps.disabled == null && this.props.disabled)) {
            state.isEditing = false;
        }
        this.setState(state);
    };
    EditableText.prototype.maybeRenderInput = function (value) {
        var multiline = this.props.multiline;
        if (!this.state.isEditing) {
            return undefined;
        }
        var props = {
            className: "pt-editable-input",
            onBlur: this.toggleEditing,
            onChange: this.handleTextChange,
            onKeyDown: this.handleKeyEvent,
            ref: this.refHandlers.input,
            style: {
                height: this.state.inputHeight,
                lineHeight: !multiline && this.state.inputHeight != null ? this.state.inputHeight + "px" : null,
                width: multiline ? "100%" : this.state.inputWidth,
            },
            value: value,
        };
        return multiline ? React.createElement("textarea", __assign({}, props)) : React.createElement("input", __assign({type: "text"}, props));
    };
    EditableText.prototype.updateInputDimensions = function () {
        if (this.valueElement != null) {
            var _a = this.props, maxLines = _a.maxLines, minLines = _a.minLines, minWidth = _a.minWidth, multiline = _a.multiline;
            var _b = this.valueElement, parentElement_1 = _b.parentElement, scrollHeight_1 = _b.scrollHeight, scrollWidth = _b.scrollWidth, textContent = _b.textContent;
            var lineHeight = getLineHeight(this.valueElement);
            // add one line to computed <span> height if text ends in newline
            // because <span> collapses that trailing whitespace but <textarea> shows it
            if (multiline && this.state.isEditing && /\n$/.test(textContent)) {
                scrollHeight_1 += lineHeight;
            }
            if (lineHeight > 0) {
                // line height could be 0 if the isNaN block from getLineHeight kicks in
                scrollHeight_1 = utils_1.clamp(scrollHeight_1, minLines * lineHeight, maxLines * lineHeight);
            }
            // Chrome's input caret height misaligns text so the line-height must be larger than font-size.
            // The computed scrollHeight must also account for a larger inherited line-height from the parent.
            scrollHeight_1 = Math.max(scrollHeight_1, getFontSize(this.valueElement) + 1, getLineHeight(parentElement_1));
            // IE11 needs a small buffer so text does not shift prior to resizing
            this.setState({
                inputHeight: scrollHeight_1,
                inputWidth: Math.max(scrollWidth + BUFFER_WIDTH, minWidth),
            });
            // synchronizes the ::before pseudo-element's height while editing for Chrome 53
            if (multiline && this.state.isEditing) {
                this.setTimeout(function () { return parentElement_1.style.height = scrollHeight_1 + "px"; });
            }
        }
    };
    EditableText.defaultProps = {
        defaultValue: "",
        disabled: false,
        maxLines: Infinity,
        minLines: 1,
        minWidth: 80,
        multiline: false,
        placeholder: "Click to Edit",
    };
    EditableText = __decorate([
        PureRender
    ], EditableText);
    return EditableText;
}(abstractComponent_1.AbstractComponent));
exports.EditableText = EditableText;
function getValue(props) {
    return props.value == null ? props.defaultValue : props.value;
}
function getFontSize(element) {
    var fontSize = getComputedStyle(element).fontSize;
    return fontSize === "" ? 0 : parseInt(fontSize.slice(0, -2), 10);
}
function getLineHeight(element) {
    // getComputedStyle() => 18.0001px => 18
    var lineHeight = parseInt(getComputedStyle(element).lineHeight.slice(0, -2), 10);
    // this check will be true if line-height is a keyword like "normal"
    if (isNaN(lineHeight)) {
        // @see http://stackoverflow.com/a/18430767/6342931
        var line = document.createElement("span");
        line.innerHTML = "<br>";
        element.appendChild(line);
        var singleLineHeight = element.offsetHeight;
        line.innerHTML = "<br><br>";
        var doubleLineHeight = element.offsetHeight;
        element.removeChild(line);
        // this can return 0 in edge cases
        lineHeight = doubleLineHeight - singleLineHeight;
    }
    return lineHeight;
}
exports.EditableTextFactory = React.createFactory(EditableText);

//# sourceMappingURL=editableText.js.map
