import XBallonTypes from './XBallon.types'
import S from './XBallon.styles'

const XBallon = ({ children, full, primary, success, warning, error, disabled }: XBallonTypes) => (
  <S.XBallon full={full} primary={primary} success={success} warning={warning} error={error} disabled={disabled}>
    <S.XContent>{children}</S.XContent>
  </S.XBallon>
)

export default XBallon