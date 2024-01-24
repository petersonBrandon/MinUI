import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import "../tailwind.css";

import TextInput from "./TextInput";

import { MdOutlineHome } from "react-icons/md";

const meta = {
  title: "MinUI Components/TextInput",
  component: TextInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary_Dark: Story = {
  args: {
    variant: "primary",
    placeholder: "Testing",
  },
};
