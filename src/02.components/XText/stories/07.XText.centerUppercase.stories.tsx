import { Meta, StoryObj } from "@storybook/react";
import XText from "..";

const meta: Meta<typeof XText> = {
  title: '02 - components/XText/12 - Center and Uppercase',
  component: XText
}
export default meta

type Story = StoryObj<typeof XText>

export const CenterBigger: Story = {
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
    uppercase: true
  }
}

export const PrimaryCenterBigger: Story = {
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
    uppercase: true
  }
}

export const SuccessCenterBigger: Story = {
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
    uppercase: true
  }
}

export const WarningCenterBigger: Story = {
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
    uppercase: true
  }
}

export const ErrorCenterBigger: Story = {
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
    uppercase: true
  }
}

export const DisabledCenterBigger: Story = {
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
    uppercase: true
  }
}