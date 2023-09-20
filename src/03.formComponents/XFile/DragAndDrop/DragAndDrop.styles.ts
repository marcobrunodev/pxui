import styled, { css, keyframes } from 'styled-components'
import DragAndDropTypes from './DragAndDrop.types'
import { XContainer } from '../../../02.components/XContainer/XContainer.styles'

const hasIsDragLeave = ({ isDragLeave }: Pick<DragAndDropTypes, 'isDragLeave'>) => isDragLeave && css`
  transform: scale(1);
`

const hasIsDragEnter = ({ isDragEnter }: Pick<DragAndDropTypes, 'isDragEnter'>) => isDragEnter && css`
  transform: scale(1.04);
`

const pulse = keyframes`
  from {
    transform: scale(1.02);
  }

  to {
    transform: scale(1.04);
  }
`

const hasIsDragOver = ({ isDragOver }: Pick<DragAndDropTypes, 'isDragOver'>) => isDragOver && css`
  animation: ${pulse} 300ms ease-in-out infinite;
`

const DragAndDrop = styled(XContainer) <DragAndDropTypes>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6rem;
  transition: transform 100ms ease-in-out;

  ${hasIsDragLeave};
  ${hasIsDragEnter};
  ${hasIsDragOver};
`

const S = {
  DragAndDrop
}

export default S