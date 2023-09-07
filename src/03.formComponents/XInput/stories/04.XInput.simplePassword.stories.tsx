import { Meta, StoryObj } from '@storybook/react'
import XInput from '..'

const meta: Meta<typeof XInput> = {
  title: '03 - Form Components/XInput/03 - Type Simple and Password',
  component: XInput
}
export default meta

type Story = StoryObj<typeof XInput>

export const SimplePassword: Story = {
  args: {
    simple: true,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: false,
    type: 'password'
  }
}

export const PrimarySimplePassword: Story = {
  args: {
    simple: true,
    primary: true,
    success: false,
    warning: false,
    error: false,
    disabled: false,
    type: 'password'
  }
}

export const SuccessSimplePassword: Story = {
  args: {
    simple: true,
    primary: false,
    success: true,
    warning: false,
    error: false,
    disabled: false,
    type: 'password'
  }
}

export const WarningSimplePassword: Story = {
  args: {
    simple: true,
    primary: false,
    success: false,
    warning: true,
    error: false,
    disabled: false,
    type: 'password'
  }
}

export const ErrorSimplePassword: Story = {
  args: {
    simple: true,
    primary: false,
    success: false,
    warning: false,
    error: true,
    disabled: false,
    type: 'password'
  }
}

export const DisabledSimplePassword: Story = {
  args: {
    simple: true,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: true,
    type: 'password'
  }
}