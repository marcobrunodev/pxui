import XFileTypes from './XFile.types'
import S from './XFile.styles'

const XFile = ({ children, inputRef, files, multiple, primary, success, warning, error, disabled, runningArrowAnimation, clear, onChange, arrowOnAnimationend }: XFileTypes) => (
  <S.WrapperXFile>
    <S.XFile primary={primary} success={success} warning={warning} error={error} disabled={disabled}>
      {children}
      <S.Input type='file' ref={inputRef} disabled={disabled} multiple={multiple} onChange={onChange} />
    </S.XFile>
    <S.Arrow runningArrowAnimation={runningArrowAnimation} onAnimationEnd={arrowOnAnimationend} />
    <S.ShowFiles>{files}</S.ShowFiles>
    <S.Close onClick={clear} />
  </S.WrapperXFile>
)

export default XFile