import XBalloonTypes from './XBalloon.types'
import S from './XBalloon.styles'

const XBalloon = ({ children, full, primary, success, warning, error, disabled }: XBalloonTypes) => (
  <S.XBalloon full={full} primary={primary} success={success} warning={warning} error={error} disabled={disabled}>
    <S.XContent>{children}</S.XContent>
  </S.XBalloon>
)

export default XBalloon