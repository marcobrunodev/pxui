import XFieldsetTypes from './XFieldset.types'
import XLabel from '../XLabel'
import S from './XFieldset.styles'
import XInput from '../XInput'
import XArrow from '../../01.icons/XArrow'

const XFieldset = ({ label, input }: XFieldsetTypes) => (
  <S.XFieldset>
    <XInput {...input} />
    <XLabel {...label} />
    <XArrow />
  </S.XFieldset>
)

export default XFieldset