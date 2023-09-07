import { Meta, StoryObj } from '@storybook/react'
import XEyeClose from '.'

const meta: Meta<typeof XEyeClose> = {
  title: '01 - Icons/XEyeClose',
  component: XEyeClose
}
export default meta

type Story = StoryObj<typeof XEyeClose>

export const Normal: Story = {
  args: {}
}