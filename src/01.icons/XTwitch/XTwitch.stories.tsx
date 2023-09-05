import { Meta, StoryObj } from '@storybook/react'
import XTwitch from '.'

const meta: Meta<typeof XTwitch> = {
  title: '01 - icons/XTwitch',
  component: XTwitch
}
export default meta

type Story = StoryObj<typeof XTwitch>

export const Normal: Story = {
  args: {}
}