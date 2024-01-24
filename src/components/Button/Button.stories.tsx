import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import "../tailwind.css";

import Button from "./Button";

import { MdOutlineHome } from "react-icons/md";

const meta = {
  title: "MinUI Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary_Dark: Story = {
  args: {
    variant: "primary",
    children: "Button",
  },
};
