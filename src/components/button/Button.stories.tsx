import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "./Button"

const meta: Meta<typeof Button> = {
  title: "ATOMS/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Button>

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    primary: true,
    children: 'Button',
    size: "medium",
    colorButton: "blue"
  },
};
export const SmallRed: Story = {
  args: {
    primary: false,
    children: <span> texto </span>,
    size: "small",
    colorButton: "red"
  }
}
export const SecundaryMediumBlue: Story = {
  args: {
    primary: false,
    children: "Secundary blue",
    size: "medium",
    colorButton: "blue"
  }
}
export const SecundaryDarkLarge: Story = {
  args: {
    primary: false,
    children: "Secundary dark",
    size: "large",
    colorButton: "Dark"
  }
}
export const YellowSecundary: Story = {
  args: {
    primary: false,
    children: "Secundary yellow",
    size: "large",
    colorButton: "yellow"
  }
}