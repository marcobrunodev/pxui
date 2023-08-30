import { ReactNode } from 'react'
import XTextTypes from '../XText/XText.types'

export type XContainerTypes = {
  children: ReactNode,
  full?: boolean,
  titleAttr?: XTextTypes,
  simple?: boolean,
  borderAnimation?: boolean,
  primary?: boolean,
  success?: boolean,
  warning?: boolean,
  error?: boolean,
  disabled?: boolean
}

export default XContainerTypes