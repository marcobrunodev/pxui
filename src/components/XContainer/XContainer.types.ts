import { ReactNode } from 'react'

export type XContainerTypes = {
  children: ReactNode,
  full?: boolean,
  titleAttr?: string | boolean,
  simple?: boolean,
  borderAnimation?: boolean,
  primary?: boolean,
  success?: boolean,
  warning?: boolean,
  error?: boolean
}

export default XContainerTypes