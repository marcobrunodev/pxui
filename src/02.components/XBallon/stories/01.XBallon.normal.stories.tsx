import { Meta, StoryObj } from '@storybook/react'
import XBallon from '..'

const meta: Meta<typeof XBallon> = {
  title: '02 - components/XBallon/01 - Normal',
  component: XBallon
}
export default meta

type Story = StoryObj<typeof XBallon>

export const Normal: Story = {
  args: {
    children: 'Your message here',
    full: false,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: false
  }
}

export const Primary: Story = {
  args: {
    children: 'Your message here',
    full: false,
    primary: true,
    success: false,
    warning: false,
    error: false,
    disabled: false
  }
}

export const Success: Story = {
  args: {
    children: 'Your message here',
    full: false,
    primary: false,
    success: true,
    warning: false,
    error: false,
    disabled: false
  }
}

export const Warning: Story = {
  args: {
    children: 'Your message here',
    full: false,
    primary: false,
    success: false,
    warning: true,
    error: false,
    disabled: false
  }
}

export const Error: Story = {
  args: {
    children: 'Your message here',
    full: false,
    primary: false,
    success: false,
    warning: false,
    error: true,
    disabled: false
  }
}

export const Disabled: Story = {
  args: {
    children: 'Your message here',
    full: false,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: true
  }
}