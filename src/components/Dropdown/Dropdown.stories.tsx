import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import "../tailwind.css";

import Dropdown from "./Dropdown";

import { MdOutlineHome } from "react-icons/md";

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
    placeholder: "Testing",
  },
};
