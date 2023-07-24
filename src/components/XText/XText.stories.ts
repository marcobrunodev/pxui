import { Meta, StoryObj } from "@storybook/react";
import XText from ".";

const meta: Meta<typeof XText> = {
  title: 'components/XText',
  component: XText
}
export default meta

type Story = StoryObj<typeof XText>

export const Normal: Story = {
  args: {
    children: 'Paragraph here',
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: false,
    big: false,
    bigger: false,
    center: false,
    uppercase: false
  }
}

export const Primary: Story = {
  args: {
    children: 'Paragraph here',
    primary: true,
    success: false,
    warning: false,
    error: false,
    disabled: false,
    big: false,
    bigger: false,
    center: false,
    uppercase: false
  }
}

export const Success: Story = {
  args: {
    children: 'Paragraph here',
    primary: false,
    success: true,
    warning: false,
    error: false,
    disabled: false,
    big: false,
    bigger: false,
    center: false,
    uppercase: false
  }
}

export const Warning: Story = {
  args: {
    children: 'Paragraph here',
    primary: false,
    success: false,
    warning: true,
    error: false,
    disabled: false,
    big: false,
    bigger: false,
    center: false,
    uppercase: false
  }
}

export const Error: Story = {
  args: {
    children: 'Paragraph here',
    primary: false,
    success: false,
    warning: false,
    error: true,
    disabled: false,
    big: false,
    bigger: false,
    center: false,
    uppercase: false
  }
}

export const Disabled: Story = {
  args: {
    children: 'Paragraph here',
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: true,
    big: false,
    bigger: false,
    center: false,
    uppercase: false
  }
}

export const Big: Story = {
  args: {
    children: 'Paragraph here',
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: false,
    big: true,
    bigger: false,
    center: false,
    uppercase: false
  }
}

export const Bigger: Story = {
  args: {
    children: 'Paragraph here',
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: false,
    big: false,
    bigger: true,
    center: false,
    uppercase: false
  }
}

export const Center: Story = {
  args: {
    children: 'Paragraph here',
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: false,
    big: false,
    bigger: false,
    center: true,
    uppercase: false
  }
}

export const Uppercase: Story = {
  args: {
    children: 'Paragraph here',
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: false,
    big: false,
    bigger: false,
    center: false,
    uppercase: true
  }
}