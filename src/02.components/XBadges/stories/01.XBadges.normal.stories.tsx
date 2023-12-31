import { Meta, StoryObj } from '@storybook/react'
import XBadges from '..'

const meta: Meta<typeof XBadges> = {
  title: '02 - components/XBadges/01 - Normal',
  component: XBadges
}
export default meta

type Story = StoryObj<typeof XBadges>

export const Normal: Story = {
  args: {
    content: 'New',
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: false,
    label: ''
  }
}

export const Primary: Story = {
  args: {
    content: 'New',
    primary: true,
    success: false,
    warning: false,
    error: false,
    disabled: false,
    label: ''
  }
}

export const Success: Story = {
  args: {
    content: 'New',
    primary: false,
    success: true,
    warning: false,
    error: false,
    disabled: false,
    label: ''
  }
}

export const Warning: Story = {
  args: {
    content: 'New',
    primary: false,
    success: false,
    warning: true,
    error: false,
    disabled: false,
    label: ''
  }
}

export const Error: Story = {
  args: {
    content: 'New',
    primary: false,
    success: false,
    warning: false,
    error: true,
    disabled: false,
    label: ''
  }
}

export const Disabled: Story = {
  args: {
    content: 'New',
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: true,
    label: ''
  }
}