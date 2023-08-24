import { Meta, StoryObj } from "@storybook/react";
import XContainer from "..";

const meta: Meta<typeof XContainer> = {
  title: '02 - components/XContainer/02 - Simple',
  component: XContainer
}
export default meta

type Story = StoryObj<typeof XContainer>

export const Simple: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: false,
    titleAttr: '',
    simple: true,
    borderAnimation: false,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: false
  }
}

export const PrimarySimple: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: false,
    titleAttr: '',
    simple: true,
    borderAnimation: false,
    primary: true,
    success: false,
    warning: false,
    error: false,
    disabled: false
  }
}

export const SuccessSimple: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: false,
    titleAttr: '',
    simple: true,
    borderAnimation: false,
    primary: false,
    success: true,
    warning: false,
    error: false,
    disabled: false
  }
}

export const WarningSimple: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: false,
    titleAttr: '',
    simple: true,
    borderAnimation: false,
    primary: false,
    success: false,
    warning: true,
    error: false,
    disabled: false
  }
}

export const ErrorSimple: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: false,
    titleAttr: '',
    simple: true,
    borderAnimation: false,
    primary: false,
    success: false,
    warning: false,
    error: true,
    disabled: false
  }
}

export const DisabledSimple: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: false,
    titleAttr: '',
    simple: true,
    borderAnimation: false,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: true
  }
}