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
var utils_1 = require("../../common/utils");
var treeNode_1 = require("./treeNode");
var Tree = (function (_super) {
    __extends(Tree, _super);
    function Tree() {
        var _this = this;
        _super.apply(this, arguments);
        this.handleNodeCollapse = function (node, e) {
            _this.handlerHelper(_this.props.onNodeCollapse, node, e);
        };
        this.handleNodeClick = function (node, e) {
            _this.handlerHelper(_this.props.onNodeClick, node, e);
        };
        this.handleNodeDoubleClick = function (node, e) {
            _this.handlerHelper(_this.props.onNodeDoubleClick, node, e);
        };
        this.handleNodeExpand = function (node, e) {
            _this.handlerHelper(_this.props.onNodeExpand, node, e);
        };
    }
    Tree.nodeFromPath = function (path, treeNodes) {
        if (path.length === 1) {
            return treeNodes[path[0]];
        }
        else {
            return Tree.nodeFromPath(path.slice(1), treeNodes[path[0]].childNodes);
        }
    };
    Tree.prototype.render = function () {
        return (React.createElement("div", {className: classNames(Classes.TREE, this.props.className)}, this.renderNodes(this.props.contents, [], Classes.TREE_ROOT)));
    };
    Tree.prototype.renderNodes = function (treeNodes, currentPath, className) {
        var _this = this;
        if (treeNodes == null) {
            return null;
        }
        var nodeItems = treeNodes.map(function (node, i) {
            var elementPath = currentPath.concat(i);
            return (React.createElement(treeNode_1.TreeNode, __assign({}, node, {key: node.id, depth: elementPath.length - 1, onClick: _this.handleNodeClick, onCollapse: _this.handleNodeCollapse, onDoubleClick: _this.handleNodeDoubleClick, onExpand: _this.handleNodeExpand, path: elementPath}), _this.renderNodes(node.childNodes, elementPath)));
        });
        return (React.createElement("ul", {className: classNames(Classes.TREE_NODE_LIST, className)}, nodeItems));
    };
    Tree.prototype.handlerHelper = function (handlerFromProps, node, e) {
        if (utils_1.isFunction(handlerFromProps)) {
            var nodeData = Tree.nodeFromPath(node.props.path, this.props.contents);
            handlerFromProps(nodeData, node.props.path, e);
        }
    };
    return Tree;
}(React.Component));
exports.Tree = Tree;
exports.TreeFactory = React.createFactory(Tree);

//# sourceMappingURL=tree.js.map
