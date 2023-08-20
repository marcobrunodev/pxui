import { Meta, StoryObj } from '@storybook/react'
import XArrow from '.'

const meta: Meta<typeof XArrow> = {
  title: 'icons/XArrow',
  component: XArrow
}
export default meta

type Story = StoryObj<typeof XArrow>

export const Right: Story = {
  args: {
    right: true,
    down: false,
    left: false,
    up: false
  }
}

export const Down: Story = {
  args: {
    right: false,
    down: true,
    left: false,
    up: false
  }
}

export const Left: Story = {
  args: {
    right: false,
    down: false,
    left: true,
    up: false
  }
}

export const Up: Story = {
  args: {
    right: false,
    down: false,
    left: false,
    up: true
  }
}