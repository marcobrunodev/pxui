import { AnimationEventHandler, ChangeEventHandler, MouseEventHandler } from "react";
declare const useXFile: () => {
    inputRef: import("react").RefObject<HTMLInputElement>;
    filesName: string;
    runningArrowAnimation: boolean;
    clear: MouseEventHandler<HTMLImageElement>;
    handleChange: ChangeEventHandler;
    handleAnimationend: AnimationEventHandler;
};
export default useXFile;
