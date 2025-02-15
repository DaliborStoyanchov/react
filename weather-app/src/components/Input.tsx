type InputProps = {
  placeholder: string;
  name: string;
  onChange: (e: any) => void;
};

const Input = ({ placeholder, name, onChange }: InputProps) => {
  return (
    <input
      name={name}
      min="-90"
      max="90"
      onChange={onChange}
      className="border border-gray-400 w-full p-1 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-300"
      type="number"
      step="0.01"
      placeholder={placeholder}
      required
    />
  );
};

export default Input;
