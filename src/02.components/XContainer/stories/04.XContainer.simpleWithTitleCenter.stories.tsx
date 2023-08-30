import { Meta, StoryObj } from "@storybook/react";
import XContainer from "..";

const meta: Meta<typeof XContainer> = {
  title: '02 - components/XContainer/04 - Simple With Title Center',
  component: XContainer
}
export default meta

type Story = StoryObj<typeof XContainer>

export const SimpleWithTitleCenter: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: false,
    titleAttr: {
      children: 'Title here'
    },
    simple: true,
    borderAnimation: false,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: false
  }
}

export const PrimarySimpleWithTitleCenter: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: false,
    titleAttr: {
      children: 'Title here'
    },
    simple: true,
    borderAnimation: false,
    primary: true,
    success: false,
    warning: false,
    error: false,
    disabled: false
  }
}

export const SuccessSimpleWithTitleCenter: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: false,
    titleAttr: {
      children: 'Title here'
    },
    simple: true,
    borderAnimation: false,
    primary: false,
    success: true,
    warning: false,
    error: false,
    disabled: false
  }
}

export const WarningSimpleWithTitleCenter: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: false,
    titleAttr: {
      children: 'Title here'
    },
    simple: true,
    borderAnimation: false,
    primary: false,
    success: false,
    warning: true,
    error: false,
    disabled: false
  }
}

export const ErrorSimpleWithTitleCenter: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: false,
    titleAttr: {
      children: 'Title here'
    },
    simple: true,
    borderAnimation: false,
    primary: false,
    success: false,
    warning: false,
    error: true,
    disabled: false
  }
}

export const DisableSimpleWithTitleCenter: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: false,
    titleAttr: {
      children: 'Title here'
    },
    simple: true,
    borderAnimation: false,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: true
  }
}