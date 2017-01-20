/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var ns = "[Blueprint]";
var deprec = ns + " DEPRECATION:";
function deprecationWarning(oldName, newName, message) {
    if (message === void 0) { message = ""; }
    return deprec + " '" + oldName + "' prop has been replaced by the '" + newName + "' prop. " + message + "\nIt will be removed in the next major version of blueprint.";
}
exports.deprecationWarning = deprecationWarning;
exports.ALERT_CANCEL_PROPS = ns + " If either cancelButtonText or onCancel are set in <Alert>, both must be set.";
exports.DEPRECATION_SHOULD_ATTACH_TO_BODY = deprecationWarning("shouldAttachToBody", "inline");
exports.COLLAPSIBLE_LIST_INVALID_CHILD = ns + " <CollapsibleList> children must be <MenuItem>s";
exports.MENU_CHILDREN_SUBMENU_MUTEX = ns + " <MenuItem> children and submenu props are mutually exclusive";
exports.POPOVER_ONE_CHILD = ns + " <Popover> requires exactly one target element";
exports.POPOVER_CONTROLLED_DISABLED = ns + " <Popover> isOpen and isDisabled props are mutually exclusive";
exports.POPOVER_UNCONTROLLED_ONINTERACTION = ns + " <Popover> onInteraction is ignored when uncontrolled";
exports.POPOVER_MODAL_INLINE = ns + " <Popover isModal={true}> requires inline={false}.";
exports.POPOVER_MODAL_INTERACTION = ns + " <Popover isModal={true}> requires interactionKind={PopoverInteractionKind.CLICK}.";
exports.POPOVER_SMART_POSITIONING_INLINE = "{ns} <Popover useSmartPositioning={true}> requires inline={false}.";
exports.RADIOGROUP_RADIO_CHILDREN = ns + " <RadioGroup> only supports <Radio> children";
exports.RADIOGROUP_CHILDREN_OPTIONS_MUTEX = ns + " <RadioGroup> children and options props are mutually exclusive.";
exports.RANGESLIDER_NULL_VALUE = ns + " <RangeSlider> value prop must be an array of two non-null numbers";
exports.TABS_FIRST_CHILD = ns + " First child of <Tabs> component should be a <TabList>";
exports.TABS_MISMATCH = ns + " Number of <Tab> components should equal number of <TabPanel> components";
exports.TOASTER_INLINE_WARNING = ns + " Toaster.create() ignores inline prop as it always creates a new element";
exports.WARNING_DIALOG_NO_HEADER_ICON = ns + " Warning: Dialog iconName prop is ignored if title prop is omitted";
exports.WARNING_DIALOG_NO_HEADER_CLOSE_BUTTON = ns + " Warning: Dialog isCloseButtonShown prop is ignored if title prop is omitted";

//# sourceMappingURL=errors.js.map
