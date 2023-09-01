import { Meta, StoryObj } from '@storybook/react'
import XFieldset from '..'

const meta: Meta<typeof XFieldset> = {
  title: '02 - components/XFieldset/04 - Simple Input',
  component: XFieldset
}
export default meta

type Story = StoryObj<typeof XFieldset>

export const Normal: Story = {
  args: {
    label: {
      children: 'Email',
      primary: false,
      success: false,
      warning: false,
      error: false,
      disabled: false,
    },
    input: {
      simple: true,
      primary: false,
      success: false,
      warning: false,
      error: false,
      disabled: false,
    }
  }
}

export const Primary: Story = {
  args: {
    label: {
      children: 'Email',
      primary: false,
      success: false,
      warning: false,
      error: false,
      disabled: false,
    },
    input: {
      simple: true,
      primary: true,
      success: false,
      warning: false,
      error: false,
      disabled: false,
    }
  }
}

export const Success: Story = {
  args: {
    label: {
      children: 'Email',
      primary: false,
      success: false,
      warning: false,
      error: false,
      disabled: false,
    },
    input: {
      simple: true,
      primary: false,
      success: true,
      warning: false,
      error: false,
      disabled: false,
    }
  }
}

export const Warning: Story = {
  args: {
    label: {
      children: 'Email',
      primary: false,
      success: false,
      warning: false,
      error: false,
      disabled: false,
    },
    input: {
      simple: true,
      primary: false,
      success: false,
      warning: true,
      error: false,
      disabled: false,
    }
  }
}

export const Error: Story = {
  args: {
    label: {
      children: 'Email',
      primary: false,
      success: false,
      warning: false,
      error: false,
      disabled: false,
    },
    input: {
      simple: true,
      primary: false,
      success: false,
      warning: false,
      error: true,
      disabled: false,
    }
  }
}

export const Disabled: Story = {
  args: {
    label: {
      children: 'Email',
      primary: false,
      success: false,
      warning: false,
      error: false,
      disabled: false,
    },
    input: {
      simple: true,
      primary: false,
      success: false,
      warning: false,
      error: false,
      disabled: true,
    }
  }
}