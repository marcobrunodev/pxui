import XFlagsTypes from './XFlags.types'
import S from './XFlags.styles'
import XTheUnitedKingdomFlag from '../XTheUnitedKingdomFlag'
import XBrazilFlag from '../XBrazilFlag'

const flags = {
  br: <XBrazilFlag />,
  uk: <XTheUnitedKingdomFlag />
}

const XFlags = (props: XFlagsTypes) => {
  const flagTrue = Object.keys(props).filter(key => props[key as keyof XFlagsTypes] === true)
  console.log('flagsTrue', flagTrue)

  return (
    <S.XFlags>
      {flags[flagTrue[0]]}
    </S.XFlags>
  )
}

export default XFlags