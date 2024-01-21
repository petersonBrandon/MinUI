import React, { MouseEventHandler, useState } from "react";

export interface ButtonProps {
  /**
   * The button variant.
   */
  variant?: "primary" | "underline" | "danger";
  /**
   * Is the button disabled?
   */
  disabled?: boolean;
  /**
   * Theme variant.
   */
  theme?: "dark" | "light";
  /**
   * Any children.
   */
  children?: any;
  /**
   * Size type.
   */
  size?: "small" | "normal" | "large" | "icon";
  /**
   * On click action.
   */
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  disabled = false,
  variant = "primary",
  theme = "dark",
  children,
  size = "normal",
  onClick,
  ...props
}) => {
  const [clicked, setClick] = useState(false);
  let variantStyle = "";
  let lineStyle = "";
  switch (variant) {
    case "primary":
      if (theme === "dark") {
        variantStyle = "text-white";
        lineStyle = "ring-white ring-2 rounded-xl";
      } else {
        variantStyle = "text-black";
        lineStyle = "ring-black ring-2 rounded-xl";
      }
      break;
    case "underline":
      if (theme === "dark") {
        variantStyle = "text-white";
        lineStyle = "border-white border-b-2";
      } else {
        variantStyle = "text-black";
        lineStyle = "border-black border-b-2";
      }
      break;
    case "danger":
      variantStyle = "text-rose-600";
      lineStyle = "ring-rose-600 ring-2 rounded-xl";
      break;
    default:
      if (theme === "dark") {
        variantStyle = "text-white";
        lineStyle = "ring-white ring-2 rounded-xl";
      } else {
        variantStyle = "text-black";
        lineStyle = "ring-black ring-2 rounded-xl";
      }
      break;
  }

  let sizeStyle = "";
  switch (size) {
    case "small":
      sizeStyle = "px-3 py-1 text-xs";
      break;
    case "normal":
      sizeStyle = "px-6 py-2 text-base";
      break;
    case "large":
      sizeStyle = "px-8 py-4 text-xl";
      break;
    case "icon":
      sizeStyle = "p-2 text-base";
      break;
    default:
      sizeStyle = "px-6 py-2 text-base";
      break;
  }

  return (
    <button
      onClick={() => {
        onClick?.();
      }}
      onMouseDown={() => {
        setClick(true);
      }}
      onMouseUp={() => {
        setClick(false);
      }}
      className={`${variantStyle} ${sizeStyle} relative ease-in-out duration-300 disabled:opacity-50 
        flex flex-col justify-center items-center group outline-none `}
      disabled={disabled}
      {...props}
    >
      <span
        className={`h-full ${lineStyle} w-full ${
          !disabled && !clicked ? "group-hover:scale-110" : ""
        } ease-in-out duration-300 absolute
        ${clicked ? "scale-90" : ""}`}
      />
      <div className="flex flex-row justify-center items-center">
        {children}
      </div>
    </button>
  );
};

export default Button;
