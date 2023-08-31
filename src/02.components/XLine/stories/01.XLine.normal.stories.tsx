
import { Meta, StoryObj } from '@storybook/react'
import XLine from '..'

const meta: Meta<typeof XLine> = {
  title: '02 - components/XLine/01 - Normal',
  component: XLine
}
export default meta

type Story = StoryObj<typeof XLine>

export const Normal: Story = {
  args: {
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: false,
    margin: false,
  }
}

export const Primary: Story = {
  args: {
    primary: true,
    success: false,
    warning: false,
    error: false,
    disabled: false,
    margin: false,
  }
}

export const Success: Story = {
  args: {
    primary: false,
    success: true,
    warning: false,
    error: false,
    disabled: false,
    margin: false,
  }
}

export const Warning: Story = {
  args: {
    primary: false,
    success: false,
    warning: true,
    error: false,
    disabled: false,
    margin: false,
  }
}

export const Error: Story = {
  args: {
    primary: false,
    success: false,
    warning: false,
    error: true,
    disabled: false,
    margin: false,
  }
}

export const Disabled: Story = {
  args: {
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: true,
    margin: false,
  }
}
