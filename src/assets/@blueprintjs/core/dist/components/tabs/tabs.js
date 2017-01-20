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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var classNames = require("classnames");
var PureRender = require("pure-render-decorator");
var React = require("react");
var react_dom_1 = require("react-dom");
var abstractComponent_1 = require("../../common/abstractComponent");
var Classes = require("../../common/classes");
var Errors = require("../../common/errors");
var Keys = require("../../common/keys");
var Utils = require("../../common/utils");
var tab_1 = require("./tab");
var tabList_1 = require("./tabList");
var tabPanel_1 = require("./tabPanel");
var TAB_CSS_SELECTOR = "li[role=tab]";
var Tabs = (function (_super) {
    __extends(Tabs, _super);
    function Tabs(props, context) {
        var _this = this;
        _super.call(this, props, context);
        this.displayName = "Blueprint.Tabs";
        // state is initialized in the constructor but getStateFromProps needs state defined
        this.state = {};
        this.panelIds = [];
        this.tabIds = [];
        this.handleClick = function (e) {
            _this.handleTabSelectingEvent(e);
        };
        this.handleKeyPress = function (e) {
            var insideTab = e.target.closest("." + Classes.TAB) != null;
            if (insideTab && (e.which === Keys.SPACE || e.which === Keys.ENTER)) {
                e.preventDefault();
                _this.handleTabSelectingEvent(e);
            }
        };
        this.handleKeyDown = function (e) {
            // don't want to handle keyDown events inside a tab panel
            var insideTabList = e.target.closest("." + Classes.TAB_LIST) != null;
            if (!insideTabList) {
                return;
            }
            var focusedTabIndex = _this.getFocusedTabIndex();
            if (focusedTabIndex === -1) {
                return;
            }
            if (e.which === Keys.ARROW_LEFT) {
                e.preventDefault();
                // find previous tab that isn't disabled
                var newTabIndex = focusedTabIndex - 1;
                var tabIsDisabled = _this.isTabDisabled(newTabIndex);
                while (tabIsDisabled && newTabIndex !== -1) {
                    newTabIndex--;
                    tabIsDisabled = _this.isTabDisabled(newTabIndex);
                }
                if (newTabIndex !== -1) {
                    _this.focusTab(newTabIndex);
                }
            }
            else if (e.which === Keys.ARROW_RIGHT) {
                e.preventDefault();
                // find next tab that isn't disabled
                var tabsCount = _this.getTabsCount();
                var newTabIndex = focusedTabIndex + 1;
                var tabIsDisabled = _this.isTabDisabled(newTabIndex);
                while (tabIsDisabled && newTabIndex !== tabsCount) {
                    newTabIndex++;
                    tabIsDisabled = _this.isTabDisabled(newTabIndex);
                }
                if (newTabIndex !== tabsCount) {
                    _this.focusTab(newTabIndex);
                }
            }
        };
        this.handleTabSelectingEvent = function (e) {
            var tabElement = e.target.closest(TAB_CSS_SELECTOR);
            // select only if Tab is one of us and is enabled
            if (tabElement != null
                && _this.tabIds.indexOf(tabElement.id) >= 0
                && tabElement.getAttribute("aria-disabled") !== "true") {
                var index = tabElement.parentElement.queryAll(TAB_CSS_SELECTOR).indexOf(tabElement);
                _this.setSelectedTabIndex(index);
            }
        };
        this.state = this.getStateFromProps(this.props);
    }
    Tabs.prototype.render = function () {
        return (React.createElement("div", {className: classNames(Classes.TABS, this.props.className), onClick: this.handleClick, onKeyPress: this.handleKeyPress, onKeyDown: this.handleKeyDown}, this.getChildren()));
    };
    Tabs.prototype.componentWillReceiveProps = function (newProps) {
        var newState = this.getStateFromProps(newProps);
        var newIndex = newState.selectedTabIndex;
        if (newIndex !== this.state.selectedTabIndex) {
            this.setSelectedTabIndex(newIndex);
        }
        this.setState(newState);
    };
    Tabs.prototype.componentDidMount = function () {
        var _this = this;
        var selectedTab = react_dom_1.findDOMNode(this.refs[("tabs-" + this.state.selectedTabIndex)]);
        this.setTimeout(function () { return _this.moveIndicator(selectedTab); });
    };
    Tabs.prototype.componentDidUpdate = function (_, prevState) {
        var _this = this;
        var newIndex = this.state.selectedTabIndex;
        if (newIndex !== prevState.selectedTabIndex) {
            var tabElement_1 = react_dom_1.findDOMNode(this.refs[("tabs-" + newIndex)]);
            // need to measure on the next frame in case the Tab children simultaneously change
            this.setTimeout(function () { return _this.moveIndicator(tabElement_1); });
        }
    };
    Tabs.prototype.validateProps = function (props) {
        if (React.Children.count(props.children) > 0) {
            var child = React.Children.toArray(props.children)[0];
            if (child != null && child.type !== tabList_1.TabList) {
                throw new Error(Errors.TABS_FIRST_CHILD);
            }
            if (this.getTabsCount() !== this.getPanelsCount()) {
                throw new Error(Errors.TABS_MISMATCH);
            }
        }
    };
    /**
     * Calculate the new height, width, and position of the tab indicator.
     * Store the CSS values so the transition animation can start.
     */
    Tabs.prototype.moveIndicator = function (_a) {
        var clientHeight = _a.clientHeight, clientWidth = _a.clientWidth, offsetLeft = _a.offsetLeft, offsetTop = _a.offsetTop;
        var indicatorWrapperStyle = {
            height: clientHeight,
            transform: "translateX(" + Math.floor(offsetLeft) + "px) translateY(" + Math.floor(offsetTop) + "px)",
            width: clientWidth,
        };
        this.setState({ indicatorWrapperStyle: indicatorWrapperStyle });
    };
    /**
     * Most of the component logic lives here. We clone the children provided by the user to set up refs,
     * accessibility attributes, and selection props correctly.
     */
    Tabs.prototype.getChildren = function () {
        var _this = this;
        for (var unassignedTabs = this.getTabsCount() - this.tabIds.length; unassignedTabs > 0; unassignedTabs--) {
            this.tabIds.push(generateTabId());
            this.panelIds.push(generatePanelId());
        }
        var childIndex = 0;
        return React.Children.map(this.props.children, function (child) {
            var result;
            // can be null if conditionally rendering TabList / TabPanel
            if (child == null) {
                return null;
            }
            if (childIndex === 0) {
                // clone TabList / Tab elements
                result = _this.cloneTabList(child);
            }
            else {
                var tabPanelIndex = childIndex - 1;
                var shouldRenderTabPanel = _this.state.selectedTabIndex === tabPanelIndex;
                result = shouldRenderTabPanel ? _this.cloneTabPanel(child, tabPanelIndex) : null;
            }
            childIndex++;
            return result;
        });
    };
    Tabs.prototype.cloneTabList = function (child) {
        var _this = this;
        var tabIndex = 0;
        var tabs = React.Children.map(child.props.children, function (tab) {
            // can be null if conditionally rendering Tab
            if (tab == null) {
                return null;
            }
            var clonedTab = React.cloneElement(tab, {
                id: _this.tabIds[tabIndex],
                isSelected: _this.state.selectedTabIndex === tabIndex,
                panelId: _this.panelIds[tabIndex],
                ref: "tabs-" + tabIndex,
            });
            tabIndex++;
            return clonedTab;
        });
        return React.cloneElement(child, {
            children: tabs,
            indicatorWrapperStyle: this.state.indicatorWrapperStyle,
            ref: "tablist",
        });
    };
    Tabs.prototype.cloneTabPanel = function (child, tabIndex) {
        return React.cloneElement(child, {
            id: this.panelIds[tabIndex],
            isSelected: this.state.selectedTabIndex === tabIndex,
            ref: "panels-" + tabIndex,
            tabId: this.tabIds[tabIndex],
        });
    };
    Tabs.prototype.focusTab = function (index) {
        var ref = "tabs-" + index;
        var tab = react_dom_1.findDOMNode(this.refs[ref]);
        tab.focus();
    };
    Tabs.prototype.getFocusedTabIndex = function () {
        var focusedElement = document.activeElement;
        if (focusedElement != null && focusedElement.classList.contains(Classes.TAB)) {
            var tabId = focusedElement.id;
            return this.tabIds.indexOf(tabId);
        }
        return -1;
    };
    Tabs.prototype.getTabs = function () {
        if (this.props.children == null) {
            return [];
        }
        var tabs = [];
        if (React.Children.count(this.props.children) > 0) {
            var firstChild = React.Children.toArray(this.props.children)[0];
            if (firstChild != null) {
                React.Children.forEach(firstChild.props.children, function (tabListChild) {
                    if (tabListChild.type === tab_1.Tab) {
                        tabs.push(tabListChild);
                    }
                });
            }
        }
        return tabs;
    };
    Tabs.prototype.getTabsCount = function () {
        return this.getTabs().length;
    };
    Tabs.prototype.getPanelsCount = function () {
        if (this.props.children == null) {
            return 0;
        }
        var index = 0;
        var panelCount = 0;
        React.Children.forEach(this.props.children, function (child) {
            if (child.type === tabPanel_1.TabPanel) {
                panelCount++;
            }
            index++;
        });
        return panelCount;
    };
    Tabs.prototype.getStateFromProps = function (props) {
        var selectedTabIndex = props.selectedTabIndex, initialSelectedTabIndex = props.initialSelectedTabIndex;
        if (this.isValidTabIndex(selectedTabIndex)) {
            return { selectedTabIndex: selectedTabIndex };
        }
        else if (this.isValidTabIndex(initialSelectedTabIndex) && this.state.selectedTabIndex == null) {
            return { selectedTabIndex: initialSelectedTabIndex };
        }
        else {
            return this.state;
        }
    };
    Tabs.prototype.isTabDisabled = function (index) {
        var tab = this.getTabs()[index];
        return tab != null && tab.props.isDisabled;
    };
    Tabs.prototype.isValidTabIndex = function (index) {
        return index != null && index >= 0 && index < this.getTabsCount();
    };
    /**
     * Updates the component's state if uncontrolled and calls onChange.
     */
    Tabs.prototype.setSelectedTabIndex = function (index) {
        if (index === this.state.selectedTabIndex || !this.isValidTabIndex(index)) {
            return;
        }
        var prevSelectedIndex = this.state.selectedTabIndex;
        if (this.props.selectedTabIndex == null) {
            this.setState({
                selectedTabIndex: index,
            });
        }
        if (Utils.isFunction(this.props.onChange)) {
            this.props.onChange(index, prevSelectedIndex);
        }
    };
    Tabs.defaultProps = {
        initialSelectedTabIndex: 0,
    };
    Tabs = __decorate([
        PureRender
    ], Tabs);
    return Tabs;
}(abstractComponent_1.AbstractComponent));
exports.Tabs = Tabs;
var tabCount = 0;
function generateTabId() {
    return "pt-tab-" + tabCount++;
}
var panelCount = 0;
function generatePanelId() {
    return "pt-tab-panel-" + panelCount++;
}
exports.TabsFactory = React.createFactory(Tabs);

//# sourceMappingURL=tabs.js.map
