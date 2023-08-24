import { Meta, StoryObj } from "@storybook/react";
import XText from "..";

const meta: Meta<typeof XText> = {
  title: '02 - components/XText/09 - Bigger and Center',
  component: XText
}
export default meta

type Story = StoryObj<typeof XText>

export const BiggerCenter: Story = {
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
    uppercase: false
  }
}

export const PrimaryBiggerCenter: Story = {
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
    uppercase: false
  }
}

export const SuccessBiggerCenter: Story = {
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
    uppercase: false
  }
}

export const WarningBiggerCenter: Story = {
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
    uppercase: false
  }
}

export const ErrorBiggerCenter: Story = {
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
    uppercase: false
  }
}

export const DisaledBiggerCenter: Story = {
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
    uppercase: false
  }
}