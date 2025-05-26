import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
  const [searchParam, setSearchParam] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/search?q=${searchParam}`
      );

      const data = await res.json();

      console.log(data);

      if (data?.recipes?.recipes) {
        setRecipeList(data?.recipes?.recipes);
        setIsLoading(false);
        setSearchParam("");
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setSearchParam("");
    }
  };

  console.log(isLoading, recipeList);

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        isLoading,
        recipeList,
        setSearchParam,
        handleSubmit,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
