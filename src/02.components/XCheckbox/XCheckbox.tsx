import XCheckboxTypes from './XCheckbox.types'
import S from './XCheckbox.styles'

const XCheckbox = ({ name, children, value, checked = false, onClick, primary, success, warning, error, disabled }: XCheckboxTypes) => (
  <S.XCheckbox onClick={onClick} primary={primary} success={success} warning={warning} error={error} disabled={disabled}>
    <S.CheckboxHtml name={name} value={value} checked={checked} />
    <S.Content onClick={onClick}>{children}</S.Content>
  </S.XCheckbox>
)

export default XCheckbox