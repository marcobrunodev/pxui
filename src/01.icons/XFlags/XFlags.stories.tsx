import { Meta, StoryObj } from '@storybook/react'
import XFlags from '.'

const meta: Meta<typeof XFlags> = {
  title: '01 - Icons/XFlags',
  component: XFlags
}
export default meta

type Story = StoryObj<typeof XFlags>

export const Normal: Story = {
  args: {
    loading: false,
    br: false,
    uk: false
  }
}

export const Loading: Story = {
  args: {
    loading: true,
    br: false,
    uk: false
  }
}

export const Brazil: Story = {
  args: {
    loading: false,
    br: true,
    uk: false
  }
}

export const TheUnitedKingdom: Story = {
  args: {
    loading: false,
    br: false,
    uk: true
  }
}