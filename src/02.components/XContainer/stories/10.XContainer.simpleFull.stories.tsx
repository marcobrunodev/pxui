import { Meta, StoryObj } from "@storybook/react";
import XContainer from "..";

const meta: Meta<typeof XContainer> = {
  title: '02 - components/XContainer/10 - Simple Full',
  component: XContainer
}
export default meta

type Story = StoryObj<typeof XContainer>

export const SimpleFull: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: true,
    titleAttr: {
      children: ''
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

export const PrimarySimpleFull: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: true,
    titleAttr: {
      children: ''
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

export const SuccessSimpleFull: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: true,
    titleAttr: {
      children: ''
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

export const WarningSimpleFull: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: true,
    titleAttr: {
      children: ''
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

export const ErrorSimpleFull: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: true,
    titleAttr: {
      children: ''
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

export const DisabledSimpleFull: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: true,
    titleAttr: {
      children: ''
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