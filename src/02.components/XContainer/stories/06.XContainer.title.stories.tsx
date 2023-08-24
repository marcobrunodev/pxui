import { Meta, StoryObj } from "@storybook/react";
import XContainer from "..";

const meta: Meta<typeof XContainer> = {
  title: '02 - components/XContainer/06 - With Title',
  component: XContainer
}
export default meta

type Story = StoryObj<typeof XContainer>

export const WithTitle: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: false,
    titleAttr: 'Title here',
    simple: false,
    borderAnimation: false,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: false
  }
}

export const PrimaryWithTitle: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: false,
    titleAttr: 'Title here',
    simple: false,
    borderAnimation: false,
    primary: true,
    success: false,
    warning: false,
    error: false,
    disabled: false
  }
}

export const SuccessWithTitle: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: false,
    titleAttr: 'Title here',
    simple: false,
    borderAnimation: false,
    primary: false,
    success: true,
    warning: false,
    error: false,
    disabled: false
  }
}

export const WarningWithTitle: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: false,
    titleAttr: 'Title here',
    simple: false,
    borderAnimation: false,
    primary: false,
    success: false,
    warning: true,
    error: false,
    disabled: false
  }
}

export const ErrorWithTitle: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: false,
    titleAttr: 'Title here',
    simple: false,
    borderAnimation: false,
    primary: false,
    success: false,
    warning: false,
    error: true,
    disabled: false
  }
}

export const DisabledWithTitle: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: false,
    titleAttr: 'Title here',
    simple: false,
    borderAnimation: false,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: true
  }
}
