import { Meta, StoryObj } from '@storybook/react'
import XAlert from '..'

const meta: Meta<typeof XAlert> = {
  title: '02 - components/XAlert/05 - With error',
  component: XAlert
}
export default meta

type Story = StoryObj<typeof XAlert>

export const WithError: Story = {
  args: {
    isOpen: true,
    children: 'Your text or component(s) here',
    errorMessage: 'Not found',
    iconClose: true,
    simple: false,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: false,
  }
}

export const PrimaryWithError: Story = {
  args: {
    isOpen: true,
    children: 'Your text or component(s) here',
    errorMessage: 'Not found',
    iconClose: true,
    simple: false,
    primary: true,
    success: false,
    warning: false,
    error: false,
    disabled: false,
  }
}

export const SuccessWithError: Story = {
  args: {
    isOpen: true,
    children: 'Your text or component(s) here',
    errorMessage: 'Not found',
    iconClose: true,
    simple: false,
    primary: false,
    success: true,
    warning: false,
    error: false,
    disabled: false,
  }
}

export const WarningWithError: Story = {
  args: {
    isOpen: true,
    children: 'Your text or component(s) here',
    errorMessage: 'Not found',
    iconClose: true,
    simple: false,
    primary: false,
    success: false,
    warning: true,
    error: false,
    disabled: false,
  }
}

export const ErrorWithError: Story = {
  args: {
    isOpen: true,
    children: 'Your text or component(s) here',
    errorMessage: 'Not found',
    iconClose: true,
    simple: false,
    primary: false,
    success: false,
    warning: false,
    error: true,
    disabled: false,
  }
}

export const DiabledWithError: Story = {
  args: {
    isOpen: true,
    children: 'Your text or component(s) here',
    errorMessage: 'Not found',
    iconClose: true,
    simple: false,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: true,
  }
}