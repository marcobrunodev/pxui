import styled, { keyframes, css } from 'styled-components'
import { XButton } from '../../02.components/XButton/XButton.styles'
import { XArrow } from '../../01.icons/XArrow/XArrow.styles'
import { XClose } from '../../01.icons/XClose/XClose.styles'
import XFileTypes from './XFile.types'

const Input = styled.input`
  opacity: 0;
  position: absolute;
  z-index: -1;
`

const moveRight = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translate(20%);
  }
`

const Close = styled(XClose)`
  transition: transform 100ms ease-in-out;

  &:hover {
    transform: scale(1.2);
  }

  &:active {
    transform: scale(0.98);
  }
`

const hasRunningArrowAnimation = ({ runningArrowAnimation }: Pick<XFileTypes, 'runningArrowAnimation'>) => runningArrowAnimation ? css`
  animation: 400ms ${moveRight} ease-in-out 4 running;
` : css`
  animation: none;
`

const Arrow = styled(XArrow)`
  animation: none;

  ${hasRunningArrowAnimation}
`

const ShowFiles = styled.output`
  padding-bottom: var(--gap-smaller);
`

export const XFile = styled(XButton).attrs({ as: 'label' })``

const WrapperXFile = styled.div`
  display: inline-flex;
  position: relative;
  overflow: hidden;
  gap: var(--gap-small);
  align-items: center;
  padding-right: var(--gap-small)
`

const S = {
  WrapperXFile,
  XFile,
  Arrow,
  ShowFiles,
  Input,
  Close
}

export default S