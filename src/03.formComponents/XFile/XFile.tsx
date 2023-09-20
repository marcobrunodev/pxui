import XFileTypes from './XFile.types'
import S from './XFile.styles'
import DragAndDrop from './DragAndDrop'
import XError from '../XError'

const XFile = ({
  children,
  inputRef,
  showFilesRef,
  carouselRef,
  moveAnimation,
  files,
  multiple,
  dragAndDrop,
  primary,
  success,
  warning,
  error,
  disabled,
  runningArrowAnimation,
  clear, onChange, arrowOnAnimationend
}: XFileTypes) => (
  <S.WrapperXFile>
    <S.WrapperInput>
      <S.XFile primary={primary} success={success} warning={warning} error={error} disabled={disabled}>
        {children}
        <S.Input type='file' ref={inputRef} disabled={disabled} multiple={multiple} onChange={onChange} />
      </S.XFile>
      <S.Arrow runningArrowAnimation={runningArrowAnimation} onAnimationEnd={arrowOnAnimationend} />
      <S.ShowFiles ref={showFilesRef}>
        <S.Carousel ref={carouselRef} moveAnimation={moveAnimation}>
          {files}
        </S.Carousel>
      </S.ShowFiles>
      <S.Close onClick={clear} />
    </S.WrapperInput>
    {dragAndDrop?.children && <DragAndDrop {...dragAndDrop} inputRef={inputRef} multiple={multiple} />}
  </S.WrapperXFile >
)

export default XFile