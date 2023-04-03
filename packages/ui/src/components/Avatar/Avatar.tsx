import * as React from "react";
import classnames from "classnames";
import css from "./Avatar.module.scss";

export interface AvatarProps {
  name: string;
  src?: string;
  size?: "small" | "medium" | "large";
  className?: string;
}

const getInitials = (name: string) => {
  const words = name.split(" ");
  if (words.length === 1) {
    return words[0].charAt(0);
  } else {
    return words[0].charAt(0) + words[words.length - 1].charAt(0);
  }
};

const transparentImageUrl =
  "'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAApJREFUCNdjYAAAAAIAAeIhvDMAAAAASUVORK5CYII='";

export const Avatar: React.FC<AvatarProps> = ({
  name = "",
  src,
  size = "medium",
  className,
}) => {
  const initials = getInitials(name) || "JL";

  return (
    <div
      className={classnames(css.Avatar, css[size], className)}
      style={{
        backgroundImage: src ? `url(${src})` : `url(${transparentImageUrl})`,
      }}
      role="img"
      aria-label={initials}
    >
      {!src && initials}
    </div>
  );
};

Avatar.displayName = "Avatar"; // sets the component's display name to "Avatar" for debugging purposes
