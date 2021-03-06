import * as React from "react";
import { AbstractButton, IButtonProps } from "./abstractButton";
export declare class Button extends AbstractButton<HTMLButtonElement> {
    static displayName: string;
    render(): JSX.Element;
}
export declare const ButtonFactory: React.ComponentFactory<React.HTMLProps<HTMLButtonElement> & IButtonProps & {
    children?: React.ReactNode;
}, Button>;
export declare class AnchorButton extends AbstractButton<HTMLButtonElement> {
    static displayName: string;
    render(): JSX.Element;
}
export declare const AnchorButtonFactory: React.ComponentFactory<React.HTMLProps<HTMLButtonElement> & IButtonProps & {
    children?: React.ReactNode;
}, AnchorButton>;
