/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
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
var MenuDivider = (function (_super) {
    __extends(MenuDivider, _super);
    function MenuDivider() {
        _super.apply(this, arguments);
    }
    MenuDivider.prototype.render = function () {
        var _a = this.props, className = _a.className, title = _a.title;
        if (title == null) {
            // simple divider
            return React.createElement("li", {className: classNames(Classes.MENU_DIVIDER, className)});
        }
        else {
            // section header with title
            return React.createElement("li", {className: classNames(Classes.MENU_HEADER, className)}, 
                React.createElement("h6", null, title)
            );
        }
    };
    MenuDivider.displayName = "Blueprint.MenuDivider";
    return MenuDivider;
}(React.Component));
exports.MenuDivider = MenuDivider;
exports.MenuDividerFactory = React.createFactory(MenuDivider);

//# sourceMappingURL=menuDivider.js.map
