import { DragEventHandler, RefObject } from "react";
declare const useDragAndDrop: ({ children, overFeedbackContent, inputRef, multiple }: {
    children?: string | undefined;
    overFeedbackContent?: string | undefined;
    inputRef?: RefObject<HTMLInputElement> | undefined;
    multiple?: boolean | undefined;
}) => {
    feedbackContent: string | undefined;
    isDragEnter: boolean;
    isDragLeave: boolean;
    isDragOver: boolean;
    handleDragEnter: DragEventHandler;
    handleDragOver: DragEventHandler;
    handleDragLeave: DragEventHandler;
    handleDrop: DragEventHandler;
};
export default useDragAndDrop;
