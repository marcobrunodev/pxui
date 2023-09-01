import { Meta, StoryObj } from '@storybook/react'
import XArrow from '.'

const meta: Meta<typeof XArrow> = {
  title: '01 - icons/XArrow',
  component: XArrow
}
export default meta

type Story = StoryObj<typeof XArrow>

export const Down: Story = {
  args: {
    right: false,
    down: true,
    left: false,
    up: false,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: false,
  }
}

export const Left: Story = {
  args: {
    right: false,
    down: false,
    left: true,
    up: false,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: false,
  }
}

export const Up: Story = {
  args: {
    right: false,
    down: false,
    left: false,
    up: true,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: false,
  }
}