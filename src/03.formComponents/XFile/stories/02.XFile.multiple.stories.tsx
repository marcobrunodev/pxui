import { Meta, StoryObj } from '@storybook/react'
import XFile from '..'

const meta: Meta<typeof XFile> = {
  title: '03 - Form Components/XFile/02 - Multiple',
  component: XFile
}
export default meta

type Story = StoryObj<typeof XFile>

export const Multiple: Story = {
  args: {
    children: 'Choose some files...',
    files: 'No files...',
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: false,
    multiple: true
  }
}

export const PrimaryMultiple: Story = {
  args: {
    children: 'Choose some files...',
    files: 'No files...',
    primary: true,
    success: false,
    warning: false,
    error: false,
    disabled: false,
    multiple: true
  }
}

export const SuccessMultiple: Story = {
  args: {
    children: 'Choose some files...',
    files: 'No files...',
    primary: false,
    success: true,
    warning: false,
    error: false,
    disabled: false,
    multiple: true
  }
}

export const WarningMultiple: Story = {
  args: {
    children: 'Choose some files...',
    files: 'No files...',
    primary: false,
    success: false,
    warning: true,
    error: false,
    disabled: false,
    multiple: true
  }
}

export const ErrorMultiple: Story = {
  args: {
    children: 'Choose some files...',
    files: 'No files...',
    primary: false,
    success: false,
    warning: false,
    error: true,
    disabled: false,
    multiple: true
  }
}

export const DisabledMultiple: Story = {
  args: {
    children: 'Choose some files...',
    files: 'No files...',
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: true,
    multiple: true
  }
}

