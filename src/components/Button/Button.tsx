import React from "react";

export interface ButtonProps {
  label: string;
  // Is this the principal call to action on the page?
  enabled?: boolean;
}

export const Button = (props: ButtonProps) => {
  return <button className="text-7xl">{props.label}</button>;
};
