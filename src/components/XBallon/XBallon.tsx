import XBallonTypes from './XBallon.types'
import S from './XBallon.styles'

const XBallon = ({ children, full }: XBallonTypes) => (
  <S.XBallon full={full}>
    <S.XContent>{children}</S.XContent>
  </S.XBallon>
)

export default XBallon