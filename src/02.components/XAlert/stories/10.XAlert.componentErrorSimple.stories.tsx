import { Meta, StoryObj } from '@storybook/react'
import XAlert from '..'
import XText from '../../XText'
import XButton from '../../XButton'
import { ReactNode } from 'react'

const meta: Meta<typeof XAlert> = {
  title: '02 - components/XAlert/10 - Component, Error and Simple',
  component: XAlert
}
export default meta

type Story = StoryObj<typeof XAlert>

const Wrapper = ({ children }: { children: ReactNode }) => <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>{children}</div>

export const WithAComponentErrorSimple: Story = {
  args: {
    isOpen: true,
    children: (
      <Wrapper>
        <XText bigger primary>Hey! I'm XText</XText>
        <XButton>Okay!</XButton>
      </Wrapper>
    ),
    errorMessage: 'Messagem error here',
    iconClose: true,
    simple: true,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: false,
  }
}

export const PrimaryAComponentErrorSimple: Story = {
  args: {
    isOpen: true,
    children: (
      <Wrapper>
        <XText bigger primary>Hey! I'm XText</XText>
        <XButton>Okay!</XButton>
      </Wrapper>
    ),
    errorMessage: 'Messagem error here',
    iconClose: true,
    simple: true,
    primary: true,
    success: false,
    warning: false,
    error: false,
    disabled: false,
  }
}

export const SuccessAComponentErrorSimple: Story = {
  args: {
    isOpen: true,
    children: (
      <Wrapper>
        <XText bigger primary>Hey! I'm XText</XText>
        <XButton>Okay!</XButton>
      </Wrapper>
    ),
    errorMessage: 'Messagem error here',
    iconClose: true,
    simple: true,
    primary: false,
    success: true,
    warning: false,
    error: false,
    disabled: false,
  }
}

export const WarningAComponentErrorSimple: Story = {
  args: {
    isOpen: true,
    children: (
      <Wrapper>
        <XText bigger primary>Hey! I'm XText</XText>
        <XButton>Okay!</XButton>
      </Wrapper>
    ),
    errorMessage: 'Messagem error here',
    iconClose: true,
    simple: true,
    primary: false,
    success: false,
    warning: true,
    error: false,
    disabled: false,
  }
}

export const ErrorComponentErrorSimple: Story = {
  args: {
    isOpen: true,
    children: (
      <Wrapper>
        <XText bigger primary>Hey! I'm XText</XText>
        <XButton>Okay!</XButton>
      </Wrapper>
    ),
    errorMessage: 'Messagem error here',
    iconClose: true,
    simple: true,
    primary: false,
    success: false,
    warning: false,
    error: true,
    disabled: false,
  }
}

export const DisabledAComponentErrorSimple: Story = {
  args: {
    isOpen: true,
    children: (
      <Wrapper>
        <XText bigger primary>Hey! I'm XText</XText>
        <XButton>Okay!</XButton>
      </Wrapper>
    ),
    errorMessage: 'Messagem error here',
    iconClose: true,
    simple: true,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: true,
  }
}