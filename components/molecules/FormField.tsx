import type { ComponentProps } from "react";
import Input from "../atoms/Input";

interface Props extends ComponentProps<"input"> {
  label: string;
}

export default function FormField({ label, ...props }: Props) {
  return <label className="form-field"><span>{label}</span><Input {...props} /></label>;
}
