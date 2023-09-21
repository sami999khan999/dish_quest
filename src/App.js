import { Route, Routes } from "react-router-dom";
import { useRef, useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Favourites from "./components/Favourites";
import NotFound from "./components/NotFound";
import Recipeitem from "./components/Recipeitem";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef(null);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchHandeler = (e) => {
    e.preventDefault();

    setSearchQuery("");
    getData(searchQuery);
    inputRef.current.blur();

    setRecipes([]);
    // setError("");
  };

  const getData = async (searchQuery) => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchQuery}`
      );
      if (!res.ok) throw new Error("Something went wrong!");
      const data = await res.json();
      if (data.results === 0) throw new Error("No recipe found!");
      setRecipes(data?.data?.recipes);
      setLoading(false);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="app min-h-screen bg-rose-50 text-gray-600 text-lg">
        <Navbar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          inputRef={inputRef}
          searchHandeler={searchHandeler}
        />
        <Routes>
          <Route
            path="/"
            element={<Home recipes={recipes} loading={loading} error={error} />}
          />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/recipe-item/:id" element={<Recipeitem />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
