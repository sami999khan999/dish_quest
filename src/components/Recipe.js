import { Link } from "react-router-dom";

const Recipe = ({ recipe }) => {
  return (
    <div className="recipe w-80 overflow-hidden bg-white/75 rounded-md shadow-xl p-4 shadow-rose-100 border-white flex flex-col gap-5">
      <div className="image h-40 overflow-hidden rounded flex justify-center items-center">
        <img
          src={recipe.image_url}
          alt={recipe.title}
          className="block w-full"
        />
      </div>
      <div className="texts">
        <span className="publisher text-xs uppercase text-sky-400 font-semibold tracking-widest">
          {recipe.publisher}
        </span>
        <h2 className="title text-xl font-semibold truncate">{recipe.title}</h2>
        <Link
          to={`/recipe-item/${recipe.id}`}
          className="bg-gradient-to-br from-rose-400 to-rose-600 text-rose-50 px-6 rounded py-2 text-sm font-medium uppercase tracking-wider inline-block mt-2 shadow-md shadow-rose-200 hover:shadow-lg hover:shadow-rose-300 duration-300"
        >
          View recipe
        </Link>
      </div>
    </div>
  );
};

export default Recipe;
