import XFileTypes from './XFile.types'
import XFile from './XFile'
import useXFile from './useXFile'

export default (props: XFileTypes) => {
  const { inputRef, filesName, runningArrowAnimation, handleChange, clear, handleAnimationend } = useXFile()

  return <XFile {...props}
    inputRef={inputRef}
    clear={clear}
    files={filesName}
    runningArrowAnimation={runningArrowAnimation}
    onChange={handleChange}
    arrowOnAnimationend={handleAnimationend}
  />
}