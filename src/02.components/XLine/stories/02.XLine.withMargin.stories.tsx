
import { Meta, StoryObj } from '@storybook/react'
import XLine from '..'

const meta: Meta<typeof XLine> = {
  title: '02 - components/XLine/02 - With Margin',
  component: XLine
}
export default meta

type Story = StoryObj<typeof XLine>

export const WithMargin: Story = {
  args: {
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: false,
    margin: true
  }
}

export const PrimaryMargin: Story = {
  args: {
    primary: true,
    success: false,
    warning: false,
    error: false,
    disabled: false,
    margin: true
  }
}

export const SuccessMargin: Story = {
  args: {
    primary: false,
    success: true,
    warning: false,
    error: false,
    disabled: false,
    margin: true
  }
}

export const WarningMargin: Story = {
  args: {
    primary: false,
    success: false,
    warning: true,
    error: false,
    disabled: false,
    margin: true
  }
}

export const ErrorMargin: Story = {
  args: {
    primary: false,
    success: false,
    warning: false,
    error: true,
    disabled: false,
    margin: true
  }
}

export const DisabledMargin: Story = {
  args: {
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: true,
    margin: true
  }
}