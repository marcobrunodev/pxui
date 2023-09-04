import { Meta, StoryObj } from '@storybook/react'
import XArrow from '..'

const meta: Meta<typeof XArrow> = {
  title: '01 - icons/XArrow/04 - Up',
  component: XArrow
}
export default meta

type Story = StoryObj<typeof XArrow>

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

export const PrimaryUp: Story = {
  args: {
    right: false,
    down: false,
    left: false,
    up: true,
    primary: true,
    success: false,
    warning: false,
    error: false,
    disabled: false,
  }
}

export const SuccessUp: Story = {
  args: {
    right: false,
    down: false,
    left: false,
    up: true,
    primary: false,
    success: true,
    warning: false,
    error: false,
    disabled: false,
  }
}

export const WarningUp: Story = {
  args: {
    right: false,
    down: false,
    left: false,
    up: true,
    primary: false,
    success: false,
    warning: true,
    error: false,
    disabled: false,
  }
}

export const ErrorUp: Story = {
  args: {
    right: false,
    down: false,
    left: false,
    up: true,
    primary: false,
    success: false,
    warning: false,
    error: true,
    disabled: false,
  }
}

export const DisabledUp: Story = {
  args: {
    right: false,
    down: false,
    left: false,
    up: true,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: true,
  }
}