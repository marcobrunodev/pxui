import { Meta, StoryObj } from '@storybook/react'
import XCard from '.'
import image from '../../assets/storybook/360x360.png'
import { CenterXAndY } from '../Storybook'

const meta: Meta<typeof XCard> = {
  title: 'components/XCard',
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

export const Normal: Story = {
  args: {
    titleContent: 'Title here',
    image,
    alt: 'Alt to image',
    description: 'Description here',
    borderAnimation: false,
    primary: true
  }
}