import { AnimationEventHandler, ChangeEventHandler, MouseEventHandler, RefObject } from "react"
import DragAndDropTypes from "./DragAndDrop/DragAndDrop.types"

type XFileTypes = {
  children?: string,
  inputRef?: RefObject<HTMLInputElement>,
  showFilesRef: RefObject<HTMLOutputElement>,
  carouselRef: RefObject<HTMLSpanElement>,
  moveAnimation: number,
  files?: string,
  primary?: boolean,
  success?: boolean,
  warning?: boolean,
  error?: boolean,
  disabled?: boolean,
  runningArrowAnimation?: boolean,
  multiple?: boolean,
  dragAndDrop?: DragAndDropTypes,
  clear?: MouseEventHandler<HTMLImageElement>,
  onChange?: ChangeEventHandler,
  arrowOnAnimationend?: AnimationEventHandler
}

export default XFileTypes