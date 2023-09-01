import { Meta, StoryObj } from '@storybook/react'
import XBalloon from '..'

const meta: Meta<typeof XBalloon> = {
  title: '02 - components/XBalloon/02 - Full',
  component: XBalloon
}
export default meta

type Story = StoryObj<typeof XBalloon>

export const Full: Story = {
  args: {
    children: 'Your message here',
    full: true,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: false
  }
}

export const PrimaryFull: Story = {
  args: {
    children: 'Your message here',
    full: true,
    primary: true,
    success: false,
    warning: false,
    error: false,
    disabled: false
  }
}

export const SuccessFull: Story = {
  args: {
    children: 'Your message here',
    full: true,
    primary: false,
    success: true,
    warning: false,
    error: false,
    disabled: false
  }
}

export const WarningFull: Story = {
  args: {
    children: 'Your message here',
    full: true,
    primary: false,
    success: false,
    warning: true,
    error: false,
    disabled: false
  }
}

export const ErrorFull: Story = {
  args: {
    children: 'Your message here',
    full: true,
    primary: false,
    success: false,
    warning: false,
    error: true,
    disabled: false
  }
}

export const DisabledFull: Story = {
  args: {
    children: 'Your message here',
    full: true,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: true
  }
}