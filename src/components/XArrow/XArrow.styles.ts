import styled from 'styled-components'
import XArrowTypes from './XArrow.types'
import right from '../../assets/icons/arrow-right.png'
import down from '../../assets/icons/arrow-down.png'
import left from '../../assets/icons/arrow-left.png'
import up from '../../assets/icons/arrow-up.png'

const arrows = {
  right,
  down,
  left,
  up
}

const howDirection = ({ right = true, down = false, left = false, up = false }: XArrowTypes): string => (down && arrows.down) || (right && arrows.right) || (left && arrows.left) || (up && arrows.up) || ''

const XArrow = styled.img.attrs<XArrowTypes>(({ right, down, left, up }) => ({ src: howDirection({ right, down, left, up }), alt: 'Arrow icon' }))``

const S = {
  XArrow
}

export default S