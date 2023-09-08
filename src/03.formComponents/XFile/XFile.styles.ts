import styled from 'styled-components'
import { XButton } from '../../02.components/XButton/XButton.styles'

const Input = styled.input`
  opacity: 0;
  position: absolute;
`

export const XFile = styled(XButton).attrs({ as: 'label' })``

const WrapperXFile = styled.div`
  display: inline-block;
  position: relative;
  overflow: hidden;
`

const S = {
  WrapperXFile,
  XFile,
  Input,
}

export default S