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

const marquee = keyframes`
  from {
    transform: translateX(0.6rem);
  }
  
  to {
    transform: translateX(var(--move)); 
  }
`

const Carousel = styled.span<Pick<XFileTypes, 'moveAnimation'>>`
  ${({ moveAnimation }) => moveAnimation > 0 && css`
    --move: calc((${moveAnimation}px + 0.5rem) * -1);
    --play-state: paused;
    position: absolute;
    top: 0;
    left: 0;
    white-space: nowrap;
    animation: calc(${moveAnimation} * 25ms) ${marquee} infinite alternate linear var(--play-state);

    &:hover {
      --play-state: running;
    }
  `}
`

const ShowFiles = styled.output`
  position: relative;
  padding-bottom: var(--gap-smaller);
  overflow: hidden;
  height: 2.5rem;
`

export const XFile = styled(XButton).attrs({ as: 'label' })``

const WrapperInput = styled.div`
  display: inline-flex;
  position: relative;
  overflow: hidden;
  gap: var(--gap-small);
  align-items: center;
  padding-right: var(--gap-small);
`

const WrapperXFile = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: var(--gap-small);
`

const S = {
  WrapperXFile,
  WrapperInput,
  XFile,
  Arrow,
  ShowFiles,
  Carousel,
  Input,
  Close
}

export default S