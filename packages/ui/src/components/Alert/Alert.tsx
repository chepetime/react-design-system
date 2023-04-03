import * as React from "react";
import classnames from "classnames";
import css from "./Alert.module.scss";

export type AlertType = "success" | "warning" | "error" | "info";

export interface AlertProps {
  type?: AlertType;
  message?: string;
  className?: string;
  onClose?: () => void;
  children?: React.ReactNode;
}

const defaultProps: AlertProps = {
  type: "info",
  message: "",
};

export const Alert: React.FC<AlertProps> = ({
  type = "info",
  message = "",
  className,
  onClose,
  children,
}) => {
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className={classnames(css.Alert, css[type], className)} role="alert">
      <p className={css.AlertText}>{message || children}</p>
      {onClose && (
        <button className={css.CloseButton} onClick={handleClose}>
          Close <span aria-hidden>×</span>
        </button>
      )}
    </div>
  );
};

Alert.defaultProps = defaultProps;
Alert.displayName = "Alert"; // sets the component's display name to "Alert" for debugging purposes
