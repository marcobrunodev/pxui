import { Meta, StoryObj } from '@storybook/react'
import XEye from '.'

const meta: Meta<typeof XEye> = {
  title: '01 - Icons/XEye',
  component: XEye
}
export default meta

type Story = StoryObj<typeof XEye>

export const Normal: Story = {
  args: {}
}