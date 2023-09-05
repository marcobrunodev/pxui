import { Meta, StoryObj } from '@storybook/react'
import XDiscord from '.'

const meta: Meta<typeof XDiscord> = {
  title: '01 - Icons/XDiscord',
  component: XDiscord
}
export default meta

type Story = StoryObj<typeof XDiscord>

export const Normal: Story = {
  args: {}
}