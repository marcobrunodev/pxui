import XFlagsTypes, { whatFlags } from './XFlags.types'
import S from './XFlags.styles'
import XTheUnitedKingdomFlag from '../XTheUnitedKingdomFlag'
import XBrazilFlag from '../XBrazilFlag'

const flags = {
  br: <XBrazilFlag />,
  uk: <XTheUnitedKingdomFlag />
}

const XFlags = (props: XFlagsTypes) => {
  const flagTrue: whatFlags[] = Object.keys(props).filter(key => props[key as keyof XFlagsTypes] === true) as whatFlags[]
  console.log('flagsTrue', flagTrue)

  return (
    <S.XFlags>
      {flags[flagTrue[0]]}
    </S.XFlags>
  )
}

export default XFlags