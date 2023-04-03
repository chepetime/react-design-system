import React, { useState } from "react";
import classnames from "classnames";
import css from "./Notification.module.scss";

export type NotificationType = "success" | "warning" | "error" | "info";

export interface NotificationProps {
  type?: NotificationType;
  message?: string;
  className?: string;
  onClose?: () => void;
  children?: React.ReactNode;
}

const defaultProps: NotificationProps = {
  type: "info",
  children: "",
};

export const Notification: React.FC<NotificationProps> = ({
  type = "info",
  children,
  className,
  onClose,
}) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);

    setTimeout(() => {
      if (onClose) {
        onClose();
      }
    }, 500);
  };

  return (
    <div
      className={classnames(css.Notification, css[type], className, {
        [css.Closing]: isClosing,
      })}
      role="alert"
    >
      <p className={css.NotificationText}>{children}</p>
      <button className={css.CloseButton} onClick={handleClose}>
        Close
        <span aria-hidden>×</span>
      </button>
    </div>
  );
};

Notification.defaultProps = defaultProps;
Notification.displayName = "Notification";
