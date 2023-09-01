import { MouseEventHandler, ReactNode } from "react"

export type XBadgesTypes = {
  content: string,
  label?: ReactNode,
  primary?: boolean,
  success?: boolean,
  warning?: boolean,
  error?: boolean,
  disabled?: boolean,
  onClick?: MouseEventHandler
}

export default XBadgesTypes