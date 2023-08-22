
import { Meta, StoryObj } from "@storybook/react";
import XText from "..";

const meta: Meta<typeof XText> = {
  title: 'components/XText/07 - Big and Uppercase',
  component: XText
}
export default meta

type Story = StoryObj<typeof XText>

export const BigUppercase: Story = {
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
    uppercase: true
  }
}

export const PrimaryBigUppercase: Story = {
  args: {
    children: 'Paragraph here',
    primary: true,
    success: false,
    warning: false,
    error: false,
    disabled: false,
    big: true,
    bigger: false,
    center: false,
    uppercase: true
  }
}

export const SuccessBigUppercase: Story = {
  args: {
    children: 'Paragraph here',
    primary: false,
    success: true,
    warning: false,
    error: false,
    disabled: false,
    big: true,
    bigger: false,
    center: false,
    uppercase: true
  }
}

export const WarningBigUppercase: Story = {
  args: {
    children: 'Paragraph here',
    primary: false,
    success: false,
    warning: true,
    error: false,
    disabled: false,
    big: true,
    bigger: false,
    center: false,
    uppercase: true
  }
}

export const ErrorBigUppercase: Story = {
  args: {
    children: 'Paragraph here',
    primary: false,
    success: false,
    warning: false,
    error: true,
    disabled: false,
    big: true,
    bigger: false,
    center: false,
    uppercase: true
  }
}

export const DisabledBigUppercase: Story = {
  args: {
    children: 'Paragraph here',
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: true,
    big: true,
    bigger: false,
    center: false,
    uppercase: true
  }
}