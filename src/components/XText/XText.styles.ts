import styled, { css } from 'styled-components'
import XTextTypes from './XText.type'

const hasPrimary = ({ primary = false }: Pick<XTextTypes, 'primary'>) => primary && css`
  color: var(--color-primary);
`

const hasSuccess = ({ success = false }: Pick<XTextTypes, 'success'>) => success && css`
  color: var(--color-success);
`

const hasWarning = ({ warning = false }: Pick<XTextTypes, 'warning'>) => warning && css`
  color: var(--color-warning);
`

const hasError = ({ error = false }: Pick<XTextTypes, 'error'>) => error && css`
  color: var(--color-error);
`

const hasDisabled = ({ disabled = false }: Pick<XTextTypes, 'disabled'>) => disabled && css`
  color: var(--color-disabled);
`

const hasBig = ({ big = false }: Pick<XTextTypes, 'big'>) => big && css`
  font-size: 2rem;
`

const hasBigger = ({ bigger = false }: Pick<XTextTypes, 'bigger'>) => bigger && css`
  font-size: 2.5rem;
`

const hasCenter = ({ center = false }: Pick<XTextTypes, 'center'>) => center && css`
  text-align: center;
`

const hasUppercase = ({ uppercase = false }: Pick<XTextTypes, 'uppercase'>) => uppercase && css`
  text-transform: uppercase;
  letter-spacing: 0.1em;
`

const XText = styled.p<XTextTypes>`
  ${hasPrimary};
  ${hasSuccess};
  ${hasWarning};
  ${hasError};
  ${hasDisabled};
  ${hasBig};
  ${hasBigger};
  ${hasCenter};
  ${hasUppercase};
`

const S = { XText }

export default S
