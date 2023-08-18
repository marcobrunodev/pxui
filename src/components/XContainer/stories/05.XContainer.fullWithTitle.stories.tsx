import { Meta, StoryObj } from "@storybook/react";
import XContainer from "..";

const meta: Meta<typeof XContainer> = {
  title: 'components/XContainer/05 - Full With Title',
  component: XContainer
}
export default meta

type Story = StoryObj<typeof XContainer>

export const FullWithTitle: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: true,
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

export const PrimaryFullWithTitle: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: true,
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

export const SuccessFullWithTitle: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: true,
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

export const WarningFullWithTitle: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: true,
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

export const ErrorFullWithTitle: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: true,
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

export const DisabledFullWithTitle: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: true,
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