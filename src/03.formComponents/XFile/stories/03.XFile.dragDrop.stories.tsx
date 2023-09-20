import { Meta, StoryObj } from '@storybook/react'
import XFile from '..'

const meta: Meta<typeof XFile> = {
  title: '03 - Form Components/XFile/03 - Drag and drop',
  component: XFile
}
export default meta

type Story = StoryObj<typeof XFile>

export const DragAndDrop: Story = {
  args: {
    children: 'Choose a file...',
    files: 'No files...',
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: false,
    multiple: false,
    dragAndDrop: {
      active: true,
      children: 'Drop here your file ...',
      overFeedbackContent: `Drop'em right here!`
    }
  }
}

export const PrimaryDragAndDrop: Story = {
  args: {
    children: 'Choose a file...',
    files: 'No files...',
    primary: true,
    success: false,
    warning: false,
    error: false,
    disabled: false,
    multiple: false,
    dragAndDrop: {
      active: true,
      children: 'Drop here your file ...',
      overFeedbackContent: `Drop'em right here!`
    }
  }
}

export const SuccessDragAndDrop: Story = {
  args: {
    children: 'Choose a file...',
    files: 'No files...',
    primary: false,
    success: true,
    warning: false,
    error: false,
    disabled: false,
    multiple: false,
    dragAndDrop: {
      active: true,
      children: 'Drop here your file ...',
      overFeedbackContent: `Drop'em right here!`
    }
  }
}

export const WarningDragAndDrop: Story = {
  args: {
    children: 'Choose a file...',
    files: 'No files...',
    primary: false,
    success: false,
    warning: true,
    error: false,
    disabled: false,
    multiple: false,
    dragAndDrop: {
      active: true,
      children: 'Drop here your file ...',
      overFeedbackContent: `Drop'em right here!`
    }
  }
}

export const ErrorDragAndDrop: Story = {
  args: {
    children: 'Choose a file...',
    files: 'No files...',
    primary: false,
    success: false,
    warning: false,
    error: true,
    disabled: false,
    multiple: false,
    dragAndDrop: {
      active: true,
      children: 'Drop here your file ...',
      overFeedbackContent: `Drop'em right here!`
    }
  }
}

export const DisabledDragAndDrop: Story = {
  args: {
    children: 'Choose a file...',
    files: 'No files...',
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: true,
    multiple: false,
    dragAndDrop: {
      active: true,
      children: 'Drop here your file ...',
      overFeedbackContent: `Drop'em right here!`
    }
  }
}

