import styled, { css } from 'styled-components'
import { XContainer } from '../XContainer/XContainer.styles'
import XText from '../XText'
import XCardTypes from './XCard.types'


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
  border-top: 0.2rem solid var(--color-black-dark);
  font-family: FontPxBold, sans-serif;
  padding: var(--gap-small);
  letter-spacing: 0.1em;
  text-transform: uppercase;
`

const hasBorderAnimation = ({ borderAnimation }: Pick<XCardTypes, 'borderAnimation'>) => borderAnimation && css`
  padding: var(--border-width);
`

const hasPrimary = ({ primary }: Pick<XCardTypes, 'primary'>) => primary && css`
  & > ${Title} {
    border-top-color: var(--color-primary-light);
  }
`

const hasSuccess = ({ success }: Pick<XCardTypes, 'success'>) => success && css`
  & > ${Title} {
    border-top-color: var(--color-success-light);
  }
`

const hasWarning = ({ warning }: Pick<XCardTypes, 'warning'>) => warning && css`
  & > ${Title} {
    border-top-color: var(--color-warning-light);
  }
`

const hasError = ({ error }: Pick<XCardTypes, 'error'>) => error && css`
  & > ${Title} {
    border-top-color: var(--color-error-light);
  }
`

const hasDisabled = ({ disabled }: Pick<XCardTypes, 'disabled'>) => disabled && css`
  & > ${Title} {
    border-top-color: var(--color-disabled-light);
  }
`

const hasOnClick = ({ onClick }: Pick<XCardTypes, 'onClick'>) => onClick !== undefined && css`
  cursor: var(--cursor-pointer);

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

const hasOnClickAndPrimary = ({ onClick, primary }: Pick<XCardTypes, 'onClick' | 'primary'>) => onClick !== undefined && primary && css`
  &:hover {
    box-shadow: 0 0 0 var(--border-width) var(--color-primary);
  }
`

const hasOnClickAndSuccess = ({ onClick, success }: Pick<XCardTypes, 'onClick' | 'success'>) => onClick !== undefined && success && css`
  &:hover {
    box-shadow: 0 0 0 var(--border-width) var(--color-success);
  }
`

const hasOnClickAndWarning = ({ onClick, warning }: Pick<XCardTypes, 'onClick' | 'warning'>) => onClick !== undefined && warning && css`
  &:hover {
    box-shadow: 0 0 0 var(--border-width) var(--color-warning);
  }
`

const hasOnClickAndError = ({ onClick, error }: Pick<XCardTypes, 'onClick' | 'error'>) => onClick !== undefined && error && css`
  &:hover {
    box-shadow: 0 0 0 var(--border-width) var(--color-error);
  }
`

const hasOnClickAndDisabled = ({ onClick, disabled }: Pick<XCardTypes, 'onClick' | 'disabled'>) => onClick !== undefined && disabled && css`
  &:hover {
    box-shadow: 0 0 0 var(--border-width) var(--color-disabled);
  }
`

const XCard = styled(XContainer).attrs({ as: 'dl' })`
  max-width: 32rem;
  padding: 0;
  transition: 200ms box-shadow linear, 
              200ms transform linear,
              200ms border-color linear;
  

  ${hasBorderAnimation};

  & .border {
    transition: 200ms 300ms opacity linear;
  }

  ${hasPrimary};
  ${hasSuccess};
  ${hasWarning};
  ${hasError};
  ${hasDisabled};
  ${hasOnClick};
  ${hasOnClickAndPrimary};
  ${hasOnClickAndSuccess};
  ${hasOnClickAndWarning};
  ${hasOnClickAndError};
  ${hasOnClickAndDisabled};
`

const S = {
  XCard,
  Title,
  Description,
  WrapperImage,
  Image
}

export default S