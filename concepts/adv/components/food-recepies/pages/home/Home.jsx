import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/RecipeItem/RecipeItem";

const Home = () => {
  const { recipeList, isLoading } = useContext(GlobalContext);

  if (isLoading)
    return (
      <h2 className="lg:text-4xl text-xl text-center text-black">Loading...</h2>
    );

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gp-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item, i) => <RecipeItem item={item} key={i} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black">
            Nothing to show. Please search for a recipe
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
