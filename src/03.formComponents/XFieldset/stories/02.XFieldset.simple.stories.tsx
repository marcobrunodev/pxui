import { Meta, StoryObj } from '@storybook/react'
import XFieldset from '..'

const meta: Meta<typeof XFieldset> = {
  title: '03 - Form Components/XFieldset/02 - Simple',
  component: XFieldset
}
export default meta

type Story = StoryObj<typeof XFieldset>

export const Simple: Story = {
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
      type: 'text',
      simple: true,
      primary: false,
      success: false,
      warning: false,
      error: false,
      disabled: false,
    }
  }
}

export const PrimarySimple: Story = {
  args: {
    label: {
      children: 'Email',
      primary: true,
      success: false,
      warning: false,
      error: false,
      disabled: false,
    },
    input: {
      type: 'text',
      simple: true,
      primary: true,
      success: false,
      warning: false,
      error: false,
      disabled: false,
    }
  }
}

export const SuccessSimple: Story = {
  args: {
    label: {
      children: 'Email',
      primary: false,
      success: true,
      warning: false,
      error: false,
      disabled: false,
    },
    input: {
      type: 'text',
      simple: true,
      primary: false,
      success: true,
      warning: false,
      error: false,
      disabled: false,
    }
  }
}

export const WarningSimple: Story = {
  args: {
    label: {
      children: 'Email',
      primary: false,
      success: false,
      warning: true,
      error: false,
      disabled: false,
    },
    input: {
      type: 'text',
      simple: true,
      primary: false,
      success: false,
      warning: true,
      error: false,
      disabled: false,
    }
  }
}

export const ErrorSimple: Story = {
  args: {
    label: {
      children: 'Email',
      primary: false,
      success: false,
      warning: false,
      error: true,
      disabled: false,
    },
    input: {
      type: 'text',
      simple: true,
      primary: false,
      success: false,
      warning: false,
      error: true,
      disabled: false,
    }
  }
}

export const DisabledSimple: Story = {
  args: {
    label: {
      children: 'Email',
      primary: false,
      success: false,
      warning: false,
      error: false,
      disabled: true,
    },
    input: {
      type: 'text',
      simple: true,
      primary: false,
      success: false,
      warning: false,
      error: false,
      disabled: true,
    }
  }
}