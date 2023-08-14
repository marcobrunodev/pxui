import { Meta, StoryObj } from '@storybook/react'
import XAlert from '.'
import XText from '../XText'
import XButton from '../XButton'
import { ReactNode } from 'react'

const meta: Meta<typeof XAlert> = {
  title: 'components/XAlert',
  component: XAlert
}
export default meta

type Story = StoryObj<typeof XAlert>

const Wrapper = ({ children }: { children: ReactNode }) => <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>{children}</div>

export const Normal: Story = {
  args: {
    isOpen: true,
    children: 'Your text or component(s) here',
    errorMessage: false
  }
}

export const WithError: Story = {
  args: {
    isOpen: true,
    children: 'Your text or component(s) here',
    errorMessage: 'Not found'
  }
}

export const WithAComponentInChildren: Story = {
  args: {
    isOpen: true,
    children: (
      <Wrapper>
        <XText bigger primary>Hey! I'm XText</XText>
        <XButton>Okay!</XButton>
      </Wrapper >
    ),
    errorMessage: false
  }
}