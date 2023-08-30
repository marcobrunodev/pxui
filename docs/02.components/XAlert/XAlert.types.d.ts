import { MouseEventHandler, ReactNode } from "react";
export type XAlertTypes = {
    children: ReactNode;
    handleClose: MouseEventHandler<HTMLImageElement>;
    isOpen: boolean;
    errorMessage: boolean | string;
    iconClose?: boolean;
    simple?: boolean;
    primary?: boolean;
    success?: boolean;
    warning?: boolean;
    error?: boolean;
    disabled?: boolean;
};
export default XAlertTypes;
