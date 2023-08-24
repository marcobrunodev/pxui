import { Meta, StoryObj } from '@storybook/react'
import XButton from ".."

const meta: Meta<typeof XButton> = {
  title: '02 - components/XButton/02 - Full',
  component: XButton
}
export default meta

type Story = StoryObj<typeof XButton>

export const NormalFull: Story = {
  args: {
    children: 'Login',
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: false,
    full: true,
    onClick: () => console.log('Your function here')
  }
}

export const PrimaryFull: Story = {
  args: {
    children: 'Login',
    primary: true,
    success: false,
    warning: false,
    error: false,
    disabled: false,
    full: true,
    onClick: () => console.log('Your function here')
  }
}

export const SuccessFull: Story = {
  args: {
    children: 'Login',
    primary: false,
    success: true,
    warning: false,
    error: false,
    disabled: false,
    full: true,
    onClick: () => console.log('Your function here')
  }
}

export const WarningFull: Story = {
  args: {
    children: 'Login',
    primary: false,
    success: false,
    warning: true,
    error: false,
    disabled: false,
    full: true,
    onClick: () => console.log('Your function here')
  }
}

export const ErrorFull: Story = {
  args: {
    children: 'Login',
    primary: false,
    success: false,
    warning: false,
    error: true,
    disabled: false,
    full: true,
    onClick: () => console.log('Your function here')
  }
}

export const DisabledFull: Story = {
  args: {
    children: 'Login',
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: true,
    full: true,
    onClick: () => console.log('Your function here')
  }
}