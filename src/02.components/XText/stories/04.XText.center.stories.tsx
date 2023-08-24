import { Meta, StoryObj } from "@storybook/react";
import XText from "..";

const meta: Meta<typeof XText> = {
  title: '02 - components/XText/04 - Center',
  component: XText
}
export default meta

type Story = StoryObj<typeof XText>

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

export const PrimaryCenter: Story = {
  args: {
    children: 'Paragraph here',
    primary: true,
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

export const SuccessCenter: Story = {
  args: {
    children: 'Paragraph here',
    primary: false,
    success: true,
    warning: false,
    error: false,
    disabled: false,
    big: false,
    bigger: false,
    center: true,
    uppercase: false
  }
}

export const WarningCenter: Story = {
  args: {
    children: 'Paragraph here',
    primary: false,
    success: false,
    warning: true,
    error: false,
    disabled: false,
    big: false,
    bigger: false,
    center: true,
    uppercase: false
  }
}

export const ErrorCenter: Story = {
  args: {
    children: 'Paragraph here',
    primary: false,
    success: false,
    warning: false,
    error: true,
    disabled: false,
    big: false,
    bigger: false,
    center: true,
    uppercase: false
  }
}

export const DisabledCenter: Story = {
  args: {
    children: 'Paragraph here',
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: true,
    big: false,
    bigger: false,
    center: true,
    uppercase: false
  }
}