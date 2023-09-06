import XFlagsTypes, { whatFlags } from './XFlags.types'
import S from './XFlags.styles'
import XTheUnitedKingdomFlag from '../XTheUnitedKingdomFlag'
import XBrazilFlag from '../XBrazilFlag'
import XLoadingFlag from '../XLoadingFlag'

const flags = {
  loading: <XLoadingFlag />,
  br: <XBrazilFlag />,
  uk: <XTheUnitedKingdomFlag />
}

const XFlags = (props: XFlagsTypes) => {
  const flagTrue: whatFlags[] = Object.keys(props).filter(key => props[key as keyof XFlagsTypes] === true) as whatFlags[]

  return (
    <S.XFlags>
      {flags[flagTrue[0]] || flags.loading}
    </S.XFlags>
  )
}

export default XFlags