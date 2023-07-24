import styled, { css } from 'styled-components'
import XTextTypes from './XText.type'

const hasPrimary = ({ primary = true }: { primary: boolean }) => primary && css`
  color: var(--color-primary);
`

const hasSuccess = ({ success = false }: { success: boolean }) => success && css`
  color: var(--color-success);
`

const hasWarning = ({ warning = false }: { warning: boolean }) => warning && css`
  color: var(--color-warning);
`

const hasError = ({ error = false }: { error: boolean }) => error && css`
  color: var(--color-error);
`

const hasDisabled = ({ disabled = false }: { disabled: boolean }) => disabled && css`
  color: var(--color-disabled);
`

const hasBig = ({ big = false }: { big: boolean }) => big && css`
  font-size: 2rem;
`

const hasBigger = ({ bigger = false }: { bigger: boolean }) => bigger && css`
  font-size: 2.5rem;
`

const hasCenter = ({ center = false }: { center: boolean }) => center && css`
  text-align: center;
`

const hasUppercase = ({ uppercase = false }: { uppercase: boolean }) => uppercase && css`
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
