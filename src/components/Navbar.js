import { NavLink } from "react-router-dom";

const Navbar = ({
  searchQuery,
  setSearchQuery,
  searchHandeler,
  inputRef,
  savedItems,
}) => {
  const navActive = ({ isActive }) => {
    return {
      color: isActive && "#f43f5e",
    };
  };

  return (
    <div className="nav-bar flex justify-between items-center container mx-auto py-8 flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="logo text-2xl lowercase italic font-bold">
        Dish<span className="text-rose-500">Quest</span>
      </h2>

      <form className="search-bar" onSubmit={searchHandeler}>
        <input
          ref={inputRef}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="search"
          placeholder="Search recipe..."
          required
          className="bg-white/75 p-3 px-8 lg:w-96 rounded-full outline-none shadow-lg shadow-rose-100 focus:shadow-rose-200 duration-300"
        />
      </form>

      <ul className="menu flex gap-5 ">
        <li>
          <NavLink
            style={navActive}
            end
            to="/"
            className="text-gray-400 hover:text-gray-600 duration-300"
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            style={navActive}
            to="/favourites"
            className="text-gray-400 hover:text-gray-600 duration-300"
          >
            Favourites{" "}
            <span className="favourites-count font-bold text-sky-400">
              ({savedItems.length})
            </span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
