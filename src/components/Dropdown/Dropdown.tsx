import React, { useEffect, useRef, useState } from "react";

export interface DropdownProps {
  /**
   * The Dropdown variant.
   */
  variant?: "primary" | "underline";
  /**
   * Is the Dropdown disabled?
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
   * Default value.
   */
  defaultOption?: string;
  /**
   * Show default?
   */
  showDefault?: boolean;
  /**
   * On Select event
   */
  onSelect: (text: string) => void;
  /**
   * Options for selecting
   */
  options: Array<string>;
  /**
   * Background color
   */
  bgColor?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  disabled = false,
  variant = "primary",
  rounded = true,
  theme = "dark",
  size = "normal",
  defaultOption = "Select",
  showDefault = true,
  onSelect,
  options = [],
  bgColor = theme === "dark" ? "#000000" : "#ffffff",
}) => {
  const wrapperRef = useRef(null);
  useOutsideActionTrigger(wrapperRef, () => {
    setOpen(false);
  });

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const [selected, setSelected] = useState(defaultOption);
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);

  const optionsList = showDefault ? [defaultOption, ...options] : options;

  let variantStyle = "";
  let lineStyle = "";
  let bgHoverStyle = "";
  let bgStyle = "";

  if (theme === "dark") {
    bgHoverStyle = "hover:bg-white hover:text-black";
    bgStyle = "bg-white text-black";
  } else {
    bgHoverStyle = "hover:bg-black hover:text-white";
    bgStyle = "bg-black text-white";
  }

  switch (variant) {
    case "primary":
      if (theme === "dark") {
        variantStyle = "text-white";
        lineStyle = "border-white border-2";
      } else {
        variantStyle = "text-black border-black";
        lineStyle = "border-black border-2";
      }
      break;
    case "underline":
      if (theme === "dark") {
        variantStyle = "text-white border-white";
        lineStyle = "border-white border-b-2 rounded-none";
      } else {
        variantStyle = "text-black border-black";
        lineStyle = "border-black border-b-2 rounded-none";
      }
      break;
    default:
      if (theme === "dark") {
        variantStyle = "text-white border-white";
        lineStyle = "border-white border-2";
      } else {
        variantStyle = "text-black border-black";
        lineStyle = "border-black border-2";
      }
      break;
  }

  let sizeStyle = "";
  switch (size) {
    case "small":
      sizeStyle = "text-xs";
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

  // Calculate maximum width among options
  const maxOptionWidth =
    Math.max(
      ...optionsList.map((option) => {
        const textWidth = option.length;
        return textWidth;
      })
    ) + 9;

  const minWidthStyle = { minWidth: `${maxOptionWidth}ch` };
  const maxWidthStyle = { width: "100%" };

  useEffect(() => {
    const closeItems = async () => {
      await delay(100);
      setOpen(false);
      setClose(false);
    };
    if (close) {
      closeItems();
    }
  }, [close]);

  return (
    <div
      ref={wrapperRef}
      style={{ ...minWidthStyle, ...maxWidthStyle, backgroundColor: bgColor }}
      className={`${variantStyle} ${sizeStyle} ${disabled && "opacity-50"} ${
        rounded && "rounded-md"
      } ease-in-out duration-300 relative`}
    >
      {/* Dropdown Button */}
      <div
        className={`relative px-4 py-2 flex justify-center items-center group`}
      >
        <span
          onClick={() => {
            if (!disabled) {
              if (open) {
                setClose(true);
              } else {
                setOpen(true);
              }
            }
          }}
          className={`
        ${rounded && "rounded-md"}
        ${lineStyle}
        ${!disabled && "cursor-pointer"}
        absolute w-full h-full
         ease-in-out duration-300 z-0`}
        />
        <button
          disabled={disabled}
          onClick={() => {
            if (open) {
              setClose(true);
            } else {
              setOpen(true);
            }
          }}
          className={`flex justify-between items-center space-x-5 z-10 w-full`}
        >
          <p className="w-11/12 text-start overflow-hidden truncate">
            {selected}
          </p>
          <div className="w-1/12 flex justify-end">
            {open ? (
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 20 20"
                aria-hidden="true"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            ) : (
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 20 20"
                aria-hidden="true"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            )}
          </div>
        </button>
      </div>
      {/* Dropdown Options */}
      <div
        className={`${close ? "animate-fadeOut" : ""} ${
          open ? "block" : "hidden"
        } w-full`}
      >
        <div
          style={{ backgroundColor: bgColor }}
          className={`${
            rounded && "rounded-md"
          } ${lineStyle} absolute w-full mt-2 flex flex-col opacity-0 
          animate-fadeIn
          z-50 max-h-56 overflow-y-scroll overflow-x-hidden p-2`}
        >
          {optionsList.map((option) => {
            return (
              <button
                onClick={() => {
                  setSelected(option);
                  onSelect(option);
                  setClose(true);
                }}
                disabled={option === selected}
                className={`
                w-full flex justify-start items-center px-4 py-2
                rounded-md
                ${option !== selected && bgHoverStyle}`}
              >
                <p className="w-full overflow-hidden truncate text-left">
                  {option}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

/**
 * Hook that alerts clicks outside of the passed ref
 * Code snipped thanks to Ben Bud on Stack Overflow (https://stackoverflow.com/a/42234988/18043953)
 */
function useOutsideActionTrigger(ref: any, action: () => void) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        action();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

export default Dropdown;
