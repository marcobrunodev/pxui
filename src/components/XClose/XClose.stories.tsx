import { Meta, StoryObj } from "@storybook/react";
import XClose from '.'

const meta: Meta<typeof XClose> = {
  title: 'components/XClose',
  component: XClose
}
export default meta

type Story = StoryObj<typeof XClose>

export const Normal: Story = {
  args: {
    onClick: () => console.log('Clicked')
  }
} 
