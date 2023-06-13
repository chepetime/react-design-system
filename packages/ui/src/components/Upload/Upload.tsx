import React from "react";
import classnames from "classnames";
import css from "./Upload.module.scss";

export interface UploadProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const Upload = React.forwardRef<HTMLDivElement, UploadProps>(
  (props: UploadProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Upload)} ref={ref}>
        <p>Upload component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Upload.displayName = "Upload";
