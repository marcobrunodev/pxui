import { Meta, StoryObj } from '@storybook/react'
import XCard from '..'
import image from '../../../assets/storybook/360x360.png'
import { CenterXAndY } from '../../Storybook'

const meta: Meta<typeof XCard> = {
  title: 'components/XCard/07 - Badges and Button',
  component: XCard,
  decorators: [
    (Story) => (
      <CenterXAndY>
        <Story />
      </CenterXAndY>
    )
  ]
}
export default meta

type Story = StoryObj<typeof XCard>

export const WithBadgesAndButton: Story = {
  args: {
    titleContent: 'Title here',
    image,
    alt: 'Alt to image',
    description: 'Description here',
    badges: {
      content: 'New',
      primary: false,
      success: false,
      warning: false,
      error: false,
      disabled: false
    },
    buttonProps: {
      children: 'View more',
      primary: false,
      success: false,
      warning: false,
      error: false,
      disabled: false,
      full: true,
      onClick: () => console.log('Your function here')
    },
    onClick: undefined,
    borderAnimation: false,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: false
  }
}

export const PrimaryBadgesAndButton: Story = {
  args: {
    titleContent: 'Title here',
    image,
    alt: 'Alt to image',
    description: 'Description here',
    badges: {
      content: 'New',
      primary: true,
      success: false,
      warning: false,
      error: false,
      disabled: false
    },
    buttonProps: {
      children: 'View more',
      primary: true,
      success: false,
      warning: false,
      error: false,
      disabled: false,
      full: true,
      onClick: () => console.log('Your function here')
    },
    onClick: undefined,
    borderAnimation: false,
    primary: true,
    success: false,
    warning: false,
    error: false,
    disabled: false
  }
}

export const SuccessBadgesAndButton: Story = {
  args: {
    titleContent: 'Title here',
    image,
    alt: 'Alt to image',
    description: 'Description here',
    badges: {
      content: 'New',
      primary: false,
      success: true,
      warning: false,
      error: false,
      disabled: false
    },
    buttonProps: {
      children: 'View more',
      primary: false,
      success: true,
      warning: false,
      error: false,
      disabled: false,
      full: true,
      onClick: () => console.log('Your function here')
    },
    onClick: undefined,
    borderAnimation: false,
    primary: false,
    success: true,
    warning: false,
    error: false,
    disabled: false
  }
}

export const WarningBadgesAndButton: Story = {
  args: {
    titleContent: 'Title here',
    image,
    alt: 'Alt to image',
    description: 'Description here',
    badges: {
      content: 'New',
      primary: false,
      success: false,
      warning: true,
      error: false,
      disabled: false
    },
    buttonProps: {
      children: 'View more',
      primary: false,
      success: false,
      warning: true,
      error: false,
      disabled: false,
      full: true,
      onClick: () => console.log('Your function here')
    },
    onClick: undefined,
    borderAnimation: false,
    primary: false,
    success: false,
    warning: true,
    error: false,
    disabled: false
  }
}

export const ErrorBadgesAndButton: Story = {
  args: {
    titleContent: 'Title here',
    image,
    alt: 'Alt to image',
    description: 'Description here',
    badges: {
      content: 'New',
      primary: false,
      success: false,
      warning: false,
      error: true,
      disabled: false
    },
    buttonProps: {
      children: 'View more',
      primary: false,
      success: false,
      warning: false,
      error: true,
      disabled: false,
      full: true,
      onClick: () => console.log('Your function here')
    },
    onClick: undefined,
    borderAnimation: false,
    primary: false,
    success: false,
    warning: false,
    error: true,
    disabled: false
  }
}

export const DisabledBadgesAndButton: Story = {
  args: {
    titleContent: 'Title here',
    image,
    alt: 'Alt to image',
    description: 'Description here',
    badges: {
      content: 'New',
      primary: false,
      success: false,
      warning: false,
      error: false,
      disabled: true
    },
    buttonProps: {
      children: 'View more',
      primary: false,
      success: false,
      warning: false,
      error: false,
      disabled: true,
      full: true,
      onClick: () => console.log('Your function here')
    },
    onClick: undefined,
    borderAnimation: false,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: true
  }
}