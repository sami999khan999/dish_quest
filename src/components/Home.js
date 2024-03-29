import FryingPan from "./FryingPan";
import Recipe from "./Recipe";

const Home = ({ recipes, loading, error }) => {
  return (
    <div className="home  container mx-auto py-10  flex flex-wrap gap-10 justify-center">
      {!loading && !error && recipes.length === 0 ? (
        <div>
          <p className="text-xl font-semibold lg:text-4xl text-rose-300">
            Nothing to show, please search something
          </p>
          <FryingPan />
        </div>
      ) : null}

      {loading ? <p>{error ? error : "Loading..."}</p> : null}

      {recipes?.length > 0 &&
        recipes.map((recipe) => <Recipe recipe={recipe} key={recipe.id} />)}
    </div>
  );
};

export default Home;
