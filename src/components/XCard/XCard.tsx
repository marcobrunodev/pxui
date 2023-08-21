import XCardTypes from './XCard.types'
import S from './XCard.styles'
import { BorderAnimation } from '../XContainer/XContainer'
import XButton from '../XButton'
import XBadges from '../XBadges'

const XCard = ({ titleContent, description, image, alt, onClick, borderAnimation, primary, success, warning, error, disabled, buttonProps, badges }: XCardTypes) => (
  <S.XCard simple borderAnimation={borderAnimation} primary={primary} success={success} warning={warning} error={error} disabled={disabled} onClick={onClick}>
    {badges && <XBadges {...badges} />}
    <S.Image src={image} alt={alt} />

    <S.Title>{titleContent}</S.Title>
    <S.Description>{description}</S.Description>
    {buttonProps && (
      <S.WrapperButton>
        <XButton {...buttonProps} />
      </S.WrapperButton>
    )}
    {borderAnimation && <BorderAnimation />}
  </S.XCard>
)

export default XCard