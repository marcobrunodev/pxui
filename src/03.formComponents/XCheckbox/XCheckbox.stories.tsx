import { Meta, StoryObj } from '@storybook/react'
import XCheckbox from '.'

const meta: Meta<typeof XCheckbox> = {
  title: '03 - Form Components/XCheckbox',
  component: XCheckbox
}
export default meta

type Story = StoryObj<typeof XCheckbox>

export const Normal: Story = {
  args: {
    value: 'dark',
    children: 'Dark',
    name: 'theme',
    checked: false,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: false
  }
}

export const Checked: Story = {
  args: {
    value: 'dark',
    children: 'Dark',
    name: 'theme',
    checked: true,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: false
  }
}

export const PrimaryChecked: Story = {
  args: {
    value: 'dark',
    children: 'Dark',
    name: 'theme',
    checked: true,
    primary: true,
    success: false,
    warning: false,
    error: false,
    disabled: false
  }
}

export const SuccessChecked: Story = {
  args: {
    value: 'dark',
    children: 'Dark',
    name: 'theme',
    checked: true,
    primary: false,
    success: true,
    warning: false,
    error: false,
    disabled: false
  }
}

export const WarningChecked: Story = {
  args: {
    value: 'dark',
    children: 'Dark',
    name: 'theme',
    checked: true,
    primary: false,
    success: false,
    warning: true,
    error: false,
    disabled: false
  }
}

export const ErrorChecked: Story = {
  args: {
    value: 'dark',
    children: 'Dark',
    name: 'theme',
    checked: true,
    primary: false,
    success: false,
    warning: false,
    error: true,
    disabled: false
  }
}

export const DisabledChecked: Story = {
  args: {
    value: 'dark',
    children: 'Dark',
    name: 'theme',
    checked: true,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: true
  }
}