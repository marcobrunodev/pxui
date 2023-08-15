import { Meta, StoryObj } from '@storybook/react'
import XBallon from '.'

const meta: Meta<typeof XBallon> = {
  title: 'components/XBallon',
  component: XBallon
}
export default meta

type Story = StoryObj<typeof XBallon>

export const Normal: Story = {
  args: {
    children: 'Your message here',
    full: false
  }
}

export const Full: Story = {
  args: {
    children: 'Your message here',
    full: true
  }
}