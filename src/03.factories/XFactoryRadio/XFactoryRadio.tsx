import Radio from '../../02.components/XRadio'
import XRadioTypes from '../../02.components/XRadio/XRadio.types'
import S from './XFactoryRadio.styles'
import XFactoryRadioTypes from './XFactoryRadio.types'

const XFactoryRadio = ({ data }: XFactoryRadioTypes) => (
  <S.XFactoryRadio>
    {
      data.map(
        ({ name, value, children, checked, onClick }: XRadioTypes) => (
          <Radio onClick={onClick} name={name} value={value} key={`${name}_${value}`} checked={checked}>
            {children}
          </Radio>
        )
      )
    }
  </S.XFactoryRadio>
)

export default XFactoryRadio
