import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '.'

export default {
  title: 'Text',
  component: Text,
  argTypes: {
    as: {
      type: 'string'
    }
  },
  args: {
    children: 'Random text',
    as: 'p'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryObj<TextProps> = {}
