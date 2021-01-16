import React from "react";

export const FileUploader = ({
  onChange,
  label = "",
  icon = "",
  className,
  ...rest
}) => {
  return (
    <>
      <label className={className}>
        {icon}
        {label}
        <input
          style={{ display: "none" }}
          type="file"
          onChange={(e) => {
            if (onChange && typeof onChange === "function") onChange(e);
          }}
          {...rest}
        />
      </label>
    </>
  );
};