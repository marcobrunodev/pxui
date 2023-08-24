import { MouseEventHandler, ReactNode } from "react"

export type XAlertTypes = {
  children: ReactNode,
  handleClose: MouseEventHandler<HTMLImageElement>,
  isOpen: boolean,
  errorMessage: boolean | string
}

export default XAlertTypes