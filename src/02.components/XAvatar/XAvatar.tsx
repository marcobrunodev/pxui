import XAvatarTypes from './XAvatar.types'
import S from './XAvatar.styles'

const XAvatar = ({ src, alt, primary, success, warning, error, disabled }: XAvatarTypes) => (
  <S.XAvatar primary={primary} success={success} warning={warning} error={error} disabled={disabled}>
    <S.Image src={src} alt={alt} />
  </S.XAvatar>
)

export default XAvatar