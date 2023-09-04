import { Meta, StoryObj } from '@storybook/react'
import XArrow from '..'

const meta: Meta<typeof XArrow> = {
  title: '01 - icons/XArrow/03 - Left',
  component: XArrow
}
export default meta

type Story = StoryObj<typeof XArrow>

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

export const PrimaryLeft: Story = {
  args: {
    right: false,
    down: false,
    left: true,
    up: false,
    primary: true,
    success: false,
    warning: false,
    error: false,
    disabled: false,
  }
}

export const SuccessLeft: Story = {
  args: {
    right: false,
    down: false,
    left: true,
    up: false,
    primary: false,
    success: true,
    warning: false,
    error: false,
    disabled: false,
  }
}

export const WarningLeft: Story = {
  args: {
    right: false,
    down: false,
    left: true,
    up: false,
    primary: false,
    success: false,
    warning: true,
    error: false,
    disabled: false,
  }
}

export const ErrorLeft: Story = {
  args: {
    right: false,
    down: false,
    left: true,
    up: false,
    primary: false,
    success: false,
    warning: false,
    error: true,
    disabled: false,
  }
}

export const DisabledLeft: Story = {
  args: {
    right: false,
    down: false,
    left: true,
    up: false,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: true,
  }
}