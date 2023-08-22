import { Meta, StoryObj } from "@storybook/react";
import XText from "..";

const meta: Meta<typeof XText> = {
  title: 'components/XText/01 - Big',
  component: XText
}
export default meta

type Story = StoryObj<typeof XText>

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

export const PrimaryBig: Story = {
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
    uppercase: false
  }
}

export const SuccessBig: Story = {
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
    uppercase: false
  }
}

export const WarningBig: Story = {
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
    uppercase: false
  }
}

export const ErrorBig: Story = {
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
    uppercase: false
  }
}

export const DisabledBig: Story = {
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
    uppercase: false
  }
}