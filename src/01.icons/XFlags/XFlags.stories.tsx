import { Meta, StoryObj } from '@storybook/react'
import XFlags from '.'

const meta: Meta<typeof XFlags> = {
  title: '01 - Icons/XFlags',
  component: XFlags
}
export default meta

type Story = StoryObj<typeof XFlags>

export const Normal: Story = {
  args: {
    br: true,
    uk: false
  }
}