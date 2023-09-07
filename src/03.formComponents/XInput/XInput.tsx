import XInputTypes from './XInput.types'
import XToggleEye from './XToggleEye'
import S from './XInput.styles'

const XInput = (props: XInputTypes) => props.isPassword ? (
  <S.Password show={props.show} type={props.type} isPassword={props.isPassword}>
    <S.XInput {...props} />
    <XToggleEye onClick={props.toggleShow} show={props.show} />
  </S.Password>
) : (
  <S.XInput {...props} />
)

export default XInput