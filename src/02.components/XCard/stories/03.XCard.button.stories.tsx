import { Meta, StoryObj } from '@storybook/react'
import XCard from '..'
import image from '../../../assets/storybook/360x360.png'
import { CenterXAndY } from '../../Storybook'

const meta: Meta<typeof XCard> = {
  title: '02 - components/XCard/03 - With Button',
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

export const WithButton: Story = {
  args: {
    titleContent: 'Title here',
    image,
    alt: 'Alt to image',
    description: 'Description here',
    buttonProps: {
      children: 'Login',
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

export const PrimaryWithButton: Story = {
  args: {
    titleContent: 'Title here',
    image,
    alt: 'Alt to image',
    description: 'Description here',
    buttonProps: {
      children: 'Login',
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

export const SuccessWithButton: Story = {
  args: {
    titleContent: 'Title here',
    image,
    alt: 'Alt to image',
    description: 'Description here',
    buttonProps: {
      children: 'Login',
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

export const WarningWithButton: Story = {
  args: {
    titleContent: 'Title here',
    image,
    alt: 'Alt to image',
    description: 'Description here',
    buttonProps: {
      children: 'Login',
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

export const ErrorWithButton: Story = {
  args: {
    titleContent: 'Title here',
    image,
    alt: 'Alt to image',
    description: 'Description here',
    buttonProps: {
      children: 'Login',
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

export const DisabledWithButton: Story = {
  args: {
    titleContent: 'Title here',
    image,
    alt: 'Alt to image',
    description: 'Description here',
    buttonProps: {
      children: 'Login',
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