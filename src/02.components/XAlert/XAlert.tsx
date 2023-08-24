import Close from '../../01.icons/XClose'
import S from './XAlert.styles'
import XAlertTypes from './XAlert.types'

const hasError = ({ errorMessage, simple }: Pick<XAlertTypes, 'errorMessage' | 'simple'>) => (
  errorMessage &&
  <S.Error error simple={simple}>
    {errorMessage}
  </S.Error>
)

const Alert = ({ children, handleClose, isOpen, errorMessage, iconClose = true, simple, primary, success, warning, error, disabled }: XAlertTypes) => (
  <S.WrapperXAlert isOpen={isOpen} errorMessage={errorMessage} simple={simple}>
    <S.XAlert simple={simple} primary={primary} success={success} warning={warning} error={error} disabled={disabled}>
      {iconClose && <Close onClick={handleClose} />}
      {children}

      {hasError({ errorMessage, simple })}
    </S.XAlert>
  </S.WrapperXAlert>
)

export default Alert