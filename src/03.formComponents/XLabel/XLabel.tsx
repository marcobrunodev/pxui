import XLabelTypes from './XLabel.types'
import S from './XLabel.styles'

const XLabel = (props: XLabelTypes) => (
  <S.XLabel as="label" {...props} />
)

export default XLabel