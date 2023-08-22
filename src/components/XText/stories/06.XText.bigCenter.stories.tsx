import { Meta, StoryObj } from "@storybook/react";
import XText from "..";

const meta: Meta<typeof XText> = {
  title: 'components/XText/06 - Big and Center',
  component: XText
}
export default meta

type Story = StoryObj<typeof XText>

export const BigCenter: Story = {
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
    uppercase: false
  }
}

export const PrimaryBigCenter: Story = {
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
    uppercase: false
  }
}

export const SuccessBigCenter: Story = {
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
    uppercase: false
  }
}

export const WarningBigCenter: Story = {
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
    uppercase: false
  }
}

export const ErrorBigCenter: Story = {
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
    uppercase: false
  }
}

export const DisabledBigCenter: Story = {
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
    uppercase: false
  }
}