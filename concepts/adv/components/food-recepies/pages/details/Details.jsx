import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";

const Details = () => {
  const { id } = useParams();

  console.log(id);

  const { recipeDetailsData, setRecipeDetailsData } = useContext(GlobalContext);

  useEffect(() => {
    async function getRecipeDetails() {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/get?rId=${id}`
      );

      const data = await response.json();

      console.log(data);
    }
    getRecipeDetails();
  }, []);

  return <div>Details</div>;
};

export default Details;
