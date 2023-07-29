import React, { MouseEventHandler } from "react";

export interface ButtonProps {
  /**
   * The button lable.
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
  switch (variant) {
    case "primary":
      if (theme === "dark") {
        variantStyle = "bg-slate-100 text-slate-900 hover:enabled:bg-slate-300";
      } else {
        variantStyle = "bg-slate-900 text-slate-200 hover:enabled:bg-slate-700";
      }
      break;
    case "secondary":
      if (theme === "dark") {
        variantStyle = "bg-slate-500 text-slate-100 hover:enabled:bg-slate-400";
      } else {
        variantStyle = "bg-slate-300 text-slate-900 hover:enabled:bg-slate-100";
      }
      break;
    case "danger":
      variantStyle = "bg-rose-600 text-slate-100 hover:enabled:bg-rose-400";
      break;
    case "outline":
      if (theme === "dark") {
        variantStyle =
          "border-2 border-slate-100 text-slate-100 hover:enabled:bg-slate-100 hover:enabled:text-slate-900";
      } else {
        variantStyle =
          "border-2 border-slate-900 text-slate-900 hover:enabled:bg-slate-900 hover:enabled:text-slate-100";
      }
      break;
    case "ghost":
      if (theme === "dark") {
        variantStyle =
          "text-slate-100 hover:enabled:bg-slate-100 hover:enabled:text-slate-900";
      } else {
        variantStyle =
          "text-slate-900 hover:enabled:bg-slate-900 hover:enabled:text-slate-100";
      }
      break;
    default:
      if (theme === "dark") {
        variantStyle = "bg-slate-100 text-slate-900 hover:enabled:bg-slate-300";
      } else {
        variantStyle = "bg-slate-900 text-slate-200 hover:enabled:bg-slate-700";
      }
      break;
  }

  let sizeStyle = "";
  switch (size) {
    case "small":
      sizeStyle = "px-2 py-1 text-xs";
      break;
    case "normal":
      sizeStyle = "px-4 py-2 text-base";
      break;
    case "large":
      sizeStyle = "px-8 py-4 text-xl";
      break;
    case "icon":
      sizeStyle = "px-2 py-2 text-base";
      break;
    default:
      sizeStyle = "px-4 py-2 text-base";
      break;
  }

  return (
    <button
      onClick={() => {
        console.log("clicked");
        onClick;
      }}
      className={`${variantStyle} ${sizeStyle} ${
        rounded ? "rounded-md" : ""
      } ease-in-out duration-300 p-2 disabled:opacity-50 
      flex flex-row justify-center items-center`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
