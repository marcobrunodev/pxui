import styled, { css } from 'styled-components'
import XText from '../XText'
import { XContainer } from '../XContainer/XContainer.styles'
import XContainerTypes from '../XContainer/XContainer.types'

const XContent = styled(XText)``

const hasFull = ({ full }: Pick<XContainerTypes, 'full'>) => full && css`
  width: 100%;
`

export const XBallon = styled(XContainer)`
  box-sizing: border-box;
  position: relative;
  margin-bottom: 1.8rem;
  line-height: 1.8em;

  &::before, &::after {
    content: '';
    position: absolute;
    left: 2rem;
    background-color: var(--color-black);
    border-color: var(--color-white);
  }

  &::before {
    bottom: -0.6rem;
    width: 1.8rem;
    height: 1rem;
    border-right: var(--border-width) solid var(--color-white);
    border-left: var(--border-width) solid var(--color-white);
  }

  &::after {
    bottom: -1rem;
    width: 1.8rem;
    height: var(--border-width);
    color: var(--color-white);
    box-shadow: calc(var(--border-width) * -1) 0,var(--border-width) 0,calc(var(--border-width) * -1) var(--border-width) var(--color-black),0 var(--border-width),calc(var(--border-width) * -2) var(--border-width),calc(var(--border-width) * -1) calc(var(--border-width) * 2),calc(var(--border-width) * -2) calc(var(--border-width) * 2);
  }

  ${hasFull};
`

const S = {
  XBallon,
  XContent
}

export default S