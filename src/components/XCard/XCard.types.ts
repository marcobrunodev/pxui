import { MouseEventHandler } from "react"
import XButtonTypes from "../XButton/XButton.types"
import XBadgesTypes from "../XBadges/XBadges.types"

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
  onClick?: MouseEventHandler,
  buttonProps?: XButtonTypes,
  badges?: XBadgesTypes | boolean
}

export default XCardTypes