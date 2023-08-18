import styled, { keyframes, css } from 'styled-components'
import XContainerTypes from './XContainer.types'
import XText from '../XText'

const top = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(100%);
  }
`

const right = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(100%);
  }
`

const bottom = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
`

const left = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(-100%);
  }
`

const XTop = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: var(--size-border);
  height: var(--border-width);
  background-color: var(--color-white);
  transform: translateX(-100%);
  animation: 3s ${top} linear infinite;
`

const XRight = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  width: var(--border-width);
  height: var(--size-border);
  background-color: var(--color-white);
  transform: translateY(-100%);
  animation: 3s 1.5s ${right} linear infinite;
`

const XBottom = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  width: var(--size-border);
  height: var(--border-width);
  background-color: var(--color-white);
  transform: translateX(100%);
  animation: 3s 3s ${bottom} linear infinite;
`

const XLeft = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: var(--border-width);
  height: var(--size-border);
  background-color: var(--color-white);
  transform: translateY(100%);
  animation: 3s 4.5s ${left} linear infinite;
`

const XTitle = styled(XText).attrs({ as: 'h2' })`
  position: absolute;
  margin-bottom: var(--gap-small);
  margin-left: var(--gap-smaller);
  background-color: var(--color-black);
  padding:  0 var(--gap-medium);
  font-size: 2rem;
`

const hasFull = ({ full }: Pick<XContainerTypes, 'full'>) => full && css`
  box-sizing: border-box;
  width: 100%;
`

const hasTitleAttr = ({ titleAttr }: Pick<XContainerTypes, 'titleAttr'>) => titleAttr && css`
  & > ${XTitle} {
    top: -0.8em;
  }
`

const hasSimple = ({ simple }: Pick<XContainerTypes, 'simple'>) => simple && css`
  border: var(--border-width) solid var(--color-white);
`

const hasSimpleAndTitle = ({ simple, titleAttr }: Pick<XContainerTypes, 'simple' | 'titleAttr'>) => simple && titleAttr && css`
  & > ${XTitle} {
    top: -1em;
  }
`

const hasBorderAnimation = ({ borderAnimation, full }: Pick<XContainerTypes, 'borderAnimation' | 'full'>) => borderAnimation && !full && css`
  border: 0;
  overflow: hidden;
  padding: var(--gap-medium) var(--gap-big);

  & > ${XTitle} {
    display: none;
  }
`

const hasPrimary = ({ primary, simple, borderAnimation, full }: Pick<XContainerTypes, 'primary' | 'simple' | 'borderAnimation' | 'full'>) => {
  if (primary && simple && (!borderAnimation || full)) return css`
    border-color: var(--color-primary)
  `

  if (primary) return css`
    border-image-source: var(--border-image-source-primary);

    & > :is(${XTop}, ${XRight}, ${XBottom}, ${XLeft}) {
      background-color: var(--color-primary);
    }
  `
}

const hasSuccess = ({ success, simple, borderAnimation, full }: Pick<XContainerTypes, 'success' | 'simple' | 'borderAnimation' | 'full'>) => {
  if (success && simple && (!borderAnimation || full)) return css`
    border-color: var(--color-success);
  `

  if (success) return css`
    border-image-source: var(--border-image-source-success);

    & > :is(${XTop}, ${XRight}, ${XBottom}, ${XLeft}) {
      background-color: var(--color-success);
    }
  `

}

const hasWarning = ({ warning, simple, borderAnimation, full }: Pick<XContainerTypes, 'warning' | 'simple' | 'borderAnimation' | 'full'>) => {
  if (warning && simple && (!borderAnimation || full)) return css`
    border-color: var(--color-warning);
  `

  if (warning) return css`
    border-image-source: var(--border-image-source-warning);

    & > :is(${XTop}, ${XRight}, ${XBottom}, ${XLeft}) {
      background-color: var(--color-warning);
    }
  `
}

const hasError = ({ error, simple, borderAnimation, full }: Pick<XContainerTypes, 'error' | 'simple' | 'borderAnimation' | 'full'>) => {
  if (error && simple && (!borderAnimation || full)) return css`
    border-color: var(--color-error);
  `

  if (error) return css`
    border-image-source: var(--border-image-source-error);

    & > :is(${XTop}, ${XRight}, ${XBottom}, ${XLeft}) {
      background-color: var(--color-error);
    }
  `
}
const hasDisabled = ({ disabled, simple, borderAnimation, full }: Pick<XContainerTypes, 'disabled' | 'simple' | 'borderAnimation' | 'full'>) => {
  if (disabled && simple && (!borderAnimation || full)) return css`
    border-color: var(--color-disabled);
  `

  if (disabled) return css`
    border-image-source: var(--border-image-source-disabled);

    & > :is(${XTop}, ${XRight}, ${XBottom}, ${XLeft}) {
      background-color: var(--color-disabled);
    }
  `
}

export const XContainer = styled.article<XContainerTypes>`
  --border-width: 0.4rem;
  --size-border: 100%;

  position: relative;
  display: inline-block;
  border-image-slice: 3;
  border-image-width: 3;
  border-image-repeat: stretch;
  border-image-source: var(--border-image-source-white);
  border-image-outset: 0;
  border-style: solid;
  border-width: var(--border-width);
  padding: var(--gap-medium) var(--gap-big);
  background-color: var(--color-black);

  ${hasFull};
  ${hasTitleAttr};
  ${hasSimple}
  ${hasBorderAnimation};
  ${hasSimpleAndTitle};
  ${hasPrimary};
  ${hasSuccess};
  ${hasWarning};
  ${hasError};
  ${hasDisabled};
`

const S = {
  XContainer,
  XTitle,
  XTop,
  XRight,
  XBottom,
  XLeft
}

export default S
