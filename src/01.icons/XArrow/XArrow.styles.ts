import styled, { css } from 'styled-components'
import XArrowTypes from './XArrow.types'
import right from '../../assets/icons/arrow-right.png'
import primaryRight from '../../assets/icons/primary-arrow-right.png'
import successRight from '../../assets/icons/success-arrow-right.png'
import warningRight from '../../assets/icons/warning-arrow-right.png'
import errorRight from '../../assets/icons/error-arrow-right.png'
import disabledRight from '../../assets/icons/disabled-arrow-right.png'

const arrows = {
  right,
  primaryRight,
  successRight,
  warningRight,
  errorRight,
  disabledRight
}

const standard = right;

const howDirection = ({ primary, success, warning, error, disabled }: XArrowTypes): string => (
  (primary && arrows.primaryRight) ||
  (success && arrows.successRight) ||
  (warning && arrows.warningRight) ||
  (error && arrows.errorRight) ||
  (disabled && arrows.disabledRight) ||
  (standard)
)

const hasDown = ({ down }: Pick<XArrowTypes, 'down'>) => down && css`
  transform: rotate(90deg);
`

const hasLeft = ({ left }: Pick<XArrowTypes, 'left'>) => left && css`
  transform: rotate(180deg);
`

const hasUp = ({ up }: Pick<XArrowTypes, 'up'>) => up && css`
  transform: rotate(270deg);
`

export const XArrow = styled.img.attrs<XArrowTypes>(({ primary, success, warning, error, disabled }) => ({ src: howDirection({ primary, success, warning, error, disabled }), alt: 'Arrow icon' }))`
  ${hasDown};
  ${hasLeft};
  ${hasUp};
`

const S = {
  XArrow
}

export default S