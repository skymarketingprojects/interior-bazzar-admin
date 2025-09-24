export type OptionType<T> = T | string;
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}
export interface SelectInputProps<T>
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  id?: string;
  name?: string;
  value?: string | number;
  options: OptionType<T>[];
  multiple?: boolean;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
  className?: string;
  displayKey: keyof T;
}

export interface SelectPrimitiveProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  id?: string;
  name?: string;
  value?: string | number;
  options: (string | number)[];
  multiple?: boolean;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
  className?: string;
  wrapperClassName?: string;
}
