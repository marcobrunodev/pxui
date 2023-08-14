import styled, { keyframes, css } from 'styled-components'
import XContainerTypes from './XContainer.types'
import XText from '../XText'
import { Warning } from '../XButton/XButton.stories'

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
  background-color: var(--color-gray);
  transform: translateX(-100%);
  animation: 3s ${top} linear infinite;
`

const XRight = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  width: var(--border-width);
  height: var(--size-border);
  background-color: var(--color-gray);
  transform: translateY(-100%);
  animation: 3s 1.5s ${right} linear infinite;
`

const XBottom = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  width: var(--size-border);
  height: var(--border-width);
  background-color: var(--color-gray);
  transform: translateX(100%);
  animation: 3s 3s ${bottom} linear infinite;
`

const XLeft = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: var(--border-width);
  height: var(--size-border);
  background-color: var(--color-gray);
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

const hasFull = ({ full = false }: Pick<XContainerTypes, 'full'>) => full && css`
  box-sizing: border-box;
  width: 100%;
`

const hasTitleAttr = ({ titleAttr = '' }: Pick<XContainerTypes, 'titleAttr'>) => titleAttr && css`
  & > ${XTitle} {
    top: -0.8em;
  }
`

const hasSimple = ({ simple = false }: Pick<XContainerTypes, 'simple'>) => simple && css`
  border: var(--border-width) solid var(--color-white);
`

const hasSimpleAndTitle = ({ simple = false, titleAttr = '' }: Pick<XContainerTypes, 'simple' | 'titleAttr'>) => simple && titleAttr && css`
  & > ${XTitle} {
    top: -1em;
  }
`

const hasBorderAnimation = ({ borderAnimation = false }: Pick<XContainerTypes, 'borderAnimation'>) => borderAnimation && css`
  border: 0;
  overflow: hidden;
  padding: var(--gap-medium) var(--gap-big);

  & > ${XTitle} {
    display: none;
  }
`

const hasPrimary = ({ primary = false }: Pick<XContainerTypes, 'primary'>) => primary && css`
  & > :is(${XTop}, ${XRight}, ${XBottom}, ${XLeft}) {
    background-color: var(--color-primary);
  }
`

const hasSuccess = ({ success = false }: Pick<XContainerTypes, 'success'>) => success && css`
  & > :is(${XTop}, ${XRight}, ${XBottom}, ${XLeft}) {
    background-color: var(--color-success);
  }
`

const hasWarning = ({ warning = false }: Pick<XContainerTypes, 'warning'>) => warning && css`
  & > :is(${XTop}, ${XRight}, ${XBottom}, ${XLeft}) {
    background-color: var(--color-warning);
  }
`

const hasError = ({ error = false }: Pick<XContainerTypes, 'error'>) => error && css`
  & > :is(${XTop}, ${XRight}, ${XBottom}, ${XLeft}) {
    background-color: var(--color-error);
  }
`

const XContainer = styled.article<XContainerTypes>`
  --border-width: 0.6rem;
  --size-border: 100%;

  position: relative;
  display: inline-block;
  border-image-slice: 3;
  border-image-width: 3;
  border-image-repeat: stretch;
  border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="8" height="8" xmlns="http://www.w3.org/2000/svg"><path d="M3 1 h1 v1 h-1 z M4 1 h1 v1 h-1 z M2 2 h1 v1 h-1 z M5 2 h1 v1 h-1 z M1 3 h1 v1 h-1 z M6 3 h1 v1 h-1 z M1 4 h1 v1 h-1 z M6 4 h1 v1 h-1 z M2 5 h1 v1 h-1 z M5 5 h1 v1 h-1 z M3 6 h1 v1 h-1 z M4 6 h1 v1 h-1 z" fill="rgb(255,255,255)" /></svg>');
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
