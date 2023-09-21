import XInput from './XInput'
import XInputTypes from './XInput.types'
import useXInput from './useXInput'

export default (props: XInputTypes) => {
  const { show, type, isPassword, toggleShow } = useXInput(props.type)

  return (
    <XInput
      {...props}
      show={show}
      type={type || 'text'}
      isPassword={isPassword}
      toggleShow={toggleShow}
    />
  )
}