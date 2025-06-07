import RecipeItem from "../../components/RecipeItem/RecipeItem";
import { GlobalContext } from "../../context";
import { useContext } from "react";

const Favorites = () => {
  const { favoritesList } = useContext(GlobalContext);

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gp-10">
      {favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((item, i) => <RecipeItem item={item} key={i} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black">
            Nothing is added in favorites.
          </p>
        </div>
      )}
    </div>
  );
};

export default Favorites;
