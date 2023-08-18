import { Meta, StoryObj } from "@storybook/react";
import XContainer from "..";

const meta: Meta<typeof XContainer> = {
  title: 'components/XContainer/03 - Simple With Title',
  component: XContainer
}
export default meta

type Story = StoryObj<typeof XContainer>

export const SimpleWithTitle: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: false,
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

export const PrimarySimpleWithTitle: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: false,
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

export const SuccessSimpleWithTitle: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: false,
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

export const WarningSimpleWithTitle: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: false,
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

export const ErrorSimpleWithTitle: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: false,
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

export const DisableSimpleWithTitle: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: false,
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