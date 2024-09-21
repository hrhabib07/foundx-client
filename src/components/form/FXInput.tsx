import { Input } from "@nextui-org/input";

interface IProps {
  variant: "bordered" | "flat" | "faded" | "underlined";
  size: "md" | "sm" | "lg";
  required: boolean;
}

const FXInput = ({
  variant = "bordered",
  size = "md",
  required = false,
}: IProps) => {
  return <Input variant={variant} size={size} required={required}></Input>;
};

export default FXInput;
