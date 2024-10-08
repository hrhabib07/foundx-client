"use client";
import { Input } from "@nextui-org/input";
import { error } from "console";
import { useFormContext } from "react-hook-form";

interface IProps {
  variant?: "bordered" | "flat" | "faded" | "underlined";
  size?: "md" | "sm" | "lg";
  required?: boolean;
  type?: string;
  label: string;
  name: string;
}

const FXInput = ({
  variant = "bordered",
  size = "md",
  required = false,
  type = "text",
  label,
  name,
}: IProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  // console.log("errors:", errors);
  return (
    <Input
      {...register(name)}
      errorMessage={errors[name] ? (errors[name]?.message as string) : ""}
      isInvalid={!!errors[name] && true}
      name={name}
      variant={variant}
      size={size}
      required={required}
      type={type}
      label={label}
    ></Input>
  );
};

export default FXInput;
