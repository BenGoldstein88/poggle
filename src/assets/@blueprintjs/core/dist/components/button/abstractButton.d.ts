import * as React from "react";
import { IActionProps } from "../../common/props";
export interface IButtonProps extends IActionProps {
    /** A ref handler that receives the native HTML element backing this component. */
    elementRef?: (ref: HTMLElement) => any;
    /** Name of icon (the part after `pt-icon-`) to add to button. */
    rightIconName?: string;
    /**
     * If set to true, the button will display a centered loading spinner instead of its contents.
     * The width of the button is not affected by the value of this prop.
     * @default false
     */
    loading?: boolean;
}
export interface IButtonState {
    isActive: boolean;
}
export declare abstract class AbstractButton<T> extends React.Component<React.HTMLProps<T> & IButtonProps, IButtonState> {
    state: {
        isActive: boolean;
    };
    protected buttonRef: HTMLElement;
    protected refHandlers: {
        button: (ref: HTMLElement) => void;
    };
    abstract render(): JSX.Element;
    protected onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => void;
    protected onKeyUp: (e: React.KeyboardEvent<HTMLElement>) => void;
}
