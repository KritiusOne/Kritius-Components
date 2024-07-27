import { Meta, StoryObj } from "@storybook/react"
import { Input } from "./Input";


const meta: Meta<typeof Input> = {
  title: "ATOMS/Input",
  component: Input,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Input>

export default meta;
type Story = StoryObj<typeof Input>

export const Base: Story = {
  args: {
    placeholder: "Base",
    uniqueBorder: false,
    inputColor: "Dark"
  }
}
export const Blue: Story = {
  args: {
    placeholder: "Blue",
    uniqueBorder: true,
    inputColor: "blue"
  }
}
export const Red: Story = {
  args: {
    placeholder: "Red",
    uniqueBorder: false,
    inputColor: "red"
  }
}
export const Yellow: Story = {
  args: {
    placeholder: "Yellow",
    uniqueBorder: true,
    inputColor: "yellow"
  }
}
export const Dark: Story = {
  args: {
    placeholder: "Dark",
    uniqueBorder: false,
    inputColor: "Dark"
  }
}
export const Light: Story = {
  args: {
    placeholder: "Light",
    uniqueBorder: false,
    inputColor: "Light"
  }
}