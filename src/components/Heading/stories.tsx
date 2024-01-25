import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '.'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    as: {
      type: 'string'
    }
  },
  args: {
    children: 'Heading',
    as: 'h1'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryObj<HeadingProps> = {}
