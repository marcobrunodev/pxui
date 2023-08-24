import { Meta, StoryObj } from '@storybook/react'
import XAlert from '..'

const meta: Meta<typeof XAlert> = {
  title: '02 - components/XAlert/04 - Simple',
  component: XAlert
}
export default meta

type Story = StoryObj<typeof XAlert>

export const Simple: Story = {
  args: {
    isOpen: true,
    children: 'Your text or component(s) here',
    errorMessage: false,
    iconClose: true,
    simple: true,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: false,
  }
}

export const PrimarySimple: Story = {
  args: {
    isOpen: true,
    children: 'Your text or component(s) here',
    errorMessage: false,
    iconClose: true,
    simple: true,
    primary: true,
    success: false,
    warning: false,
    error: false,
    disabled: false,
  }
}

export const SuccessSimple: Story = {
  args: {
    isOpen: true,
    children: 'Your text or component(s) here',
    errorMessage: false,
    iconClose: true,
    simple: true,
    primary: false,
    success: true,
    warning: false,
    error: false,
    disabled: false,
  }
}

export const WarningSimple: Story = {
  args: {
    isOpen: true,
    children: 'Your text or component(s) here',
    errorMessage: false,
    iconClose: true,
    simple: true,
    primary: false,
    success: false,
    warning: true,
    error: false,
    disabled: false,
  }
}

export const ErrorSimple: Story = {
  args: {
    isOpen: true,
    children: 'Your text or component(s) here',
    errorMessage: false,
    iconClose: true,
    simple: true,
    primary: false,
    success: false,
    warning: false,
    error: true,
    disabled: false,
  }
}

export const DisabledSimple: Story = {
  args: {
    isOpen: true,
    children: 'Your text or component(s) here',
    errorMessage: false,
    iconClose: true,
    simple: true,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: true,
  }
}