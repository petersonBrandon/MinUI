import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import "../tailwind.css";

import Dropdown from "./Dropdown";

const meta = {
  title: "MinUI Components/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary_Dark: Story = {
  args: {
    variant: "primary",
    theme: "dark",
    options: [
      "111111111111111111111111111111111111111111111111111111111111",
      "2",
      "3",
    ],
    onSelect: (e) => console.log(e),
  },
};
