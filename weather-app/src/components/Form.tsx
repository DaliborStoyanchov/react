import Button from "./Button.tsx";
import Input from "./Input.tsx";

const handleLocationSearch = () => {};

const Form = () => {
  return (
    <form onSubmit={handleLocationSearch} className="space-y-4">
      <Input type="text" placeholder="Latitude" />
      <Input type="text" placeholder="Longitude" />
      <Button text="Search" />
    </form>
  );
};

export default Form;
