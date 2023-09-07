import { useState } from "react"

const useXInput = (argType: string) => {
  const isPassword = argType === 'password'
  const [show, setShow] = useState(false)
  const [type, setType] = useState(argType)

  const toggleShow = () => {
    if (type === 'password') {
      setShow(true)
      setType('text')
    } else {
      setShow(false)
      setType('password')
    }
  }

  return {
    isPassword,
    show,
    type,
    toggleShow
  }
}

export default useXInput