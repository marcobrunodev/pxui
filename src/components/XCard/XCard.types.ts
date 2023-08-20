import { MouseEventHandler } from "react"

export type XCardTypes = {
  titleContent: string,
  image: string,
  alt: string,
  description: string,
  borderAnimation?: boolean,
  primary?: boolean,
  success?: boolean,
  warning?: boolean,
  error?: boolean,
  disabled?: boolean,
  onClick?: MouseEventHandler
}

export default XCardTypes