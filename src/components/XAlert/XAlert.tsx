import Close from '../XClose'
import S from './XAlert.styles'
import XAlertTypes from './XAlert.types'

const hasError = (errorMessage: Pick<XAlertTypes, 'errorMessage'>) => (
  errorMessage &&
  <S.Error>
    {errorMessage}
  </S.Error>
)

const Alert = ({ children, handleClose, isOpen, errorMessage }: XAlertTypes) => (
  <S.WrapperXAlert isOpen={isOpen} errorMessage={errorMessage}>
    <S.XAlert>
      <Close onClick={handleClose} />
      {children}

      {hasError(errorMessage)}
    </S.XAlert>

  </S.WrapperXAlert>
)

export default Alert