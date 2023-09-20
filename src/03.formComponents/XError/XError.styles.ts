import styled, { css } from 'styled-components'
import XErrorTypes from './XError.types'

const hasChildren = ({ children }: Pick<XErrorTypes, 'children'>) => !!children && css`
  display: block;
`

const XError = styled.span<XErrorTypes>`
  display: none;
  color: var(--color-error);

  ${hasChildren};
`

const S = {
  XError
}

export default S