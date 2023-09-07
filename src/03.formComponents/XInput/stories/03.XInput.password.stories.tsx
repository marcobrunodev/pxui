import { Meta, StoryObj } from '@storybook/react'
import XInput from '..'

const meta: Meta<typeof XInput> = {
  title: '03 - Form Components/XInput/03 - Type Password',
  component: XInput
}
export default meta

type Story = StoryObj<typeof XInput>

export const Password: Story = {
  args: {
    simple: false,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: false,
    type: 'password'
  }
}

export const PrimaryPassword: Story = {
  args: {
    simple: false,
    primary: true,
    success: false,
    warning: false,
    error: false,
    disabled: false,
    type: 'password'
  }
}

export const SuccessPassword: Story = {
  args: {
    simple: false,
    primary: false,
    success: true,
    warning: false,
    error: false,
    disabled: false,
    type: 'password'
  }
}

export const WarningPassword: Story = {
  args: {
    simple: false,
    primary: false,
    success: false,
    warning: true,
    error: false,
    disabled: false,
    type: 'password'
  }
}

export const ErrorPassword: Story = {
  args: {
    simple: false,
    primary: false,
    success: false,
    warning: false,
    error: true,
    disabled: false,
    type: 'password'
  }
}

export const DisabledPassword: Story = {
  args: {
    simple: false,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: true,
    type: 'password'
  }
}