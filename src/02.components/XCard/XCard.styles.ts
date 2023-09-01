import styled, { css } from 'styled-components'
import { XContainer } from '../XContainer/XContainer.styles'
import XText from '../XText'
import XCardTypes from './XCard.types'
import { XBadges } from '../XBadges/XBadges.styles'

const Image = styled.img`
  width: 100%;
`

const WrapperButton = styled.div`
  padding: var(--gap-small);
  display: flex;
  justify-content: center;
`

const Description = styled(XText)`
  font-size: 1.2rem;
  margin: var(--gap-small);
  padding-bottom: 0.6rem;
`

const Title = styled(XText)`
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

  &:hover {
    transform: scale(1.04);
  }
`

const XCard = styled(XContainer).attrs({ as: 'article' })`
  position: relative;
  max-width: 32rem;
  padding: 0;
  transition: 200ms transform linear;
  
  ${hasBorderAnimation};

  & > ${XBadges} {
    position: absolute;
    left: 50%;
    top: 0%;
    transform: translate(-50%, -56%);
    will-change: transform;
  }

  ${hasPrimary};
  ${hasSuccess};
  ${hasWarning};
  ${hasError};
  ${hasDisabled};
  ${hasOnClick};
`

const S = {
  XCard,
  Title,
  Description,
  WrapperButton,
  Image
}

export default S