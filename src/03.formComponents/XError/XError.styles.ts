import styled, { css } from 'styled-components'
import XErrorTypes from './XError.types'

const hasShow = ({ show }: Pick<XErrorTypes, 'show'>) => show && css`
  display: block;
`

const XError = styled.span<XErrorTypes>`
  display: none;
  color: var(--color-error);

  ${hasShow};
`

const S = {
  XError
}

export default S