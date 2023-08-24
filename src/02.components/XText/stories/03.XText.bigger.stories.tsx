import { Meta, StoryObj } from "@storybook/react";
import XText from "..";

const meta: Meta<typeof XText> = {
  title: '02 - components/XText/03 - Bigger',
  component: XText
}
export default meta

type Story = StoryObj<typeof XText>

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

export const PrimaryBigger: Story = {
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
    uppercase: false
  }
}

export const SuccessBigger: Story = {
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
    uppercase: false
  }
}

export const WarningBigger: Story = {
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
    uppercase: false
  }
}

export const ErrorBigger: Story = {
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
    uppercase: false
  }
}

export const DisaledBigger: Story = {
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
    uppercase: false
  }
}