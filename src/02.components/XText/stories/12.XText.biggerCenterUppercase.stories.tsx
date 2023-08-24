import { Meta, StoryObj } from "@storybook/react";
import XText from "..";

const meta: Meta<typeof XText> = {
  title: '02 - components/XText/11 - Bigger, Center and Uppercase',
  component: XText
}
export default meta

type Story = StoryObj<typeof XText>

export const BiggerCenterUppercase: Story = {
  args: {
    children: 'Paragraph here',
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: false,
    big: false,
    bigger: true,
    center: true,
    uppercase: true
  }
}

export const PrimaryBiggerCenterUppercase: Story = {
  args: {
    children: 'Paragraph here',
    primary: true,
    success: false,
    warning: false,
    error: false,
    disabled: false,
    big: false,
    bigger: true,
    center: true,
    uppercase: true
  }
}

export const SuccessBiggerCenterUppercase: Story = {
  args: {
    children: 'Paragraph here',
    primary: false,
    success: true,
    warning: false,
    error: false,
    disabled: false,
    big: false,
    bigger: true,
    center: true,
    uppercase: true
  }
}

export const WarningBiggerCenterUppercase: Story = {
  args: {
    children: 'Paragraph here',
    primary: false,
    success: false,
    warning: true,
    error: false,
    disabled: false,
    big: false,
    bigger: true,
    center: true,
    uppercase: true
  }
}

export const ErrorBiggerCenterUppercase: Story = {
  args: {
    children: 'Paragraph here',
    primary: false,
    success: false,
    warning: false,
    error: true,
    disabled: false,
    big: false,
    bigger: true,
    center: true,
    uppercase: true
  }
}

export const DisaledBiggerCenterUppercase: Story = {
  args: {
    children: 'Paragraph here',
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: true,
    big: false,
    bigger: true,
    center: true,
    uppercase: true
  }
}