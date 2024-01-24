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
  /**
   * Is rounded?
   */
  rounded?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  disabled = false,
  variant = "primary",
  children,
  size = "normal",
  rounded = true,
  onClick,
  ...props
}) => {
  const [clicked, setClick] = useState(false);
  let variantStyle = "";
  let lineStyle = "";
  switch (variant) {
    case "primary":
      lineStyle = "border-2";
      break;
    case "underline":
      lineStyle = "border-b-2 !rounded-none";
      break;
    case "danger":
      variantStyle = "!text-rose-600";
      lineStyle = "!border-rose-600 border-2";
      break;
    default:
      lineStyle = "border-2";
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
        setClick(true);
        onClick?.();
      }}
      className={`${variantStyle} ${sizeStyle} relative ease-in-out duration-300 disabled:opacity-50 
        flex flex-col justify-center items-center group outline-none text-inherit w-full min-w-fit
        ${!disabled ? "hover:opacity-50" : ""}`}
      disabled={disabled}
      {...props}
    >
      <span
        onAnimationEnd={() => setClick(false)}
        className={`h-full ${lineStyle} ${
          rounded && "rounded-xl"
        } w-full ease-in-out duration-300 absolute border-current
        ${clicked ? "animate-click-bounce" : ""}`}
      />
      <div className="flex flex-row justify-center items-center">
        {children}
      </div>
    </button>
  );
};

export default Button;
