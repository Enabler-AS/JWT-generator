interface InputProps {
  id: string;
  placeholder?: string;
  type?: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  required?: boolean;
  autoComplete: string;
  title: string;
  autoFocus?: boolean;
}

const Input: React.FC<InputProps> = ({
  id,
  placeholder,
  type,
  name,
  onChange,
  value,
  required,
  autoComplete,
  title,
  autoFocus,
}) => {
  return (
    <>
      <label htmlFor={id}>{title}</label>
      <input
        autoFocus={autoFocus}
        id={id}
        type={type || 'text'}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        required={required}
        autoComplete={autoComplete}
      />
    </>
  );
};

export default Input;
