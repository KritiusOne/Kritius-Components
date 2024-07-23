import { Stars } from "./Stars";
import {Meta, StoryObj} from "@storybook/react"

const meta: Meta<typeof Stars> = {
  title: "ATOMS/Stars",
  component: Stars,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Stars>
export default meta;

type Story = StoryObj<typeof Stars>

export const Base: Story = {
  args: {
    size: "medium",
  }
}
export const Small: Story = {
  args: {
    size: "small",
    numStars: 1
  }
}

export const Large: Story = {
  args: {
    size: "large",
    numStars: 5
  }
}