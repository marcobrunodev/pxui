import { Meta, StoryObj } from "@storybook/react";
import XText from "..";

const meta: Meta<typeof XText> = {
  title: 'components/XText/05 - Uppercase',
  component: XText
}
export default meta

type Story = StoryObj<typeof XText>

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

export const PrimaryUppercase: Story = {
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
    uppercase: true
  }
}

export const SuccessUppercase: Story = {
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
    uppercase: true
  }
}

export const WarningUppercase: Story = {
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
    uppercase: true
  }
}

export const ErrorUppercase: Story = {
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
    uppercase: true
  }
}

export const DisabledUppercase: Story = {
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
    uppercase: true
  }
}