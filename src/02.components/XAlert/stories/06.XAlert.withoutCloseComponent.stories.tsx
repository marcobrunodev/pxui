import { Meta, StoryObj } from '@storybook/react'
import XAlert from '..'
import XText from '../../XText'
import XButton from '../../XButton'
import { ReactNode } from 'react'

const meta: Meta<typeof XAlert> = {
  title: '02 - components/XAlert/06 - Without Close and Component',
  component: XAlert
}
export default meta

type Story = StoryObj<typeof XAlert>

const Wrapper = ({ children }: { children: ReactNode }) => <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>{children}</div>

export const WithoutCloseIconComponent: Story = {
  args: {
    isOpen: true,
    children: (
      <Wrapper>
        <XText bigger primary>Hey! I'm XText</XText>
        <XButton>Okay!</XButton>
      </Wrapper>
    ),
    errorMessage: false,
    iconClose: false,
    simple: false,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: false,
  }
}

export const PrimaryWithoutCloseComponent: Story = {
  args: {
    isOpen: true,
    children: (
      <Wrapper>
        <XText bigger primary>Hey! I'm XText</XText>
        <XButton>Okay!</XButton>
      </Wrapper>
    ),
    errorMessage: false,
    iconClose: false,
    simple: false,
    primary: true,
    success: false,
    warning: false,
    error: false,
    disabled: false,
  }
}

export const SuccessWithoutCloseComponent: Story = {
  args: {
    isOpen: true,
    children: (
      <Wrapper>
        <XText bigger primary>Hey! I'm XText</XText>
        <XButton>Okay!</XButton>
      </Wrapper>
    ),
    errorMessage: false,
    iconClose: false,
    simple: false,
    primary: false,
    success: true,
    warning: false,
    error: false,
    disabled: false,
  }
}

export const WarningWithoutCloseComponent: Story = {
  args: {
    isOpen: true,
    children: (
      <Wrapper>
        <XText bigger primary>Hey! I'm XText</XText>
        <XButton>Okay!</XButton>
      </Wrapper>
    ),
    errorMessage: false,
    iconClose: false,
    simple: false,
    primary: false,
    success: false,
    warning: true,
    error: false,
    disabled: false,
  }
}

export const ErrorWithoutCloseComponent: Story = {
  args: {
    isOpen: true,
    children: (
      <Wrapper>
        <XText bigger primary>Hey! I'm XText</XText>
        <XButton>Okay!</XButton>
      </Wrapper>
    ),
    errorMessage: false,
    iconClose: false,
    simple: false,
    primary: false,
    success: false,
    warning: false,
    error: true,
    disabled: false,
  }
}

export const DisableWithoutClosed: Story = {
  args: {
    isOpen: true,
    children: (
      <Wrapper>
        <XText bigger primary>Hey! I'm XText</XText>
        <XButton>Okay!</XButton>
      </Wrapper>
    ),
    errorMessage: false,
    iconClose: false,
    simple: false,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: true,
  }
}