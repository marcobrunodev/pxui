import eye from '../../assets/icons/eye.png'
import S from './XEye.styles'

const XEye = (props: HTMLImageElement) => (
  <S.XEye {...props} src={eye} alt='Eye icon' />
)

export default XEye