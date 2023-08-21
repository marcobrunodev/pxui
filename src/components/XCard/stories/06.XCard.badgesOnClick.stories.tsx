import { Meta, StoryObj } from '@storybook/react'
import XCard from '..'
import image from '../../../assets/storybook/360x360.png'
import { CenterXAndY } from '../../Storybook'

const meta: Meta<typeof XCard> = {
  title: 'components/XCard/06 - Badges and onClick',
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
    onClick: () => console.log('Your function here'),
    borderAnimation: false,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: false
  }
}

export const PrimaryButtonAndOnClick: Story = {
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
    onClick: () => console.log('Your function here'),
    borderAnimation: false,
    primary: true,
    success: false,
    warning: false,
    error: false,
    disabled: false
  }
}

export const SuccessButtonAndOnClick: Story = {
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
    onClick: () => console.log('Your function here'),
    borderAnimation: false,
    primary: false,
    success: true,
    warning: false,
    error: false,
    disabled: false
  }
}

export const WarningButtonAndOnClick: Story = {
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
    onClick: () => console.log('Your function here'),
    borderAnimation: false,
    primary: false,
    success: false,
    warning: true,
    error: false,
    disabled: false
  }
}

export const ErrorButtonAndOnClick: Story = {
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
    onClick: () => console.log('Your function here'),
    borderAnimation: false,
    primary: false,
    success: false,
    warning: false,
    error: true,
    disabled: false
  }
}

export const DisabledButtonAndOnClick: Story = {
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
    onClick: () => console.log('Your function here'),
    borderAnimation: false,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: true
  }
}