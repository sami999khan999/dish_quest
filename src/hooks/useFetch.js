import { useEffect, useState } from "react";

export const useFetch = (id) => {
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getRecipeItemData = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        );
        if (!res.ok)
          throw new Error("Something went wrong, please try again later!");
        const data = await res.json();
        setRecipe(data?.data?.recipe);
        setLoading(false);
        console.log(recipe);
      } catch (err) {
        setError(err.message);
      }
    };
    getRecipeItemData();
  }, []);
  return { recipe, loading, error };
};
