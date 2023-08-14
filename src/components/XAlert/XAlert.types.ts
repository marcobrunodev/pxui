import { MouseEvent, ReactNode } from "react"

export type XAlertTypes = {
  children: ReactNode,
  handleClose: MouseEvent<HTMLImageElement>,
  isOpen: boolean,
  errorMessage: boolean | string
}

export default XAlertTypes