import { Meta, StoryObj } from '@storybook/react'
import { Footer } from '.'

export default {
  title: 'Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryObj = {}
