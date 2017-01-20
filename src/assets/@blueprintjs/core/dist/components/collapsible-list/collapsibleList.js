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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var classNames = require("classnames");
var React = require("react");
var Classes = require("../../common/classes");
var Errors = require("../../common/errors");
var position_1 = require("../../common/position");
var menu_1 = require("../menu/menu");
var menuItem_1 = require("../menu/menuItem");
var popover_1 = require("../popover/popover");
(function (CollapseFrom) {
    CollapseFrom[CollapseFrom["START"] = 0] = "START";
    CollapseFrom[CollapseFrom["END"] = 1] = "END";
})(exports.CollapseFrom || (exports.CollapseFrom = {}));
var CollapseFrom = exports.CollapseFrom;
var CollapsibleList = (function (_super) {
    __extends(CollapsibleList, _super);
    function CollapsibleList() {
        _super.apply(this, arguments);
    }
    CollapsibleList.prototype.render = function () {
        var _this = this;
        var collapseFrom = this.props.collapseFrom;
        var childrenLength = React.Children.count(this.props.children);
        var _a = this.partitionChildren(), visibleChildren = _a[0], collapsedChildren = _a[1];
        var visibleItems = visibleChildren.map(function (child, index) {
            var absoluteIndex = (collapseFrom === CollapseFrom.START ? childrenLength - 1 - index : index);
            return (React.createElement("li", {className: _this.props.visibleItemClassName, key: absoluteIndex}, _this.props.renderVisibleItem(child.props, absoluteIndex)));
        });
        if (collapseFrom === CollapseFrom.START) {
            // reverse START list so separators appear before items
            visibleItems.reverse();
        }
        // construct dropdown menu for collapsed items
        var collapsedPopover;
        if (collapsedChildren.length > 0) {
            var position = (collapseFrom === CollapseFrom.END ? position_1.Position.BOTTOM_RIGHT : position_1.Position.BOTTOM_LEFT);
            collapsedPopover = (React.createElement("li", {className: this.props.visibleItemClassName}, 
                React.createElement(popover_1.Popover, __assign({content: React.createElement(menu_1.Menu, null, collapsedChildren), position: position}, this.props.dropdownProps), this.props.dropdownTarget)
            ));
        }
        return (React.createElement("ul", {className: classNames(Classes.COLLAPSIBLE_LIST, this.props.className)}, 
            collapseFrom === CollapseFrom.START ? collapsedPopover : null, 
            visibleItems, 
            collapseFrom === CollapseFrom.END ? collapsedPopover : null));
    };
    // splits the list of children into two arrays: visible and collapsed
    CollapsibleList.prototype.partitionChildren = function () {
        if (this.props.children == null) {
            return [[], []];
        }
        var childrenArray = React.Children.map(this.props.children, function (child, index) {
            if (child.type !== menuItem_1.MenuItem) {
                throw new Error(Errors.COLLAPSIBLE_LIST_INVALID_CHILD);
            }
            return React.cloneElement(child, { key: "visible-" + index });
        });
        if (this.props.collapseFrom === CollapseFrom.START) {
            // reverse START list so we can always slice visible items from the front of the list
            childrenArray.reverse();
        }
        var visibleItemCount = this.props.visibleItemCount;
        return [
            childrenArray.slice(0, visibleItemCount),
            childrenArray.slice(visibleItemCount),
        ];
    };
    CollapsibleList.displayName = "Blueprint.CollapsibleList";
    CollapsibleList.defaultProps = {
        collapseFrom: CollapseFrom.START,
        dropdownTarget: null,
        renderVisibleItem: null,
        visibleItemCount: 3,
    };
    return CollapsibleList;
}(React.Component));
exports.CollapsibleList = CollapsibleList;
exports.CollapsibleListFactory = React.createFactory(CollapsibleList);

//# sourceMappingURL=collapsibleList.js.map
