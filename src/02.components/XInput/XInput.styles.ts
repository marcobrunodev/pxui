import styled, { css } from 'styled-components'
import XInputTypes from './XInput.types'

const hasDisabled = ({ disabled, simple }: Pick<XInputTypes, 'disabled' | 'simple'>) => (
  (disabled && !simple && css`
    border-image-source: var(--simple-border-image-source-disabled);
    color: var(--color-disabled);
  `) || (disabled && simple && css`
    border-color: var(--color-disabled);
    color: var(--color-disabled);
  `)
)

const hasError = ({ error, simple }: Pick<XInputTypes, 'error' | 'simple'>) => (
  (error && !simple && css`
    border-image-source: var(--simple-border-image-source-error);
  `) || (error && simple && css`
    border-color: var(--color-error);
  `)
)

const hasWarning = ({ warning, simple }: Pick<XInputTypes, 'warning' | 'simple'>) => (
  (warning && !simple && css`
    border-image-source: var(--simple-border-image-source-warning);
  `) || (warning && simple && css`
    border-color: var(--color-warning);
  `)
)

const hasSuccess = ({ success, simple }: Pick<XInputTypes, 'success' | 'simple'>) => (
  (success && !simple && css`
    border-image-source: var(--simple-border-image-source-success);
  `) || (success && simple && css`
    border-color: var(--color-success);
  `)
)

const hasPrimary = ({ primary, simple }: Pick<XInputTypes, 'primary' | 'simple'>) => (
  (primary && !simple && css`
    border-image-source: var(--simple-border-image-source-primary);
  `) || (primary && simple && css`
    border-color: var(--color-primary);
  `)
)

const hasSimple = ({ simple }: Pick<XInputTypes, 'simple'>) => simple && css`
  border-image-slice: fill;
  border-image-width: none;
  border-image-repeat: stretch;
  border-image-source: none;
  border-image-outset: 0;
  border-style: solid;
  border-color: var(--color-white);
`

export const XInput = styled.input<XInputTypes>`
  background-color: transparent;
  border-image-slice: 2;
  border-image-width: 2;
  border-image-repeat: stretch;
  border-image-source: var(--simple-border-image-source-white);
  border-image-outset: 1;
  border-style: solid;
  border-width: var(--border-width);
  font-family: 'FontPxRegular', sans-serif;
  color: var(--colo-white);
  padding: var(--gap-small);
  transition: 100ms transform ease-in-out;
  box-sizing: border-box;
  width: 100%;

  &:focus {
    outline: none;
  }
  
  ${hasSimple};
  ${hasPrimary};
  ${hasSuccess};
  ${hasWarning};
  ${hasError};
  ${hasDisabled};
`

const S = {
  XInput
}

export default S