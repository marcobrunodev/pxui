import { Meta, StoryObj } from '@storybook/react'
import XLabel from '.'

const meta: Meta<typeof XLabel> = {
  title: '02 - components/XLabel',
  component: XLabel
}
export default meta

type Story = StoryObj<typeof XLabel>

export const Normal: Story = {
  args: {
    children: 'Label here',
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: false,
  }
}