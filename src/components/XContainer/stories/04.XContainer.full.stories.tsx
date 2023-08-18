import { Meta, StoryObj } from "@storybook/react";
import XContainer from "..";

const meta: Meta<typeof XContainer> = {
  title: 'components/XContainer/04 - Full',
  component: XContainer
}
export default meta

type Story = StoryObj<typeof XContainer>

export const Full: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: true,
    titleAttr: '',
    simple: false,
    borderAnimation: false,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: false
  }
}

export const PrimaryFull: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: true,
    titleAttr: '',
    simple: false,
    borderAnimation: false,
    primary: true,
    success: false,
    warning: false,
    error: false,
    disabled: false
  }
}

export const SuccessFull: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: true,
    titleAttr: '',
    simple: false,
    borderAnimation: false,
    primary: false,
    success: true,
    warning: false,
    error: false,
    disabled: false
  }
}

export const WarningFull: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: true,
    titleAttr: '',
    simple: false,
    borderAnimation: false,
    primary: false,
    success: false,
    warning: true,
    error: false,
    disabled: false
  }
}

export const ErrorFull: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: true,
    titleAttr: '',
    simple: false,
    borderAnimation: false,
    primary: false,
    success: false,
    warning: false,
    error: true,
    disabled: false
  }
}

export const DisabledFull: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: true,
    titleAttr: '',
    simple: false,
    borderAnimation: false,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: true
  }
}