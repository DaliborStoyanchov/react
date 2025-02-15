import Button from "./Button.tsx";
import Input from "./Input.tsx";

type FormProps = {
  onChange: (e: any) => void;
};

const handleLocationSearch = () => {};

const Form = ({ onChange }: FormProps) => {
  return (
    <form onSubmit={handleLocationSearch} className="space-y-4">
      <Input name="latitude" placeholder="Latitude" onChange={onChange} />
      <Input name="longitude" placeholder="Longitude" onChange={onChange} />
      <Button text="Search" />
    </form>
  );
};

export default Form;
