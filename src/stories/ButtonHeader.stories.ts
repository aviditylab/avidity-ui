import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, expect } from "@storybook/test";

import { ButtonHeader } from "./ButtonHeader";

const meta = {
  title: "Component/ButtonHeader",
  component: ButtonHeader,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
} satisfies Meta<typeof ButtonHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithoutMenu: Story = {
  args: {
    showMenu: true
  }
};
