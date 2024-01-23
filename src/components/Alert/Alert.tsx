import React from "react";
import { HiOutlineInformationCircle } from "react-icons/hi";

export interface AlertProps {
  /**
   * The Alert variant.
   */
  variant?: "default" | "danger";
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
  size?: "small" | "normal" | "large";
  /**
   * Title text.
   */
  title: string;
  /**
   * Desc text.
   */
  description?: string;
  /**
   * Icon component
   */
  iconComponent?: any;
  /**
   * Hide Icon
   */
  hideIcon?: boolean;
}

const Alert: React.FC<AlertProps> = ({
  variant = "default",
  rounded = true,
  theme = "dark",
  size = "normal",
  title = "Title",
  description,
  children,
  iconComponent = <HiOutlineInformationCircle className="w-full h-full" />,
  hideIcon = false,
  ...props
}) => {
  let variantStyle = "";
  switch (variant) {
    case "default":
      if (theme === "dark") {
        variantStyle = "text-white border-white";
      } else {
        variantStyle = "text-black border-black";
      }
      break;
    case "danger":
      variantStyle = "text-rose-600 border-rose-600";
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
  let titleStyle = "";
  let iconSize = "";
  switch (size) {
    case "small":
      sizeStyle = "text-sm";
      titleStyle = "text-base";
      iconSize = "w-4 h-4";
      break;
    case "normal":
      sizeStyle = "text-base";
      titleStyle = "text-xl";
      iconSize = "w-5 h-5";
      break;
    case "large":
      sizeStyle = "text-xl";
      titleStyle = "text-2xl";
      iconSize = "w-6 h-6";
      break;
    default:
      sizeStyle = "text-base";
      titleStyle = "text-base";
      iconSize = "w-5 h-5";
      break;
  }

  return (
    <div
      className={`${variantStyle} ${sizeStyle} ${
        rounded ? "rounded-md" : ""
      } ease-in-out duration-300 my-6
      outline-none bg-transparent group flex justify-start items-start border-2 px-4 py-2 w-full space-x-3`}
    >
      <div
        className={`${
          hideIcon ? "hidden" : "block"
        } ${iconSize} translate-y-[6px] ease-in-out duration-300`}
      >
        {iconComponent}
      </div>
      <div className="flex flex-col">
        <h3
          className={`${
            title != undefined || title != "" ? "block" : "hidden"
          } ${titleStyle} font-bold ease-in-out duration-300`}
        >
          {title}
        </h3>
        <p
          className={`${
            description != undefined || description != "" ? "block" : "hidden"
          }`}
        >
          {description}
        </p>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Alert;
