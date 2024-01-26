import { Meta, StoryObj } from '@storybook/react'
import { Header } from '.'

export default {
  title: 'Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryObj = {}
