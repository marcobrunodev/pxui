import { Meta, StoryObj } from "@storybook/react";
import XContainer from "..";

const meta: Meta<typeof XContainer> = {
  title: 'components/XContainer/09 - Border-Animation',
  component: XContainer
}
export default meta

type Story = StoryObj<typeof XContainer>

export const BorderAnimation: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: false,
    titleAttr: '',
    simple: true,
    borderAnimation: true,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: false
  }
}

export const PrimaryBorderAnimation: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: false,
    titleAttr: '',
    simple: true,
    borderAnimation: true,
    primary: true,
    success: false,
    warning: false,
    error: false,
    disabled: false
  }
}

export const SuccessBorderAnimation: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: false,
    titleAttr: '',
    simple: true,
    borderAnimation: true,
    primary: false,
    success: true,
    warning: false,
    error: false,
    disabled: false
  }
}

export const WarningBorderAnimation: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: false,
    titleAttr: '',
    simple: true,
    borderAnimation: true,
    primary: false,
    success: false,
    warning: true,
    error: false,
    disabled: false
  }
}

export const ErrorBorderAnimation: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: false,
    titleAttr: '',
    simple: true,
    borderAnimation: true,
    primary: false,
    success: false,
    warning: false,
    error: true,
    disabled: false
  }
}

export const DisabledBorderAnimation: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: false,
    titleAttr: '',
    simple: true,
    borderAnimation: true,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: true
  }
}