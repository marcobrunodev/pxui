import { Meta, StoryObj } from '@storybook/react'
import XButton from ".."

const meta: Meta<typeof XButton> = {
  title: 'components/XButton/01 - Normal',
  component: XButton
}
export default meta

type Story = StoryObj<typeof XButton>

export const Normal: Story = {
  args: {
    children: 'Login',
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: false,
    full: false,
    onClick: () => console.log('Your function here')
  }
}

export const Primary: Story = {
  args: {
    children: 'Login',
    primary: true,
    success: false,
    warning: false,
    error: false,
    disabled: false,
    full: false,
    onClick: () => console.log('Your function here')
  }
}

export const Success: Story = {
  args: {
    children: 'Login',
    primary: false,
    success: true,
    warning: false,
    error: false,
    disabled: false,
    full: false,
    onClick: () => console.log('Your function here')
  }
}

export const Warning: Story = {
  args: {
    children: 'Login',
    primary: false,
    success: false,
    warning: true,
    error: false,
    disabled: false,
    full: false,
    onClick: () => console.log('Your function here')
  }
}

export const Error: Story = {
  args: {
    children: 'Login',
    primary: false,
    success: false,
    warning: false,
    error: true,
    disabled: false,
    full: false,
    onClick: () => console.log('Your function here')
  }
}

export const Disabled: Story = {
  args: {
    children: 'Login',
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: true,
    full: false,
    onClick: () => console.log('Your function here')
  }
}