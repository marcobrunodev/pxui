import { Meta, StoryObj } from '@storybook/react'
import XArrow from '..'

const meta: Meta<typeof XArrow> = {
  title: '01 - icons/XArrow/01 - Right',
  component: XArrow
}
export default meta

type Story = StoryObj<typeof XArrow>

export const Right: Story = {
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

export const PrimaryRight: Story = {
  args: {
    right: true,
    down: false,
    left: false,
    up: false,
    primary: true,
    success: false,
    warning: false,
    error: false,
    disabled: false,
  }
}

export const SuccessRight: Story = {
  args: {
    right: true,
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

export const WarningRight: Story = {
  args: {
    right: true,
    down: false,
    left: false,
    up: false,
    primary: false,
    success: false,
    warning: true,
    error: false,
    disabled: false,
  }
}

export const ErrorRight: Story = {
  args: {
    right: true,
    down: false,
    left: false,
    up: false,
    primary: false,
    success: false,
    warning: false,
    error: true,
    disabled: false,
  }
}

export const DisabledRight: Story = {
  args: {
    right: true,
    down: false,
    left: false,
    up: false,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: true,
  }
}