import { Meta, StoryObj } from "@storybook/react";
import XText from "..";

const meta: Meta<typeof XText> = {
  title: '02 - components/XText/08 - Big, Center and Uppercase',
  component: XText
}
export default meta

type Story = StoryObj<typeof XText>

export const BigCenterUppercase: Story = {
  args: {
    children: 'Paragraph here',
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: false,
    big: true,
    bigger: false,
    center: true,
    uppercase: true
  }
}

export const PrimaryBigCenterUppercase: Story = {
  args: {
    children: 'Paragraph here',
    primary: true,
    success: false,
    warning: false,
    error: false,
    disabled: false,
    big: true,
    bigger: false,
    center: true,
    uppercase: true
  }
}

export const SuccessBigCenterUppercase: Story = {
  args: {
    children: 'Paragraph here',
    primary: false,
    success: true,
    warning: false,
    error: false,
    disabled: false,
    big: true,
    bigger: false,
    center: true,
    uppercase: true
  }
}

export const WarningBigCenterUppercase: Story = {
  args: {
    children: 'Paragraph here',
    primary: false,
    success: false,
    warning: true,
    error: false,
    disabled: false,
    big: true,
    bigger: false,
    center: true,
    uppercase: true
  }
}

export const ErrorBigCenterUppercase: Story = {
  args: {
    children: 'Paragraph here',
    primary: false,
    success: false,
    warning: false,
    error: true,
    disabled: false,
    big: true,
    bigger: false,
    center: true,
    uppercase: true
  }
}

export const DisabledBigCenterUppercase: Story = {
  args: {
    children: 'Paragraph here',
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: true,
    big: true,
    bigger: false,
    center: true,
    uppercase: true
  }
}