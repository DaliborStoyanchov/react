import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
  const [searchParam, setSearchParam] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favoritesList, setFavoritesList] = useState([]);

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setIsLoading(true);
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/search?q=${searchParam}`
      );

      const data = await res.json();

      if (data?.recipes) {
        setRecipeList(data?.recipes);
        setIsLoading(false);
        setSearchParam("");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setSearchParam("");
    }
  }

  function handleAddToFavorite(getCurrentItem) {
    let cpyFavoritesList = [...favoritesList];

    const index = cpyFavoritesList.findIndex(
      (item) => item.id === getCurrentItem.recipe_id
    );

    if (index === -1) {
      cpyFavoritesList.push(getCurrentItem);
    } else {
      cpyFavoritesList.splice(index);
    }

    setFavoritesList(cpyFavoritesList);
  }

  console.log(favoritesList);

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        isLoading,
        recipeList,
        handleSubmit,
        recipeDetailsData,
        setRecipeDetailsData,
        handleAddToFavorite,
        favoritesList,
        setFavoritesList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext };
export default GlobalState;
