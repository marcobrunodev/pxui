import eye from '../../assets/icons/eye.png'
import S from './XEye.styles'
import XEyeTypes from './XEye.types'

const XEye = (props: XEyeTypes) => (
  <S.XEye {...props} src={eye} alt='Eye icon' />
)

export default XEye