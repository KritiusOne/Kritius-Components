import type { Meta, StoryObj } from "@storybook/react";
import { Aside } from "./Aside";

const meta: Meta<typeof Aside> = {
  title: "Components/Aside",
  component: Aside,
  tags: ["default"],
  parameters:{
    layout: "fullscreen"
  }
} satisfies Meta<typeof Aside>

type Story = StoryObj<typeof meta>
export const Base: Story = {
  args:{

  }
}


export default meta;
