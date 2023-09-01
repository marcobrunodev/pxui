import { Meta, StoryObj } from '@storybook/react'
import XBalloon from '..'

const meta: Meta<typeof XBalloon> = {
  title: '02 - components/XBalloon/01 - Normal',
  component: XBalloon
}
export default meta

type Story = StoryObj<typeof XBalloon>

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