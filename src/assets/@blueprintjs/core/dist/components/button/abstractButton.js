"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Keys = require("../../common/keys");
var utils_1 = require("../../common/utils");
var AbstractButton = (function (_super) {
    __extends(AbstractButton, _super);
    function AbstractButton() {
        var _this = this;
        _super.apply(this, arguments);
        this.state = {
            isActive: false,
        };
        this.refHandlers = {
            button: function (ref) {
                _this.buttonRef = ref;
                utils_1.safeInvoke(_this.props.elementRef, ref);
            },
        };
        this.onKeyDown = function (e) {
            switch (e.which) {
                case Keys.SPACE:
                    e.preventDefault();
                    _this.setState({ isActive: true });
                    break;
                case Keys.ENTER:
                    _this.buttonRef.click();
                    break;
                default:
                    break;
            }
        };
        this.onKeyUp = function (e) {
            if (e.which === Keys.SPACE) {
                _this.setState({ isActive: false });
                _this.buttonRef.click();
            }
        };
    }
    return AbstractButton;
}(React.Component));
exports.AbstractButton = AbstractButton;

//# sourceMappingURL=abstractButton.js.map
