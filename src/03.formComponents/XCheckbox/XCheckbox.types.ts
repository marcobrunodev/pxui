import { MouseEventHandler } from "react"

export type XCheckboxTypes = {
  name: string,
  children: string,
  value: string,
  checked: boolean,
  onClick?: MouseEventHandler,
  primary: boolean,
  success: boolean,
  warning: boolean,
  error: boolean,
  disabled: boolean
}

export default XCheckboxTypes