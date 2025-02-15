type InputProps = {
  placeholder: string;
  name: string;
  min: string;
  max: string;
  type: string;
  onChange: (e: any) => void;
};

const Input = ({ placeholder, min, max, type, name, onChange }: InputProps) => {
  return (
    <input
      name={name}
      min={min}
      max={max}
      onChange={onChange}
      className="border border-gray-400 w-full p-1 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-300"
      type={type}
      step="0.01"
      placeholder={placeholder}
      required
    />
  );
};

export default Input;
