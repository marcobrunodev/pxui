import { Meta, StoryObj } from '@storybook/react'
import XInput from '..'

const meta: Meta<typeof XInput> = {
  title: '03 - Form Components/XInput/02 - Simple',
  component: XInput
}
export default meta

type Story = StoryObj<typeof XInput>

export const Normal: Story = {
  args: {
    simple: true,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: false,
    type: 'text'
  }
}

export const Primary: Story = {
  args: {
    simple: true,
    primary: true,
    success: false,
    warning: false,
    error: false,
    disabled: false,
    type: 'text'
  }
}

export const Success: Story = {
  args: {
    simple: true,
    primary: false,
    success: true,
    warning: false,
    error: false,
    disabled: false,
    type: 'text'
  }
}

export const Warning: Story = {
  args: {
    simple: true,
    primary: false,
    success: false,
    warning: true,
    error: false,
    disabled: false,
    type: 'text'
  }
}

export const Error: Story = {
  args: {
    simple: true,
    primary: false,
    success: false,
    warning: false,
    error: true,
    disabled: false,
    type: 'text'
  }
}

export const Disabled: Story = {
  args: {
    simple: true,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: true,
    type: 'text'
  }
}