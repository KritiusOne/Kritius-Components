import { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";

const meta: Meta<typeof Header> = {
  title: "MOLECULES/Header",
  component: Header,
  parameters: {
    layout: "fullscreen"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Header>

export default meta;

type Story = StoryObj<typeof Header>

export const Base: Story = {
  
}