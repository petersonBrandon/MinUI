import React, { MouseEventHandler } from "react";

export interface ButtonProps {
  /**
   * The button variant.
   */
  variant?: "primary" | "secondary" | "danger" | "outline" | "ghost";
  /**
   * Is the button disabled?
   */
  disabled?: boolean;
  /**
   * Is Rounded?
   */
  rounded?: boolean;
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
  rounded = true,
  theme = "dark",
  children,
  size = "normal",
  onClick,
  ...props
}) => {
  let variantStyle = "";
  let lineStyle = "";
  switch (variant) {
    case "primary":
      if (theme === "dark") {
        variantStyle = "text-purple-400";
        lineStyle = "bg-purple-400";
      } else {
        variantStyle = "text-purple-600";
        lineStyle = "bg-purple-600";
      }
      break;
    case "secondary":
      if (theme === "dark") {
        variantStyle = "text-white";
        lineStyle = "bg-white";
      } else {
        variantStyle = "text-black";
        lineStyle = "bg-black";
      }
      break;
    case "danger":
      variantStyle = "text-rose-600";
      lineStyle = "bg-rose-600";
      break;
    default:
      if (theme === "dark") {
        variantStyle = "text-purple-400";
        lineStyle = "bg-purple-400";
      } else {
        variantStyle = "text-purple-600";
        lineStyle = "bg-purple-600";
      }
      break;
  }

  let sizeStyle = "";
  switch (size) {
    case "small":
      sizeStyle = "pt-1 text-xs";
      break;
    case "normal":
      sizeStyle = "pt-2 text-base";
      break;
    case "large":
      sizeStyle = "pt-4 text-xl";
      break;
    case "icon":
      sizeStyle = "pt-2 text-base";
      break;
    default:
      sizeStyle = "pt-2 text-base";

      break;
  }

  return (
    <button
      onClick={() => {
        onClick?.();
      }}
      className={`${variantStyle} ${sizeStyle} ease-in-out duration-300 disabled:opacity-50 
        flex flex-col justify-center items-center space-y-2 group p-3`}
      disabled={disabled}
      {...props}
    >
      <div className="flex flex-row justify-center items-center">
        {children}
      </div>
      <span
        className={`h-[2px]  ${lineStyle} w-full ${
          disabled ? "" : "group-hover:translate-y-1"
        } ease-in-out duration-300`}
      />
    </button>
  );
};

export default Button;
