import { Meta, StoryObj } from '@storybook/react'
import XAlert from '..'

const meta: Meta<typeof XAlert> = {
  title: '02 - components/XAlert/02 - Without Icon Close',
  component: XAlert
}
export default meta

type Story = StoryObj<typeof XAlert>

export const WithoutCloseIcon: Story = {
  args: {
    isOpen: true,
    children: 'Your text or component(s) here',
    errorMessage: false,
    iconClose: false,
    simple: false,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: false,
  }
}

export const PrimaryWithoutClose: Story = {
  args: {
    isOpen: true,
    children: 'Your text or component(s) here',
    errorMessage: false,
    iconClose: false,
    simple: false,
    primary: true,
    success: false,
    warning: false,
    error: false,
    disabled: false,
  }
}

export const SuccessWithoutClose: Story = {
  args: {
    isOpen: true,
    children: 'Your text or component(s) here',
    errorMessage: false,
    iconClose: false,
    simple: false,
    primary: false,
    success: true,
    warning: false,
    error: false,
    disabled: false,
  }
}

export const WarningWithoutClose: Story = {
  args: {
    isOpen: true,
    children: 'Your text or component(s) here',
    errorMessage: false,
    iconClose: false,
    simple: false,
    primary: false,
    success: false,
    warning: true,
    error: false,
    disabled: false,
  }
}

export const ErrorWithoutClose: Story = {
  args: {
    isOpen: true,
    children: 'Your text or component(s) here',
    errorMessage: false,
    iconClose: false,
    simple: false,
    primary: false,
    success: false,
    warning: false,
    error: true,
    disabled: false,
  }
}

export const DisableWithoutClosed: Story = {
  args: {
    isOpen: true,
    children: 'Your text or component(s) here',
    errorMessage: false,
    iconClose: false,
    simple: false,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: true,
  }
}