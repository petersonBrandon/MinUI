import React, { MouseEventHandler, useState } from "react";

export interface TextInputProps {
  /**
   * The TextInput variant.
   */
  variant?: "primary" | "danger" | "underline";
  /**
   * Is the TextInput disabled?
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
   * Size type.
   */
  size?: "small" | "normal" | "large";
  /**
   * Placeholder value.
   */
  placeholder?: string;
  /**
   * On Change event
   */
  onChange: (text: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  disabled = false,
  variant = "primary",
  rounded = true,
  theme = "dark",
  size = "normal",
  placeholder = "",
  onChange,
  ...props
}) => {
  const [text, setText] = useState("");
  let variantStyle = "";
  switch (variant) {
    case "primary":
      if (theme === "dark") {
        variantStyle = "text-white border-white";
      } else {
        variantStyle = "text-black border-black";
      }
      break;
    case "danger":
      variantStyle = "text-rose-600 border-rose-600";
      break;
    case "underline":
      if (theme === "dark") {
        variantStyle = "text-white border-white";
      } else {
        variantStyle = "text-black border-black";
      }
      break;
    default:
      if (theme === "dark") {
        variantStyle = "text-white border-white";
      } else {
        variantStyle = "text-black border-black";
      }
      break;
  }

  let sizeStyle = "";
  switch (size) {
    case "small":
      sizeStyle = "text-sm";
      break;
    case "normal":
      sizeStyle = "text-base";
      break;
    case "large":
      sizeStyle = "text-xl";
      break;
    default:
      sizeStyle = "text-base";
      break;
  }

  return (
    <div
      className={`${variantStyle} ${sizeStyle} ${
        rounded ? "rounded-md" : ""
      } ease-in-out duration-300 my-6
      outline-none bg-transparent group flex justify-start items-center
      ${variant === "underline" ? " border-b-2 rounded-none" : ""}
      ${variant === "primary" || variant === "danger" ? " border-2" : ""}
      ${disabled ? "opacity-50" : ""}
      `}
    >
      <p
        className={`absolute opacity-50 ml-3 
                    text-center
                    z-0
                    ease-in-out duration-200
                    ${
                      text.length !== 0
                        ? `-translate-y-10 text-sm`
                        : `
                      group-focus-within:opacity-100
                      group-focus-within:-translate-y-10
                      group-focus-within:text-sm
                      group-focus-within:rounded-t-md`
                    }
                    
          `}
      >
        {placeholder}
      </p>
      <input
        type="text"
        onChange={(e) => onChange(e.target.value)}
        className={`${variantStyle} ${sizeStyle} ${
          rounded ? "rounded-md" : ""
        } disabled:opacity-50 
          outline-none bg-transparent p-3 relative z-20`}
        disabled={disabled}
        {...props}
      />
    </div>
  );
};

export default TextInput;
