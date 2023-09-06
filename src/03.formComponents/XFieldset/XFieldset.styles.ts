import styled from 'styled-components'
import { XLabel } from '../XLabel/XLabel.styles'
import { XInput } from '../XInput/XInput.styles'
import { XArrow } from '../../01.icons/XArrow/XArrow.styles'

const XFieldset = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;

  gap: var(--gap-smaller);

  & > ${XInput}:focus + ${XLabel} {
    margin-left: var(--gap-medium);
  }

  & > ${XInput}:focus ~ ${XArrow} {
    opacity: 1;
  }

  & > ${XLabel} {
    display: inline-flex;
    margin-left: var(--gap-smaller);
    transition: margin-left 100ms ease-in-out;
  }

  & > ${XArrow} {
    position: absolute;
    top: 0.76rem;
    opacity: 0;
  }
`

const S = {
  XFieldset
}

export default S