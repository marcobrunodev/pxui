import XButtonTypes from '../../02.components/XButton/XButton.types'
import S from './XFile.styles'

const XFile = (props: XButtonTypes) => (
  <S.WrapperXFile>
    <S.XFile {...props}>
      {props.children}
      <S.Input type='file' disabled={props.disabled} />
    </S.XFile>
  </S.WrapperXFile>
)

export default XFile