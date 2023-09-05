import { Meta, StoryObj } from '@storybook/react'
import XTwitter from '.'

const meta: Meta<typeof XTwitter> = {
  title: '01 - Icons/XTwitter',
  component: XTwitter
}
export default meta

type Story = StoryObj<typeof XTwitter>

export const Normal: Story = {
  args: {}
}