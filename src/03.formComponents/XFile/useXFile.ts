import { AnimationEventHandler, ChangeEvent, ChangeEventHandler, MouseEventHandler, Ref, useRef, useState } from "react"

const useXFile = () => {
  const inputRef: Ref<HTMLInputElement> = useRef(null)
  const defaultFileName = 'No files'
  const [filesName, setFilesName] = useState<string>(defaultFileName)
  const [runningArrowAnimation, setRunningArrowAnimation] = useState(false)

  const handleChange: ChangeEventHandler = ({ target: { files } }: ChangeEvent<HTMLInputElement>) => {
    const amountFiles = files ? files?.length : 0
    if (files && amountFiles === 1) {
      setRunningArrowAnimation(true)
      setFilesName(files[0].name)
    } else if (files && amountFiles > 1) {
      setRunningArrowAnimation(true)
      setFilesName(`${amountFiles} files`)
    }
  }


  const handleAnimationend: AnimationEventHandler = () => {
    console.log('animationend')
    setRunningArrowAnimation(false)
  }

  const clear: MouseEventHandler<HTMLImageElement> = () => {
    if (inputRef.current) {
      setFilesName(defaultFileName)
      inputRef.current.value = ''
      inputRef.current.type = 'button'
      inputRef.current.type = 'file'
    }
  }

  return { inputRef, filesName, runningArrowAnimation, clear, handleChange, handleAnimationend }
}

export default useXFile