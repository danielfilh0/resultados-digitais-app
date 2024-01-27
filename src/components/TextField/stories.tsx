import { Meta, StoryObj } from '@storybook/react'
import { TextField } from '.'

export default {
  title: 'TextField',
  component: TextField,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  args: {
    placeholder: 'Input',
    label: 'Input*',
    id: 'input'
  }
} as Meta

export const Default: StoryObj = {}

export const WithError: StoryObj = {}

WithError.args = {
  error: 'Ops, something went wrong...'
}
