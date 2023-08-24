import { Meta, StoryObj } from '@storybook/react'
import XAlert from '..'

const meta: Meta<typeof XAlert> = {
  title: '02 - components/XAlert/11 - Simple and Error',
  component: XAlert
}
export default meta

type Story = StoryObj<typeof XAlert>

export const SimpleError: Story = {
  args: {
    isOpen: true,
    children: 'Your text or component(s) here',
    errorMessage: 'Messagem error here',
    iconClose: true,
    simple: true,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: false,
  }
}

export const PrimarySimpleError: Story = {
  args: {
    isOpen: true,
    children: 'Your text or component(s) here',
    errorMessage: 'Messagem error here',
    iconClose: true,
    simple: true,
    primary: true,
    success: false,
    warning: false,
    error: false,
    disabled: false,
  }
}

export const SuccessSimpleError: Story = {
  args: {
    isOpen: true,
    children: 'Your text or component(s) here',
    errorMessage: 'Messagem error here',
    iconClose: true,
    simple: true,
    primary: false,
    success: true,
    warning: false,
    error: false,
    disabled: false,
  }
}

export const WarningSimpleError: Story = {
  args: {
    isOpen: true,
    children: 'Your text or component(s) here',
    errorMessage: 'Messagem error here',
    iconClose: true,
    simple: true,
    primary: false,
    success: false,
    warning: true,
    error: false,
    disabled: false,
  }
}

export const ErrorSimpleError: Story = {
  args: {
    isOpen: true,
    children: 'Your text or component(s) here',
    errorMessage: 'Messagem error here',
    iconClose: true,
    simple: true,
    primary: false,
    success: false,
    warning: false,
    error: true,
    disabled: false,
  }
}

export const DisabledSimpleError: Story = {
  args: {
    isOpen: true,
    children: 'Your text or component(s) here',
    errorMessage: 'Messagem error here',
    iconClose: true,
    simple: true,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: true,
  }
}