import { AnimationEventHandler, ChangeEventHandler, MouseEventHandler, Ref } from "react";
type XFileTypes = {
    children?: string;
    files?: string;
    primary?: boolean;
    success?: boolean;
    warning?: boolean;
    error?: boolean;
    disabled?: boolean;
    inputRef?: Ref<HTMLInputElement>;
    runningArrowAnimation?: boolean;
    multiple?: boolean;
    clear?: MouseEventHandler<HTMLImageElement>;
    onChange?: ChangeEventHandler;
    arrowOnAnimationend?: AnimationEventHandler;
};
export default XFileTypes;
