import XBadgesTypes from './XBadges.types'
import S from './XBadges.styles'

const XBadges = ({ label, content, primary, success, warning, error, disabled, onClick }: XBadgesTypes) => (
  <S.XBadges onClick={onClick}>
    {label && <S.Label>{label}</S.Label>}
    <S.Content primary={primary} success={success} warning={warning} error={error} disabled={disabled} label={label}>{content}</S.Content>
  </S.XBadges>
)

export default XBadges