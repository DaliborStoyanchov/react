type ButtonProps = {
  text: string;
};

const Button = ({ text, ...props }: ButtonProps) => {
  return (
    <button
      className="w-full bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 cursor-pointer py-1.5"
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
