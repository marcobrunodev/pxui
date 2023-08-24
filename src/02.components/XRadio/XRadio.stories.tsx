import { Meta, StoryObj } from '@storybook/react'
import XRadio from '.'

const meta: Meta<typeof XRadio> = {
  title: '02 - components/XRadio',
  component: XRadio
}
export default meta

type Story = StoryObj<typeof XRadio>

export const Normal: Story = {
  args: {
    children: 'Yes',
    value: 'yes',
    name: 'answer',
    checked: false
  }
}

export const Checked: Story = {
  args: {
    children: 'Yes',
    value: 'yes',
    name: 'answer',
    checked: true
  }
}