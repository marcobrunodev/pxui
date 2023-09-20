import DragAndDrop from './DragAndDrop'
import DragAndDropTypes from './DragAndDrop.types'
import useDragAndDrop from './useDragAndDrop'

export default (props: DragAndDropTypes) => {
  const {
    feedbackContent,
    isDragEnter,
    isDragOver,
    isDragLeave,
    handleDragEnter,
    handleDragOver,
    handleDragLeave,
    handleDrop
  } = useDragAndDrop({ children: props.children, overFeedbackContent: props.overFeedbackContent, inputRef: props.inputRef, multiple: props.multiple })

  return <DragAndDrop
    {...props}
    children={feedbackContent}
    isDragEnter={isDragEnter}
    isDragOver={isDragOver}
    isDragLeave={isDragLeave}
    onDragEnter={handleDragEnter}
    onDragOver={handleDragOver}
    onDragLeave={handleDragLeave}
    onDrop={handleDrop}
  />
}