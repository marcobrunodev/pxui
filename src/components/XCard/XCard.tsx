import XCardTypes from './XCard.types'
import S from './XCard.styles'
import { BorderAnimation } from '../XContainer/XContainer'

const XCard = ({ titleContent, description, image, alt, borderAnimation = false, primary }: XCardTypes) => (
  <S.XCard simple borderAnimation={borderAnimation} primary={primary}>
    <S.WrapperImage>
      <S.Image src={image} alt={alt} />
    </S.WrapperImage>

    <S.Title>{titleContent}</S.Title>
    <S.Description>{description}</S.Description>
    {borderAnimation && <BorderAnimation />}
  </S.XCard>
)

export default XCard