import { Meta, StoryObj } from '@storybook/react'
import XCard from '..'
import image from '../../../assets/storybook/360x360.png'
import { CenterXAndY } from '../../Storybook'

const meta: Meta<typeof XCard> = {
  title: 'components/XCard/08 - Badges, Button and onClick',
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

export const WithBadgesButtonOnClick: Story = {
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
    onClick: () => console.log('Your function here'),
    borderAnimation: false,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: false
  }
}

export const PrimaryBadgesButtonOnClick: Story = {
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
    onClick: () => console.log('Your function here'),
    borderAnimation: false,
    primary: true,
    success: false,
    warning: false,
    error: false,
    disabled: false
  }
}

export const SuccessBadgesButtonOnClick: Story = {
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
    onClick: () => console.log('Your function here'),
    borderAnimation: false,
    primary: false,
    success: true,
    warning: false,
    error: false,
    disabled: false
  }
}

export const WarningBadgesButtonOnClick: Story = {
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
    onClick: () => console.log('Your function here'),
    borderAnimation: false,
    primary: false,
    success: false,
    warning: true,
    error: false,
    disabled: false
  }
}

export const ErrorBadgesButtonOnClick: Story = {
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
    onClick: () => console.log('Your function here'),
    borderAnimation: false,
    primary: false,
    success: false,
    warning: false,
    error: true,
    disabled: false
  }
}

export const DisabledBadgesButtonOnClick: Story = {
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
    onClick: () => console.log('Your function here'),
    borderAnimation: false,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: true
  }
}