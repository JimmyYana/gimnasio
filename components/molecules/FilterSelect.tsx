import Select from "../atoms/Select";

interface Props {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}

export default function FilterSelect({ label, value, options, onChange }: Props) {
  return (
    <Select aria-label={label} value={value} onChange={(event) => onChange(event.target.value)}>
      <option value="">{label}</option>
      {options.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}
    </Select>
  );
}
