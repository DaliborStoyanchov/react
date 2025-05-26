import { useContext } from "react";
import { GlobalContext } from "../../context";

const Home = () => {
  const { recipeList, isLoading } = useContext(GlobalContext);
  return <div className="py-8">Home</div>;
};

export default Home;
