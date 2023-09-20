import { Meta, StoryObj } from '@storybook/react'
import XFile from '..'

const meta: Meta<typeof XFile> = {
  title: '03 - Form Components/XFile/01 - Normal',
  component: XFile
}
export default meta

type Story = StoryObj<typeof XFile>

export const Normal: Story = {
  args: {
    children: 'Choose a file...',
    files: 'No files...',
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: false,
    multiple: false
  }
}

export const Primary: Story = {
  args: {
    children: 'Choose a file...',
    files: 'No files...',
    primary: true,
    success: false,
    warning: false,
    error: false,
    disabled: false,
    multiple: false
  }
}

export const Success: Story = {
  args: {
    children: 'Choose a file...',
    files: 'No files...',
    primary: false,
    success: true,
    warning: false,
    error: false,
    disabled: false,
    multiple: false
  }
}

export const Warning: Story = {
  args: {
    children: 'Choose a file...',
    files: 'No files...',
    primary: false,
    success: false,
    warning: true,
    error: false,
    disabled: false,
    multiple: false
  }
}

export const Error: Story = {
  args: {
    children: 'Choose a file...',
    files: 'No files...',
    primary: false,
    success: false,
    warning: false,
    error: true,
    disabled: false,
    multiple: false
  }
}

export const Disabled: Story = {
  args: {
    children: 'Choose a file...',
    files: 'No files...',
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: true,
    multiple: false
  }
}

