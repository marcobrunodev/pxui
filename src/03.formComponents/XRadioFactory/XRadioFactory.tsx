import Radio from '../XRadio'
import XRadioTypes from '../XRadio/XRadio.types'
import S from './XRadioFactory.styles'
import XRadioFactoryTypes from './XRadioFactory.types'

const XRadioFactory = ({ data }: XRadioFactoryTypes) => (
  <S.XRadioFactory>
    {
      data.map(
        ({ name, value, children, checked, onClick }: XRadioTypes) => (
          <Radio onClick={onClick} name={name} value={value} key={`${name}_${value}`} checked={checked}>
            {children}
          </Radio>
        )
      )
    }
  </S.XRadioFactory>
)

export default XRadioFactory
