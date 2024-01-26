import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '.'
import { ArrowIcon } from '../ArrowIcon'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Button'
  }
} as Meta

export const Default: StoryObj<ButtonProps> = {
  render: (args) => (
    <div style={{ maxWidth: '620px', width: '100%' }}>
      <Button {...args}>{args.children}</Button>
    </div>
  )
}

export const WithIcon: StoryObj<ButtonProps> = {
  render: (args) => (
    <div style={{ maxWidth: '620px', width: '100%' }}>
      <Button {...args} icon={<ArrowIcon size={24} />}>
        {args.children}
      </Button>
    </div>
  )
}

export const Disabled: StoryObj<ButtonProps> = {
  render: (args) => (
    <div style={{ maxWidth: '620px', width: '100%' }}>
      <Button {...args} disabled>
        {args.children}
      </Button>
    </div>
  )
}
