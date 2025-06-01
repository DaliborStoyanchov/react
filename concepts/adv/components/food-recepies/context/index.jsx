import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
  const [searchParam, setSearchParam] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);

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
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setSearchParam("");
    }
  }

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
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
