import { Meta, StoryObj } from '@storybook/react'
import XButton from "."

const meta: Meta<typeof XButton> = {
  title: 'components/Button',
  component: XButton
}
export default meta

type Story = StoryObj<typeof XButton>

export const Primary: Story = {
  args: {
    children: 'Login',
    primary: true,
    success: false,
    warning: false,
    error: false,
    disabled: false
  }
}

export const Success: Story = {
  args: {
    children: 'Login',
    primary: false,
    success: true,
    warning: false,
    error: false,
    disabled: false
  }
}

export const Warning: Story = {
  args: {
    children: 'Login',
    primary: false,
    success: false,
    warning: true,
    error: false,
    disabled: false
  }
}

export const Error: Story = {
  args: {
    children: 'Login',
    primary: false,
    success: false,
    warning: false,
    error: true,
    disabled: false
  }
}

export const Disabled: Story = {
  args: {
    children: 'Login',
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: true
  }
}