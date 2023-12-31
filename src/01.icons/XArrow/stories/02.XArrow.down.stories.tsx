import { Meta, StoryObj } from '@storybook/react'
import XArrow from '..'

const meta: Meta<typeof XArrow> = {
  title: '01 - icons/XArrow/02 - Down',
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

export const PrimaryDown: Story = {
  args: {
    right: false,
    down: true,
    left: false,
    up: false,
    primary: true,
    success: false,
    warning: false,
    error: false,
    disabled: false,
  }
}

export const SuccessDown: Story = {
  args: {
    right: false,
    down: true,
    left: false,
    up: false,
    primary: false,
    success: true,
    warning: false,
    error: false,
    disabled: false,
  }
}

export const WarningDown: Story = {
  args: {
    right: false,
    down: true,
    left: false,
    up: false,
    primary: false,
    success: false,
    warning: true,
    error: false,
    disabled: false,
  }
}

export const ErrorDown: Story = {
  args: {
    right: false,
    down: true,
    left: false,
    up: false,
    primary: false,
    success: false,
    warning: false,
    error: true,
    disabled: false,
  }
}

export const Disabled: Story = {
  args: {
    right: false,
    down: true,
    left: false,
    up: false,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: true,
  }
}