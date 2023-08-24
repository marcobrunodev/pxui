import { MouseEventHandler } from "react"

export type XButtonTypes = {
  children: string,
  primary?: boolean,
  success?: boolean,
  warning?: boolean,
  error?: boolean,
  disabled?: boolean,
  full?: boolean,
  onClick?: MouseEventHandler
}

export default XButtonTypes