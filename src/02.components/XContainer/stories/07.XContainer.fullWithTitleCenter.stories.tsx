import { Meta, StoryObj } from "@storybook/react";
import XContainer from "..";

const meta: Meta<typeof XContainer> = {
  title: '02 - components/XContainer/07 - Full With Title Center',
  component: XContainer
}
export default meta

type Story = StoryObj<typeof XContainer>

export const FullWithTitleCenter: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: true,
    titleAttr: {
      children: 'Title here',
      center: true
    },
    simple: false,
    borderAnimation: false,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: false
  }
}

export const PrimaryFullWithTitleCenter: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: true,
    titleAttr: {
      children: 'Title here',
      center: true
    },
    simple: false,
    borderAnimation: false,
    primary: true,
    success: false,
    warning: false,
    error: false,
    disabled: false
  }
}

export const SuccessFullWithTitleCenter: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: true,
    titleAttr: {
      children: 'Title here',
      center: true
    },
    simple: false,
    borderAnimation: false,
    primary: false,
    success: true,
    warning: false,
    error: false,
    disabled: false
  }
}

export const WarningFullWithTitleCenter: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: true,
    titleAttr: {
      children: 'Title here',
      center: true
    },
    simple: false,
    borderAnimation: false,
    primary: false,
    success: false,
    warning: true,
    error: false,
    disabled: false
  }
}

export const ErrorFullWithTitleCenter: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: true,
    titleAttr: {
      children: 'Title here',
      center: true
    },
    simple: false,
    borderAnimation: false,
    primary: false,
    success: false,
    warning: false,
    error: true,
    disabled: false
  }
}

export const DisabledFullWithTitleCenter: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: true,
    titleAttr: {
      children: 'Title here',
      center: true
    },
    simple: false,
    borderAnimation: false,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: true
  }
}