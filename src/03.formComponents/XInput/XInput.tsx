import XInputTypes from './XInput.types'
import S from './XInput.styles'
import XEye from '../../01.icons/XEye'
import XToggleEye from './XToggleEye'

const XInput = (props: XInputTypes) => props.isPassword ? (
  <S.Password show={props.show} type={props.type} isPassword={props.isPassword}>
    <S.XInput {...props} />
    <XToggleEye onClick={props.toggleShow} show={props.show} />
  </S.Password>
) : (
  <S.XInput {...props} />
)

export default XInput