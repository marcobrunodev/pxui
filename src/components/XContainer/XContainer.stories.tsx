import { Meta, StoryObj } from "@storybook/react";
import XContainer from ".";

const meta: Meta<typeof XContainer> = {
  title: 'components/XContainer',
  component: XContainer
}
export default meta

type Story = StoryObj<typeof XContainer>

export const Normal: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: false,
    titleAttr: '',
    simple: false,
    borderAnimation: false,
    primary: false,
    success: false,
    warning: false,
    error: false
  }
}

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
    error: false
  }
}

export const WithTitle: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: false,
    titleAttr: 'Title',
    simple: false,
    borderAnimation: false,
    primary: false,
    success: false,
    warning: false,
    error: false
  }
}

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
    error: false
  }
}

export const SimpleWithTitle: Story = {
  args: {
    children: 'Your text or component(s) here',
    full: false,
    titleAttr: 'Title',
    simple: true,
    borderAnimation: false,
    primary: false,
    success: false,
    warning: false,
    error: false
  }
}

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
    error: false
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
    error: false
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
    error: false
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
    error: false
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
    error: true
  }
}