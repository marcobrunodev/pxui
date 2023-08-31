import styled, { css } from 'styled-components'
import XLineTypes from './XLine.types'

const hasDisabled = ({ disabled }: XLineTypes) => disabled && css`
  background-color: var(--color-disabled);
`

const hasError = ({ error }: XLineTypes) => error && css`
  background-color: var(--color-error);
`

const hasWarning = ({ warning }: XLineTypes) => warning && css`
  background-color: var(--color-warning);
`

const hasSuccess = ({ success }: XLineTypes) => success && css`
  background-color: var(--color-success);
`

const hasPrimary = ({ primary }: XLineTypes) => primary && css`
  background-color: var(--color-primary);
`

const hasMargin = ({ margin }: XLineTypes) => margin && css`
  margin: 0 var(--gap-small);
  width: calc(100% - (var(--gap-small) * 2));
`

const XLine = styled.hr<XLineTypes>`
  width: 100%;
  height: 0.3rem;
  margin: 0;
  border: none;
  background-color: var(--color-white);
  box-shadow: 0 0.1rem 0 var(--color-black); 

  ${hasPrimary};
  ${hasSuccess};
  ${hasWarning};
  ${hasError};
  ${hasDisabled};
  ${hasMargin};
`

const S = {
  XLine
}

export default S