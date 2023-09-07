import { HTMLInputTypeAttribute, MouseEventHandler } from 'react';
export type XInputTypes = {
    type: HTMLInputTypeAttribute;
    simple?: boolean;
    primary?: boolean;
    success?: boolean;
    warning?: boolean;
    error?: boolean;
    disabled?: boolean;
    show?: boolean;
    toggleShow?: MouseEventHandler;
};
export default XInputTypes;
