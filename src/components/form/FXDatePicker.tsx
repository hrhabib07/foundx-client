import { IInput } from "@/src/types";
import { DatePicker } from "@nextui-org/date-picker";
import React from "react";
import { Controller } from "react-hook-form";

interface IProps extends IInput {}

const FXDatePicker = ({ label, name }: IProps) => {
  return (
    <>
      <Controller
        name={name}
        render={({ field: { value, ...fields } }) => (
          <DatePicker
            label={label}
            className="min-w-full sm:min-w-[225px]"
            {...fields}
          />
        )}
      />
    </>
  );
};

export default FXDatePicker;
