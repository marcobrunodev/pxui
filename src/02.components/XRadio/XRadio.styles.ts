import styled from 'styled-components'
import blinkAnimationKeyframe from '../../XGlobalStyles/tools/blinkAnimationKeyframe.ts'
import { XArrow } from '../../01.icons/XArrow/XArrow.styles.ts'
import XRadioTypes from './XRadio.types.ts'

const Children = styled.span`
  padding-bottom: 0.2em;
`

const Content = styled.p`
  display: inline-flex;
  position: relative;
  align-items: center;
  gap: var(--gap-small);
  color: var(--color-white);

  & > ${XArrow} {
    height: 1.3em;
    opacity: 0;
  }
`

const RadioHtml = styled.input.attrs({ type: 'radio' })`
  display: none;
`

const XRadio = styled.label<Pick<XRadioTypes, 'onClick'>>`
  display: inline-flex;
  cursor: var(--cursor-pointer);

  & > ${RadioHtml}:checked + ${Content} > ${XArrow} {
    opacity: 1;
    animation: ${blinkAnimationKeyframe} 1000ms ease-in-out 3;
  }
`

export default {
  XRadio,
  RadioHtml,
  Content,
  Children
}
