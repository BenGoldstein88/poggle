import { ReactNode } from "react";
import { IHotkeyProps } from "./hotkey";
import { IKeyCombo } from "./hotkeyParser";
import { IHotkeysProps } from "./hotkeys";
export declare enum HotkeyScope {
    LOCAL = 0,
    GLOBAL = 1,
}
export interface IHotkeyAction {
    combo: IKeyCombo;
    props: IHotkeyProps;
}
export declare class HotkeysEvents {
    private scope;
    private actions;
    constructor(scope: HotkeyScope);
    count(): number;
    clear(): void;
    setHotkeys(props: IHotkeysProps & {
        children: ReactNode[];
    }): void;
    handleKeyDown: (e: KeyboardEvent) => void;
    handleKeyUp: (e: KeyboardEvent) => void;
    private isScope(props);
    private isTextInput(e);
}
