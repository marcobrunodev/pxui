import styled from 'styled-components'
import XArrowTypes from './XArrow.types'
import right from '../../assets/icons/arrow-right.png'
import down from '../../assets/icons/arrow-down.png'
import left from '../../assets/icons/arrow-left.png'
import up from '../../assets/icons/arrow-up.png'
import successRight from '../../assets/icons/success-arrow-right.png'
import successDown from '../../assets/icons/success-arrow-down.png'
import successLeft from '../../assets/icons/success-arrow-left.png'
import successUp from '../../assets/icons/success-arrow-up.png'

const arrows = {
  right,
  down,
  left,
  up,
  successRight,
  successDown,
  successLeft,
  successUp
}

const standard = right;

const howDirection = ({ right = true, down, left, up, success }: XArrowTypes): string => (
  (right && success && arrows.successRight) ||
  (down && success && arrows.successDown) ||
  (left && success && arrows.successLeft) ||
  (up && success && arrows.successUp) ||
  (down && arrows.down) ||
  (right && arrows.right) ||
  (left && arrows.left) ||
  (up && arrows.up) ||
  (standard)
)

export const XArrow = styled.img.attrs<XArrowTypes>(({ right, down, left, up, success }) => ({ src: howDirection({ right, down, left, up, success }), alt: 'Arrow icon' }))``

const S = {
  XArrow
}

export default S