import styled, { css } from 'styled-components'
import XCheckboxTypes from './XCheckbox.types'

const Content = styled.span`
  position: relative;
  display: flex;
  gap: var(--gap-small);
  align-items: center;

  &::before {
    content: '';
    height: 1.2rem;
    width: 1.2rem;
    border: 0.2rem solid var(--color-white);
  }

  &::after {
    content: '';
    height: 0.8rem;
    width: 0.8rem;
    background-color: var(--bullet-color);
    position: absolute;
    left: 0.4rem;
    transform-origin: center;
    transform: scale(0);
    transition: 80ms transform ease-in-out;
  }
`

const CheckboxHtml = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`

const hasPrimary = ({ primary }: Pick<XCheckboxTypes, 'primary'>) => primary && css`
  --bullet-color: var(--color-primary);
`

const hasSuccess = ({ success }: Pick<XCheckboxTypes, 'success'>) => success && css`
  --bullet-color: var(--color-success);
`

const hasWarning = ({ warning }: Pick<XCheckboxTypes, 'warning'>) => warning && css`
  --bullet-color: var(--color-warning);
`

const hasError = ({ error }: Pick<XCheckboxTypes, 'error'>) => error && css`
  --bullet-color: var(--color-error);
`

const hasDisabled = ({ disabled }: Pick<XCheckboxTypes, 'disabled'>) => disabled && css`
  --bullet-color: var(--color-disabled);
`

const XCheckbox = styled.label<Pick<XCheckboxTypes, 'primary' | 'success' | 'warning' | 'error' | 'disabled'>>`
  --bullet-color: var(--color-white);
  cursor: var(--cursor-pointer);

  & > ${CheckboxHtml}:checked + ${Content}::after {
    transform: scale(1);
  }

  ${hasPrimary};
  ${hasSuccess};
  ${hasWarning};
  ${hasError};
  ${hasDisabled};
`

export default {
  XCheckbox,
  CheckboxHtml,
  Content
}
