import { Meta, StoryObj } from '@storybook/react'
import XCard from '..'
import image from '../../../assets/storybook/360x360.png'
import { CenterXAndY } from '../../Storybook'

const meta: Meta<typeof XCard> = {
  title: 'components/XCard/05 - With Badges',
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

export const WithButtonAndOnClick: Story = {
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
    onClick: undefined,
    borderAnimation: false,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: false
  }
}

export const PrimaryWithButtonAndOnClick: Story = {
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
    onClick: undefined,
    borderAnimation: false,
    primary: true,
    success: false,
    warning: false,
    error: false,
    disabled: false
  }
}

export const SuccessWithButtonAndOnClick: Story = {
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
    onClick: undefined,
    borderAnimation: false,
    primary: false,
    success: true,
    warning: false,
    error: false,
    disabled: false
  }
}

export const WarningWithButtonAndOnClick: Story = {
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
    onClick: undefined,
    borderAnimation: false,
    primary: false,
    success: false,
    warning: true,
    error: false,
    disabled: false
  }
}

export const ErrorWithButtonAndOnClick: Story = {
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
    onClick: undefined,
    borderAnimation: false,
    primary: false,
    success: false,
    warning: false,
    error: true,
    disabled: false
  }
}

export const DisabledWithButtonAndOnClick: Story = {
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
    onClick: undefined,
    borderAnimation: false,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: true
  }
}