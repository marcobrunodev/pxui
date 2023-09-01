import { Meta, StoryObj } from '@storybook/react'
import XInput from '..'

const meta: Meta<typeof XInput> = {
  title: '02.1 - Form Components/XInput/01 - Normal',
  component: XInput
}
export default meta

type Story = StoryObj<typeof XInput>

export const Normal: Story = {
  args: {
    simple: false,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: false,
  }
}

export const Primary: Story = {
  args: {
    simple: false,
    primary: true,
    success: false,
    warning: false,
    error: false,
    disabled: false,
  }
}

export const Success: Story = {
  args: {
    simple: false,
    primary: false,
    success: true,
    warning: false,
    error: false,
    disabled: false,
  }
}

export const Warning: Story = {
  args: {
    simple: false,
    primary: false,
    success: false,
    warning: true,
    error: false,
    disabled: false,
  }
}

export const Error: Story = {
  args: {
    simple: false,
    primary: false,
    success: false,
    warning: false,
    error: true,
    disabled: false,
  }
}

export const Disabled: Story = {
  args: {
    simple: false,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: true,
  }
}