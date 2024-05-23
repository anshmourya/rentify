/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import { useController } from "react-hook-form";
import { ErrorMessage } from "./ErrorMessage";

export type InputProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "size" | "prefix" | "type" | "onChange"
> &
  Partial<{
    wrapClassName: string;
    className: string;
    name: string;
    placeholder: string;
    type: string;
    errors: string[];
    label: string;
    prefix: React.ReactNode;
    suffix: React.ReactNode;
    control: any;
    desc?: string;
  }>;

const Input: React.FC<InputProps> = ({
  wrapClassName = "",
  className = "",
  name = "",
  placeholder = "",
  type = "text",

  label = "",
  prefix,
  suffix,
  control,
  defaultValue,
  desc,
  ...restProps
}) => {
  const { field, fieldState } = control
    ? // eslint-disable-next-line react-hooks/rules-of-hooks
      useController({
        control: control,
        name,
        defaultValue: defaultValue || "",
      })
    : { field: {}, fieldState: { error: {} } };

  return (
    <div className="flex flex-col items-end w-full">
      <div className={`${wrapClassName}`}>
        {!!label && label}
        {!!prefix && prefix}
        <input
          className={`${className} bg-transparent border-0 !text-gray-900 placeholder:text-gray-400 outline-none  `}
          type={type}
          placeholder={placeholder}
          {...field}
          {...restProps}
        />
        {!!suffix && suffix}
      </div>
      {!!desc && <div className="text-sm text-gray-500">{desc}</div>}
      {!!fieldState.error && (
        <ErrorMessage
          errors={[fieldState.error.message]}
          className="text-right"
        />
      )}
    </div>
  );
};

export { Input };
