import { Meta, StoryObj } from '@storybook/react'
import XFieldset from '..'

const meta: Meta<typeof XFieldset> = {
  title: '02 - components/XFieldset/03 - Input',
  component: XFieldset
}
export default meta

type Story = StoryObj<typeof XFieldset>

export const Input: Story = {
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
      simple: false,
      primary: false,
      success: false,
      warning: false,
      error: false,
      disabled: false,
    }
  }
}

export const PrimaryInput: Story = {
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
      simple: false,
      primary: true,
      success: false,
      warning: false,
      error: false,
      disabled: false,
    }
  }
}

export const SuccessInput: Story = {
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
      simple: false,
      primary: false,
      success: true,
      warning: false,
      error: false,
      disabled: false,
    }
  }
}

export const WarningInput: Story = {
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
      simple: false,
      primary: false,
      success: false,
      warning: true,
      error: false,
      disabled: false,
    }
  }
}

export const ErrorInput: Story = {
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
      simple: false,
      primary: false,
      success: false,
      warning: false,
      error: true,
      disabled: false,
    }
  }
}

export const DisabledInput: Story = {
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
      simple: false,
      primary: false,
      success: false,
      warning: false,
      error: false,
      disabled: true,
    }
  }
}