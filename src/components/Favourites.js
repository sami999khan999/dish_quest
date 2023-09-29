import FryingPan from "./FryingPan";
import Recipe from "./Recipe";

const Favourites = ({ savedItems }) => {
  return (
    <div className="favourite-item ">
      {savedItems.length === 0 && (
        <div>
          {" "}
          <p className="text-xl font-semibold lg:text-4xl text-rose-300 text-center pt-10">
            Favourite list in empty!
          </p>
          <FryingPan />
        </div>
      )}
      <div className="favourite-item-container container mx-auto py-10 flex flex-wrap gap-10 justify-center">
        {savedItems.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Favourites;
