import XArrow from '../../01.icons/XArrow'
import S from './XRadio.styles'
import XRadioTypes from './XRadio.types'

const XRadio = ({ name, value, children, checked = false, onClick }: XRadioTypes) => (
  <S.XRadio onClick={onClick}>
    <S.RadioHtml value={value} name={name} checked={checked} />
    <S.Content >
      <XArrow />
      <S.Children>{children}</S.Children>
    </S.Content>
  </S.XRadio>
)

export default XRadio
