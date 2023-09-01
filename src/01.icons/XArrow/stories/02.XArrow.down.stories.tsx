import { Meta, StoryObj } from '@storybook/react'
import XArrow from '..'

const meta: Meta<typeof XArrow> = {
  title: '01 - icons/XArrow/01 - Down',
  component: XArrow
}
export default meta

type Story = StoryObj<typeof XArrow>

export const Normal: Story = {
  args: {
    right: true,
    down: false,
    left: false,
    up: false,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: false,
  }
}

export const SuccessNormal: Story = {
  args: {
    right: false,
    down: false,
    left: false,
    up: false,
    primary: false,
    success: true,
    warning: false,
    error: false,
    disabled: false,
  }
}