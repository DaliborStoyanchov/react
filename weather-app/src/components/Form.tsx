import Button from "./Button.tsx";
import Input from "./Input.tsx";

type FormProps = {
  onChange: (e: any) => void;
  handleLocationSearch: (e: any) => void;
};

const Form = ({ onChange, handleLocationSearch }: FormProps) => {
  return (
    <form onSubmit={handleLocationSearch} className="space-y-4">
      <Input
        name="latitude"
        type="number"
        min="-90"
        max="90"
        placeholder="Latitude"
        onChange={onChange}
      />
      <Input
        name="longitude"
        type="number"
        min="-180"
        max="180"
        placeholder="Longitude"
        onChange={onChange}
      />
      <Button text="Search" />
    </form>
  );
};

export default Form;
