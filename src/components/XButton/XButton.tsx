import { XButtonTypes } from './XButton.types'
import S from './XButton.styles'

const XButton = ({ children, primary, success, warning, error, disabled }: XButtonTypes) => (
  <S.XButton
    primary={primary}
    success={success}
    warning={warning}
    error={error}
    disabled={disabled}
  >
    {children}
  </S.XButton>
)

export default XButton