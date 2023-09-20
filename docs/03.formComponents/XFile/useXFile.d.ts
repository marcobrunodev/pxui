import { AnimationEventHandler, ChangeEventHandler, MouseEventHandler, RefObject } from "react";
import XFileTypes from "./XFile.types";
declare const useXFile: ({ files }: Pick<XFileTypes, 'files'>) => {
    inputRef: RefObject<HTMLInputElement>;
    showFilesRef: RefObject<HTMLOutputElement>;
    carouselRef: RefObject<HTMLOutputElement>;
    filesName: string;
    runningArrowAnimation: boolean;
    moveAnimation: number;
    clear: MouseEventHandler<HTMLImageElement>;
    handleChange: ChangeEventHandler;
    handleAnimationend: AnimationEventHandler;
};
export default useXFile;
