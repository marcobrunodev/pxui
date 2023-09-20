import { AnimationEventHandler, ChangeEvent, ChangeEventHandler, MouseEventHandler, RefObject, useEffect, useRef, useState } from "react"
import XFileTypes from "./XFile.types"

const useXFile = ({ files }: Pick<XFileTypes, 'files'>) => {
  const inputRef: RefObject<HTMLInputElement> = useRef(null)
  const showFilesRef: RefObject<HTMLOutputElement> = useRef(null)
  const carouselRef: RefObject<HTMLOutputElement> = useRef(null)
  const defaultFileName = files || ''
  const [filesName, setFilesName] = useState<string>(defaultFileName)
  const [runningArrowAnimation, setRunningArrowAnimation] = useState(false)
  const [showFilesWidth, setShowFilesWidth] = useState<number>(0)
  const [carouselWidth, setCarouselWidth] = useState<number>(0)
  const [moveAnimation, setMoveAnimation] = useState<number>(0)

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

  const handleAnimationend: AnimationEventHandler = () => setRunningArrowAnimation(false)

  const clear: MouseEventHandler<HTMLImageElement> = () => {
    if (inputRef.current) {
      setFilesName(defaultFileName)
      inputRef.current.value = ''
      inputRef.current.type = 'button'
      inputRef.current.type = 'file'
    }
  }

  useEffect(() => {
    const $showFile = showFilesRef.current

    if ($showFile) {
      const width = $showFile.offsetWidth
      $showFile.style.width = width + 'px'
      setShowFilesWidth(width)
    }
  }, [])

  useEffect(() => {
    if (carouselRef.current) setCarouselWidth(carouselRef.current?.offsetWidth)
  }, [filesName])

  useEffect(() => {
    setMoveAnimation(carouselWidth - showFilesWidth)
  }, [showFilesWidth, carouselWidth])

  return { inputRef, showFilesRef, carouselRef, filesName, runningArrowAnimation, moveAnimation, clear, handleChange, handleAnimationend }
}

export default useXFile