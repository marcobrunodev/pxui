import { Meta, StoryObj } from '@storybook/react'
import XTelegram from '.'

const meta: Meta<typeof XTelegram> = {
  title: '01 - Icons/XTelegram',
  component: XTelegram
}
export default meta

type Story = StoryObj<typeof XTelegram>

export const Normal: Story = {
  args: {}
}