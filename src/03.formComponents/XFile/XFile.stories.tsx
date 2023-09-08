import { Meta, StoryObj } from '@storybook/react'
import XFile from '.'

const meta: Meta<typeof XFile> = {
  title: '03 - Form Components/XFile',
  component: XFile
}
export default meta

type Story = StoryObj<typeof XFile>

export const Normal: Story = {
  args: {
    children: 'Select file',
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: false,
  }
}

export const Primary: Story = {
  args: {
    children: 'Select file',
    primary: true,
    success: false,
    warning: false,
    error: false,
    disabled: false,
  }
}

export const Success: Story = {
  args: {
    children: 'Select file',
    primary: false,
    success: true,
    warning: false,
    error: false,
    disabled: false,
  }
}

export const Warning: Story = {
  args: {
    children: 'Select file',
    primary: false,
    success: false,
    warning: true,
    error: false,
    disabled: false,
  }
}

export const Error: Story = {
  args: {
    children: 'Select file',
    primary: false,
    success: false,
    warning: false,
    error: true,
    disabled: false,
  }
}

export const Disabled: Story = {
  args: {
    children: 'Select file',
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: true,
  }
}