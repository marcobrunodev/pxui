import { Meta, StoryObj } from "@storybook/react";
import XContainer from "..";

const meta: Meta<typeof XContainer> = {
  title: '02 - components/XContainer/01 - Normal',
  component: XContainer
}
export default meta

type Story = StoryObj<typeof XContainer>

export const Normal: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: false,
    titleAttr: {
      children: ''
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

export const PrimaryNormal: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: false,
    titleAttr: {
      children: ''
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

export const SuccessNormal: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: false,
    titleAttr: {
      children: ''
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

export const WarningNormal: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: false,
    titleAttr: {
      children: ''
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

export const ErrorNormal: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: false,
    titleAttr: {
      children: ''
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

export const DisabledNormal: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: false,
    titleAttr: {
      children: ''
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