import styled, { css } from 'styled-components'
import XText from '../XText'
import { XContainer } from '../XContainer/XContainer.styles'
import XContainerTypes from '../XContainer/XContainer.types'

const XContent = styled(XText)``

const hasFull = ({ full }: Pick<XContainerTypes, 'full'>) => full && css`
  width: 100%;
`

const hasPrimary = ({ primary }: Pick<XContainerTypes, 'primary'>) => primary && css`
  --border-color: var(--color-primary);
`

const hasSuccess = ({ success }: Pick<XContainerTypes, 'success'>) => success && css`
  --border-color: var(--color-success);
`

const hasWarning = ({ warning }: Pick<XContainerTypes, 'warning'>) => warning && css`
  --border-color: var(--color-warning);
`

const hasError = ({ error }: Pick<XContainerTypes, 'error'>) => error && css`
  --border-color: var(--color-error);
`

const hasDisabled = ({ disabled }: Pick<XContainerTypes, 'disabled'>) => disabled && css`
  --border-color: var(--color-disabled);
`

export const XBalloon = styled(XContainer)`
  --border-color: var(--color-white); 

  box-sizing: border-box;
  position: relative;
  margin-bottom: 1.8rem;
  line-height: 1.8em;

  &::before, &::after {
    content: '';
    position: absolute;
    left: 2rem;
    background-color: var(--color-black);
    border-color: var(--border-color);
  }

  &::before {
    bottom: -1rem;
    width: 1.8rem;
    height: 1rem;
    border-right: var(--border-width) solid var(--border-color);
    border-left: var(--border-width) solid var(--border-color);
  }

  &::after {
    bottom: -1.3rem;
    width: 1.8rem;
    height: var(--border-width);
    color: var(--border-color);
    box-shadow: calc(var(--border-width) * -1) 0,var(--border-width) 0,calc(var(--border-width) * -1) var(--border-width) var(--color-black),0 var(--border-width),calc(var(--border-width) * -2) var(--border-width),calc(var(--border-width) * -1) calc(var(--border-width) * 2),calc(var(--border-width) * -2) calc(var(--border-width) * 2);
  }

  ${hasFull};
  ${hasPrimary};
  ${hasSuccess};
  ${hasWarning};
  ${hasError};
  ${hasDisabled};
`

const S = {
  XBalloon,
  XContent
}

export default S