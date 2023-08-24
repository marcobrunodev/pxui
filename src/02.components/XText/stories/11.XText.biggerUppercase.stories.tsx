import { Meta, StoryObj } from "@storybook/react";
import XText from "..";

const meta: Meta<typeof XText> = {
  title: '02 - components/XText/10 - Bigger and Uppercase',
  component: XText
}
export default meta

type Story = StoryObj<typeof XText>

export const BiggerUppercase: Story = {
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
    uppercase: true
  }
}

export const PrimaryBiggerUppercase: Story = {
  args: {
    children: 'Paragraph here',
    primary: true,
    success: false,
    warning: false,
    error: false,
    disabled: false,
    big: false,
    bigger: true,
    center: false,
    uppercase: true
  }
}

export const SuccessBiggerUppercase: Story = {
  args: {
    children: 'Paragraph here',
    primary: false,
    success: true,
    warning: false,
    error: false,
    disabled: false,
    big: false,
    bigger: true,
    center: false,
    uppercase: true
  }
}

export const WarningBiggerUppercase: Story = {
  args: {
    children: 'Paragraph here',
    primary: false,
    success: false,
    warning: true,
    error: false,
    disabled: false,
    big: false,
    bigger: true,
    center: false,
    uppercase: true
  }
}

export const ErrorBiggerUppercase: Story = {
  args: {
    children: 'Paragraph here',
    primary: false,
    success: false,
    warning: false,
    error: true,
    disabled: false,
    big: false,
    bigger: true,
    center: false,
    uppercase: true
  }
}

export const DisaledBiggerUppercase: Story = {
  args: {
    children: 'Paragraph here',
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: true,
    big: false,
    bigger: true,
    center: false,
    uppercase: true
  }
}