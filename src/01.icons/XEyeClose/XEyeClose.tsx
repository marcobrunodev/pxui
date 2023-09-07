import eyeClose from '../../assets/icons/eye-close.png'
import S from './XEyeClose.styles'
import XEyeCloseTypes from './XEyeClose.types'

const XEyeClose = (props: XEyeCloseTypes) => (
  <S.XEyeClose {...props} src={eyeClose} alt='Eye close icon' />
)

export default XEyeClose