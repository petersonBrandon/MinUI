import React from "react";

export interface AvatarProps {
  /**
   * Size type.
   */
  size?: "small" | "normal" | "large";
  /**
   * Source Image
   */
  src: string;
  /**
   * Alternate text if image is not available
   */
  alt: string;
  /**
   * Allow hover
   */
  hover?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({
  size = "normal",
  hover = false,
  src,
  alt,
}) => {
  let sizeStyle = "";
  switch (size) {
    case "small":
      sizeStyle = "w-8";
      break;
    case "normal":
      sizeStyle = "w-11";
      break;
    case "large":
      sizeStyle = "w-16";
      break;
    default:
      sizeStyle = "w-10";
      break;
  }

  return (
    <div className={`rounded-full overflow-hidden ${sizeStyle} group`}>
      <img
        src={src}
        alt={alt}
        className={`object-cover w-full h-full 
         ${hover && "group-hover:scale-110"}
         ease-in-out duration-300`}
      />
    </div>
  );
};

export default Avatar;
