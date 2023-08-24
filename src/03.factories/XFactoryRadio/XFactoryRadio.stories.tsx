import { Meta, StoryObj } from '@storybook/react'
import XFactoryRadio from '.'

const meta: Meta<typeof XFactoryRadio> = {
  title: '03 - Factories/XFactoryRadio',
  component: XFactoryRadio
}
export default meta

type Story = StoryObj<typeof XFactoryRadio>

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