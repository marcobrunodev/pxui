import styled, { css } from 'styled-components'
import XAlertTypes from './XAlert.types'
import { XContainer } from '../XContainer/XContainer.styles'
import { XClose } from '../../01.icons/XClose/XClose.styles'

const Error = styled(XContainer)`
  color: var(--color-error);
  position: absolute;
  bottom: 0;
  transform: 0;
  opacity: 0;
  transition: transform 200ms ease-in-out, opacity 200ms ease-in-out; 
  min-width: 30.2rem;
  text-align: center;
  font-size: 1.2rem;
`

const hasOpen = ({ isOpen = false }: Pick<XAlertTypes, 'isOpen'>) => isOpen && css`
  opacity: 1;
  z-index: 60;
  transition: opacity 200ms 300ms ease-in-out;

  & > ${XAlert} {
    transform: translateY(0rem);
    opacity: 1;
  }
`

const hasError = ({ errorMessage }: Pick<XAlertTypes, 'errorMessage'>) => errorMessage && css`
  & ${Error} {
    opacity: 1;
    transform: translateY(calc(100% + var(--gap-small)));
  }
`

const hasSimpleWrapper = ({ simple }: Pick<XAlertTypes, 'simple'>) => simple && css`
  & ${Error} {
    transform: translateY(calc(100% + var(--gap-medium)));
  }
`

export const WrapperXAlert = styled.div<Pick<XAlertTypes, 'isOpen' | 'errorMessage' | 'simple'>>`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0;
  z-index: -1;
  align-items: center;
  justify-content: center;
  transition: opacity 200ms 300ms ease-in-out, z-index 10ms 600ms linear;
  
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-black-light);
  }

  ${hasOpen};
  ${hasError};
  ${hasSimpleWrapper};
`

const XAlert = styled(XContainer)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  min-width: 30.2rem;
  min-height: 20rem;
  padding: var(--gap-bigger);
  transform: translateY(-10rem) scale(0.8);
  opacity: 0;
  transition: all 200ms ease-in-out;

  & > ${XClose} {
    position: absolute;
    top: -1.85rem;
    right: -1.84rem;
    cursor: var(--cursor-pointer);
    height: 3.4rem;
    transition: transform 80ms ease-in-out;

    &:hover {
      transform: scale(1.1);
    }

    &:active {
      transition: transform 90ms ease-in-out;
      transform: scale(0.98);
    }
  }
`

const S = {
  WrapperXAlert,
  Error,
  XAlert
}

export default S