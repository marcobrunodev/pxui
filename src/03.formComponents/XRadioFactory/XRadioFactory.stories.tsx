import { Meta, StoryObj } from '@storybook/react'
import XRadioFactory from '.'

const meta: Meta<typeof XRadioFactory> = {
  title: '03 - Form Components/XRadioFactory',
  component: XRadioFactory
}
export default meta

type Story = StoryObj<typeof XRadioFactory>

export const Normal: Story = {
  args: {
    data: [
      {
        children: 'Yes',
        value: 'yes',
        name: 'answer',
        checked: true,
        onClick: () => console.log('Clicked')
      },
      {
        children: 'No',
        value: 'no',
        name: 'answer',
        checked: false,
        onClick: () => console.log('Clicked')
      }
    ],

  }
}