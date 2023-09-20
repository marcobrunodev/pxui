import { DragEventHandler, RefObject } from "react"

export type DragAndDropTypes = {
  children?: string,
  overFeedbackContent?: string,
  active?: boolean,
  inputRef?: RefObject<HTMLInputElement>,
  isDragEnter?: boolean,
  isDragOver?: boolean,
  isDragLeave?: boolean
  multiple?: boolean,
  onDrop?: DragEventHandler<HTMLDivElement>,
  onDragEnter?: DragEventHandler<HTMLDivElement>,
  onDragOver?: DragEventHandler<HTMLDivElement>,
  onDragLeave?: DragEventHandler<HTMLDivElement>,
}

export default DragAndDropTypes