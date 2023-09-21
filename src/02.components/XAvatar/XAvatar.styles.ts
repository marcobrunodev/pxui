import styled from 'styled-components'
import { XContainer } from '../XContainer/XContainer.styles'

const Image = styled.img`
  transform: translateY(var(--gap-small));
`

export const XAvatar = styled(XContainer)`
  box-sizing: border-box;
  padding: 1.2rem 1.2rem 0.8rem;
  display: inline-flex;
  justify-content: center;
  align-content: center;
  width: 9rem;
  height: 9rem;
`

export default {
  XAvatar,
  Image
}
