import styled, { css } from 'styled-components'
import { XContainer } from '../XContainer/XContainer.styles'
import XText from '../XText'
import XContainerTypes from '../XContainer/XContainer.types'


const Image = styled.img`
  width: 100%;
`

const WrapperImage = styled.dd``

const Description = styled(XText).attrs({ as: 'dd' })`
  font-size: 1.2rem;
  margin: var(--gap-small);
  padding-bottom: 0.6rem;
`

const Title = styled(XText).attrs({ as: 'dt' })`
  border-top: 0.4rem solid var(--color-black-dark);
  font-family: FontPxBold, sans-serif;
  padding: var(--gap-small);
  letter-spacing: 0.1em;
  text-transform: uppercase;
`

const hasBorderAnimation = ({ borderAnimation }: Pick<XContainerTypes, 'borderAnimation'>) => borderAnimation && css`
  padding: var(--border-width);
`

const XCard = styled(XContainer).attrs({ as: 'dl' })`
  max-width: 32rem;
  padding: 0;
  transition: 200ms box-shadow linear, 
              200ms transform linear,
              200ms border-color linear;
  cursor: var(--cursor-pointer);

  ${hasBorderAnimation};

  & .border {
    transition: 200ms 300ms opacity linear;
  }

  &:hover .border {
    --size-border: 100%;
    opacity: 0;
    animation-play-state: paused;
    transition: 200ms opacity linear;
  }
  &:hover {
    border-color: rgba(255, 255, 255, 0);
    box-shadow: 0 0 0 var(--border-width) var(--color-white);
    transform: scale(1.05);
    transition: 200ms 300ms box-shadow linear, 
                200ms 300ms transform linear,
                200ms 300ms border-color linear;
  }
`

const S = {
  XCard,
  Title,
  Description,
  WrapperImage,
  Image
}

export default S