import { DragEventHandler, RefObject, useState } from "react"

const useDragAndDrop = ({ children, overFeedbackContent, inputRef, multiple }: { children?: string, overFeedbackContent?: string, inputRef?: RefObject<HTMLInputElement>, multiple?: boolean }) => {
  const [feedbackContent, setFeedbackContent] = useState(children)
  const [isDragEnter, setIsDragEnter] = useState(false)
  const [isDragLeave, setIsDragLeave] = useState(false)
  const [isDragOver, setIsDragOver] = useState(false)

  const handleDragEnter: DragEventHandler = (event) => {
    event.preventDefault()
    setIsDragEnter(true)
  }
  const handleDragOver: DragEventHandler = (event) => {
    event.preventDefault()
    setFeedbackContent(overFeedbackContent)
    setIsDragOver(true)
  }

  const handleDragLeave: DragEventHandler = (event) => {
    event.preventDefault()
    setFeedbackContent(children)
    setIsDragEnter(false)
    setIsDragOver(false)
    setIsDragLeave(true)
  }

  const handleDrop: DragEventHandler = (event) => {
    event.preventDefault()
    setFeedbackContent(children)
    setIsDragEnter(false)
    setIsDragOver(false)
    setIsDragLeave(true)

    const files = event.dataTransfer?.files

    if (!multiple && files.length > 1) return false

    if (inputRef && inputRef.current) {
      inputRef.current.files = files

      const changeEvent = new Event('change', {
        bubbles: true,
        cancelable: false
      })
      inputRef.current.dispatchEvent(changeEvent)
    }
  }

  return { feedbackContent, isDragEnter, isDragLeave, isDragOver, handleDragEnter, handleDragOver, handleDragLeave, handleDrop }
}

export default useDragAndDrop