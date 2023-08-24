import { Meta, StoryObj } from '@storybook/react'
import XBadges from '..'

const meta: Meta<typeof XBadges> = {
  title: '02 - components/XBadges/02 - With Label',
  component: XBadges
}
export default meta

type Story = StoryObj<typeof XBadges>

export const WithLabel: Story = {
  args: {
    label: 'Version',
    content: '0.0.1',
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: false
  }
}

export const PrimaryWithLabel: Story = {
  args: {
    label: 'Version',
    content: '0.0.1',
    primary: true,
    success: false,
    warning: false,
    error: false,
    disabled: false
  }
}

export const SuccessWithLabel: Story = {
  args: {
    label: 'Version',
    content: '0.0.1',
    primary: false,
    success: true,
    warning: false,
    error: false,
    disabled: false
  }
}

export const WarningWithLabel: Story = {
  args: {
    label: 'Version',
    content: '0.0.1',
    primary: false,
    success: false,
    warning: true,
    error: false,
    disabled: false
  }
}

export const ErrorWithLabel: Story = {
  args: {
    label: 'Version',
    content: '0.0.1',
    primary: false,
    success: false,
    warning: false,
    error: true,
    disabled: false
  }
}
export const DisabledWithLabel: Story = {
  args: {
    label: 'Version',
    content: '0.0.1',
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: true
  }
}