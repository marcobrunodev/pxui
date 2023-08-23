import { Meta, StoryObj } from '@storybook/react'
import cat from '../../assets/storybook/avatar.png'
import XAvatar from '.'

const meta: Meta<typeof XAvatar> = {
  title: 'components/XAvatar',
  component: XAvatar
}
export default meta

type Story = StoryObj<typeof XAvatar>

export const Normal: Story = {
  args: {
    src: cat,
    alt: 'Cat',
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: false
  }
}

export const Primary: Story = {
  args: {
    src: cat,
    alt: 'Cat',
    primary: true,
    success: false,
    warning: false,
    error: false,
    disabled: false
  }
}

export const Success: Story = {
  args: {
    src: cat,
    alt: 'Cat',
    primary: false,
    success: true,
    warning: false,
    error: false,
    disabled: false
  }
}

export const Warning: Story = {
  args: {
    src: cat,
    alt: 'Cat',
    primary: false,
    success: false,
    warning: true,
    error: false,
    disabled: false
  }
}

export const Error: Story = {
  args: {
    src: cat,
    alt: 'Cat',
    primary: false,
    success: false,
    warning: false,
    error: true,
    disabled: false
  }
}

export const Disabled: Story = {
  args: {
    src: cat,
    alt: 'Cat',
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: true
  }
}