import { Meta, StoryObj } from '@storybook/react'
import XYouTube from '.'

const meta: Meta<typeof XYouTube> = {
  title: '01 - Icons/XYouTube',
  component: XYouTube
}
export default meta

type Story = StoryObj<typeof XYouTube>

export const Normal: Story = {
  args: {}
}