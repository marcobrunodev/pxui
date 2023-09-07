import XEye from '../../../01.icons/XEye'
import XEyeClose from '../../../01.icons/XEyeClose'
import XToggleEyeTypes from './XToggleEye.types'

const XToggleEye = ({ onClick, show }: XToggleEyeTypes) => show ? (
  < XEyeClose onClick={onClick} />
) : (
  <XEye onClick={onClick} />
)

export default XToggleEye