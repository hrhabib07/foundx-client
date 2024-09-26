import { IInput } from "@/src/types";
import { Select, SelectItem } from "@nextui-org/select";
import React from "react";
import { useFormContext } from "react-hook-form";

interface IProps extends IInput {
  options: {
    key: string;
    label: string;
  }[];
  disabled?: boolean;
}

const FXSelect = ({ options, name, label }: IProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <Select
      {...register(name)}
      label={label}
      className="min-w-full sm:min-w-[225px]"
    >
      {options.map((option) => (
        <SelectItem key={option.key}>{option.label}</SelectItem>
      ))}
    </Select>
  );
};

export default FXSelect;
