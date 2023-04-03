import * as React from "react";
import classnames from "classnames";
import css from "./InputUpload.module.scss";

export interface InputUploadProps {
  id?: string;
  name?: string;
  className?: string;
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputUpload = React.forwardRef<HTMLInputElement, InputUploadProps>(
  (
    {
      id,
      name,
      className,
      accept,
      multiple = false,
      disabled = false,
      onChange,
      ...props
    }: InputUploadProps,
    ref: React.Ref<HTMLInputElement>
  ) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(event);
    };

    return (
      <div className={classnames(css.inputUpload, className)}>
        <input
          ref={ref}
          className={css.input}
          id={id}
          name={name}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleInputChange}
          disabled={disabled}
          {...props}
        />
      </div>
    );
  }
);

InputUpload.displayName = "InputUpload";
