/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var intent_1 = require("./intent");
// modifiers
exports.DARK = "pt-dark";
exports.ACTIVE = "pt-active";
exports.MINIMAL = "pt-minimal";
exports.DISABLED = "pt-disabled";
exports.SMALL = "pt-small";
exports.LARGE = "pt-large";
exports.LOADING = "pt-loading";
exports.INTERACTIVE = "pt-interactive";
exports.ALIGN_LEFT = "pt-align-left";
exports.ALIGN_RIGHT = "pt-align-right";
exports.INLINE = "pt-inline";
exports.FILL = "pt-fill";
// components
exports.ALERT = "pt-alert";
exports.ALERT_BODY = "pt-alert-body";
exports.ALERT_CONTENTS = "pt-alert-contents";
exports.ALERT_FOOTER = "pt-alert-footer";
exports.BREADCRUMB = "pt-breadcrumb";
exports.BREADCRUMB_CURRENT = "pt-breadcrumb-current";
exports.BREADCRUMBS = "pt-breadcrumbs";
exports.BREADCRUMBS_COLLAPSED = "pt-breadcrumbs-collapsed";
exports.BUTTON = "pt-button";
exports.BUTTON_GROUP = "pt-button-group";
exports.CARD = "pt-card";
exports.COLLAPSE = "pt-collapse";
exports.COLLAPSIBLE_LIST = "pt-collapse-list";
exports.CONTEXT_MENU = "pt-context-menu";
exports.CONTEXT_MENU_POPOVER_TARGET = "pt-context-menu-popover-target";
exports.CONTROL = "pt-control";
exports.CONTROL_INDICATOR = "pt-control-indicator";
exports.DIALOG = "pt-dialog";
exports.DIALOG_BODY = "pt-dialog-body";
exports.DIALOG_CLOSE_BUTTON = "pt-dialog-close-button";
exports.DIALOG_FOOTER = "pt-dialog-footer";
exports.DIALOG_FOOTER_ACTIONS = "pt-dialog-footer-actions";
exports.DIALOG_HEADER = "pt-dialog-header";
exports.EDITABLE_TEXT = "pt-editable-text";
exports.ELEVATION_0 = "pt-elevation-0";
exports.ELEVATION_1 = "pt-elevation-1";
exports.ELEVATION_2 = "pt-elevation-2";
exports.ELEVATION_3 = "pt-elevation-3";
exports.ELEVATION_4 = "pt-elevation-4";
exports.INPUT = "pt-input";
exports.INPUT_GROUP = "pt-input-group";
exports.LABEL = "pt-label";
exports.MENU = "pt-menu";
exports.MENU_ITEM = "pt-menu-item";
exports.MENU_SUBMENU = "pt-submenu";
exports.MENU_DIVIDER = "pt-menu-divider";
exports.MENU_HEADER = "pt-menu-header";
exports.NON_IDEAL_STATE = "pt-non-ideal-state";
exports.NON_IDEAL_STATE_ACTION = "pt-non-ideal-state-action";
exports.NON_IDEAL_STATE_DESCRIPTION = "pt-non-ideal-state-description";
exports.NON_IDEAL_STATE_ICON = "pt-non-ideal-state-icon";
exports.NON_IDEAL_STATE_TITLE = "pt-non-ideal-state-title";
exports.NON_IDEAL_STATE_VISUAL = "pt-non-ideal-state-visual";
exports.OVERLAY = "pt-overlay";
exports.OVERLAY_BACKDROP = "pt-overlay-backdrop";
exports.OVERLAY_CONTENT = "pt-overlay-content";
exports.OVERLAY_INLINE = "pt-overlay-inline";
exports.OVERLAY_OPEN = "pt-overlay-open";
exports.OVERLAY_SCROLL_CONTAINER = "pt-overlay-scroll-container";
exports.POPOVER = "pt-popover";
exports.POPOVER_ARROW = "pt-popover-arrow";
exports.POPOVER_BACKDROP = "pt-popover-backdrop";
exports.POPOVER_CONTENT = "pt-popover-content";
exports.POPOVER_DISMISS = "pt-popover-dismiss";
exports.POPOVER_DISMISS_OVERRIDE = "pt-popover-dismiss-override";
exports.POPOVER_OPEN = "pt-popover-open";
exports.POPOVER_TARGET = "pt-popover-target";
exports.TRANSITION_CONTAINER = "pt-transition-container";
exports.PORTAL = "pt-portal";
exports.SELECT = "pt-select";
exports.SKELETON = "pt-skeleton";
exports.SLIDER = "pt-slider";
exports.SLIDER_HANDLE = exports.SLIDER + "-handle";
exports.SLIDER_LABEL = exports.SLIDER + "-label";
exports.RANGE_SLIDER = "pt-range-slider";
exports.SPINNER = "pt-spinner";
exports.SVG_SPINNER = "pt-svg-spinner";
exports.TAB = "pt-tab";
exports.TAB_LIST = "pt-tab-list";
exports.TAB_PANEL = "pt-tab-panel";
exports.TABS = "pt-tabs";
exports.TAG = "pt-tag";
exports.TAG_REMOVABLE = "pt-tag-removable";
exports.TAG_REMOVE = "pt-tag-remove";
exports.TOAST = "pt-toast";
exports.TOAST_CONTAINER = "pt-toast-container";
exports.TOAST_MESSAGE = "pt-toast-message";
exports.TOOLTIP = "pt-tooltip";
exports.TREE = "pt-tree";
exports.TREE_NODE = "pt-tree-node";
exports.TREE_NODE_CARET = "pt-tree-node-caret";
exports.TREE_NODE_CARET_CLOSED = "pt-tree-node-caret-closed";
exports.TREE_NODE_CARET_NONE = "pt-tree-node-caret-none";
exports.TREE_NODE_CARET_OPEN = "pt-tree-node-caret-open";
exports.TREE_NODE_CONTENT = "pt-tree-node-content";
exports.TREE_NODE_EXPANDED = "pt-tree-node-expanded";
exports.TREE_NODE_ICON = "pt-tree-node-icon";
exports.TREE_NODE_LABEL = "pt-tree-node-label";
exports.TREE_NODE_LIST = "pt-tree-node-list";
exports.TREE_NODE_SECONDARY_LABEL = "pt-tree-node-secondary-label";
exports.TREE_NODE_SELECTED = "pt-tree-node-selected";
exports.TREE_ROOT = "pt-tree-root";
exports.ICON_STANDARD = "pt-icon-standard";
exports.ICON_LARGE = "pt-icon-large";
/** Return CSS class for icon, whether or not 'pt-icon-' prefix is included */
function iconClass(iconName) {
    if (iconName == null) {
        return undefined;
    }
    return iconName.indexOf("pt-icon-") === 0 ? iconName : "pt-icon-" + iconName;
}
exports.iconClass = iconClass;
function intentClass(intent) {
    if (intent === void 0) { intent = intent_1.Intent.NONE; }
    if (intent === intent_1.Intent.NONE || intent_1.Intent[intent] == null) {
        return undefined;
    }
    return "pt-intent-" + intent_1.Intent[intent].toLowerCase();
}
exports.intentClass = intentClass;

//# sourceMappingURL=classes.js.map
