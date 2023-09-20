import XFileTypes from './XFile.types'
import XFile from './XFile'
import useXFile from './useXFile'

export default (props: XFileTypes) => {
  const { inputRef, showFilesRef, carouselRef, filesName, runningArrowAnimation, moveAnimation, handleChange, clear, handleAnimationend } = useXFile({ files: props.files })

  return <XFile {...props}
    inputRef={inputRef}
    showFilesRef={showFilesRef}
    carouselRef={carouselRef}
    clear={clear}
    files={filesName}
    runningArrowAnimation={runningArrowAnimation}
    onChange={handleChange}
    arrowOnAnimationend={handleAnimationend}
    moveAnimation={moveAnimation}
  />
}