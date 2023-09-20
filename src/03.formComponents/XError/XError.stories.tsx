import { Meta, StoryObj } from '@storybook/react'
import XError from '.'

const meta: Meta<typeof XError> = {
  title: '03 - Form Components/XError',
  component: XError
}
export default meta

type Story = StoryObj<typeof XError>

export const Normal: Story = {
  args: {
    children: 'Error message',
    show: true
  }
}