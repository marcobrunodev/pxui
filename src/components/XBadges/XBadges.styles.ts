import styled, { css } from 'styled-components'
import XBadgesTypes from './XBadges.types'

const hasPrimary = ({ primary }: Pick<XBadgesTypes, 'primary'>) => primary && css`
  --border-bg-color: var(--color-primary);
  color: var(--color-white);
`

const hasSuccess = ({ success }: Pick<XBadgesTypes, 'success'>) => success && css`
  --border-bg-color: var(--color-success);
  color: var(--color-white);
`

const hasWarning = ({ warning }: Pick<XBadgesTypes, 'warning'>) => warning && css`
  --border-bg-color: var(--color-warning);
  color: var(--color-black);
`

const hasError = ({ error }: Pick<XBadgesTypes, 'error'>) => error && css`
  --border-bg-color: var(--color-error);
  color: var(--color-white);
`

const hasDisabled = ({ disabled }: Pick<XBadgesTypes, 'disabled'>) => disabled && css`
  --border-bg-color: var(--color-disabled);
  color: var(--color-white);
`

const Label = styled.dt`
  box-sizing: border-box;
  display: inline-flex; 
  justify-content: center;
  align-items: center;
  font-weight: bold;
  min-width: 6rem;
  color: var(--border-bg-color);
  text-align: center;
  padding: 0 var(--gap-small) 0.3rem;
  background-color: var(--color-black-dark);
  box-shadow: 0 var(--border-width) var(--color-black-dark),0 calc(var(--border-width) * -1) var(--color-black-dark),0 0 var(--color-black-dark),calc(var(--border-width) * -1) 0 var(--color-black-dark);
`

const hasLabel = ({ label }: Pick<XBadgesTypes, 'label'>) => label && css`
  box-shadow: 0 var(--border-width) var(--border-bg-color),0 calc(var(--border-width) * -1) var(--border-bg-color),var(--border-width) 0 var(--border-bg-color),0 0 var(--border-bg-color);
  min-width: auto;
`

const Content = styled.dd<Pick<XBadgesTypes, 'primary' | 'success' | 'warning' | 'error' | 'disabled' | 'label'>>`
  --border-bg-color: var(--color-white);

  box-sizing: border-box;
  display: inline-flex; 
  justify-content: center;
  align-items: center;
  font-weight: bold;
  min-width: 6rem;
  color: var(--color-black);
  text-align: center;
  padding: 0 var(--gap-small) 0.3rem;
  background-color: var(--border-bg-color);
  box-shadow: 0 var(--border-width) var(--border-bg-color),0 calc(var(--border-width) * -1) var(--border-bg-color), var(--border-width) 0 var(--border-bg-color), calc(var(--border-width) * -1) 0 var(--border-bg-color);

  ${hasPrimary};
  ${hasSuccess};
  ${hasWarning};
  ${hasError};
  ${hasDisabled};
  ${hasLabel};
`

export const XBadges = styled.dl``

const S = {
  XBadges,
  Label,
  Content
}

export default S