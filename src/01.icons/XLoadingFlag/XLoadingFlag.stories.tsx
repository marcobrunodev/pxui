import { Meta, StoryObj } from '@storybook/react'
import XLoadingFlag from '.'

const meta: Meta<typeof XLoadingFlag> = {
  title: '01 - Icons/XLoadingFlag',
  component: XLoadingFlag
}
export default meta

type Story = StoryObj<typeof XLoadingFlag>

export const Normal: Story = {
  args: {}
}