type InputProps = {
  type: string;
  placeholder: string;
};

const Input = ({ type, placeholder }: InputProps) => {
  return (
    <input
      className="border border-gray-400 w-full p-1 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-300"
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
