import * as React from "react";
import { Position } from "../../common/position";
import { IIntentProps, IProps } from "../../common/props";
import { ITetherConstraint } from "../../common/tetherUtils";
export interface ITooltipProps extends IProps, IIntentProps {
    /**
     * The content that will be displayed inside of the tooltip.
     */
    content: JSX.Element | string;
    /**
     * Constraints for the underlying Tether instance.
     * @see http://github.hubspot.com/tether/#constraints
     */
    constraints?: ITetherConstraint[];
    /**
     * Whether the tooltip is initially open.
     * @default false
     */
    defaultIsOpen?: boolean;
    /**
     * The amount of time in milliseconds the tooltip should remain open after the
     * user hovers off the trigger. The timer is canceled if the user mouses over the
     * target before it expires.
     * @default 0
     */
    hoverCloseDelay?: number;
    /**
     * The amount of time in milliseconds the tooltip should wait before opening after the
     * user hovers over the trigger. The timer is canceled if the user mouses away from the
     * target before it expires.
     * @default 150
     */
    hoverOpenDelay?: number;
    /**
     * Whether the tooltip is rendered inline (as a sibling of the target element).
     * If false, it is attached to a new element appended to `<body>`.
     * @default false
     */
    inline?: boolean;
    /**
     * Prevents the tooltip from appearing when `true`.
     * @default false
     */
    isDisabled?: boolean;
    /**
     * Whether or not the tooltip is visible. Passing this property will put the tooltip in
     * controlled mode, where the only way to change visibility is by updating this property.
     * @default undefined
     */
    isOpen?: boolean;
    /**
     * Callback invoked in controlled mode when the tooltip open state *would* change due to
     * user interaction.
     */
    onInteraction?: (nextOpenState: boolean) => void;
    /**
     * Space-delimited string of class names applied to the
     * portal which holds the tooltip if `inline = false`.
     */
    portalClassName?: string;
    /**
     * The position (relative to the target) at which the tooltip should appear.
     * @default Position.TOP
     */
    position?: Position;
    /**
     * The name of the HTML tag to use when rendering the tooltip target wrapper element.
     * @default "span"
     */
    rootElementTag?: string;
    /**
     * A space-delimited string of class names that are applied to the tooltip (but not the target).
     */
    tooltipClassName?: string;
    /**
     * Indicates how long (in milliseconds) the tooltip's appear/disappear transition takes.
     * This is used by React `CSSTransitionGroup` to know when a transition completes
     * and must match the duration of the animation in CSS.
     * Only set this prop if you override Blueprint's default transitions with new transitions of a different length.
     * @default 100
     */
    transitionDuration?: number;
    /**
     * Whether the arrow's offset should be computed such that it always points at the center
     * of the target. If false, arrow position is hardcoded via CSS, which expects a 30px target.
     * @default true
     */
    useSmartArrowPositioning?: boolean;
    /**
     * Whether the tooltip will try to reposition itself
     * if there isn't room for it in its current position.
     * @default false
     */
    useSmartPositioning?: boolean;
}
export declare class Tooltip extends React.Component<ITooltipProps, {}> {
    static defaultProps: ITooltipProps;
    displayName: string;
    render(): JSX.Element;
}
export declare const TooltipFactory: React.ComponentFactory<ITooltipProps & {
    children?: React.ReactNode;
}, Tooltip>;
