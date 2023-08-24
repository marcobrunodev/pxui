import { Meta, StoryObj } from '@storybook/react'
import XAlert from '..'

const meta: Meta<typeof XAlert> = {
  title: '02 - components/XAlert/01 - Normal',
  component: XAlert
}
export default meta

type Story = StoryObj<typeof XAlert>

export const Normal: Story = {
  args: {
    isOpen: true,
    children: 'Your text or component(s) here',
    errorMessage: false,
    iconClose: true,
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
    isOpen: true,
    children: 'Your text or component(s) here',
    errorMessage: false,
    iconClose: true,
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
    isOpen: true,
    children: 'Your text or component(s) here',
    errorMessage: false,
    iconClose: true,
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
    isOpen: true,
    children: 'Your text or component(s) here',
    errorMessage: false,
    iconClose: true,
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
    isOpen: true,
    children: 'Your text or component(s) here',
    errorMessage: false,
    iconClose: true,
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
    isOpen: true,
    children: 'Your text or component(s) here',
    errorMessage: false,
    iconClose: true,
    simple: false,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: true,
  }
}