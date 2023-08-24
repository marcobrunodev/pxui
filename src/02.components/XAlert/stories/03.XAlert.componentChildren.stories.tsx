import { Meta, StoryObj } from '@storybook/react'
import XAlert from '..'
import XText from '../../XText'
import XButton from '../../XButton'
import { ReactNode } from 'react'

const meta: Meta<typeof XAlert> = {
  title: '02 - components/XAlert/03 - Component in Children',
  component: XAlert
}
export default meta

type Story = StoryObj<typeof XAlert>

const Wrapper = ({ children }: { children: ReactNode }) => <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>{children}</div>

export const WithAComponentInChildren: Story = {
  args: {
    isOpen: true,
    children: (
      <Wrapper>
        <XText bigger primary>Hey! I'm XText</XText>
        <XButton>Okay!</XButton>
      </Wrapper>
    ),
    errorMessage: false,
    iconClose: true,
    simple: false,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: false,
  }
}

export const PrimaryAComponentInChildren: Story = {
  args: {
    isOpen: true,
    children: (
      <Wrapper>
        <XText bigger primary>Hey! I'm XText</XText>
        <XButton>Okay!</XButton>
      </Wrapper>
    ),
    errorMessage: false,
    iconClose: true,
    simple: false,
    primary: true,
    success: false,
    warning: false,
    error: false,
    disabled: false,
  }
}

export const SuccessAComponentInChildren: Story = {
  args: {
    isOpen: true,
    children: (
      <Wrapper>
        <XText bigger primary>Hey! I'm XText</XText>
        <XButton>Okay!</XButton>
      </Wrapper>
    ),
    errorMessage: false,
    iconClose: true,
    simple: false,
    primary: false,
    success: true,
    warning: false,
    error: false,
    disabled: false,
  }
}

export const WarningAComponentInChildren: Story = {
  args: {
    isOpen: true,
    children: (
      <Wrapper>
        <XText bigger primary>Hey! I'm XText</XText>
        <XButton>Okay!</XButton>
      </Wrapper>
    ),
    errorMessage: false,
    iconClose: true,
    simple: false,
    primary: false,
    success: false,
    warning: true,
    error: false,
    disabled: false,
  }
}

export const ErrorComponentInChildren: Story = {
  args: {
    isOpen: true,
    children: (
      <Wrapper>
        <XText bigger primary>Hey! I'm XText</XText>
        <XButton>Okay!</XButton>
      </Wrapper>
    ),
    errorMessage: false,
    iconClose: true,
    simple: false,
    primary: false,
    success: false,
    warning: false,
    error: true,
    disabled: false,
  }
}

export const DisabledAComponentInChildren: Story = {
  args: {
    isOpen: true,
    children: (
      <Wrapper>
        <XText bigger primary>Hey! I'm XText</XText>
        <XButton>Okay!</XButton>
      </Wrapper>
    ),
    errorMessage: false,
    iconClose: true,
    simple: false,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: true,
  }
}