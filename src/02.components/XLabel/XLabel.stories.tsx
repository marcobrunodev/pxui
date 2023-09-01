import { Meta, StoryObj } from '@storybook/react'
import XLabel from '.'

const meta: Meta<typeof XLabel> = {
  title: '02 - components/XLabel',
  component: XLabel
}
export default meta

type Story = StoryObj<typeof XLabel>

export const Normal: Story = {
  args: {
    children: 'Label here',
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: false,
  }
}

export const Primary: Story = {
  args: {
    children: 'Label here',
    primary: true,
    success: false,
    warning: false,
    error: false,
    disabled: false,
  }
}

export const Success: Story = {
  args: {
    children: 'Label here',
    primary: false,
    success: true,
    warning: false,
    error: false,
    disabled: false,
  }
}

export const Warning: Story = {
  args: {
    children: 'Label here',
    primary: false,
    success: false,
    warning: true,
    error: false,
    disabled: false,
  }
}

export const Error: Story = {
  args: {
    children: 'Label here',
    primary: false,
    success: false,
    warning: false,
    error: true,
    disabled: false,
  }
}

export const Disabled: Story = {
  args: {
    children: 'Label here',
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: true,
  }
}