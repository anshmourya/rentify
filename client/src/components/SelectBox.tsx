/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import Select, { Props } from "react-select";
import Creatable from "react-select/creatable";
import { useController } from "react-hook-form";
import { cn } from "@/utils";

type selectOptionType = { value: string; label: string };

export type SelectProps = Omit<Props, "getOptionLabel"> &
  Partial<{
    placeholder: string;
    className: string;
    options: selectOptionType[];
    isSearchable: boolean;
    placeholderClassName: string;
    isMulti: boolean;
    onChange: (value: string) => void;
    value: string;
    errors: string[];
    indicator: React.ReactElement;
    getOptionLabel: (e: any) => string;
    control: any;
    component: "select" | "create";
    children: React.ReactNode;
  }>;

const SelectBox = React.forwardRef<any, SelectProps>(
  (
    {
      children,
      placeholder = "Select",
      className = "",
      options = [],
      isSearchable = false,
      placeholderClassName = "",
      isMulti = false,
      name,
      control,
      indicator,
      onChange,
      component = "create",
      defaultValue,
      ...restProps
    },
    ref
  ) => {
    const Component = component == "select" ? Select : Creatable;
    const [selectOptions, setSelectOptions] = useState(options || []);
    const { field, fieldState } = useController({
      name,
      control,
      defaultValue: defaultValue,
    });

    const handleChange = (data) => {
      // Store only the value when onChange is called
      if (isMulti) {
        const selectedValues = data ? data.map((d) => d.value) : [];
        field.onChange(selectedValues);
      } else {
        field.onChange(data ? data.value : "");
      }

      // Call the provided onChange callback with the entire selected option
      if (onChange) {
        onChange(data);
      }
    };

    const handleCreation = (data) => {
      // Add the newly created option to the selectOptions state
      setSelectOptions((prev) => [...prev, { label: data, value: data }]);

      // Check if it's a multi-select field
      if (isMulti) {
        // Concatenate the new option with the existing selected values
        const newValues = field.value ? [...field.value, data] : [data];
        field.onChange(newValues);
      } else {
        // For single-select, directly set the new option as the field value
        field.onChange(data);
      }
    };

    useEffect(() => {
      // Check if defaultValue is an array
      if (field.value) {
        if (Array.isArray(field.value)) {
          const newOptions = field.value.filter(
            (value) => !selectOptions.find((option) => option.value === value)
          );

          // Add the filtered default values to the selectOptions array
          setSelectOptions((prev) => [
            ...prev,
            ...newOptions.map((value) => ({ label: value, value })),
          ]);
        } else {
          // If defaultValue is a string
          const isDefaultValuePresent = selectOptions.find(
            (option) => option.value === field.value
          );

          // If the default value is not present, add it to selectOptions
          if (!isDefaultValuePresent) {
            setSelectOptions((prev) => [
              ...prev,
              { label: field.value, value: field.value },
            ]);
          }
        }
      }
    }, [field.value]);

    useEffect(() => {
      setSelectOptions(options);
    }, [options?.length]);
    return (
      <>
        <Component
          ref={ref}
          options={options}
          className={cn("w-full", className)}
          placeholder={
            <div className={placeholderClassName}>{placeholder}</div>
          }
          isSearchable={isSearchable}
          isMulti={isMulti}
          components={{
            IndicatorSeparator: () => null,
            ...(indicator && { DropdownIndicator: () => indicator }),
          }}
          value={selectOptions.filter((c) => {
            if (Array.isArray(field?.value)) {
              return field.value.includes(String(c.value));
            } else if (typeof field?.value === "boolean") {
              return field.value === (c.value === "true");
            } else {
              return field?.value === String(c.value);
            }
          })}
          onCreateOption={handleCreation}
          onChange={handleChange}
          styles={{
            menu: (provided) => ({
              ...provided,
              width: `calc(100% + 20px)`,
              display: "flex",
              position: "absolute",
              left: "-10px",
              top: "5px",
            }),
            container: (provided) => ({
              ...provided,
              zIndex: 0,
            }),
            control: (provided) => ({
              ...provided,
              backgroundColor: "transparent",
              border: "0 !important",
              boxShadow: "0 !important",
              minHeight: "auto",
              "&:hover": {
                border: "0 !important",
              },
            }),
            option: (provided, state) => ({
              ...provided,
              color: "#a4a8b0",
              backgroundColor: state.isSelected && "#edf4ff",
              fontSize: "15px",
              fontFamily: "Poppins",
              width: `350px`,
              "&:hover": { backgroundColor: "#edf4ff", color: "#a4a8b0" },
            }),
            singleValue: (provided) => ({
              ...provided,
              color: "inherit",
            }),
            input: (provided) => ({
              ...provided,
              color: "inherit",
              margin: "0",
              padding: "0",
              // height: "0",
            }),
            valueContainer: (provided) => ({
              ...provided,
              padding: "0",
            }),
            dropdownIndicator: (provided) => ({
              ...provided,
              paddingTop: "0px",
              paddingBottom: "0px",
            }),
            clearIndicator: (provided) => ({
              ...provided,
              padding: "0",
            }),
            multiValueLabel: (provided) => ({
              ...provided,
              padding: "0",
            }),
            menuPortal: (base) => ({ ...base, zIndex: 999999 }),
          }}
          menuPortalTarget={document.body}
          closeMenuOnScroll={(event: any) => {
            return event.target.id === "scrollContainer";
          }}
          {...restProps}
        />
        {fieldState.error?.message && (
          <ErrorMessage errors={[fieldState.error?.message]} />
        )}
      </>
    );
  }
);

export { SelectBox };
