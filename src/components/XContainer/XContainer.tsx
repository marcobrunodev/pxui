import XContainerTypes from "./XContainer.types"
import S from './XContainer.styles'

export const BorderAnimation = () => (
  <>
    <S.XTop />
    <S.XRight />
    <S.XBottom />
    <S.XLeft />
  </>
)

const XContainer = ({ full, simple, titleAttr, borderAnimation, children, primary, success, warning, error }: XContainerTypes) => (
  <S.XContainer
    full={full}
    simple={simple}
    titleAttr={!!titleAttr}
    borderAnimation={borderAnimation}
    primary={primary}
    success={success}
    warning={warning}
    error={error}
  >
    {titleAttr && <S.XTitle>{titleAttr}</S.XTitle>}
    {children}
    {borderAnimation && <BorderAnimation />}
  </S.XContainer>
)

export default XContainer