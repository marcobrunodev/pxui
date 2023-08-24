import { Meta, StoryObj } from "@storybook/react";
import XContainer from "..";

const meta: Meta<typeof XContainer> = {
  title: '02 - components/XContainer/08 - Simple Full With Title',
  component: XContainer
}
export default meta

type Story = StoryObj<typeof XContainer>

export const SimpleFullWithTitle: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: true,
    titleAttr: 'Title here',
    simple: true,
    borderAnimation: false,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: false
  }
}

export const PrimarySimpleFullWithTitle: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: true,
    titleAttr: 'Title here',
    simple: true,
    borderAnimation: false,
    primary: true,
    success: false,
    warning: false,
    error: false,
    disabled: false
  }
}

export const SuccessSimpleFullWithTitle: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: true,
    titleAttr: 'Title here',
    simple: true,
    borderAnimation: false,
    primary: false,
    success: true,
    warning: false,
    error: false,
    disabled: false
  }
}

export const WarningSimpleFullWithTitle: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: true,
    titleAttr: 'Title here',
    simple: true,
    borderAnimation: false,
    primary: false,
    success: false,
    warning: true,
    error: false,
    disabled: false
  }
}

export const ErrorSimpleFullWithTitle: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: true,
    titleAttr: 'Title here',
    simple: true,
    borderAnimation: false,
    primary: false,
    success: false,
    warning: false,
    error: true,
    disabled: false
  }
}

export const DisabledSimpleFullWithTitle: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: true,
    titleAttr: 'Title here',
    simple: true,
    borderAnimation: false,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: true
  }
}