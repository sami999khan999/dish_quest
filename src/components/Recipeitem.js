import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Recipeitem = () => {
  const { id } = useParams();

  const { recipe, loading, error } = useFetch(id);

  console.log(recipe);

  const durationCalk = (duration) => {
    if (!duration) return;

    if (!String(duration).includes(".")) {
      return duration + "h";
    }

    if (String(duration).includes(".")) {
      return String(duration).replace(".", "h") + "min";
    }
  };

  return (
    <div className="recipe-item-section container mx-auto py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 ">
      <div className="left ">
        <div className="img">
          <img src={recipe.image_url} alt={recipe.title} />
        </div>
        <div className="ings">
          <span className="ings-title">Ingedients</span>
          <ul>
            {recipe?.ingredients?.map((ing, i) => (
              <li key={i}>
                ✓{ing.quantity}
                {ing.unit} {ing.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="rigth">
        <div className="publisher">{recipe?.publisher}</div>
        <h2 className="title">{recipe?.title}</h2>
        <div className="servinge-cooking-time">
          <div className="servings">{recipe?.servings} people</div>
          <div className="cooking-time">
            {recipe?.cooking_time < 60
              ? String(recipe.cooking_time) + "min"
              : durationCalk(recipe.cooking_time / 60)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipeitem;
