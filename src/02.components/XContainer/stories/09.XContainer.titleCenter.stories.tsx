import { Meta, StoryObj } from "@storybook/react";
import XContainer from "..";

const meta: Meta<typeof XContainer> = {
  title: '02 - components/XContainer/09 - With Title and center',
  component: XContainer
}
export default meta

type Story = StoryObj<typeof XContainer>

export const WithTitleCenter: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: false,
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

export const PrimaryWithTitleCenter: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: false,
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

export const SuccessWithTitleCenter: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: false,
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

export const WarningWithTitleCenter: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: false,
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

export const ErrorWithTitleCenter: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: false,
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

export const DisabledWithTitleCenter: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: false,
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
