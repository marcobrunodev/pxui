import { Meta, StoryObj } from '@storybook/react'
import XCard from '..'
import image from '../../../assets/storybook/360x360.png'
import { CenterXAndY } from '../../Storybook'

const meta: Meta<typeof XCard> = {
  title: 'components/XCard/02 - With onClick',
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

export const WithOnClick: Story = {
  args: {
    titleContent: 'Title here',
    image,
    alt: 'Alt to image',
    description: 'Description here',
    onClick: () => console.log('Your function'),
    borderAnimation: false,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: false
  }
}

export const PrimaryWithOnClick: Story = {
  args: {
    titleContent: 'Title here',
    image,
    alt: 'Alt to image',
    description: 'Description here',
    onClick: () => console.log('Your function'),
    borderAnimation: false,
    primary: true,
    success: false,
    warning: false,
    error: false,
    disabled: false
  }
}

export const SuccessWithOnClick: Story = {
  args: {
    titleContent: 'Title here',
    image,
    alt: 'Alt to image',
    description: 'Description here',
    onClick: () => console.log('Your function'),
    borderAnimation: false,
    primary: false,
    success: true,
    warning: false,
    error: false,
    disabled: false
  }
}

export const WarningWithOnClick: Story = {
  args: {
    titleContent: 'Title here',
    image,
    alt: 'Alt to image',
    description: 'Description here',
    onClick: () => console.log('Your function'),
    borderAnimation: false,
    primary: false,
    success: false,
    warning: true,
    error: false,
    disabled: false
  }
}

export const ErrorWithOnClick: Story = {
  args: {
    titleContent: 'Title here',
    image,
    alt: 'Alt to image',
    description: 'Description here',
    onClick: () => console.log('Your function'),
    borderAnimation: false,
    primary: false,
    success: false,
    warning: false,
    error: true,
    disabled: false
  }
}

export const DisabledWithOnClick: Story = {
  args: {
    titleContent: 'Title here',
    image,
    alt: 'Alt to image',
    description: 'Description here',
    onClick: () => console.log('Your function'),
    borderAnimation: false,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: true
  }
}