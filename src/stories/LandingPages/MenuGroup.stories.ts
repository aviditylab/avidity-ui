import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { MenuGroup } from "./MenuGroup";

const meta = {
  title: "Component/MenuGroup",
  component: MenuGroup,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  argTypes: {
    color: { conrol: "color" },
  },
  args: { onClick: () => fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseMenuGroup: Story = {};
